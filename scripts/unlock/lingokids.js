const body = $response.body;
let result = body;
try {
    const obj = JSON.parse(body);

    obj["info"]["subscriptions"]= [
          {
            "status": "active",
            "product": "unlimited",
            "duration_unit": "months",
            "id": 805063,
            "platform": "apple",
            "duration_value": 1,
            "starts_at": 1572617692,
            "ends_at": 4099821292,
            "auto_renew_status": true,
            "plan_id": "lk.ios.s1m.t1m.p15.v1",
            "state": "active"
          }];

    result = JSON.stringify(obj);
} catch (e) {
    console.log("[lingokids] JSON parse failed, passing body through:", e.message);
}
$done({body: result});

// Descriptions
