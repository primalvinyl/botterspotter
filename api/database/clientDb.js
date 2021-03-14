const MongoClient = require('mongodb').MongoClient;
const { errorHandler } = require('../utilities');

let client = null;

// create connection pool to database
const connect = (callback = () => {}) => {
    if (client === null) {
        // create a client
        client = new MongoClient(process.env.mongo_connection_string, {
            useUnifiedTopology: true
        });
        // establish a connection pool
        client.connect(error => {
            if (error) {
                // error occurred during connection
                client = null;
                errorHandler('Failed to connect to database', error);
                callback(error);
            } else {
                // connected
                callback();
            }
        });
    } else {
        // if connection was established earlier, invoke callback()
        callback();
    }
};

// get database and collection using pre-established connection pool
const collection = collectionName => client.db(process.env.mongo_database).collection(collectionName);

// close connection pool
const close = () => {
    if (client) {
        client.close();
        client = null;
    }
};

module.exports = { connect, collection, close };
