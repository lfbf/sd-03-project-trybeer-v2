const createdUser = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  }, { timestamps: false });

  return User;
};

module.exports = createdUser;
