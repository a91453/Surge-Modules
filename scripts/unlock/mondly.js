const body = $response.body;
let result = body;
try {
    const obj = JSON.parse(body);

    obj["pucharses"]= [10];
    obj["subscriptions"]=  {
      "10": "2099-09-09 05:05:05"
    };
    obj["subscription"]=  {
      "10": "2099-09-09 05:05:05"
    };
    obj["parsed_transactions"]= [
      "540000370283138"
    ];
    result = JSON.stringify(obj);
} catch (e) {
    console.log("[mondly] JSON parse failed, passing body through:", e.message);
}
$done({ body: result });
