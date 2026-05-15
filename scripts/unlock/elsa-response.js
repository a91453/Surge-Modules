
const body = $response.body;
let result = body;
try {
    const obj = JSON.parse(body);
    if($request.method=="GET")
    {
    obj["subscriptions"] = [
        {
          "expire_at": "21190505",
          "subscription": "lifetime_membership",
          "days_to_end": 36469,
          "created_at": "20190529151809"
        }
      ];
    result = JSON.stringify(obj);
    }
} catch (e) {
    console.log("[elsa-response] JSON parse failed, passing body through:", e.message);
}
$done({body: result});
