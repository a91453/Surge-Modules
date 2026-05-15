const body = $response.body;
let result = body;
try {
    const obj = JSON.parse(body);

    obj.subscription= {
      "granted": true
    };
    result = JSON.stringify(obj);
} catch (e) {
    console.log("[picsart] JSON parse failed, passing body through:", e.message);
}
$done({ body: result });
