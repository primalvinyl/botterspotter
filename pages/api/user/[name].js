const Cors = require('cors');
const { errorHandler } = require('../../../api/utilities');
const twitterTest = require('../../../api/twitterTest');

const cors = Cors({
    methods: ['GET', 'HEAD']
});

function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result) => {
            if (result instanceof Error) return reject(result);
            return resolve(result);
        })
    });
}

export default async function handler(req, res) {
    switch (req.method) {
        case 'GET':
            try {
                await runMiddleware(req, res, cors);
                const response = await twitterTest(req.query.name);
                res.setHeader('Content-type', 'application/json');
                res.statusCode = 200;
                res.end(JSON.stringify(response));
            } catch (error) {
                const response = errorHandler('Username not found', error);
                res.setHeader('Content-type', 'application/json');
                res.statusCode = 404;
                res.end(JSON.stringify(response));
            }
        default:
            errorHandler('Bad request to twitter user api');
            res.statusCode = 400;
            res.end();
    }
}
