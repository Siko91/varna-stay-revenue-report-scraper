var fs = require("fs");
var { getRequest } = require("./_getRequest");
var { todayStr } = require("./_today");

var START_DATE = "2020-01-01";
var END_DATE = "2028-01-01";
var LISTING_ID = "141830";

getCalendar();

async function getCalendar() {
  var calendar = await getRequest(
    `https://varnastaypartners.online/calendarPmsapi/basic?start_date=${START_DATE}&end_date=${END_DATE}&listing_ids=${LISTING_ID}`
  );

  if (!fs.existsSync(`${__dirname}/${todayStr}`))
    fs.mkdirSync(`${__dirname}/${todayStr}`);

  const filePath = `${__dirname}/${todayStr}/calendar.json`;
  fs.writeFileSync(filePath, JSON.stringify(calendar, null, 2));
  console.log(`Saved ${filePath}`);

  console.log("DONE!");
}
