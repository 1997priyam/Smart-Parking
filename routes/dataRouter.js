var express = require('express');
var router = express.Router();
const db = require('../models');
const { response } = require('../app');
const data = db.data;

router.post('/', async function(req, res) {
    let { sensor_uuid, timestamp, status } = req.body;
    if (sensor_uuid === undefined || timestamp === undefined || status === undefined) return res.status(400).json({error: 'Invalid Params'});
    if (typeof status !== "boolean") return res.status(400).json({error: 'Expecting Boolean type in status field.'});

    let dataObj = {
        sensor_uuid,
        timestamp,
        status,
        createdAt: new Date(),
        updatedAt: new Date()
    };
    try {
        let response = await data.create(dataObj);
        return res.json(response);
    } catch(e) {
        console.log(e);
        return res.status(500).json({error: true});
    }

});

module.exports = router;
