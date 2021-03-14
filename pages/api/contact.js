const Cors = require('cors');
const { errorHandler } = require('../../api/utilities');
const sendEmail = require('../../api/sendEmail');

const cors = Cors({
    methods: ['POST', 'HEAD']
});

function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result) => {
            if (result instanceof Error) return reject(result);
            return resolve(result);
        })
    });
}

export default async function handler (req, res) {
    switch (req.method) {
        case 'POST':
            try {
                await runMiddleware(req, res, cors);
                const response = await sendEmail(req.body);
                res.setHeader('Content-type', 'application/json');
                res.statusCode = 200;
                res.end(JSON.stringify(response));
            } catch (error) {
                const response = errorHandler('Email not sent', error);
                res.setHeader('Content-type', 'application/json');
                res.statusCode = 500;
                res.end(JSON.stringify(response));
            }
        default:
            errorHandler('Bad request to contact form');
            res.statusCode = 400;
            res.end();
    }
}
