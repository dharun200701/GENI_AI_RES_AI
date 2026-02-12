const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const API_KEY = "AIzaSyDtfdSEZNhVQ0H9cA8Ybi1sCr1Ebdg1_C4";

/* Compressed availability schedule */
const capacityPerSlot = 10;
const bookings = {
  "6pm": 0,
  "7pm": 0,
  "8pm": 0
};

app.post("/chat", async (req, res) => {
  try {
    const userMessage = req.body.message;

    /* Simple reservation parser */
    const parts = userMessage.split(" ");
    if (parts.length >= 3) {
      const name = parts[0];
      const time = parts[1].toLowerCase();
      const guests = parseInt(parts[2]);

      if (bookings[time] !== undefined && !isNaN(guests)) {
        if (bookings[time] + guests <= capacityPerSlot) {
          bookings[time] += guests;

          return res.json({
            reply: `✅ Reservation confirmed for ${name} at ${time} for ${guests} guests.`
          });
        } else {
          return res.json({
            reply: `❌ ${time} is full. Try another time (6pm, 7pm, 8pm).`
          });
        }
      }
    }

    /* AI fallback */
    const systemPrompt = `
You are a restaurant reservation assistant.
Available slots:
6pm (${capacityPerSlot - bookings["6pm"]} seats left)
7pm (${capacityPerSlot - bookings["7pm"]} seats left)
8pm (${capacityPerSlot - bookings["8pm"]} seats left)

Help users book tables.
Ask for name, time, and guests.
`;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [{ text: systemPrompt + "\nUser: " + userMessage }]
            }
          ]
        })
      }
    );

    const data = await response.json();

    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "I can help you reserve a table.";

    res.json({ reply });

  } catch (error) {
    console.error(error);
    res.json({ reply: "Server error" });
  }
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
