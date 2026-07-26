# Library API

A simple REST API built using Node.js and Express.

## Features

- Get all books
- Get book by ID
- Create a new book
- Update a book
- Delete a book
- Borrow a book
- Return a book

## Tech Stack

- Node.js
- Express.js

## Installation

```bash
git clone <repo-url>
cd library-api
npm install
npm start
```

## API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /books | Get all books |
| GET | /books/:id | Get one book |
| POST | /books | Create book |
| PUT | /books/:id | Update book |
| DELETE | /books/:id | Delete book |
| PATCH | /books/:id/borrow | Borrow book |
| PATCH | /books/:id/return | Return book |