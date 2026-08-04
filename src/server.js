import {app} from "./app.js"
import { connectDb } from "./config/mongodb.js"

async function startServer(){
    await connectDb();
    app.listen(4000,()=>console.log("Server Running on Port 4000"))
};

startServer();