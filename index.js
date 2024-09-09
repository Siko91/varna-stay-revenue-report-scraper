import * as _1_login from "./_1_login.js";
import * as _2_queryCalendarRange from "./_2_queryCalendarRange.js";
import * as _3_listReservationIDs from "./_3_listReservationIDs.js";
import * as _4_getReservations from "./_4_getReservations.js";
import * as _5_parseReservations from "./_5_parseReservations.js";

run()
  .then(() => {
    console.log("DONE");
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

async function run() {
  console.log("==> Starting step: '_1_login'");
  await _1_login.run();

  wait(100);
  console.log("==> Starting step: '_2_queryCalendarRange'");
  await _2_queryCalendarRange.run();

  wait(100);
  console.log("==> Starting step: '_3_listReservationIDs'");
  await _3_listReservationIDs.run();

  wait(100);
  console.log("==> Starting step: '_4_getReservations'");
  await _4_getReservations.run();

  wait(100);
  console.log("==> Starting step: '_5_parseReservations'");
  await _5_parseReservations.run();
}

async function wait(ms) {
  await new Promise((res) => setTimeout(() => res(), ms));
}
