module.exports = function(sequelize, DataTypes) {
  var Collection = sequelize.define("Collection", {
    collectionTitle: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    podcastTitle: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    }
  });

  Collection.associate = function(models) {
    Collection.hasMany(models.Review, {
      onDelete: "cascade"
    });
    Collection.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Collection;
};
