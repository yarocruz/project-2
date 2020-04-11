module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define("Review", {
    collectionName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    review: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  Review.associate = models => {
    Review.belongsTo(models.Collection, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Review;
};
