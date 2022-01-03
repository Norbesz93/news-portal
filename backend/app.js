const express = require('express')
const app = express()
const cors = require('cors')
const mongo = require('mongodb');
const { ToadScheduler, SimpleIntervalJob, Task } = require('toad-scheduler')
const MongoClient = mongo.MongoClient;
const ObjectID = mongo.ObjectID;
const axios = require('axios')
const dataURL='mongodb://localhost:27017';

 const url = 'https://newsapi.org/v2/top-headlines?' +
             'category=technology&' +
             'apiKey=d59a33138bcf48838d1da340f68df050';

app.use(cors())

app.get(url)


app.listen(8080)