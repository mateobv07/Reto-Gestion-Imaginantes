import { db } from '../index.js'

export const login = async (req, res) => {
    res.status(200);
}

export const getUser = async (req, res) => {
    const { studentID } = req.params;
    console.log(studentID)
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
