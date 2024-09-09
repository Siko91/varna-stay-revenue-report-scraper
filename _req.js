import fs from "fs";

function getHeaders() {
  return {
    accept:
      "application/json,text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "accept-language": "en-US,en;q=0.9,bg;q=0.8",
    "cache-control": "max-age=0",
    priority: "u=0, i",
    "sec-ch-ua":
      '"Chromium";v="128", "Not;A=Brand";v="24", "Google Chrome";v="128"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"Linux"',
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    Cookie: fs.readFileSync("./_cookie.txt").toString(),
    Referer: "https://varnastaypartners.online/",
    "Referrer-Policy": "strict-origin-when-cross-origin",
  };
}

export async function req(
  url,
  method = "GET",
  body = null,
  processResponse = responseProcessor,
  contentType = "application/json"
) {
  const res = await fetch(url, {
    headers: { ...getHeaders(), "content-type": contentType },
    body,
    method,
  });
  return await processResponse(res);
}

async function responseProcessor(res) {
  const textRes = await res.text();
  try {
    const jsRes = JSON.parse(textRes);
    return jsRes;
  } catch (error) {
    console.warn("Failed to parse response as JSON:\n" + textRes);
    throw error;
  }
}
