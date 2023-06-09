const express = require('express');
const { Configuration, OpenAIApi } = require('openai');
const router = express.Router();


// OpenAI API setup
const configuration = new Configuration({
  organization: process.env.ORGANIZATION,
  apiKey: process.env.API_KEY,
});
const openai = new OpenAIApi(configuration);

async function createImage(req, res) {
  const response = await openai
    .createImage({
      prompt: req.body.prompt,
      n: req.body.amount,
      size: "1024x1024",
    })
    .then((res) => {
      // Grabs all received images
      return res.data.data;
    }).catch((error) => console.error('An error has occured', error));
  res.send(response);
}

async function createImageFromParams(req, res) {
  const response = await openai
    .createImage({
      prompt: req.params.prompt,
      n: req.params.amount,
      size: "1024x1024",
    })
    .then((res) => {
      // Grabs all received images
      return res.data.data;
    }).catch((error) => console.error('An error has occured', error));
  res.json({ data: response });
}

router.post('/', (req, res) => {
  createImage(req, res)

  // IR/B = Image Requested / Body
  console.log(`[IR/B/${req.body.amount}] ${req.body.prompt}`)
})

router.get('/:prompt/:amount', (req, res) => {
  createImageFromParams(req, res)

  // IR/P = Image Requested / Params
  console.log(`[IR/P/${req.params.amount}] ${req.params.prompt}`)
})


module.exports = router;