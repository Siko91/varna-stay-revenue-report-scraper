import fs from "fs";
import { req } from "./_req.js";
import { todayStr } from "./_today.js";

var COOKIE =
  "Path=/; Path=/; _ga=GA1.1.452480953.1725912848; intercom-device-id-dhsvljfu=93cdf9f8-b79c-45f0-980a-764ed00f8fae; hfy_session_app=0uf3t2pqfkhdngv4h4vjemqqoppl97n9; intercom-session-dhsvljfu=YzBwank0SnRqeVhJTnVQbExPSERYTjM1MHcwdkNZT3JvTXI4bzFTSHJnZ1kxbUpKVFhpYjNSSlh2bm82azJiSC0tdTczN2h6bnhBYU1sMmUzdTJ2R0wxZz09--de483bec6fb183b2b2ae98ddd5bf85f0e60bd2c6; _ga_LYX8CKJ79W=GS1.1.1727079910.3.1.1727079919.51.0.1249033732";

run();
export async function run() {
  fs.writeFileSync("./_cookie.txt", COOKIE);
  console.log(`Saved "./_cookie.txt"`);

  console.log("DONE!");
}
