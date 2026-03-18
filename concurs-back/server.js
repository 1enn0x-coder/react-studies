import express from "express";

const app = express();

app.get("/", (req, res) => {
  console.log("hello from main route");
});

app.listen(3000, () => {
  console.log("listening at port 3000");
});
