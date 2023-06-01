import { db } from '../index.js'

export const getAllAssignmentComments = async (req, res) => {
    const { assignmentID } = req.params;

    db('Comment')
        .where('assignmentID', assignmentID)
        .orderBy('createdAt', 'asc')
        .then(comments => {
            if (comments?.length) {
                return res.status(200).json(comments);
            }
            res.status(200).json('No comments');
        })
        .catch(err => res.status(400).json('Unable to get comments', err));
}

export const createComment= async (req, res) => {
    res.status(201);
}

export const deleteComment = async (req, res) => {
    res.status(200);
}