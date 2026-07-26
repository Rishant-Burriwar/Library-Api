import express from "express"
import router from "../src/routes/books.routes.js"
const app = express();

app.use("/books",router)

export {app}