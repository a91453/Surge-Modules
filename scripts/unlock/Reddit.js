const body = $response.body;
let result = body;
try {
    const obj = JSON.parse(body);
    obj['has_gold_subscription'] = true;
    obj['pref_autoplay'] = false;
    obj['has_subscribed_to_premium'] = true;
    obj['has_visited_new_profile'] = true;
    obj['pref_video_autoplay'] = false;
    obj['features']['promoted_trend_blanks'] = false;
    obj['is_mod'] = true;
    obj['is_gold'] = true;
    obj['has_ios_subscription'] = true;
    obj['seen_premium_adblock_modal'] = true;
    obj['can_edit_name'] = true;
    obj['has_external_account'] = true;
    result = JSON.stringify(obj);
} catch (e) {
    console.log("[reddit] JSON parse failed, passing body through:", e.message);
}
$done({body: result});
