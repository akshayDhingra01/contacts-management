const express = require("express");
const dotenv = require('dotenv').config(); // what is this for

const app = express();

const port = process.env.PORT || 3000;

console.log(port);


app.get("/health/check" , (req,res) => {
    res.status(200).json({ "Site working" : true});
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});  