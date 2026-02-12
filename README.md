# GENI_AI_RES_AI 🍽️

# Restaurant Reservation Chatbot

An AI-powered restaurant reservation chatbot built using **Node.js, Express, and Google Gemini AI**.

This chatbot allows users to:
- Check table availability
- Book reservations
- Interact conversationally with an AI assistant

---

## 📌 Features

- 💬 Interactive chatbot interface
- 🪑 Reservation slot tracking (6pm, 7pm, 8pm)
- 📊 Capacity management per time slot
- 🤖 Gemini AI conversational fallback
- 🎨 Modern UI with background image
- ⚡ Fast response system

---

## 🧠 How It Works

The chatbot operates using two main layers:

### 1️⃣ Reservation Logic


The system:
- Validates the time slot
- Checks remaining seat capacity
- Confirms reservation if available
- Suggests alternative if full

---

### 2️⃣ AI Assistant (Gemini Integration)

If the message is not in reservation format, the chatbot uses **Google Gemini API** to:

- Guide users through booking
- Ask for missing details
- Answer restaurant-related questions
- Provide conversational assistance

---

## 📁 Project Structure

restaurant-bot/
│
├── server.js
├── package.json
└── public/
├── index.html
├── style.css
├── frontend.js
└── restuarant_pic.jpg



If a user sends a message in this format:

