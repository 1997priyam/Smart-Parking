var express = require('express');
var router = express.Router();
const { pool } = require('../config');
/* GET home page. */
router.get('/', function(req, res) {
    query = 'SELECT * from ParkingLots';
    pool.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({error: true});
        }
        console.log(results);
        return res.status(200).json(results.rows);
    })
});

router.get('/:lot_name', function(req, res) {
    let { lot_name } = req.params;
    let parkingLotInfo;
    let query = `SELECT * from ParkingLots where lotname='${lot_name}'`;
    pool.query(query, (err, results) => {
        if (err) return res.status(500).json({error: true});
        if(results.rowCount > 1) return res.status(500).json({error: 'Duplicate parking lots found!!'});
        else if(results.rowCount === 0) return res.status(400).json({error: `Parking lot with name ${lot_name} not found !`});
        parkingLotInfo = results.rows[0];

        let queryInner = `SELECT * from Bays where lotname='${lot_name}'`;
        pool.query(queryInner, (err, results) => {
            if (err) return res.status(500).json({error: true});
            parkingLotInfo.bays = results.rows;
            return res.status(200).json(parkingLotInfo);
            })
        });

    
});

module.exports = router;
