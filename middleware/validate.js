const packagesModel = require("../packages/packages-model");

function validatePackageId() {
  return async (req, res, next) => {
    const package = await packagesModel.getById(req.params.id);

    try {
      if (package) {
        req.package = package;
        next();
      } else {
        res.status(404).json({ message: "Package not found" });
      }
    } catch (error) {
      next(error);
    }
  };
}

module.exports = {
  validatePackageId,
};
