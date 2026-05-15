function rewrite(pattern, replacement) {
    let body = $response.body;
    if (typeof body !== "string") {
        $done({});
        return;
    }
    const patterns = pattern.split("@");
    const replacements = replacement.split("@");
    for (let i = 0; i < patterns.length; i++) {
        body = body.replace(new RegExp(patterns[i], "g"), replacements[i]);
    }
    $done({ body });
}

rewrite(
    '"_isEligibleForFreeTrial":\\w+@"type":\\d',
    '"_isEligibleForFreeTrial":false@"type":1'
);
