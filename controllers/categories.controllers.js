const { category } = require("../shared/shared");

class CategoriesController {
  getCategories(req, res) {
    res.json(category);
  }
}

module.exports = new CategoriesController;
