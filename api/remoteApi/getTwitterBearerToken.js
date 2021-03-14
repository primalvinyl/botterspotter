const fetch = require('node-fetch').default;
const urljoin = require('url-join');
const { errorHandler } = require('../utilities');

module.exports = () => {
    const endpoint = urljoin(
        process.env.twitter_api_endpoint, 
        'oauth2/token?grant_type=client_credentials'
    );
    const encodedString = Buffer.from(
        `${process.env.twitter_key}:${process.env.twitter_secret}`
    ).toString('base64');
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            'Authorization': `Basic ${encodedString}`
        }
    };
    
    return fetch(endpoint, requestOptions)
        .then(response => response.json())
        // return new bearer token string
        .then(response => response.access_token)
        .catch(error => errorHandler('Failed to get Bearer Token', error));
};
