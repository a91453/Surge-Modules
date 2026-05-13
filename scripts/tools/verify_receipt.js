const FAKE_DATE = "2099-12-31 23:59:59 Etc/GMT";
const FAKE_DATE_PST = "2099-12-31 15:59:59 America/Los_Angeles";
const FAKE_DATE_MS = "4102444799000";

const FUTURE_DATE_FIELDS = new Set([
    "expires_date",
    "grace_period_expires_date",
]);
const FUTURE_DATE_PST_FIELDS = new Set([
    "expires_date_pst",
    "grace_period_expires_date_pst",
]);
const FUTURE_DATE_MS_FIELDS = new Set([
    "expires_date_ms",
    "grace_period_expires_date_ms",
]);

// Apple's verifyReceipt response omits these fields when the subscription
// is healthy; deleting them is closer to "never cancelled / never retried"
// than nulling them out.
const FIELDS_TO_DELETE = new Set([
    "expiration_intent",
    "cancellation_date",
    "cancellation_date_ms",
    "cancellation_date_pst",
    "cancellation_reason",
]);

function patch(node) {
    if (Array.isArray(node)) {
        for (const item of node) patch(item);
        return;
    }
    if (!node || typeof node !== "object") return;

    const toDelete = [];
    for (const key in node) {
        if (FIELDS_TO_DELETE.has(key)) {
            toDelete.push(key);
            continue;
        }
        const val = node[key];
        if (val !== null && typeof val === "object") {
            patch(val);
            continue;
        }
        if (FUTURE_DATE_FIELDS.has(key)) {
            node[key] = FAKE_DATE;
        } else if (FUTURE_DATE_PST_FIELDS.has(key)) {
            node[key] = FAKE_DATE_PST;
        } else if (FUTURE_DATE_MS_FIELDS.has(key)) {
            node[key] = FAKE_DATE_MS;
        } else if (key === "auto_renew_status") {
            node[key] = "1";
        } else if (key === "is_trial_period") {
            node[key] = "false";
        } else if (key === "is_in_intro_offer_period") {
            node[key] = "false";
        } else if (key === "is_in_billing_retry_period") {
            node[key] = "0";
        }
    }
    for (const k of toDelete) delete node[k];
}

let body = $response.body;
let result = body;
try {
    const obj = JSON.parse(body);
    patch(obj);
    result = JSON.stringify(obj);
} catch (e) {
    console.log("[verify_receipt] JSON parse failed, passing body through:", e.message);
}

$done({ body: result });
