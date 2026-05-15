re('("expires_date"):"\\w{4}@("expires_date_pst"):"\\w{4}@("expires_date_ms"):"\\w+"@("is_trial_period"):"\\w+"','$1:"2023@$1:"2023@$1:"1702405402000"@$1:"false"');
function re() {
    let body = $response.body;
    if(!body){
        $done({});
    }
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
