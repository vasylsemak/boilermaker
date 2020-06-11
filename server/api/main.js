const router = require("express").Router();

router.use("/users", require("./users")); // matches all requests to /api/users/
router.use("/puppies", require("./puppies")); // matches all requests to  /api/puppies/
router.use("/kittens", require("./kittens")); // matches all requests to  /api/kittens/

//handle different route error
router.use((req, res, next) => {
  const err = new Error("not found");
  err.status = 404;
  next(err);
});

module.exports = router;
