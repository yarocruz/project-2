module.exports = (sequelize, DataTypes) => {
  var Collection = sequelize.define("Collection", {
    collectionTitle: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  Collection.associate = models => {
    Collection.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
    Collection.hasMany(models.Podcast, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Collection;
};
