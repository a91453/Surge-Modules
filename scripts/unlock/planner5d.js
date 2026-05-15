
const body = $response.body;
let result = body;
try {
    let obj = JSON.parse(body);

    obj=
    {
      "accessDays": 999999999,
      "allSets": 1,
      "error": 0,
      "m": {
        "r": "999999999",
        "useSubscriptions": true,
        "expiredSubscription": "999999999",
        "subscription": "com.planner5d.planner5d.subscription.yearly"
      }
    };

    result = JSON.stringify(obj);
} catch (e) {
    console.log("[planner5d] JSON parse failed, passing body through:", e.message);
}
$done({ body: result });
