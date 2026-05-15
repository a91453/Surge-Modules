const body = $response.body;
let result = body;
try {
    const obj = JSON.parse(body);

    obj["data"]["is_premium"]=1;
    obj["meta"]["current_subscription_expiration_date"]= "2 November 2099";
    obj["meta"]["current_subscription_expiry_date"]= "2099-11-09 04:48:25";
    result = JSON.stringify(obj);
} catch (e) {
    console.log("[musicalm] JSON parse failed, passing body through:", e.message);
}
$done({ body: result });
