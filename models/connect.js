const MongoClient = require('mongodb').MongoClient;
const dotenv = require('dotenv');
dotenv.config();

let db;

const initializeDB = (callback) => {
    if(db) {
        console.log('Database is initialized!');
        return callback(null, db);
    }
    MongoClient.connect(process.env.Mongodb_URI)
    //promise
    .then((client) => {
        console.log('Connected to database');
        //const db = client.db('ContactsDB');
        db = client;
        //const contactsCollection = db.collection('contactUsers');

        callback(null, db);

        //CRUD Requests HERE
    })
    .catch(error => console.error(error))
};

const getDB = () => {
    if (!db) {
        throw Error('Database not initialized');
    }
    return db;
};

// export the two functions
module.exports = {initializeDB, getDB};