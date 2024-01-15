const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home'); // Assuming you have a view engine set up to render Handlebars templates
});

module.exports = router;
