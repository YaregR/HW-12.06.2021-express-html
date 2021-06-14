const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('html');
});

router.get('/posters', (req, res) => {
    res.render('posters');
});

router.get('/stickers', (req, res) => {
    res.render('stickers');
});

router.get('/presentations', (req, res) => {
    res.render('presentations');
});

module.exports = router;