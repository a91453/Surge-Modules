// ==========================================
// Grindr XTRA / Unlimited 高級會員解鎖
// ==========================================

let rawBody = $response.body;
let obj;

try {
    obj = JSON.parse(rawBody);
} catch (e) {
    $done({ body: rawBody });
    return;
}

// 訂閱狀態強開
obj.xtraStatus = "Active";
obj.unlimitedStatus = "Active";
obj.isFreeUser = false;

// 高級會員角色注入
const premiumRoles = ["XTRA_USER", "UNLIMITED_USER"];
if (!Array.isArray(obj.roles)) {
    obj.roles = [];
}
premiumRoles.forEach(function (r) {
    if (obj.roles.indexOf(r) === -1) obj.roles.push(r);
});

// profile 巢狀物件 (部分 sessions 回傳會帶 profile)
if (obj.profile && typeof obj.profile === "object") {
    obj.profile.isXtra = true;
    obj.profile.isUnlimited = true;
    obj.profile.xtraStatus = "Active";
    obj.profile.unlimitedStatus = "Active";
    obj.profile.approximateDistance = false;
}

// user 巢狀物件 (兼容不同版本回傳結構)
if (obj.user && typeof obj.user === "object") {
    obj.user.xtraStatus = "Active";
    obj.user.unlimitedStatus = "Active";
    obj.user.isFreeUser = false;
}

$done({ body: JSON.stringify(obj) });
