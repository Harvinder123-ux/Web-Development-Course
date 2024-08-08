// https://www.npmjs.com/package/mongoose
import mongoose from "mongoose";
import express from "express";
const port = 3001;
const app = express();
import { Todo } from "./Models/Todo.js";

//this is the connection string for the mongoose
let conn = await mongoose.connect("mongodb://localhost:27017/Todo");

app.get("/", (req, res) => {
  const todo = new Todo({
    // title: ,
    desc: "Learning How to Connect And Add Document In Monogdb",
    days: Math.floor(Math.random()*30),
    isDone: false,
  });
  todo.save();
  
//   todo.find()
  res.send("Hello World");
});

app.get("/a", async(req, res) => {
    let todo = await Todo.findOne({});
    res.json({title: todo.title, desc: todo.desc, days: todo.days, isDone: todo.isDone})
})

app.listen(port, () => {
  console.log(`Application is Listening At Port ${port}`);
});

//schema like adding the validations
// there is raw Schema also availble name mongodb but it doesnt follow any set of schema and as well as the mongoose give us more functionality and straight forward schema based solution model
