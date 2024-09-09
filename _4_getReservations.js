import fs from "fs"
import { req } from "./_req.js"
import { todayStr } from "./_today.js"

export async function run(params) {
  const reservationIds = JSON.parse(fs.readFileSync("./" + todayStr + "/reservationIds.json").toString());

  const resDirPath = `./${todayStr}/reservations`;
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