const express = require("express");
const rummersRouter = require("./apis/routs/rumorsRoute");

const app = express();

app.use(express.json());
app.get("/", (req, res) => {
    res.send("You are on the home page");
     
});

app.use("/rumors", rummersRouter)

app.listen(8000, () => {
    console.log("The server is runing on port 8000")
})