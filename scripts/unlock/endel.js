const body = $response.body;
let result = body;
try {
    const obj = JSON.parse(body);

    obj["subscription"]= {
        "time_left" : 0,
        "trial_type" : "CALENDAR_BASED",
        "price_id" : "",
        "period" : "NOPERIOD",
        "cancel_at_period_end" : false,
        "valid_until" : 1873089612.367564,
        "type" : "ACTIVE",
        "store" : "NOSTORE"
        };

    result = JSON.stringify(obj);
} catch (e) {
    console.log("[endel] JSON parse failed, passing body through:", e.message);
}
$done({body: result});
