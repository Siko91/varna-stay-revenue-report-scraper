import fs from "fs";
import { req } from "./_req.js";
import { todayStr } from "./_today.js";

var COOKIE =
  "Path=/; Path=/; _ga=GA1.1.452480953.1725912848; intercom-device-id-dhsvljfu=93cdf9f8-b79c-45f0-980a-764ed00f8fae; app_identity=alexander.n.dinkov%40gmail.com; app_remember_code=PJBdmxVgGXL5TqlBeADVMu; hfy_session_app=cjl018o8of8md67tp51fnp1ehh739mhs; _ga_LYX8CKJ79W=GS1.1.1730138105.10.1.1730138113.52.0.1281659954; intercom-session-dhsvljfu=L3dLU200MHpRa0ZqdXJGQ3ZJeDY4aUEzaUFDSnpNT3NGT1QwM1RFbnI3RExGVGN1WVlXR0V2cE8veGRBWUhBRy0tSDUvM0xrRWZJODZJc2wrS21vQXpNUT09--de503f4f93484f0eb5c659e06123680d12b7a6de";

run();
export async function run() {
  fs.writeFileSync("./_cookie.txt", COOKIE);
  console.log(`Saved "./_cookie.txt"`);

  console.log("DONE!");
}
