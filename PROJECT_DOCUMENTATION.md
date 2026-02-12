1️⃣ Project Overview

The Restaurant Reservation Chatbot is a full-stack web application that allows users to make dining reservations through an interactive chat interface.

The system combines:

Rule-based reservation validation

Slot availability tracking

AI-powered conversational assistance (Google Gemini API)

The chatbot ensures quick response times by using a compressed availability schedule stored in memory while leveraging AI to guide users through incomplete or conversational booking requests.

2️⃣ Objectives

The main objectives of this project are:

Provide a conversational reservation system

Demonstrate backend API integration

Manage restaurant time slot capacity

Implement AI-assisted user interaction

Create a visually appealing chat UI

Build a beginner-friendly full-stack application

3️⃣ Technology Stack
Backend

Node.js

Express.js

node-fetch

CORS

Frontend

HTML5

CSS3

Vanilla JavaScript

AI Integration

Google Gemini API (gemini-2.5-flash model)

4️⃣ System Architecture
User (Browser)
     ↓
Frontend (HTML, CSS, JS)
     ↓
Express Server (Node.js)
     ↓
Reservation Logic  →  Slot Validation
     ↓
Gemini AI API (Fallback Conversation)

5️⃣ Application Flow
Step 1: User Sends Message

The user enters a message in the chat UI.

Step 2: Frontend Sends Request

The frontend sends a POST request to:

/chat

Step 3: Backend Processes Message

The server checks:

If the message matches reservation format

If time slot exists

If seats are available

If valid → confirm reservation
If not → forward message to Gemini AI

Step 4: Response Returned

Server returns JSON:

{
  "reply": "Reservation confirmed..."
}


Frontend displays formatted message.

Reservation Logic
Available Time Slots

6pm

7pm

8pm

Capacity Per Slot

Each slot allows:

10 guests maximum

Reservation Format

Users can book using:

Name Time Guests


Example:

John 7pm 3

Validation Rules

Time must be 6pm, 7pm, or 8pm

Guests must be a number

Total guests must not exceed slot capacity

7️⃣ AI Integration (Gemini)

If a user message does not match the reservation format, the message is sent to Google Gemini API.

Gemini helps:

Ask for missing details

Guide user through booking

Provide conversational responses

Explain availability

Example:

User:

I want to book dinner tonight


Bot:

Sure! What time and how many guests?

8️⃣ API Documentation
POST /chat
Request
{
  "message": "John 7pm 3"
}

Success Response
{
  "reply": "Reservation confirmed for John at 7pm for 3 guests."
}

Error Response
{
  "reply": "7pm is full. Try another time."
}

9️⃣ Frontend Components
index.html

Responsible for:

Chat layout

Input field

Send button

Chat container

style.css

Responsible for:

Background image styling

Transparent overlay

Chat bubble design

UI responsiveness

Modern glass effect

frontend.js

Responsible for:

Capturing user input

Sending API requests

Displaying bot responses

Formatting chatbot replies

🔟 UI Design Features

Full-screen background image

Transparent overlay for readability

Modern rounded chat bubbles

User and bot message alignment

Scrollable message container

Responsive layout

Clean booking interface

1️⃣1️⃣ Security Considerations

API keys should not be hardcoded

Use environment variables for Gemini key

CORS enabled for frontend-backend communication

Basic input validation implemented

Recommended:

const API_KEY = process.env.GEMINI_API_KEY;

1️⃣2️⃣ Limitations

Reservation data is stored in memory (not persistent)

No database integration

No authentication system

Single-day reservation only

No real restaurant integration

1️⃣3️⃣ Future Enhancements

Planned improvements:

Database integration (MongoDB / SQLite)

Calendar-based date selection

Multi-day reservations

Admin dashboard

Reservation cancellation

Real-time availability update

User authentication

Deployment to cloud (Render / Railway / Vercel)

Multiple restaurant support

Menu browsing feature

AI intent classification

1️⃣4️⃣ Deployment Strategy

To deploy:

Push project to GitHub

Use hosting platform:

Render

Railway

Vercel (for frontend)

Set environment variables for API key

Deploy backend server

1️⃣5️⃣ Learning Outcomes

This project demonstrates:

Full-stack development

REST API creation

AI API integration

Chat-based user interaction

Backend state management

UI/UX styling with CSS

Project structuring and documentation

1️⃣6️⃣ Conclusion

The Restaurant Reservation Chatbot successfully combines:

Rule-based reservation logic

AI conversational assistance

Modern UI design

It serves as a practical example of building an intelligent booking system using JavaScript technologies and AI APIs.

This project can be extended into a production-ready reservation system with database and authentication features.

End of Documentation
