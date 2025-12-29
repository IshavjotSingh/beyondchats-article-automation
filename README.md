\# BeyondChats Article Automation Project



---



\## 📌 Project Overview



This project automates the process of collecting blog articles, improving their quality using AI, and displaying both the original and updated versions in a frontend application.



It simulates a real-world content workflow where:

\- Articles are stored in a backend system

\- External high-ranking reference articles are analyzed

\- AI is used to enhance content quality

\- Updated articles are published and displayed to users



The project is divided into three parts:

1\. Backend \& Database  

2\. Automation \& AI Enhancement  

3\. Frontend UI  



---



\## ⚙️ Local Setup Instructions



---



\### 🔹 Backend (Laravel + MySQL)



The backend stores articles and exposes APIs used by both the automation scripts and the frontend.



Run the backend locally:



```bash

cd backend

composer install

php artisan migrate

php artisan serve

Backend URL:



cpp

Copy code

http://127.0.0.1:8000

🔹 Automation (Node.js)

The automation layer enhances articles using external references and AI.



What it does:



Fetches existing articles from the backend API



Searches article titles on Google



Selects top-ranking external blog/article links



Scrapes readable content from those links



Enhances the original article using an AI model



Appends reference links



Updates the enhanced article back into the backend database



Run automation locally:



bash

Copy code

cd automation

npm install

node rewriteWithGemini.js

🔹 Frontend (React)

The frontend displays both original and AI-enhanced articles.



UI features:



Article title



Original content



AI-updated content



Reference links



Responsive layout with smooth animations



Run the frontend locally:



bash

Copy code

cd frontend

npm install

npm run dev

Frontend URL:



arduino

Copy code

http://localhost:5173

🔄 Data Flow / Architecture Diagram

nginx

Copy code

Browser

&nbsp; ↓

React Frontend

&nbsp; ↓

Laravel Backend APIs

&nbsp; ↓

MySQL Database

&nbsp; ↑

Node.js Automation + AI

🌍 Live Link

Frontend Live URL:



perl

Copy code

https://your-frontend-live-link-here

The live application allows reviewers to verify both the original and AI-enhanced articles along with their references.

