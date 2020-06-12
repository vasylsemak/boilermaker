// The sole purpose of this module is to establish a connection to your
// Postgres database by creating a Sequelize instance (called `db`).
const Sequelize = require("sequelize");
const chalk = require("chalk");

console.log(chalk.yellow(`Opening database connection to ${dbName}`));
const db = new Sequelize(
  process.env.DATABASE_URL || "postgress://localhost:5432/dbname",
  { loggin: false }
);

module.exports = db;
