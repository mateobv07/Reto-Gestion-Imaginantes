import { db } from '../index.js'

export const getAllRequests = async (req, res) => {
    db('Request')
    .where('status', 0)
    .orderBy('id', 'asc')
    .then(requests => {
        if (requests?.length) {
            return res.status(200).json(requests);
        }
        res.status(200).json('No requests');
    })
    .catch(err => res.status(400).json('Unable to get requests', err));
}

export const getMyRequests = async (req, res) => {
    const { studentID } = req.params;
    db.select('*').from('Assignment')
    .where('studentID', studentID)
    .join('Request', 'Request.assignmentID', '=', 'Assignment.id')
    .then(requests => {
        if (requests?.length) {
            return res.status(200).json(requests);
        }
        res.status(200).json('No requests');
    })
    .catch(err => res.status(400).json('Unable to get requests', err));    
}

export const createRequest = async (req, res) => {
    res.status(201);
}

export const updateRequest = async (req, res) => {
    res.status(200);
}

export const deleteRequest = async (req, res) => {
    res.status(200);
}