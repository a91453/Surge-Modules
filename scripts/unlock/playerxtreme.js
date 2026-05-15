const body = $response.body;
let result = body;
try {
    let obj = JSON.parse(body);

    obj=
    {
      "res": "OK",
      "response": {
        "result": "0",
        "purchases": [{
          "productID": "com.pentaloop.playerx.addon.pro",
          "purchaseDate": "2019-12-14 21:31:16 Etc/GMT",
          "originalPurchaseDate": "2019-12-14 21:31:16 Etc/GMT",
          "type": "0",
          "isTrialPeriod": "false"
        }]
      }
    };

    result = JSON.stringify(obj);
} catch (e) {
    console.log("[playerxtreme] JSON parse failed, passing body through:", e.message);
}
$done({ body: result });
