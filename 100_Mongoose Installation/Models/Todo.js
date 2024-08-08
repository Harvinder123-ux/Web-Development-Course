import mongoose from "mongoose";
//here we defining the data how it should be add in the model sometime it will covert the values for number to string if added but not for every time
const TodoSchema = new mongoose.Schema({
  // title : String,
  //our schema could be another object like this
  title: { type: String, require: true, default: "Hello" },
  desc: String,
  days: Number,
  isDone: Boolean,
});

export const Todo = mongoose.model("Todo", TodoSchema);
