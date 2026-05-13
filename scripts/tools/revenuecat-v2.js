const FAKE_EXPIRES_MS = 4102444799000;

// Subscription status values that should be flipped to "active".
// Other status values (e.g. on non-subscription objects) are left alone
// to avoid corrupting unrelated fields with the same name.
const RESCUE_STATUSES = new Set([
    "expired",
    "in_grace_period",
    "in_billing_retry",
    "paused",
    "unknown",
]);

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
            case "expires_at":
            case "current_period_ends_at":
            case "renewal_at":
                if (val !== null) node[key] = FAKE_EXPIRES_MS;
                break;
            case "ends_at":
            case "unsubscribe_detected_at":
            case "billing_issues_detected_at":
            case "paused_at":
            case "refunded_at":
            case "revoked_at":
            case "cancellation_initiated_at":
            case "cancellation_reason":
                node[key] = null;
                break;
            case "gives_access":
                node[key] = true;
                break;
            case "status":
                if (typeof val === "string" && RESCUE_STATUSES.has(val)) {
                    node[key] = "active";
                }
                break;
            case "auto_renewal_status":
                if (typeof val === "string") node[key] = "will_renew";
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
    console.log("[revenuecat-v2] JSON parse failed, passing body through:", e.message);
}

$done({ body: result });
