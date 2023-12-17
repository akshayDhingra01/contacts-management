const express = require("express");
const dotenv = require('dotenv').config(); // what is this for

const app = express();

const port = process.env.PORT || 3000;

console.log(port);

app.use('/api/contacts' , require('./routes/contactRoutes'));

app.use('/api/contacts/practice' , require('./routes/practiceRoutes'));

app.get("/health/check" , (req,res) => {
    res.status(200).json({ "Site working" : true});
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});  