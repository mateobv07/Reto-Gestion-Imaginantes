import { db } from '../index.js'

export const getAssignments = async (req, res) => {
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
            res.status(200).json({"message": "No data"});
        })
        .catch(err => res.status(400).json({"message": "Unable to update assignment"}));
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
            res.status(200).json({"message": "No upcoming assignments"});
        })
        .catch(err => res.status(400).json({"message": "Unable to update assignment"}));
}

export const updateAssignment = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    if(status == undefined) return res.status(400).json({"message": "Invalid body"});

    db('Assignment')
        .where('id', id)
        .update({ status })
        .then(request => {
            if (request) {
                return res.status(200).json({"message": "Updated successfully"});
            }
            res.status(400).json({"message": "Assignment ID does not exist"});
        }).catch(err => {
            res.status(400).json({"message": "Unable to update assignment", "error":err.sqlMessage});
        });
}