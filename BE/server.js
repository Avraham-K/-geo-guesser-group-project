const express = require('express')
const app = express()
app.use(express.json())
require("dotenv").config();

const PORT = process.env.PORT || 8080;
const usersRoute = require("./routes/usersRoute");
const imageRoute = require("./routes/imageRoute");

const cors = require("cors");
app.use(cors());

app.use("/users", usersRoute);
app.use("/image", imageRoute);

app.get("*", (req, res) => {
   res.status(404).send("Page Not Fount");
 });

 const {connection} = require("./mysql");
 connection.connect(() => {
   console.log("MySQL connected");
 });
 
 app.listen(PORT, () => {
   console.log(`Listening on http://localhost:${PORT}`);
 });