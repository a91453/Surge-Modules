const FAKE_EXPIRES_ISO = "2099-12-31T23:59:59Z";
const FAKE_EXPIRES_MS = "4102444799000";

// period_type values that should be flipped to "normal" (the default paid tier).
// "normal" / "intro" / "trial" are the only valid values in RevenueCat v1.
const RESCUE_PERIOD_TYPES = new Set(["expired", "paused", "unknown"]);

function patch(node) {
    if (Array.isArray(node)) {
        for (const item of node) patch(item);
        return;
    }
    if (!node || typeof node !== "object") return;

    for (const key in node) {
        const val = node[key];
        if (val !== null && typeof val === "object") {
            patch(val);
            continue;
        }
        switch (key) {
            case "expires_date":
            case "grace_period_expires_date":
                if (val !== null) node[key] = FAKE_EXPIRES_ISO;
                break;
            case "expires_date_ms":
            case "grace_period_expires_date_ms":
                if (val !== null) node[key] = FAKE_EXPIRES_MS;
                break;
            case "unsubscribe_detected_at":
            case "billing_issues_detected_at":
            case "auto_resume_date":
            case "refunded_at":
                node[key] = null;
                break;
            case "period_type":
                if (typeof val === "string" && RESCUE_PERIOD_TYPES.has(val)) {
                    node[key] = "normal";
                }
                break;
        }
    }
}

let body = $response.body;
let result = body;
try {
    const obj = JSON.parse(body);
    patch(obj);
    result = JSON.stringify(obj);
} catch (e) {
    console.log("[revenuecat] JSON parse failed, passing body through:", e.message);
}

$done({ body: result });
