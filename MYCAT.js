// 1. 讀取伺服器回傳的純文字
let body = $response.body;

// 2. 定義替換函數 (支援使用 @ 一次替換多組)
function re(regStr, replaceStr) {
    if (regStr.includes("@")) {
        let regs = regStr.split("@");
        let strs = replaceStr.split("@");
        for (let i = 0; i < regs.length; i++) {
            let reg = new RegExp(regs[i], "g");
            body = body.replace(reg, strs[i]);
        }
    } else {
        let reg = new RegExp(regStr, "g");
        body = body.replace(reg, replaceStr);
    }
}

// 3. 執行你的替換規則
// 這裡將 "expires_date":"年份4碼 和 "period_type":"任意字元" 
// 替換成 "expires_date":"2099 和 "period_type":"active"
re('"expires_date":"\\w{4}@"period_type":"\\w+"', '"expires_date":"2099@"period_type":"active"');

// 如果你以後想增加其他 App 的規則，可以直接在下面繼續加：
// re('"is_pro":false', '"is_pro":true');

// 4. 將替換完成的純文字交還給 App
$done({ body });
