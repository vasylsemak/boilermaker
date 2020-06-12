const { db } = require("./server/db");
const { Puppy, User } = require("./server/models");
const { green, red } = require("chalk");

const seed = async () => {
  try {
    await db.sync(); // { forse: true }  --> to drop and recreate db
    await Promise.all(puppies.map((puppy) => Puppy.create(puppy)));
    await Promise.all(users.map((user) => User.create(user)));
    console.log(green("Seeding success!"));
  } catch (error) {
    console.log(red(error));
  }
};

module.exports = seed;

seed()
  .then(() => {
    console.log(green("Seeding success!"));
    db.close();
  })
  .catch((err) => {
    console.error(red("Oh noes! Something went wrong!"));
    console.error(err);
    db.close();
  });
