const config = require("../config");
const routes = require("./routes");

module.exports = {
  getData: `${config.url}${routes.getData}`,
  getAuth: `${config.url}${routes.getAuth}`,
  getYear: `${config.url}${routes.getYear}`
};
