// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models, for which you'll find some blank files in this directory:

const db = require("./db");
const Puppy = require("./puppy");
const User = require("./user");

Puppy.belongsTo(User);
User.hasMany(Puppy, { foreignKey: "userId" });

module.exports = {
  db,
  Puppy,
  User,
};
