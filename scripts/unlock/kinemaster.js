const body = $response.body;
let result = body;
try {
    let obj = JSON.parse(body);

    obj= {
      "is_valid_device" : true,
      "has_valid_subscription" : true,
      "expiration_date_ms" : 4097755192000,
      "is_table_resettable" : true,
      "subscription_product_id" : "com.kinemaster.sub.annual.ia2",
      "state_code" : 0
    };

    result = JSON.stringify(obj);
} catch (e) {
    console.log("[kinemaster] JSON parse failed, passing body through:", e.message);
}
$done({body: result});
