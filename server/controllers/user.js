import { db } from '../index.js'

export const login = async (req, res) => {
    res.status(200);
}

export const getUser = async (req, res) => {
    const { studentID } = req.params;
    console.log(studentID)
    db('User')
    .where('studentID',studentID)
    .then(user => {
        console.log(user);
        res.status(200).json(user);
    });
    //res.status(200);
}

export const createUser = async (req, res) => {
    res.status(201);
}

export const updateUser = async (req, res) => {
    res.status(200);
}

export const deleteUser = async (req, res) => {
    res.status(200);
}