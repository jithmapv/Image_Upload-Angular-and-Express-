module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define("image", {
      type: {
        type: DataTypes.STRING,
      },
      name: {
        type: DataTypes.STRING,
      },
      test: {
        type: DataTypes.STRING,
        default: 'test'
      },
      data: {
        type: DataTypes.BLOB("long"),
      },
    });
    return Image;
  };