const fetch = require('node-fetch').default;
const { errorHandler, hasMissingValue } = require('../utilities');

module.exports = async token => {
    // request by server or development environment is always ok
    if (token === process.env.server_token || process.env.node_env === 'development') return true;

    // abandon if missing parameter
    if (hasMissingValue(token)) {
        errorHandler('Missing token');
        return false;
    }

    // make request to Google API
    const endpoint = process.env.captcha_endpoint;
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `secret=${process.env.captcha_secret}&response=${token}`
    };
    return fetch(endpoint, requestOptions)
        .then(response => response.json())
        // return boolean
        .then(response => (response.success && response.score >= parseFloat(process.env.captcha_score)))
        .catch(error => {
            errorHandler('Error getting captcha results', error);
            return false;
        });
};
