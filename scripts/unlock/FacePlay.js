const url = $request.url;
const info = "info";
const account = "account";
const body = $response.body;
let result = body;
try {
    const obj = JSON.parse(body);
    if(url.indexOf(info) != -1){
        obj.data.account.isVip = 1;
        obj.data.account.balance = 69696969;
        obj.data.account.freezeBalance = 69696969;
        obj.data.account.vipExpired = 4092610661000
    }
    if(url.indexOf(account) != -1){
        obj.data.isVip = 1;
        obj.data.balance = 69696969;
        obj.data.freezeBalance = 69696969;
        obj.data.vipExpired = 4092610661000
    }
    result = JSON.stringify(obj);
} catch (e) {
    console.log("[faceplay] JSON parse failed, passing body through:", e.message);
}
$done({body: result});
