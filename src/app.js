import express from "express"
import router from "../src/routes/books.routes.js"
import { errorMiddleware } from "./middleware/errorMiddleware.js";
const app = express();

app.use(express.json());

app.use("/books",router);

app.use(errorMiddleware);

export {app}