const body = $response.body;
let result = body;
try {
    const obj = JSON.parse(body);
    obj['will_renew_subscription'] = true;
    obj['is_subscribed'] = true;
    result = JSON.stringify(obj);
} catch (e) {
    console.log("[splice] JSON parse failed, passing body through:", e.message);
}
$done({ body: result });
