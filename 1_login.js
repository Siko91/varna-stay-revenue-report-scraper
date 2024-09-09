var fs = require("fs");
var { req } = require("./_req");
var { todayStr } = require("./_today");

var USERNAME = "alexander.n.dinkov@gmail.com";
var PASSWORD = "7wG&V4Pb*i45cu";
var COOKIE_PATH = __dirname + "/_cookie.txt";

run();

async function run() {
  if (fs.existsSync(COOKIE_PATH)) fs.unlinkSync(COOKIE_PATH);

  var authRes = await req(
    "https://varnastaypartners.online/user/login",
    "POST",
    `username=${encodeURIComponent(USERNAME)}` +
      `&password=${encodeURIComponent(PASSWORD)}`,
    (res) => res
  );

  const cookie = (authRes.headers.getSetCookie() || []).reverse().join("; ");

  fs.writeFileSync(COOKIE_PATH, cookie);
  console.log(`Saved ${COOKIE_PATH}`);

  console.log("DONE!");
}
