module.exports = (sequelize, Sequelize) => {
    const parkinglots = sequelize.define("parkinglots", {
      lotname: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      gateway_uuid: {
        type: Sequelize.STRING
      },
      lat: {
        type: Sequelize.STRING
      },
      long: {
        type: Sequelize.STRING
      }
    });
  
    return parkinglots;
  };