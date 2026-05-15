const body = $response.body;
let result = body;
try {
    let obj = JSON.parse(body);
    obj = {
        "status": 0,
        "expires_date": "9999-06-06 19:57:41"
    };
    result = JSON.stringify(obj);
} catch (e) {
    console.log("[beautyplus] JSON parse failed, passing body through:", e.message);
}
$done({body: result});
