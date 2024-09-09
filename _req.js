var { getCookie } = require("./_cookie.js");

function getHeaders() {
  return {
    accept: "application/json",
    "accept-language": "en-US,en;q=0.9,bg;q=0.8",
    priority: "u=1, i",
    "sec-ch-ua":
      '"Chromium";v="128", "Not;A=Brand";v="24", "Google Chrome";v="128"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"Linux"',
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    cookie: getCookie(),
    Referer: "https://varnastaypartners.online/",
    "Referrer-Policy": "strict-origin-when-cross-origin",
  };
}

async function req(
  url,
  method = "GET",
  body = null,
  processResponse = responseProcessor
) {
  const res = await fetch(url, { headers: getHeaders(), body, method });
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

module.exports = { req: req };
