const express = require("express");
const mongoose = require("mongoose");
const rumorsRouter = require("./apis/routs/rumorsRoute");

const app = express();

app.use(express.json());
app.get("/", (req, res) => {
    res.send("You are on the home page");
     
});

app.use("/rumors", rumorsRouter)

mongoose
  .connect("mongodb://localhost:27017/rumourDB")
  .then(() => console.log("database connected successfully"))
  .catch((err) => console.log(err));

app.listen(8000, () => {
    console.log("The server is runing on port 8000")
})