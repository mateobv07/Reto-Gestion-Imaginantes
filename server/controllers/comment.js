import { db } from '../app.js'

export const getAllAssignmentComments = async (req, res) => {
    const { assignmentID } = req.params;

    db('Comment')
        .where('assignmentID', assignmentID)
        .orderBy('createdAt', 'asc')
        .then(comments => {
            if (comments?.length) {
                return res.status(200).json(comments);
            }
            res.status(200).json({ "message": 'No comments'});
        })
        .catch(err => res.status(400).json({ "message": 'Unable to insert comment '}));
}

export const createComment= async (req, res) => {
    const { assignmentID, content } = req.body;
    const createdByAdmin = req.body.createdByAdmin !== undefined? req.body.createdByAdmin : 1;

    if(!assignmentID || !content) return res.status(400).json("invalid body");

    db('Comment')
        .insert(
        {assignmentID, content, createdByAdmin},
        ).then(comment => {
            res.status(201).json(comment);
        }).catch(err => {
            res.status(400).json({ "message": 'Unable to insert comment ', "error":err.sqlMessage });
        });
}

export const deleteComment = async (req, res) => {
    const { id } = req.params;

    db('Comment')
        .where('id', id)
        .del()
        .then(comment => {
            if (comment) {
                return res.status(204).json("Deleted successfully");
            }
            res.status(400).json("Comment ID does not exist");
        }).catch(err => {
            res.status(400).json('Unable to delete comment', err);
        });
}