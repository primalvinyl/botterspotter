const client = require('./clientDb');
const { errorHandler } = require('../utilities');

module.exports = async (collectionName = '', userObject = { screen_name: '' }) => {
    // convert screen_name to lowercase
    const newScreenName = userObject.screen_name.toLowerCase();
    const newUserObject = { ...userObject, ...{ screen_name: newScreenName } };

    try {
        // be sure a connection pool was started
        client.connect();

        // make write request
        const collection = client.collection(collectionName);
        const { modifiedCount, upsertedId, upsertedCount, matchedCount } = await collection.updateOne(
            { screen_name: newScreenName },
            { $set: newUserObject },
            { upsert: true }
        );

        // return write success response
        return { modifiedCount, upsertedId, upsertedCount, matchedCount };

    } catch (error) {
        // if write fails, return error object
        return errorHandler('Failed writing to database', error);
    }
};
