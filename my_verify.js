// 1. 獲取 Apple 伺服器回傳的原始資料並轉為 JSON 物件
let body = $response.body;
let obj = JSON.parse(body);

// 2. 設定客製化的「假到期時間」
const fakeDate = "2099-12-31 23:59:59 Etc/GMT";
const fakeDatePst = "2099-12-31 15:59:59 America/Los_Angeles";
const fakeDateMs = "4102444799000";

// 3. 修改 receipt.in_app
if (obj.receipt && obj.receipt.in_app && obj.receipt.in_app.length > 0) {
    for (let i = 0; i < obj.receipt.in_app.length; i++) {
        if (obj.receipt.in_app[i].hasOwnProperty("expires_date")) {
            obj.receipt.in_app[i]["expires_date"] = fakeDate;
            obj.receipt.in_app[i]["expires_date_pst"] = fakeDatePst;
            obj.receipt.in_app[i]["expires_date_ms"] = fakeDateMs;
        }
    }
}

// 4. 修改 latest_receipt_info
if (obj.latest_receipt_info && obj.latest_receipt_info.length > 0) {
    for (let i = 0; i < obj.latest_receipt_info.length; i++) {
        if (obj.latest_receipt_info[i].hasOwnProperty("expires_date")) {
            obj.latest_receipt_info[i]["expires_date"] = fakeDate;
            obj.latest_receipt_info[i]["expires_date_pst"] = fakeDatePst;
            obj.latest_receipt_info[i]["expires_date_ms"] = fakeDateMs;
        }
    }
}

// 5. 修改 pending_renewal_info
if (obj.pending_renewal_info && obj.pending_renewal_info.length > 0) {
    for (let i = 0; i < obj.pending_renewal_info.length; i++) {
        // 標記為自動續訂中
        if (obj.pending_renewal_info[i].hasOwnProperty("auto_renew_status")) {
            obj.pending_renewal_info[i]["auto_renew_status"] = "1";
        }
        // 移除可能導致判斷為過期的欄位
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

// 6. 將修改後的物件轉回字串，並交還給 App
$done({ body: JSON.stringify(obj) });
