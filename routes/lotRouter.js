var express = require('express');
var router = express.Router();
const { pool } = require('../config');
/* GET home page. */
router.get('/', function(req, res) {
    query = 'SELECT * from ParkingLots';
    pool.query(query, (err, results) => {
        if (err) {
            res.status(500).json({error: true});
        }
        console.log(results);
        res.status(200).json(results.rows);
    })
});

router.get('/:lot_name', function(req, res) {
    let { lot_name } = req.params
    console.log(lot_name);
    query = `SELECT * from ParkingLots where lotname='${lot_name}'`;
    pool.query(query, (err, results) => {
        if (err) {
            res.status(500).json({error: true});
        }
        console.log(results);
        res.status(200).json(results.rows);
    })
});

module.exports = router;
