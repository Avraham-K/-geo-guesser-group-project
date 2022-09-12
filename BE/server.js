const express = require('express')
const app = express()

require("dotenv").config();
const dbConnection = require('./Data/knex')

const PORT = process.env.PORT || 8080;
const usersRoute = require("./routes/usersRoute");
const imageRoute = require("./routes/imageRoute");
const cookieparser = require('cookie-parser');
const cors = require("cors");
app.use(cookieparser());
app.use(express.json())
app.use(cors());

app.use("/users", usersRoute);
app.use("/admin", imageRoute);

app.get("*", (req, res) => {
   res.status(404).send("Page Not Fount");
 });


 
 dbConnection.migrate.latest().then((migration)=>{
  if(migration){
    console.log('Connected to DB: '+migration)
    app.listen(PORT,()=>{
      console.log('Listening to port: '+PORT)
  })
  }
});