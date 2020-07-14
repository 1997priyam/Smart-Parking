module.exports = (sequelize, Sequelize) => {
    const bays = sequelize.define("bays", {
        bayname: {
            type: Sequelize.STRING,
            primaryKey: true
          },
        lotname: {
            type: Sequelize.STRING,
            primaryKey: true,
            references: {
                model: 'parkinglots',
                key: 'lotname'
            }
          },
          sensor_uuid: {
            type: Sequelize.STRING
          },
          x_cord: {
            type: Sequelize.STRING
          },
          y_cord: {
            type: Sequelize.STRING
          }
    });
  
    return bays;
  };