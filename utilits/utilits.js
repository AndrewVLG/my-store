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
    }

    const getProductsbyCategory = async (req, res) => {
        try {
            const products = await Product.find({category: req.params.category});
            res.json(products);
        } catch(e) {
            res.status(500).json({message: 'Server error'})
        }
    }

    const regUser = async (req, res) => {
        try {
            const error = validationResult(req);
            if(!error.isEmpty()) {
                res.status(400).json(error.array());
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
                lastName: req.body.lastName || undefined,
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
            res.status(500).json([{msg: 'A user with this nickname already exists'}])
            console.log(e)
        }
    }

    const chekAuth = (req, res, next) => {
        try {
            const token = req.headers.authorization;
            if(token !== undefined) {
                const decoded = jwt.verify(token, 'qwerty');
                req.userId = decoded._id;
            } else {
                throw new Error('Unable to execute. You may not be logged in...');
            }
            next();
        } catch(e) {
            
            res.json({msg: 'Unable to execute. You may not be logged in...'});
        }
    }

    const authMe = async (req, res) => {
        try {
            const user = await User.findById({_id: req.userId});
            res.json(user._doc);
        } catch(e) {
            console.log('error')
        }
    }




    return {getAll, getProductsbyCategory, regUser, chekAuth, authMe};
}

export default utilits;