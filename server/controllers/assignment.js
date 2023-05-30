import { db } from '../index.js'

export const getAssignments = async (req, res) => {
    res.status(200);
}

export const getUpcomingAssignment = async (req, res) => {
    const { studentID } = req.params;
    db('Assignment')
        .where('studentID',studentID)
        .andWhere('taskStatus', 'En espera de confirmacion')
        .orderBy('dueDate', 'asc')
        .first()
        .then(assignment => {
            console.log(assignment);
            res.status(200).json(assignment);
        })
        .catch(err => res.status(400).json('Unable to get upcoming task'));
}

export const updateAssignment = async (req, res) => {
    res.status(200);
}