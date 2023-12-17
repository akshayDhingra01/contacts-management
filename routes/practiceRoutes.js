const express = require("express");
const router = express.Router();  // check this

router.route('/').get((req, res) => {
    res.status(200).json({message : "Write Routes to practice"})
});

module.exports = router  // To export this module so that can be used by the server.js