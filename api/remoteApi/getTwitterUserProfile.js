const fetch = require('node-fetch').default;
const urljoin = require('url-join');
const { errorHandler, hasMissingValue } = require('../utilities');

module.exports = async screenName => {
    // abandon if missing parameter
    if (hasMissingValue(screenName)) return errorHandler('Missing screen name');

    const bearer = process.env.twitter_bearer;
    const userEndpoint = `users/show.json?screen_name=${screenName}`;
    const requestOptions = {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${bearer}` }
    };
    const endpoint = urljoin(
        process.env.twitter_api_endpoint,
        process.env.twitter_api_version,
        userEndpoint
    );
    
    return fetch(endpoint, requestOptions)
        .then(response => response.json())
        // return subset of response
        .then(response => {
            const props = (({
                screen_name,
                name,
                verified,
                created_at,
                location,
                description,
                statuses_count,
                favourites_count,
                profile_image_url_https,
                profile_banner_url,
                followers_count,
                friends_count
            }) => ({ 
                screen_name,
                name,
                verified,
                created_at,
                location,
                description,
                statuses_count,
                favourites_count,
                profile_image_url_https,
                profile_banner_url,
                followers_count,
                friends_count
             }))(response);
            return props;
        })
        .catch(error => errorHandler('Failed getting user data from twitter API', error));
};
