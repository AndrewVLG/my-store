import User from "../models/User.js";
import Product from "../models/Product.js";
import { validationResult } from "express-validator";
import bcrypt, { hash } from 'bcrypt';
import jwt from 'jsonwebtoken';
const utilits = () => {

    const getAll = async (req, res) => {
        try {
            const products = await Product.find();
            res.json(products);
        } catch(e) {
            res.status(500).json({message: 'Server error'})
        }
    };

    const getProductsbyCategory = async (req, res) => {
        try {
            const products = await Product.find({category: req.params.category});
            res.json(products);
        } catch(e) {
            res.status(500).json({message: 'Server error'})
        }
    };

    const regUser = async (req, res) => {
        try {
            const error = validationResult(req);
            if(!error.isEmpty()) {
            
                const arrMessage = error.array().map(item => item.msg);
                const message = arrMessage.join();
                res.status(400).json({msg: message});
                return;
            }
            const password = req.body.password;
            const salt = await bcrypt.genSalt();
            const hashPassword = await bcrypt.hash(password, salt);
            const doc = new User({
                email: req.body.email,
                password: hashPassword,
                nickName: req.body.nickName,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
            })
            const user = await doc.save();
            console.log(user);
            const token = jwt.sign(
                {
                    _id: user._id
                },
                'qwerty',
                {
                    expiresIn: '1d'
                }
            );
            res.json(token);
        } catch(e) {
            res.status(500).json({msg: 'A user with this nickname already exists'})
            console.log(e)
        }
    };

    const chekAuth = (req, res, next) => {
        try {
            const token = req.headers.authorization;
            if(token !== 'null') {
                const decoded = jwt.verify(token, 'qwerty');
                req.userId = decoded._id;
            } else {
                throw new Error('Unable to execute. You may not be logged in...');
            }
            next();
        } catch(e) {
            res.json({msg: e.message});
        }
    };

    const authMe = async (req, res) => {
        try {
            const user = await User.findById({_id: req.userId});
            if(!user) {
                res.status(400).json({msg: 'The user is not logged in'});
                return;
            }
            const {password, ...userData} = user._doc;
            res.json(userData);
        } catch(e) {
            res.status(500).json({msg: 'error'})
        }
    };

    const authorization = async (req, res) => {
        try {
            console.log(req);
            const user = await User.findOne({email: req.body.email});
            if(!user) {
                res.status(400).json({msg: 'Invalid email or password'});
                return;
            }
            const isValid = await bcrypt.compare(req.body.password, user._doc.password);
            if(!isValid) {
                res.status(400).json({msg: 'Invalid email or password'});
                return;
            }
            const token = jwt.sign(
                {
                    _id:user._id,
                },
                'qwerty',
                {
                    expiresIn: '1d',
                }
            );
            const {password, ...userData} = user._doc;
            res.json({token, ...userData});
        } catch(e) {
            res.status(500).json({msg: 'Failed to authorization'})
        }

    }




    return {getAll, getProductsbyCategory, regUser, chekAuth, authMe, authorization};
}

export default utilits;