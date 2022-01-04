const express = require('express')
const app = express()
const cors = require('cors')
const mongo = require('mongodb');
const { ToadScheduler, SimpleIntervalJob, Task } = require('toad-scheduler')
const MongoClient = mongo.MongoClient;
const ObjectID = mongo.ObjectID;
const axios = require('axios')
const dataURL='mongodb://localhost:27017';
const url = 
'https://newsapi.org/v2/top-headlines?' +
'category=technology&' +
'country=hu&'+
'apiKey=d59a33138bcf48838d1da340f68df050';

app.use(cors())
app.use(express.json())
const scheduler = new ToadScheduler()

const task = new Task('get news', async () => {
   let news = await axios.get(url)

   MongoClient.connect(dataURL, { useNewUrlParser: true }, async (err, client) => {

    if (err) throw err;

    const db = client.db("news");

    let collection = db.collection('technews');

    let currentNews = [];

    for (const article of news.data.articles) {
        let query = { url: article.url}
        const item = await collection.findOne(query)
        if (item == null){
            currentNews.push(article)
        }
       
    }
    if (currentNews.length >0 ){
        collection.insertMany(currentNews).then(result => {

            console.log("documents inserted into the collection");
        }).catch((err) => {
    
            console.log(err);
        }).finally(() => {
    
            client.close();
        });
    }else{
        console.log("I didn't find any new news")
        client.close();
    }

});
})
const job = new SimpleIntervalJob({ minutes: 59, }, task)

scheduler.addSimpleIntervalJob(job)

app.get("/api/news", (req,res)=>{
    MongoClient.connect(dataURL, { useNewUrlParser: true }, (err, client) => {

        if (err) throw err;
    
        const db = client.db("news");
    
        db.collection('technews').find({}).toArray().then((docs) => {
            const sendNews = []
            for (const news of docs) {
                if (sendNews.length < 20){
                    sendNews.push(news)
                }
            }
            res.send(sendNews)
        }).catch((err) => {
    
            console.log(err);
        }).finally(() => {
    
            client.close();
        });
    });
})

app.get("/api/oldnews", (req,res)=>{
    MongoClient.connect(dataURL, { useNewUrlParser: true }, (err, client) => {

        if (err) throw err;
    
        const db = client.db("news");
    
        db.collection('technews').find({}).toArray().then((docs) => {
         
        }).catch((err) => {
    
            console.log(err);
        }).finally(() => {
    
            client.close();
        });
    });
})

const test = async ()=>{
    MongoClient.connect(dataURL, { useNewUrlParser: true }, (err, client) => {

        if (err) throw err;
    
        const db = client.db("news");
    
         db.collection('technews').find({}).toArray().then((docs) => {
         console.log(docs)
        }).catch((err) => {
    
            console.log(err);
        }).finally(() => {
    
            client.close();
        });
    });
}

test()

app.listen(8080)