var _1_login = require("./1_login.js");
var _2_listReservationIDs = require("./2_listReservationIDs.js");
var _3_getReservations = require("./3_getReservations.js");
var _4_query = require("./4_queryCalendarRange.js");
var _5_parseReservations = require("./5_parseReservations.js");

run()
  .then(() => {
    console.log("DONE");
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

async function run() {
  await _1_login.run();
  await _2_listReservationIDs.run();
  await _3_getReservations.run();
  await _4_query.run();
  await _5_parseReservations.run();
}
