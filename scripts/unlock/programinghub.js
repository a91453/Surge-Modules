const body = $response.body;
let result = body;
try {
    let obj = JSON.parse(body);

    obj.Message = "user is pro";
    obj.Reason = "";
    obj.data= {
        "id": 1412,
        "expiry_time": "2999-01-01T01:01:01.000Z",
        "user_id": "00000000000000000000000000000000",
        "promo_code": "WEBPAID",
        "code_type": "ONETIME",
        "pro_status": true
      };

    result = JSON.stringify(obj);
} catch (e) {
    console.log("[programinghub] JSON parse failed, passing body through:", e.message);
}
$done({ body: result });
