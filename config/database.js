const mongoose = require("mongoose");
require('dotenv').config();



const connectWithDb = () => {
    //promise//
    mongoose.connect(process.env.DATABASE_URL)
    
    .then(console.log("DB connected Successfully"))
    .catch( (error) => {
        console.log("DB Facing connection issues");
        console.log(error);
        process.exit(1);
    })
    
};
module.exports = connectWithDb; 