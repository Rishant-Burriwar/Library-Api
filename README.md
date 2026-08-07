# 📚 Library Management REST API

A RESTful Library Management API built with **Node.js**, **Express.js**, **MongoDB**, and **Mongoose** following the MVC architecture.

This project allows users to manage books, borrow and return them, and demonstrates backend development fundamentals such as routing, database integration, validation, and centralized error handling.

---

## 🚀 Features

- 📖 Get all books
- 🔍 Get book by ID
- ➕ Add a new book
- ✏️ Update book details
- 🗑 Delete a book
- 📥 Borrow a book
- 📤 Return a book
- ✅ MongoDB integration using Mongoose
- ✅ Schema validation
- ✅ Centralized error handling
- ✅ RESTful API design
- ✅ Modular MVC architecture

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JavaScript (ES Modules)

---

## 📂 Project Structure

```
library-api/
│
├── config/
│   └── mongodb.js
│
├── controller/
│   └── books.controller.js
│
├── middleware/
│   └── errorMiddleware.js
│
├── models/
│   └── booksModel.js
│
├── routes/
│   └── books.routes.js
│
├── app.js
├── server.js
└── package.json
```

---

## ⚙ Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/library-api.git
```

### Install Dependencies

```bash
npm install
```

### Start MongoDB

Make sure MongoDB is running locally.

Default connection:

```
mongodb://localhost:27017/library
```

### Start Server

```bash
npm start
```

Server runs on

```
http://localhost:4000
```

---

## 📬 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /books | Get all books |
| GET | /books/:id | Get book by ID |
| POST | /books | Create a book |
| PUT | /books/:id | Update a book |
| DELETE | /books/:id | Delete a book |
| PATCH | /books/:id/borrow | Borrow a book |
| PATCH | /books/:id/return | Return a book |

---

## 📄 Example Book

```json
{
    "book_id": 1,
    "name": "Atomic Habits",
    "author": "James Clear",
    "price": 499,
    "status": true
}
```

---

## 📌 Concepts Demonstrated

- REST API Design
- CRUD Operations
- Express Routing
- MVC Pattern
- MongoDB CRUD
- Mongoose Models
- Schema Validation
- Async Controllers
- Middleware
- HTTP Status Codes

---

## 🔮 Future Improvements

- JWT Authentication
- User Management
- Role-based Authorization
- Pagination
- Search & Filtering
- Environment Variables (.env)
- Docker Support
- Swagger API Documentation
- Unit & Integration Testing

---

## 👨‍💻 Author

**Rishant Burriwar**

GitHub: https://github.com/Rishant-Burriwar