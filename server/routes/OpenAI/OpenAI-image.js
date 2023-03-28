const express = require('express');
const { Configuration, OpenAIApi } = require('openai');
const router = express.Router();

const ORG = process.env.ORGANIZATION;
const API_KEY = process.env.API_KEY;

// OpenAI API setup
const configuration = new Configuration({
  organization: ORG,
  apiKey: API_KEY,
});
const openai = new OpenAIApi(configuration);

async function createImage(req, res) {
  const response = await openai
    .createImage({
      prompt: req.body.prompt,
      n: 1,
      size: "1024x1024",
    })
    .then((res) => {
      return res.data.data[0].url;
    });
  res.send(response);
}

async function createImageFromParams(req, res) {
  const response = await openai
    .createImage({
      prompt: req.params.prompt,
      n: 1,
      size: "1024x1024",
    })
    .then((res) => {
      return res.data.data[0].url;
    });
  res.json({ data: response });
}

router.post('/', (req, res) => {
  createImage(req, res)
})

router.get('/:prompt', (req, res) => {
  createImageFromParams(req, res)
})


module.exports = router;