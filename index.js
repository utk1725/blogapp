const express = require("express");
const app = express();

require('dotenv').config();
console.log('DATABASE_URL:', process.env.DATABASE_URL);

const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json());

const blog = require("./routes/blog")
//mount
app.use("/api/v1",blog);

const connectWithDb = require("./config/database");
connectWithDb();

//start the server
app.listen(PORT,() => {
    console.log(`App is started at Port no ${PORT}`);

})
app.get("/",(req,res) => {
    res.send(`<h1>This is Homepage</h1>`)
})
