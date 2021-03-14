// Handles API errors
exports.errorHandler = (message = '', error = {}) => {
    if (process.env.node_env === 'developement') console.error('botterspotter error', message);
    return {
        error_message: message,
        error: true
    };
};



/**
 * Tests if all properties in an object have a valid value
 * Shallow test, does not test for empty sub properties
 * @param {object} obj The object to test
 * @returns {boolean} pass or fail
 */
exports.hasMissingValues = obj => {
    for(let prop in obj){
        if (
            obj[prop] === undefined ||
            obj[prop] === null ||
            obj[prop] === ''
        ) return true;
    };
    return false;
};



/**
 * Tests if a variable has a valid value
 * @param {string} string The variable to test
 * @returns {boolean} pass or fail
 */
exports.hasMissingValue = prop => (prop === undefined || prop === null || prop === '');
