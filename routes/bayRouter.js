var express = require('express');
var router = express.Router();
const db = require('../models');
const bays = db.bays;
const Op = db.Sequelize.Op;
/* GET home page. */
router.get('/:lot_name/:bay_name', async function(req, res) {
    let { lot_name, bay_name } = req.params;
    if(lot_name == undefined || bay_name == undefined) return res.status(400).json({error: 'Invalid Params'});
    let condition = {lotname: lot_name, bayname: bay_name};

    try{
        let results = await bays.findAll({where: condition});
        if(results.length === 0) return res.json({error: 'No record found'});
        if(results.length > 1) return res.json({error: 'Duplicate records found'});
        return res.status(200).json(results[0]);
    } catch(e) {
        return res.json({error: true});
    }
});

module.exports = router;
