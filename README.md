# 🍴 Food Delivery App (MERN Stack)

A **full-stack food delivery application** built with the MERN stack — **MongoDB, Express.js, React, and Node.js**.  
This project provides a smooth **food ordering experience** where users can browse dishes, add them to the cart, make secure payments, and track their orders.  
It also includes a powerful **Admin Panel** for managing menus, orders, and users.

✅ Deployed Live on **[Vercel](https://food-del-app-a6oi.vercel.app)**

---

## 🖼️ Preview
*(Add screenshots here: e.g., homepage, cart, checkout, and admin panel dashboard)*

---

## ✨ Key Features

- 🔑 **User Authentication** – Secure login & signup with JWT  
- 🍕 **Browse Menu** – Explore dishes with dynamic rendering  
- 🛒 **Shopping Cart** – Add/remove items & manage quantities  
- 💳 **Payment Integration** – Seamless checkout using **Stripe**  
- 📦 **Order Placement & Tracking** – Real-time order flow  
- 👩‍💼 **Admin Panel** – Manage food items, orders, and users  
- 📱 **Responsive Design** – Works smoothly on desktop & mobile  
- ⚡ **RESTful APIs** – Scalable backend with clean architecture  

---

## 🛠️ Tech Stack

**Frontend**
- ⚛️ React.js (with Context API for state management)  
- 🎨 CSS (custom responsive UI)  

**Backend**
- 🟢 Node.js & Express.js  
- 🍃 MongoDB with Mongoose  
- 🔐 JWT for Authentication  
- 💳 Stripe for Payments  

**Deployment**
- ▲ Vercel (Frontend + Backend)  

---

## 📂 Project Structure
Food-Del-App/
│── backend/ # Express + MongoDB APIs
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ └── server.js
│
│── frontend/ # React client
│ ├── src/
│ │ ├── components/
│ │ ├── context/
│ │ └── pages/
│ └── package.json
│
└── README.md

---

## ⚙️ Getting Started

### 1️⃣ Clone the Repository

git clone https://github.com/AwaisCodeBase/Food-Del-App.git
cd Food-Del-App


2️⃣ Setup Backend
cd backend
npm install
Create a .env file inside backend/:
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
STRIPE_SECRET_KEY=your_stripe_key
PORT=5000
Run the backend server:
npm start


3️⃣ Setup Frontend
cd frontend
npm install
npm start
Frontend: http://localhost:3000
Backend API: http://localhost:5000

🚀 Live Deployment
The project is deployed and running live on Vercel:
👉 Live Demo: https://food-del-app-a6oi.vercel.app
🚀 Future Enhancements
📝 Order history & invoices in user profile
🔔 Real-time order status notifications (WebSockets)
📊 Analytics dashboard for admins
📦 Delivery partner tracking
🤝 Contributing
This is a learning + showcase project, but contributions are welcome!
Fork the repo, open issues, or submit pull requests.

📜 License
This project is for educational purposes.
Feel free to explore and build upon it.


## 🏆 Author

**Built with ❤️ by [Awais Ali](https://github.com/AwaisCodeBase)**

