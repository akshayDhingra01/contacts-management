const express = require("express");
const errorHandler = require("./middleware/error.handler");
const connectDb = require("./config/db.connection");
const dotenv = require('dotenv').config(); // what is this for

connectDb();
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json()) // provides parser which helps to parse the data stream which is recieved from the client on the server side
app.use('/api/contacts' , require('./routes/contactRoutes'));
app.use('/api/users' , require('./routes/userRoutes'));
app.use(errorHandler) // middleware for error handler 
// why putting this above app.use('/api/contacts' , require('./routes/contactRoutes')); wont work then this error handler 


app.use('/api/contacts/practice' , require('./routes/practiceRoutes'));
app.get("/health/check" , (req,res) => {
    res.status(200).json({ "Site working" : true});
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});  