const express = require('express');
const Product = require('../models/Product');
const router = express.Router();
const redis = require('../config/RedisConfig');

router.get('/', (req, res) => {
    res.render('home'); // Assuming you have a view engine set up to render Handlebars templates
});

router.get('/store', async (req, res) => {
    var products = await Product.findAll();
    res.render('store', { products });
});

router.get('/store/:prodID', async (req, res) => {
    await redis.connect();
    var product = await redis.get(`product:${req.params.prodID}`);
    if (!product) {
        product = await Product.findByPk(req.params.prodID);
        redis.set(`product:${req.params.prodID}`, JSON.stringify(product));
    } else {
        product = JSON.parse(product);
    }
    // var product = await Product.findByPk(req.params.prodID);
    res.render('indiv_prod', { product });
});

module.exports = router;
