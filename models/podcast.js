module.exports = (sequelize, DataTypes) => {
  const Podcast = sequelize.define("Podcast", {
    podcastTitle: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    review: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  Podcast.associate = models => {
    Podcast.belongsTo(models.Collection, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Podcast;
};
