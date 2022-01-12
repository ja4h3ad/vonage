const Vonage = require('@vonage/server-sdk');
const vonage = new Vonage({
  apiKey: '1f921f5f',
  apiSecret: 'wTl7BKAyxOQiUy3M'
});

vonage.verify.request({
  number: 19726722984,
  brand: "My Agent's Pro" 
}, (err, result) => {
  if (err) {
    console.error(err);
  } else {
    const verifyRequestId = result.request_id;
    console.log('request_id', verifyRequestId);
  }
});


