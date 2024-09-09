import fs from "fs";
import { req } from "./_req.js";
import { todayStr } from "./_today.js";

var COOKIE =
  "Path=/; hfy_session_app=erev0l14ro8fgnbhu97kt694nkc1e35d; Path=/; _ga=GA1.1.452480953.1725912848; intercom-session-dhsvljfu=Z3FydGp3TitWZUR1Smd0YXF2Ty9IRU5wbTFTcEs4OC94TitBWmZ0VHkweFJuR1BCWGNFbWVmUGl1elYrbDhQcy0tWTh6L2xiSEhOaGZPY0FVT1ZEMVN0Zz09--7841a5ccb8aa50c47ee50707d3f3c1cc08bd1943; intercom-device-id-dhsvljfu=93cdf9f8-b79c-45f0-980a-764ed00f8fae; _ga_LYX8CKJ79W=GS1.1.1725912847.1.0.1725913110.60.0.871663652";

run();
export async function run() {
  fs.writeFileSync("./_cookie.txt", COOKIE);
  console.log(`Saved "./_cookie.txt"`);

  console.log("DONE!");
}
