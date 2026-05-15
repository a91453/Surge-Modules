re('"expires_unixtime":\\d+','"expires_unixtime":4075906897');
function re() {
    let body = $response.body;
    if (arguments[0].includes("@")) {
        const regs = arguments[0].split("@");
        const strs = arguments[1].split("@");
        for (let i = 0;i < regs.length;i++) {
            const reg = new RegExp(regs[i],"g");
            body = body.replace(reg, strs[i]);
        }
    }
    else {
        const reg = new RegExp(arguments[0],"g");
        body = body.replace(reg, arguments[1]);
    }
    $done({body});
}
