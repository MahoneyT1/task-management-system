/**
 * task schema and task document file
 */
import mongoose from "./db.js";
import User from "./users.js";

// Task schema
const taskSchema = mongoose.Schema({ 
    name: { type: String, required: true},
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    description: {type: String, required: false }
});

// create a Task document
const Task = mongoose.model('Task', taskSchema);
// const getUser = async () => {
//     const user = await User.findOne({_id: "6744314a3448684c539e98e5"});

//     if (!user) {
//         console.error('')
//     }
//     return user;

// }
// const createTask = async () => {
//     const user = await getUser();

//     if (!user) {
//         return
//     }
//     const task = Task({name: "work", userId: user._id, description: "I am happy"})
//     await task.save()
//     console.log("Task created");
// };
// await createTask();

export default Task;
