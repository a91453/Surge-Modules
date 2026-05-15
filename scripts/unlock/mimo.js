const body = $response.body;
let result = body;
try {
    let obj = JSON.parse(body);

    obj= {
      "source": "ios",
      "status": "active",
      "interval": "yearly",
      "billingInfo": {
        "currency": "USD",
        "nextBillingPrice": 59.98999999999999
      },
      "subscriptions": [
        {
          "source": "ios",
          "status": "active",
          "interval": "yearly",
          "billingInfo": {
            "currency": "USD",
            "nextBillingPrice": 59.98999999999999
          },
          "intervalCount": 1,
          "activeUntil": "2099-10-10T08:04:21+00:00",
          "createdAt": "2019-10-03T08:04:21+00:00",
          "clientSecret": "",
          "isActive": true
        }
      ],
      "intervalCount": 1,
      "activeUntil": "2099-10-10T08:04:21+00:00",
      "createdAt": "2019-10-03T08:04:21+00:00",
      "clientSecret": "",
      "isActive": true
    };

    result = JSON.stringify(obj);
} catch (e) {
    console.log("[mimo] JSON parse failed, passing body through:", e.message);
}
$done({body: result});
