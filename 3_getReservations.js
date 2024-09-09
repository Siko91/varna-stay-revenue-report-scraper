var fs = require("fs");
var { req } = require("./_req");
var { todayStr } = require("./_today");

run();

async function run(params) {
  const reservationIds = require("./" + todayStr + "/reservationIds.json");

  const resDirPath = `${__dirname}/${todayStr}/reservations`;
  if (fs.existsSync(resDirPath)) fs.rmSync(resDirPath, {recursive:true}); // Delete old Dir
  if (!fs.existsSync(resDirPath)) fs.mkdirSync(resDirPath); // Create empty Dir

  for (const resId of reservationIds) {
    const data = await req(`https://varnastaypartners.online/reservationsPmsapi/basic?reservations_ids=${resId}`);

    const filePath = `${resDirPath}/reservation.${resId}.json`;
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    console.log(`Saved ${filePath}`);
  }

  console.log("DONE");
}
