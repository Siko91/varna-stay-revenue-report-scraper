import fs from "fs";
import { req } from "./_req.js";
import { todayStr } from "./_today.js";

var COOKIE =
  "Path=/; Path=/; _ga=GA1.1.452480953.1725912848; intercom-device-id-dhsvljfu=93cdf9f8-b79c-45f0-980a-764ed00f8fae; app_identity=alexander.n.dinkov%40gmail.com; app_remember_code=PJBdmxVgGXL5TqlBeADVMu; hfy_session_app=nhshc71bq8iaqt6reqqasvvcbkrdmb2e; _ga_LYX8CKJ79W=GS1.1.1728900381.8.1.1728900381.60.0.621526466; intercom-session-dhsvljfu=eXZuaU1KUHhhaWRKajQwT2RvZmEzTFdxUWhoV3RIZGp0ZVYwWDNpTFh5cldkcFRTVzFEd2xJUDRNVWRIRVF0Yy0tcDI4aGJvRUpRcXZXNlVVMVlHRS9oZz09--77a01e425665810377a2a0e6ab5635b17fec9919";

run();
export async function run() {
  fs.writeFileSync("./_cookie.txt", COOKIE);
  console.log(`Saved "./_cookie.txt"`);

  console.log("DONE!");
}
