/**
 * create a user schema
 */

import mongoose  from "./db.js";
import Task from "./task.js"
import { MongoUnexpectedServerResponseError, UUID } from "mongodb";


// Create user Schema and doccument
const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    session_id: { type: String, required: false },
    token_id: { type: String, required: false },
    taskId: {type: mongoose.Schema.Types.ObjectId, ref: "Task"}});

// create a User model usin the userSchema
const User = mongoose.model('User', userSchema);

// const user = new User({
//     name: "ifeanyi",
//     taskId: null
// });

// user.save()

// const users = User.find({})
// console.log(users)

// export schema
export default User
