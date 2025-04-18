const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
const Data = require("./data.js");

let MONGO_URL = "mongodb://127.0.0.1:27017/Triple_T";

mongoose.connect(MONGO_URL); // extablishing connection

const db = mongoose.connection; // creating the instance of the class.

// listen to "connected" event
db.on("connected", () => {
    console.log("DB connection successful!!!", );
});

// listen to "error" event
db.on("error", (err) => {
    console.log("DB connection failed!!!", err);
})

// function to delete the existing data and add the data in "data.js" files
const initDB = async () => {
    await Listing.deleteMany({});
    await Listing.insertMany(Data.data);
    console.log("Data inserted successfully!!!");
}

// initDB();
