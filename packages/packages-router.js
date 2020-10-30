const express = require("express");
const packagesModel = require("./packages-model");

const { validatePackageId } = require("../middleware/validate");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const packages = await packagesModel.get();
    res.status(200).json(packages);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", validatePackageId(), async (req, res, next) => {
  try {
    res.status(200).json(req.package);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const package = await packagesModel.add(req.body);
    res.status(201).json(package);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", validatePackageId(), async (req, res, next) => {
  try {
    const package = await packagesModel.update(req.params.id, req.body);
    res.status(200).json(package);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", validatePackageId(), async (req, res, next) => {
  try {
    await packagesModel.del(req.params.id);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
});

module.exports = router;
