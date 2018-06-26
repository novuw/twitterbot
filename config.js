require('dotenv').config();
module.exports = {
  consumer_key: process.env.API_KEY,
  consumer_secret: process.env.API_SECRET,
  access_token_key: process.env.USER_TOKEN,
  access_token_secret: process.env.USER_TOKEN_SECRET
}
