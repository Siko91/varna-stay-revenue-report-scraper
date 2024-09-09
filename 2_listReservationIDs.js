var fs = require("fs");
var { todayStr } = require("./_today");

const PRINT_RESERVATION_START = false;
const PRINT_RESERVATION_END = true;
const PRINT_BOOKED_DAY = false;

run();

function run() {
  const calendar = require("./" + todayStr + "/calendar.json");

  const statusTypes = calendar.calendar
    .map((i) => i.status)
    .filter((v, i, arr) => arr.indexOf(v) === i);
  console.log("statusTypes: " + statusTypes.join()); // none,booked,available,unavailable

  const bookedDays = calendar.calendar.filter((i) => i.status === "booked");
  console.log("bookedDays: " + bookedDays.length); // 332

  let currentResId = "";
  let moneyFromReservation = 0;
  let totalMoneyFromReservations = 0;
  const reservationIds = [];
  for (let i = 0; i < bookedDays.length; i++) {
    const day = bookedDays[i];
    const resId = day.reservation_id[0];

    const isReservationStart = resId !== currentResId;
    if (isReservationStart) {
      if (PRINT_RESERVATION_END) {
        console.log(
          `* Reservation ${currentResId} ended and earned a total of ${moneyFromReservation} ${day.currency.symbol}`
        );
      }

      reservationIds.push(resId);
      moneyFromReservation = 0;

      if (PRINT_RESERVATION_START) {
        console.log(`* Reservation ${resId} started on [${day.date}]`);
      }
    }

    if (PRINT_BOOKED_DAY) {
      console.log(
        `bookedDays[i]: [${day.date}] ${day.price} ${
          day.currency.symbol
        } reservation_id=${resId}${
          isReservationStart ? ` <--- START of new Reservation` : ""
        }`
      );
    }
    currentResId = resId;
    moneyFromReservation += day.price;
    totalMoneyFromReservations += day.price;
  }

  console.log(`totalReservations: ${reservationIds.length}`);

  console.log(
    `totalMoneyFromReservations: ${totalMoneyFromReservations} ${bookedDays[0].currency.symbol}`
  );

  fs.writeFileSync(
    `./${todayStr}/reservationIds.json`,
    JSON.stringify(reservationIds, null, 2)
  );
}
