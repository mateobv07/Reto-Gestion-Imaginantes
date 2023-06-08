import { db } from '../index.js'

export const getOtherRequests = async (req, res) => {
    const { studentID } = req.params;
    db.select('Request.id', 'Task.name', 'dueDate', 'team')
    .from('Request')
    .where('Request.status', 0)
    .join('Assignment', 'Request.assignmentID', '=', 'Assignment.id')
    .whereNot('Assignment.studentID', studentID)
    .join('User', 'User.studentID', '=', 'Assignment.studentID')
    .join('Task', 'Task.id', '=', 'Assignment.taskID')
    .orderBy('Assignment.dueDate', 'asc')
    .then(requests => {
        if (requests?.length) {
            return res.status(200).json(requests);
        }
        res.status(200).json({"message": "No requests"});
    })
    .catch(err => res.status(400).json({"message": "Unable get requests"}));
}

export const getMyRequests = async (req, res) => {
    const { studentID } = req.params;

    db.select('Request.id', 'Task.name', 'dueDate', 'Request.status')
    .from('Assignment')
    .where('Assignment.studentID', studentID)
    .join('Request', 'Request.assignmentID', '=', 'Assignment.id')
    .join('Task', 'Task.id', '=', 'Assignment.taskID')
    .then(requests => {
        if (requests?.length) {
            return res.status(200).json(requests);
        }
        res.status(200).json({"message": "No requests"});
    })
    .catch(err => res.status(400).json({"message": "Unable get requests"}));
}

export const createRequest = async (req, res) => {
    const { assignmentID, initalAvailableDate, endAvailableDate} = req.body;

    if(!assignmentID || !initalAvailableDate || !endAvailableDate) return res.status(400).json({"message": "Invalid body"});

    db('Request')
        .insert(
        {assignmentID, initalAvailableDate, endAvailableDate},
        ).then(request => {
            res.status(201).json({"message":"created successfully", "id" : request[0]});
        }).catch(err => {
            res.status(400).json({ "message": 'Unable to insert request ', "error":err.sqlMessage });
        });
}

export const updateRequest = async (req, res) => {
    const { id } = req.params;
    const { status, initalAvailableDate, endAvailableDate, assignmentResponseID } = req.body;

    if(status == undefined || !initalAvailableDate || !endAvailableDate) return res.status(400).json({"message": "Invalid body"});

    db('Request')
        .where('id', id)
        .update({ status, initalAvailableDate, endAvailableDate, assignmentResponseID })
        .then(request => {
            if (request) {
                return res.status(200).json({"message": "Updated successfully"});
            }
            res.status(400).json({"message": "Request ID does not exist"});
        }).catch(err => {
            res.status(400).json({"message": "Unable to update request", "error":err.sqlMessage});
        });
}

export const deleteRequest = async (req, res) => {
    const { id } = req.params;

    db('Request')
        .where('id', id)
        .del()
        .then(request => {
            if (request) {
                return res.status(204).json("Deleted successfully");
            }
            res.status(400).json("Request ID does not exist");
        }).catch(err => {
            res.status(400).json({"message": "Unable to delete request"});
        });
}