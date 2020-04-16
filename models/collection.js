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
    Collection.hasMany(models.Podcast, {
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
