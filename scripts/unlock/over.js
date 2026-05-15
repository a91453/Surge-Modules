const body = $response.body;
let result = body;
try {
    const obj = JSON.parse(body);
    obj.user.subscription["isSubscriptionActive"] = true;
    obj.user.subscription["entitlement"] = ["OVER_PRO"];
    result = JSON.stringify(obj);
} catch (e) {
    console.log("[over] JSON parse failed, passing body through:", e.message);
}
$done({ body: result });
