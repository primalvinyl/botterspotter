const client = require('./clientDb');
const { errorHandler } = require('../utilities');

module.exports = async (collectionName = '', query = {}) => {
    try {
        // be sure a connection pool was started
        client.connect();

        // query the database
        const collection = client.collection(collectionName);
        const response = await collection.find(query);
        
        // process response
        // mongo methods are asynchronous
        const documentCount = await response.count();
        const documentArray = await response.toArray();

        // return result
        return {
            count: documentCount,
            documents: documentArray
        };
    } catch (error) {
        // if read fails, return error object
        return errorHandler('Failed reading database', error);
    }
};
