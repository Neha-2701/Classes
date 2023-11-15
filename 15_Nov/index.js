const {MongoClient}= require("mongodb")
const url='mongodb://localhost:27017'
const client=new MongoClient(url)

const dbname="ruddo"
const collectionname='Shivam'

async function getData(){
    let result=await client.connect();
    let db = result.db(dbname)
    let connection= db.collection(collectionname)
    let response = await  connection.find({}).toArray();
    console.log(response)
}

getData()