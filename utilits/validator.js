import {body} from 'express-validator';

const regValidator = [
    body('email', 'Incorrect email format').isEmail(),
    body('password', 'Password must be more 6 chracters').isLength({min: 5}),
];

export default regValidator;