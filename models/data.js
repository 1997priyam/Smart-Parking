module.exports = (sequelize, Sequelize) => {
    const data = sequelize.define("data", {
      sensor_uuid: {
        type: Sequelize.STRING,
        references: {
            model: 'bays',
            key: 'sensor_uuid'
        }
      },
      timestamp: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return data;
  };