const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images/')
    },
    filename: function (req, file, cb) {
    //   cb(null, file.fieldname + '-' + uniqueSuffix)
        cb(null, createFileName(req.body.name).replace(' ', '-')  + '.' + file.mimetype.split("/")[1])
    }
  })
  
const upload = multer({ storage: storage });

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    let sqlText = `UPDATE "images"
    SET likes = $2
    WHERE id = $1`
    const galleryId = req.params.id;
    pool.query(sqlText, [req.params.id, req.body.likes])
        .then((dbRes) => {
            res.sendStatus(201);
        })
        .catch((err) => {
            res.sendStatus(500);
            console.error(err);
        });
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    let sqlText = 'SELECT * FROM "images" ORDER BY "id"'
    pool.query(sqlText)
        .then((dbRes) => {
            // console.log(dbRes)
            res.send(dbRes.rows);
        })
        .catch((err) => {
            console.error(err);
        })
}); // END GET Route

const imgUpload = upload.fields([{name: 'file', maxCount: 1}])
router.post('/', imgUpload, (req, res) => {

    let file = req.files['file'][0];
    //file.filename = createFileName(req.body.name);

    //console.log(req.body)
    let sqlText = `INSERT INTO "images" ("path", "description")
        VALUES($1, $2);`;
    pool.query(sqlText,[`images/${file.filename}`, req.body.description])
    .then((dbRes) => {
        res.sendStatus(201);
    })
    .catch((err) => {
        res.sendStatus(500);
        console.error(err);
    })
})

router.delete('/:id', (req, res) => {
    let sqlText = `DELETE FROM "images"
    WHERE id = $1`;

    pool.query(sqlText, [req.params.id])
    .then((dbRes) => {
        res.sendStatus(204);
    })
    .catch((err) => {
        console.error(err);
    })
})

function createFileName(text) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    return text + uniqueSuffix;
}

module.exports = router;