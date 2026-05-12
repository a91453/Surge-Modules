// 取得伺服器回傳的原始資料
let rawBody = $response.body;
let obj = {};

try {
    // 嘗試解析最外層的 JSON
    obj = JSON.parse(rawBody);
} catch (e) {
    // 加入 return 直接結束執行，並將原本的原始數據安全放行
    return $done({ body: rawBody }); 
}

// ==========================================
// 邏輯一：處理 Batch API (嵌套字串型 JSON)
// 針對：訂閱權限、高級會員開關、商店到期日
// ==========================================
if (obj.responses && Array.isArray(obj.responses)) {
    for (let i = 0; i < obj.responses.length; i++) {
        let responseItem = obj.responses[i];
        
        if (responseItem.body) {
            try {
                // 解開內層的 JSON 字串
                let innerObj = JSON.parse(responseItem.body);
                
                // 竄改：強開高級會員權限
                if (innerObj.trackingProperties) {
                    innerObj.trackingProperties.has_item_gold_subscription = true;
                    innerObj.trackingProperties.has_item_premium_subscription = true;
                    innerObj.trackingProperties.monetizable_status = "premium_owner"; 
                }
                
                // 竄改：展延訂閱到期日至 2099 年 (Unix timestamp: 4102444799)
                if (innerObj.shopItems && Array.isArray(innerObj.shopItems)) {
                    for (let j = 0; j < innerObj.shopItems.length; j++) {
                        if (innerObj.shopItems[j].subscriptionInfo) {
                            innerObj.shopItems[j].subscriptionInfo.expectedExpiration = 4102444799; 
                            innerObj.shopItems[j].subscriptionInfo.isFreeTrialPeriod = false; 
                        }
                    }
                }
                
                // 將修改後的內部物件重新轉回字串，塞回原本的欄位
                responseItem.body = JSON.stringify(innerObj);
                
            } catch (e) {
                // 內部 JSON 解析或修改失敗就跳過，保護腳本不崩潰
            }
        }
    }
}

// ==========================================
// 邏輯二：處理一般 API (扁平化 JSON 物件)
// 針對：解鎖條件、會員等級、活動競賽時間
// ==========================================
// 為了避免污染其他無關的 API，我們可以設定一個簡單的檢查：
// 只要它不是單純的空物件，我們就強制寫入或覆蓋這些進度與活動參數。

obj['num_sessions_remaining_to_unlock'] = 0;
obj['tier'] = 4;

// 檢查 active 節點是否存在，若無則建立空物件
if (!obj['active']) {
    obj['active'] = {};
}
obj['active']['collab_goal_accepted'] = false;
obj['active']['complete'] = false;

// 檢查 active.contest 節點是否存在，若無則建立空物件
if (!obj['active']['contest']) {
    obj['active']['contest'] = {};
}

// 竄改：強制將活動及註冊時間延長至 2099 年，並維持開啟狀態
obj['active']['contest']['contest_end'] = '2099-11-04T00:00:00Z';
obj['active']['contest']['contest_start'] = '2019-10-28T00:00:00Z';
obj['active']['contest']['contest_state'] = 'ACTIVE';
obj['active']['contest']['registration_end'] = '2099-11-03T00:00:00Z';
obj['active']['contest']['registration_state'] = 'OPEN';


// ==========================================
// 最終輸出
// ==========================================
// 將所有修改過後的 JSON 轉回字串，交還給 App
$done({ body: JSON.stringify(obj) });
