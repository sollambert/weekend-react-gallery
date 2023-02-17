const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    for(const galleryItem of galleryItems) {
        if(galleryItem.id == galleryId) {
            galleryItem.likes += 1;
        }
    }
    res.sendStatus(200);
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    let sqlText = 'SELECT * FROM "images" ORDER BY "id"'
    pool.query(sqlText)
    .then((dbRes) => {
        res.send(dbRes);
    })
    .catch((err) => {
        console.error(err);
    })
}); // END GET Route

module.exports = router;