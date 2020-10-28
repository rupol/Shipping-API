const express = require("express");
const packagesModel = require("./packages-model");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const packages = await packagesModel.get();
    res.status(200).json(packages);
  } catch (err) {
    next(err);
  }
});
