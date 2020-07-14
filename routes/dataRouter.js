var express = require('express');
var router = express.Router();
const { pool } = require('../config');
/* GET home page. */
router.post('/', function(req, res) {
    let { sensor_uuid, timestamp, status } = req.body;
    console.log(sensor_uuid, timestamp, status);
    if (sensor_uuid === undefined || timestamp === undefined || status === undefined) return res.status(400).json({error: 'Invalid Params'});
    if (typeof status !== "boolean") return res.status(400).json({error: 'Expecting Boolean type in status field.'});

    query = `INSERT INTO data VALUES ('${sensor_uuid}', '${timestamp}', ${status})`;
    pool.query(query, (err, results) => {
        if (err) return res.json({error: true});
        return res.status(200).json({result: 'OK'});
    })
});

module.exports = router;
