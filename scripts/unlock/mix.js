const body = $response.body;
let result = body;

try {
    if (body && body.includes("expires")) {
        const obj = JSON.parse(body);
        const order = obj?.data?.orderList?.[0];
        if (order) {
            order.expires_date = "2099-10-19 05:14:18 Etc/GMT";
            order.expires_date_pst = "2099-10-18 22:14:18 America/Los_Angeles";
            order.expires_date_ms = "4096019658000";
        }
        result = JSON.stringify(obj);
    }
} catch (e) {
    console.log("[mix] JSON parse failed, passing body through:", e.message);
}

$done({ body: result });
