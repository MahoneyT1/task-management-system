/**
 * users route that handles views for user object
 */
import express from "express";
import User from "../models/users.js"

// router instance for user
const router = express.Router();


router.post("/create/:name", async (req, res)=> {
    const userName = req.params.name;

    // check if username was provided
    if (!userName) {
        res.status(400).send("Bad request! Missing request parameters");
        return;
    }
    // create new User
    const newUser = new User({name: userName});
    newUser.save()
    res.status(201).send("New User successfully created !!")
    return;
})

export default router;
