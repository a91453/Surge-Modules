// 1. 取得 Apple 回應並嘗試解析為 JSON
let body = $response.body;
let obj = null;
try {
    obj = JSON.parse(body);
} catch (e) {
    // 解析失敗則原樣回傳
}

if (obj && typeof obj === "object") {
    // 2. 假到期時間
    const fakeDate = "2099-12-31 23:59:59 Etc/GMT";
    const fakeDatePst = "2099-12-31 15:59:59 America/Los_Angeles";
    const fakeDateMs = "4102444799000";

    // 3. 強制 status = 0（有效收據），這是大部分 App 第一個檢查的欄位
    obj.status = 0;

    // 4. 處理單筆購買紀錄共用邏輯
    const patchItem = (item) => {
        if (!item || typeof item !== "object") return;
        // 訂閱類：延長到期時間
        if (item.hasOwnProperty("expires_date")) {
            item["expires_date"] = fakeDate;
            item["expires_date_pst"] = fakeDatePst;
            item["expires_date_ms"] = fakeDateMs;
        }
        // 移除取消相關欄位，避免 App 偵測為已取消
        delete item["cancellation_date"];
        delete item["cancellation_date_ms"];
        delete item["cancellation_date_pst"];
        delete item["cancellation_reason"];
    };

    // 5. receipt.in_app
    if (obj.receipt && Array.isArray(obj.receipt.in_app)) {
        obj.receipt.in_app.forEach(patchItem);
    }

    // 6. latest_receipt_info
    if (Array.isArray(obj.latest_receipt_info)) {
        obj.latest_receipt_info.forEach(patchItem);
    }

    // 7. pending_renewal_info
    if (Array.isArray(obj.pending_renewal_info)) {
        obj.pending_renewal_info.forEach((item) => {
            if (!item || typeof item !== "object") return;
            // 標記為自動續訂中
            item["auto_renew_status"] = "1";
            // 非計費重試期
            item["is_in_billing_retry_period"] = "0";
            // 不需同意漲價
            item["price_increase_status"] = "0";
            // 移除過期/取消意圖
            delete item["expiration_intent"];
            delete item["cancellation_date"];
            delete item["cancellation_date_ms"];
            delete item["cancellation_date_pst"];
            delete item["cancellation_reason"];
            // 寬限期到期時間延後
            if (item.hasOwnProperty("grace_period_expires_date")) {
                item["grace_period_expires_date"] = fakeDate;
                item["grace_period_expires_date_ms"] = fakeDateMs;
                item["grace_period_expires_date_pst"] = fakeDatePst;
            }
        });
    }

    body = JSON.stringify(obj);
}

$done({ body });
