const body = $response.body;
let result = body;
try {
    const obj = JSON.parse(body);
    obj.data.is_premium = true;
    obj.data.access.tier = "plus";
    result = JSON.stringify(obj);
} catch (e) {
    console.log("[busuu] JSON parse failed, passing body through:", e.message);
}
$done({body: result});
