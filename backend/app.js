const express = require('express')
const app = express()
const cors = require('cors')
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const ObjectID = mongo.ObjectID;
const axios = require('axios')
const dataURL='mongodb://localhost:27017';

app.use(cors())



// api:d59a33138bcf48838d1da340f68df050
// const url = 'https://newsapi.org/v2/top-headlines?' +
//             'category=technology&' +
//             'apiKey=d59a33138bcf48838d1da340f68df050';

app.listen(8080)