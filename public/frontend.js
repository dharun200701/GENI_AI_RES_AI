const chatMessages = document.getElementById("chatMessages");
const chatInput = document.getElementById("chatInput");
const sendButton = document.getElementById("sendButton");

/* Format bot messages to look structured and readable */
function formatBotMessage(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, "<b>$1</b>")   // bold formatting
    .replace(/\n/g, "<br>")                   // line breaks
    .replace(/(\d+\.)/g, "<br>$1");           // spacing for numbered lists
}

function addMessage(text, isUser) {
  const div = document.createElement("div");
  div.className = "message " + (isUser ? "user" : "bot");

  const content = document.createElement("div");
  content.className = "message-content";

  content.innerHTML = isUser ? text : formatBotMessage(text);

  div.appendChild(content);
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

async function sendMessage() {
  const text = chatInput.value.trim();
  if (!text) return;

  addMessage(text, true);
  chatInput.value = "";

  try {
    const res = await fetch("/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: text })
    });

    const data = await res.json();
    addMessage(data.reply, false);

  } catch (err) {
    addMessage("❌ Unable to connect to server", false);
  }
}

sendButton.onclick = sendMessage;

chatInput.addEventListener("keydown", e => {
  if (e.key === "Enter") sendMessage();
});
