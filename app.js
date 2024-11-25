/**
 * App with express
 */

import express  from "express"
import process from "process"
import router from "./routes/userRoutes.js"


const app = express();
const PORT = process.env.PORT || 3000;

// initialize users router
app.use("/users", router);
app.use(express.json())

// port listens
app.listen(PORT, "localhost", ()=> {
    console.log("server is online now");
});
