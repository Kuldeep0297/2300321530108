const express = require("express");
const logger = require("./middleware/logger");

const app = express();

app.use(logger);

app.get("/", (req, res) => {
    res.send("Backend Server Running");
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});