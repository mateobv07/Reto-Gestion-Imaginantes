import { db } from '../index.js'

export const getAssignments = async (req, res) => {
    res.status(200);
    const { studentID } = req.params;
    const status  = req.query.status? req.query.status : 0;

    db('Assignment')
        .where('studentID', studentID)
        .andWhere('status', status)
        .orderBy('dueDate', 'asc')
        .then(assignment => {
            if (assignment?.length) {
                return res.status(200).json(assignment);
            }
            res.status(200).json('No data');
        })
        .catch(err => res.status(400).json('Unable to get assignments', err));
}

export const getUpcomingAssignment = async (req, res) => {
    const { studentID } = req.params;

    db('Assignment')
        .where('studentID',studentID)
        .andWhere('status', 0)
        .orderBy('dueDate', 'asc')
        .first()
        .then(assignment => {
            if (assignment) {
                return res.status(200).json(assignment);
            }
            res.status(200).json('No upcoming assignments');
        })
        .catch(err => res.status(400).json('Unable to get upcoming task', err));
}

export const updateAssignment = async (req, res) => {
    res.status(200);
}