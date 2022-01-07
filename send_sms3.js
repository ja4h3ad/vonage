const Vonage = require("@vonage/server-sdk");
// require("dotenv").config();
// const VONAGE_API_KEY = process.env.VONAGE_API_KEY
// const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET
// const TO_NUMBER = process.env.VONAGE_TO_NUMBER
// const VONAGE_BRAND_NAME = process.env.VONAGE_BRAND_NAME


const vonage = new Vonage({
  apiKey: "691203af",
  apiSecret: "1nf4pGV0G8KLsaLW"
})


const from = "18779066458"
const to = "17076284914"
const text = 'Should I come up and eat or what do you want to do about lunch?'

vonage.message.sendSms(from, to, text, (err, responseData) => {
    if (err) {
        console.log(err);
    } else {
        if(responseData.messages[0]['status'] === "0") {
            console.log("Message sent successfully.");
        } else {
            console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
        }
    }
})