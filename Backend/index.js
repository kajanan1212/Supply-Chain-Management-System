const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const dotenv = require('dotenv');
dotenv.config();
app.use(cors());
app.use(express.json())

const auth = require('./routes/auth');
app.use("/", auth);

const customer = require('./routes/customer');
app.use("/", customer);

const train = require('./routes/train');
app.use("/train", train);

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3001, () => {
    console.log("Server running successfully 3001")
})