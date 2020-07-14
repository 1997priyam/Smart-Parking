var express = require('express');
var router = express.Router();

const db = require('../models');
const parkinglots = db.parkinglots;
const bays = db.bays;
const Op = db.Sequelize.Op;
/* GET home page. */
router.get('/', async function(req, res) {
    try{
        let result = await parkinglots.findAll();
        return res.status(200).json(result);
    } catch (e) {
        return res.status(500).json({error: true});
    }
});

router.get('/:lot_name', async function(req, res) {
    let { lot_name } = req.params;
    let parkingLotInfo = {};
    let condition = lot_name ? { lotname: lot_name }  : null;
    
    try{
        let results = await parkinglots.findAll({where: condition});
        if(results.length > 1) return res.status(500).json({error: 'Duplicate parking lots found!!'});
        else if(results.length === 0) return res.status(400).json({error: `Parking lot with name ${lot_name} not found !`});
        parkingLotInfo = {...results[0]};
    } catch (e) {
        return res.status(500).json({error: true});
    }


    try {
        let condition = lot_name ? { lotname: lot_name }  : null;
        let results = await bays.findAll({where: condition});
        console.log(results);
        parkingLotInfo['bays'] = results;
        return res.status(200).json(parkingLotInfo);
    } catch (e) {
        return res.status(500).json({error: true});
    }   
});

module.exports = router;
