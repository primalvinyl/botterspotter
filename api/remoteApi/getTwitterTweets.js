const fetch = require('node-fetch').default;
const urljoin = require('url-join');
const { errorHandler, hasMissingValue } = require('../utilities');

module.exports = async screenName => {
    // abandon if missing parameter
    if (hasMissingValue(screenName)) return errorHandler('Missing screen name');

    const bearer = process.env.twitter_bearer;
    const getUserEndpoint = `statuses/user_timeline.json?count=30&exclude_replies&screen_name=${screenName}`;
    const requestOptions = {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${bearer}` }
    };
    const endpoint = urljoin(
        process.env.twitter_api_endpoint,
        process.env.twitter_api_version,
        getUserEndpoint
    );
    
    return fetch(endpoint, requestOptions)
        .then(response => response.json())
        .then(response => {
            // return subset of response in flat array
            const transformedResponse = response.map(el => {
                const tweet = el.text;
                const isRetweet = tweet.substring(0, 4) === 'RT @';
                const text = isRetweet &&
                    tweet.substring(tweet.indexOf(':') + 2) ||
                    tweet;
                const screenName = isRetweet &&
                el.entities.user_mentions[0].screen_name.toLowerCase() ||
                '';
                return {
                    text: text,
                    is_retweet: isRetweet,
                    screen_name: screenName
                };
            });
            return transformedResponse;
        })
        .catch(error => {
            errorHandler('Failed getting tweets from twitter API', error);
            return [];
        });
};
