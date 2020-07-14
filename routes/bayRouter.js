var express = require('express');
var router = express.Router();
const { pool } = require('../config');
/* GET home page. */
router.get('/:lot_name/:bay_name', function(req, res) {
    let { lot_name, bay_name } = req.params;
    query = `SELECT * from bays where lotname='${lot_name}' and bayname='${bay_name}'`;
    pool.query(query, (err, results) => {
        if (err) return res.json({error: true});
        console.log(results);
        if(results.rowCount === 0) return res.json({error: 'No record found'});
        if(results.rowCount > 1) return res.json({error: 'Duplicate records found'});
        return res.status(200).json(results.rows[0]);
    })
});

module.exports = router;
