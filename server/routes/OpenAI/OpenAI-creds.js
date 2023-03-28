require('dotenv').config();
const express = require('express');
const router = express.Router();

const ORG = process.env.ORGANIZATION;
const API_KEY = process.env.API_KEY;


router.get("/", (req, res) => {
  payload = {
    creds: { ORGANIZATION: ORG, API_KEY: API_KEY },
    status: 200
  }
  res.json(payload)
  console.log(payload)
})

module.exports = router