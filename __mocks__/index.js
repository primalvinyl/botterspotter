// global mock of fetch
global.fetch = jest.fn();


/**
 * Returns mock fetch response
 * @param {object} Object the data to return
 * @returns {promise} A promise that resolves to a json fetch object
 */
 exports.fetchResponse = obj => {
    return { json: () => Promise.resolve(obj) };
}


// mock twitter redux object
export const mockTwitterReduxObject = {
    "name": "Ms. Smith",
    "screen_name": "smith",
    "profile_image_url_https": "https://pbs.twimg.com/profile_images/1266819461698301952/X_cTKqoO_normal.png",
    "score": 0,
    "score_conclusion": "This account is not a bot.",
    "score_reasons": [
        "A score this low is indicative of a user-operated or organization-operated account.",
        "The account does not behave like a typical bot. However, this does not guarantee that the account is not a bot. It could be a new account, or one that is implemented with less frequency than other bot accounts."
    ],
    "error": false,
    "error_message": "",
    "request_status": "resolved"
}


// mock contact api object
export const mockContactApiObject = {
    "error": false,
    "error_message": ""
};


// mock twitter api object
export const mockTwitterApiObject = {
    "name": "Ms. Smith",
    "screen_name": "smith",
    "profile_image_url_https": "https://pbs.twimg.com/profile_images/1266819461698301952/X_cTKqoO_normal.png",
    "score": 0,
    "score_conclusion": "This account is not a bot.",
    "score_reasons": [
        "A score this low is indicative of a user-operated or organization-operated account.",
        "The account does not behave like a typical bot. However, this does not guarantee that the account is not a bot. It could be a new account, or one that is implemented with less frequency than other bot accounts."
    ],
    "error": false,
    "error_message": ""
}
