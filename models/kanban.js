'use strict';
module.exports = (sequelize, DataTypes) => {

  const Model = sequelize.Sequelize.Model;

  class Kanban extends Model {}

  Kanban.init({
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: `Title tidak boleh kosong`
        }
      }
    },
    description: {
      type:  DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: `Description tidak boleh kosong`
        }
      }
    },
    status: DataTypes.STRING,
    point: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          args: true,
          msg: `Point tidak boleh kosong`
        }
      }
    },
    UserId: { type: DataTypes.INTEGER },
    organization: DataTypes.STRING
    
  }, {
    sequelize,
    modelName: 'Kanban'
  });

  Kanban.associate = function(models) {
    Kanban.belongsTo(models.User, { foreignKey: 'UserId', targetKey: 'id' });
  };
  return Kanban;
};