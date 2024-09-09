var fs = require("fs");
var { todayStr } = require("./_today");
var CSV_FIELDS = require("./_csv_fields");

const PRINT_RESERVATIONS = true;
const SAVE_AS_CSV = true;
const SAVE_AS_JSON = true;

run();

function run() {
  const resDirPath = `${__dirname}/${todayStr}/reservations`;
  const resFileNames = fs.readdirSync(resDirPath);
  const reservations = [];
  for (const resFileName of resFileNames) {
    const fullFilePath = resDirPath + "/" + resFileName;
    const data = JSON.parse(fs.readFileSync(fullFilePath).toString());
    const r = data.reservations[0];
    reservations.push(r);
  }

  if (PRINT_RESERVATIONS) {
    for (const r of reservations) {
      console.log(
        `[${r.id} ${r.status}] [${r.checkIn} : ${r.checkOut} : ${r.nights} nights] ` +
          `${r.guests} guests (${r.adults} adults | ${r.children} children | ${r.infants} infants) ` +
          `[net_revenue=${r.net_revenue} ${r.currency}] ` +
          `source=${r.source}`
      );
    }
  }

  if (SAVE_AS_CSV) {
    const lines = [];
    lines.push(CSV_FIELDS.map((i) => `"${i.toUpperCase()}"`).join(","));
    for (const r of reservations)
      lines.push(CSV_FIELDS.map((f) => JSON.stringify(r[f])).join(","));

    const filePath = `${__dirname}/${todayStr}/reservations.csv`;
    fs.writeFileSync(filePath, lines.join("\n"));
    console.log(`Saved ${filePath}`);
  }

  if (SAVE_AS_JSON) {
    const filePath = `${__dirname}/${todayStr}/reservations.json`;
    fs.writeFileSync(filePath, JSON.stringify(reservations, null, 2));
    console.log(`Saved ${filePath}`);
  }
}
