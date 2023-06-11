import { db } from '../index.js';
import jwt from 'jsonwebtoken';
import requestIp from 'request-ip';

export const login = async (req, res) => {
    const { studentID, password } = req.body;

    if(!studentID || !password) return res.status(400).json({'message':'Invalid body'});

    db('User')
    .where('studentID',studentID)
    .first()
    .then(user => {
        if (user) {
            if(user.studentID !== studentID || user.password !== password){
                return res.status(401).json({'message':'Invalid credentials'});
            }
            delete user.password;
            user['ip'] = requestIp.getClientIp(req);
            const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '2h'});

            return res.status(200).json({user:user,accessToken:accessToken});
        }
        return res.status(401).json({'message':'Invalid student id'});
    })
    .catch(err => res.status(400).json({'message':'Unable to get user'}));

    res.status(200);
}

export const getUser = async (req, res) => {
    const { studentID } = req.params;
    if(studentID !== req.user.studentID) return res.status(401).json({"message":"Invalid User"})

    db('User')
    .where('studentID',studentID)
    .first()
    .then(user => {
        if (user) {
            return res.status(200).json(user);
        }
        res.status(200).json('Invalid student id');
    })
    .catch(err => res.status(400).json('Unable to get user', err));
}

export const createUser = async (req, res) => {
    res.status(201);
}
