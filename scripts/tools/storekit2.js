const FAKE_EXPIRES_MS = 4102444799000;
const B64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

function b64Decode(str) {
    let out = "", buf = 0, bits = 0;
    for (let i = 0; i < str.length; i++) {
        const c = str[i];
        if (c === "=") break;
        const v = B64.indexOf(c);
        if (v < 0) continue;
        buf = (buf << 6) | v;
        bits += 6;
        if (bits >= 8) {
            bits -= 8;
            out += String.fromCharCode((buf >> bits) & 0xff);
        }
    }
    return out;
}

function b64Encode(str) {
    let out = "", buf = 0, bits = 0;
    for (let i = 0; i < str.length; i++) {
        buf = (buf << 8) | (str.charCodeAt(i) & 0xff);
        bits += 8;
        while (bits >= 6) {
            bits -= 6;
            out += B64[(buf >> bits) & 0x3f];
        }
    }
    if (bits > 0) out += B64[(buf << (6 - bits)) & 0x3f];
    while (out.length % 4) out += "=";
    return out;
}

function b64UrlDecode(s) {
    return b64Decode(s.replace(/-/g, "+").replace(/_/g, "/"));
}

function b64UrlEncode(s) {
    return b64Encode(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

// Modifies the unsigned payload of a JWS string. Signature will no longer
// verify; only effective on apps that skip JWS validation.
function patchJws(jws) {
    if (typeof jws !== "string") return jws;
    const parts = jws.split(".");
    if (parts.length !== 3) return jws;
    try {
        const payload = JSON.parse(b64UrlDecode(parts[1]));

        if ("expiresDate" in payload) payload.expiresDate = FAKE_EXPIRES_MS;
        if ("revocationDate" in payload) delete payload.revocationDate;
        if ("revocationReason" in payload) delete payload.revocationReason;
        if ("isUpgraded" in payload) payload.isUpgraded = false;

        if ("autoRenewStatus" in payload) payload.autoRenewStatus = 1;
        if ("expirationIntent" in payload) delete payload.expirationIntent;
        if ("isInBillingRetryPeriod" in payload) payload.isInBillingRetryPeriod = false;
        if ("priceIncreaseStatus" in payload) payload.priceIncreaseStatus = 0;
        if ("gracePeriodExpiresDate" in payload) payload.gracePeriodExpiresDate = FAKE_EXPIRES_MS;
        if ("renewalDate" in payload) payload.renewalDate = FAKE_EXPIRES_MS;

        parts[1] = b64UrlEncode(JSON.stringify(payload));
        return parts.join(".");
    } catch (e) {
        return jws;
    }
}

let body = $response.body;
let result = body;

try {
    const obj = JSON.parse(body);

    // /inApps/v1/transactions/{transactionId}
    if (typeof obj.signedTransactionInfo === "string") {
        obj.signedTransactionInfo = patchJws(obj.signedTransactionInfo);
    }

    // /inApps/v1/history/{originalTransactionId}
    if (Array.isArray(obj.signedTransactions)) {
        obj.signedTransactions = obj.signedTransactions.map(patchJws);
    }

    // /inApps/v1/subscriptions/{transactionId}
    if (Array.isArray(obj.data)) {
        for (const group of obj.data) {
            if (!Array.isArray(group.lastTransactions)) continue;
            for (const tx of group.lastTransactions) {
                if ("status" in tx) tx.status = 1;
                if (typeof tx.signedTransactionInfo === "string") {
                    tx.signedTransactionInfo = patchJws(tx.signedTransactionInfo);
                }
                if (typeof tx.signedRenewalInfo === "string") {
                    tx.signedRenewalInfo = patchJws(tx.signedRenewalInfo);
                }
            }
        }
    }

    result = JSON.stringify(obj);
} catch (e) {}

$done({ body: result });
