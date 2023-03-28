require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const cors = require('cors');


// Allow sending json between client and server
app.use(bodyParser.json())

app.use(cors());

const PORT = process.env.PORT || 5000

// OpenAI Obtain API KEY and ORGANIZATION ID
const OpenAICredsRoute = require('./routes/OpenAI/OpenAI-creds')
app.use('/api/OpenAI/GetCreds', OpenAICredsRoute)

// OpenAI Image Generation
const OpenAIImageRoute = require('./routes/OpenAI/OpenAI-image')
app.use('/api/OpenAI/GenerateImage', OpenAIImageRoute)


app.listen(PORT, () => console.log(`Server started on port ${PORT}`))