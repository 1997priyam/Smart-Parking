var express = require('express');
var router = express.Router();
const { pool } = require('../config');
/* GET home page. */
router.get('/', function(req, res) {
    query = 'SELECT * from ParkingLots';
    pool.query(query, (err, results) => {
        if (err) {
            res.json({error: true});
        }
        console.log(results);
    })
});

module.exports = router;
