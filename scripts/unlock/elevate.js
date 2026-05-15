const body = $response.body;
let result = body;

try {
    const obj = JSON.parse(body);
    if (obj?.user) {
        obj.user.is_on_free_trial = false;
        obj.user.subscription_expiration_date_epoch = 4100909894;
        obj.user.current_subscription = {
            sku: "com.elevateapp.elevate.renewable.year_subscription_16",
            duration: "annual",
            store: "App Store",
        };
        obj.user.can_purchase = false;
    }
    result = JSON.stringify(obj);
} catch (e) {
    console.log("[elevate] JSON parse failed, passing body through:", e.message);
}

$done({ body: result });
