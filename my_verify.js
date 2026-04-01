// 1. 獲取 Apple 伺服器回傳的原始資料並轉為 JSON 物件
let body = $response.body;
let obj = JSON.parse(body);

// 2. 設定你要客製化的「假到期時間」
const fakeDate = "2099-12-31 23:59:59 Etc/GMT";
const fakeDatePst = "2099-12-31 15:59:59 America/Los_Angeles";
const fakeDateMs = "4102444799000"; // 2099年底的毫秒時間戳

// 3. 安全修改：檢查 receipt.in_app 是否存在且有資料
if (obj.receipt && obj.receipt.in_app && obj.receipt.in_app.length > 0) {
    // 使用迴圈，把每一筆內購紀錄的到期日都改成 2099 年
    for (let i = 0; i < obj.receipt.in_app.length; i++) {
        if (obj.receipt.in_app[i].hasOwnProperty("expires_date")) {
            obj.receipt.in_app[i]["expires_date"] = fakeDate;
            obj.receipt.in_app[i]["expires_date_pst"] = fakeDatePst;
            obj.receipt.in_app[i]["expires_date_ms"] = fakeDateMs;
        }
    }
}

// 4. 安全修改：檢查 latest_receipt_info (最新收據資訊) 是否存在
if (obj.latest_receipt_info && obj.latest_receipt_info.length > 0) {
    for (let i = 0; i < obj.latest_receipt_info.length; i++) {
        if (obj.latest_receipt_info[i].hasOwnProperty("expires_date")) {
            obj.latest_receipt_info[i]["expires_date"] = fakeDate;
            obj.latest_receipt_info[i]["expires_date_pst"] = fakeDatePst;
            obj.latest_receipt_info[i]["expires_date_ms"] = fakeDateMs;
        }
    }
}

// 5. 將修改後的物件轉回字串，並交還給 App
$done({ body: JSON.stringify(obj) });
