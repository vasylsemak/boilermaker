const router = require("express").Router();
const { Puppy } = require("../db/Puppy");

router.get("/", async (req, res, next) => {
  try {
    const allPuppies = await Puppy.findAll();
    if (!allPuppies || allPuppies.length === 0) res.sendStatus(404);
    res.json(allPuppies);
  } catch (error) {
    next(error);
  }
});

router.get("/:puppyId", async (req, res, next) => {
  try {
    const puppyById = await Puppy.findByPk(req.params.puppyId);
    if (!puppyById) res.sendStatus(404);
    res.json(puppyById);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newPuppy = await Puppy.create(req.body);
    if (!newPuppy) res.sendStatus(403);
    res.status(201).json(newPuppy);
  } catch (error) {
    next(error);
  }
});

router.put("/:puppyId", async (req, res, next) => {
  try {
    const puppyToUpdate = await Puppy.findByPk(req.params.puppyId);
    if (!puppyToUpdate) res.sendStatus(404);
    const updatedPuppy = await puppyToUpdate.update(req.body);
    res.status(201).json(updatedPuppy);
  } catch (error) {
    next(error);
  }
});

router.delete("/:puppyId", async (req, res, next) => {
  try {
    const puppyToDelete = await Puppy.findByPk(req.params.puppyId);
    if (!puppyToDelete) res.sendStatus(404);
    await puppyToDelete.destroy();
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
