let body = $response.body;
let result = body;

try {
    let obj = JSON.parse(body);

    const fakeDate = "2099-12-31 23:59:59 Etc/GMT";
    const fakeDatePst = "2099-12-31 15:59:59 America/Los_Angeles";
    const fakeDateMs = "4102444799000";

    if (obj.receipt && Array.isArray(obj.receipt.in_app)) {
        for (let i = 0; i < obj.receipt.in_app.length; i++) {
            if (obj.receipt.in_app[i].hasOwnProperty("expires_date")) {
                obj.receipt.in_app[i]["expires_date"] = fakeDate;
                obj.receipt.in_app[i]["expires_date_pst"] = fakeDatePst;
                obj.receipt.in_app[i]["expires_date_ms"] = fakeDateMs;
            }
        }
    }

    if (Array.isArray(obj.latest_receipt_info)) {
        for (let i = 0; i < obj.latest_receipt_info.length; i++) {
            if (obj.latest_receipt_info[i].hasOwnProperty("expires_date")) {
                obj.latest_receipt_info[i]["expires_date"] = fakeDate;
                obj.latest_receipt_info[i]["expires_date_pst"] = fakeDatePst;
                obj.latest_receipt_info[i]["expires_date_ms"] = fakeDateMs;
            }
        }
    }

    if (Array.isArray(obj.pending_renewal_info)) {
        for (let i = 0; i < obj.pending_renewal_info.length; i++) {
            if (obj.pending_renewal_info[i].hasOwnProperty("auto_renew_status")) {
                obj.pending_renewal_info[i]["auto_renew_status"] = "1";
            }
            if (obj.pending_renewal_info[i].hasOwnProperty("expiration_intent")) {
                delete obj.pending_renewal_info[i]["expiration_intent"];
            }
            if (obj.pending_renewal_info[i].hasOwnProperty("grace_period_expires_date")) {
                obj.pending_renewal_info[i]["grace_period_expires_date"] = fakeDate;
                obj.pending_renewal_info[i]["grace_period_expires_date_ms"] = fakeDateMs;
                obj.pending_renewal_info[i]["grace_period_expires_date_pst"] = fakeDatePst;
            }
        }
    }

    result = JSON.stringify(obj);
} catch (e) {}

$done({ body: result });
