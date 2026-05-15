const obj = {
    active_expires_at: "2099-12-31T23:59:59Z",
    is_subscription_active: true,
    active_subscription_type: "premium",
    is_blocked: false,
};

$done({ body: JSON.stringify(obj) });
