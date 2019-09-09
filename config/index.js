const http = require("http");
const https = require("https");

require("dotenv").config();

module.exports = {
  url:
    process.env.NODE_ENV === "local"
      ? process.env.LOCAL_URL
      : process.env.POSTMAN_URL,
  protocol: process.env.NODE_ENV === "local" ? http : https
};
