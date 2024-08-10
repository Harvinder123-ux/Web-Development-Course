import mongoose from "mongoose";
import express from "express";
const app = express();
const port = 3004;
import { Employee } from "./models/Employee.js";
import { fileURLToPath } from "url"; // To determine __dirname equivalent
import path from "path";

// Determine __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//middleware for serve the html file
app.use(express.static(path.join((__dirname, "public"))));

let conn = await mongoose.connect("mongodb://localhost:27017/dummyData");
let nameData = ["Abhi", "Itachi", "Obito", "Madara"];
let langData = ["python", "javaScript", "CPP", "Java"];
let cityData = ["Pathankot", "Hidden Leaf Village", "Shengai", "New York"];

let slrData = [30000, 40000, 50000, 100000];

const getRandomData = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};
app.post("/create-employee", async (req, res) => {
  const newEmp = new Employee({
    name: getRandomData(nameData),
    salary: getRandomData(slrData),
    language: getRandomData(langData),
    city: getRandomData(cityData),
    isManager: true,
  });
  await newEmp.save();
  //   res.send("hello world");
});


app.get("/get-employees", async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    console.error("Error fetching employees:", error);
    res.status(500).send("Error fetching employees");
  }
});

app.listen(port, () => {
  console.log(`App Listening at the port of ${port}`);
});
