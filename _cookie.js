const fs = require("fs");

function getCookie() {
  try {
    var cookie = fs.readFileSync("./_cookie.txt").toString();
    return cookie;
  } catch (error) {
    return undefined;
  }
}

module.exports = { getCookie };