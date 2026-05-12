// YouTube /youtubei/v1/player request modifier
// 目的：opt-out SABR (Server-Side Ad Insertion)
// 原理：把 iOS YouTube client version 降回 SABR 推出前（2023 末），
//       讓伺服器以為這是舊 client，回吐舊版可被 URL-based 攔截的串流協定。
// 出問題：移除本模組即還原。

const body = $request.body;
let obj = null;

try {
    obj = JSON.parse(body);
} catch (e) {
    // body 不是 JSON（可能是 protobuf），無法修改
}

if (obj && obj.context && obj.context.client) {
    const client = obj.context.client;
    // Pre-SABR iOS YouTube 版本（2023/12 左右，SABR 大規模推送前）
    client.clientVersion = "18.16.1";
    // 清掉 experiment tokens，避免帶入啟用 SABR 的旗標
    delete client.experimentsToken;
    if (Array.isArray(client.experimentIds)) {
        client.experimentIds = [];
    }
}

$done({ body: obj ? JSON.stringify(obj) : body });
