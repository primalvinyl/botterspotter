export const twitterSearchRequest = data => {
    const endpoint = process.env.NEXT_PUBLIC_API_ENDPOINT;
    const { username } = data;
    return fetch(`${endpoint}/user/${username}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => response.json());
};

export const contactRequest = data => {
    const endpoint = process.env.NEXT_PUBLIC_API_ENDPOINT;
    return fetch(`${endpoint}/contact`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(response => response.json());
};
