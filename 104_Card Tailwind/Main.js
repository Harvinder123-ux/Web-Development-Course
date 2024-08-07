import express from "express";
const app = express();
const port = 5000;

app.use(express.static("public"));
app.get("/", (req, res) => {
  res.send("hello tailwind");
});

app.listen(port, () => {
  console.log(`App Listening at port ${port}`);
});
