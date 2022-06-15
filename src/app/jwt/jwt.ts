// import { Request, Response } from "express";
// import * as express from 'express';

// const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');

// import * as jwt from 'jsonwebtoken';
// import * as fs from "fs";

// const app: Applicaton = express();

// app.use(bodyParser.json());

// app.route('/api/login')
//     .post(loginRoute);

// const RSA_PRIVATE_KEY = fs.readFileSync('./demo/private.key');


// export function loginRoute(req: Request, res: Response) {

//     const email = req.body.username,
//         password = req.body.password;

//     if (validateUsernameAndPassword()) {
//         const userId = findUserIdForUsername(username);

//         const jsonBrokerToken = jwt.sign({}, RSA_PRIVATE_KEY, {
//             algorithm: 'RS256',
//             expiresIn: 120,
//             subject: userId
//         })
//     } else {
//         res.sendStatus(401);
//     }


// }