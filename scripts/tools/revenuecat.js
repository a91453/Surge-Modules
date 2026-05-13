let body = $response.body;

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

re('"expires_date"\\s*:\\s*"\\w{4}@"period_type"\\s*:\\s*"[^"]+"', '"expires_date":"2099@"period_type":"active"');

$done({ body });
