import fs from "fs"
import { req } from "./_req.js"
import { todayStr } from "./_today.js"

var START_DATE = "2020-01-01";
var END_DATE = "2028-01-01";
var LISTING_ID = "141830";

export async function run() {
  var calendar = await req(
    `https://varnastaypartners.online/calendarPmsapi/basic?start_date=${START_DATE}&end_date=${END_DATE}&listing_ids=${LISTING_ID}`
  );

  if (calendar.success === false)
    throw new Error(calendar.error || "Failed to fetch calendar");

  if (!fs.existsSync(`./${todayStr}`))
    fs.mkdirSync(`./${todayStr}`);

  const filePath = `./${todayStr}/calendar.json`;
  fs.writeFileSync(filePath, JSON.stringify(calendar, null, 2));
  console.log(`Saved ${filePath}`);

  console.log("DONE!");
}