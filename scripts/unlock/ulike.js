const body = $response.body;
let result = body;
try {
    let obj = JSON.parse(body);

    obj= {
      "data": {
        "flag": true,
        "start_time": 1572760027,
        "end_time": 4097368706
      },
      "systime": "",
      "errmsg": "Success",
      "ret": "0"
    };

    result = JSON.stringify(obj);
} catch (e) {
    console.log("[ulike] JSON parse failed, passing body through:", e.message);
}
$done({ body: result });
