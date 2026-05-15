const body = $response.body;
let result = body;
try {
    let obj = JSON.parse(body);

    obj= {"licenses": [{"is_trial_period": true, "product_id": "com.itranslate.pro.yearly", "original_transaction_id": "20000627379146", "expires_date_ms": 4099246456000, "bundle_id": "com.outerspaceapps.itranslate", "transaction_id": "20000627379146"}, {"is_trial_period": true, "product_id": "com.itranslate.pro.yearly", "original_transaction_id": "20000627379146", "expires_date_ms": 4099246456000, "bundle_id": "com.outerspaceapps.itranslate", "transaction_id": "20000627379146"}]};

    result = JSON.stringify(obj);
} catch (e) {
    console.log("[itranslate] JSON parse failed, passing body through:", e.message);
}
$done({body: result});

// Descriptions
