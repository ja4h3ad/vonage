const Vonage = require('@vonage/server-sdk');


const REQUEST_ID = process.argv[2];
if (!REQUEST_ID) {
  console.error('Please supply the `request_id`');
  return;
}

const CODE = process.argv[3];
if (!CODE) {
  console.error('Please supply the confirmation code');
  return;
}

const vonage = new Vonage({
  apiKey: '1f921f5f',
  apiSecret: 'wTl7BKAyxOQiUy3M'
}, {
  debug: true
});

vonage.verify.check({
  request_id: 'eadbae024746481e971c7d9a0ae856fd',
  code: "5620"
}, (err, result) => {
  if (err) {
    console.error(err);
  } else {
    console.log(result);
  }
});

  

