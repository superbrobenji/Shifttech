# README

## hosting

This application is hosted on: https://shifttech-ssessment.herokuapp.com/

## run locally

1. create a file called dev.js in the config folder
2. add the following snippet into the dev.js file replacing everyting in <> with your personal info

`module.exports = { googleClientID: <your clienet id>, googleClientSectret: <your client secret>, mongoURI: <your mongoURI>, cookieKey: <any string>, stripePublishableKey: <your Stripe publishable key>, stripeSecretKey: <your stripe secret key>, };`

3. run `node index.js` in the most root folder and `npm start` in the client folder

# NB
## Stripe is in test mode!! To use the app, use these test credit cards provided by Stripe at https://stripe.com/docs/testing

