const { status } = require("../shared/shared");

class StatusController {
  getStatus(req, res) {
    res.json(status);
  }
}

module.exports = new StatusController;
