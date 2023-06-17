import { db } from '../index.js'

export const getAssignments = async (req, res) => {
    const { studentID } = req.user;
    const { initialDate, endDate } = req.query;
    const status  = req.query.status? req.query.status : 0;

    db.select('Assignment.id','Task.name', 'Assignment.dueDate', 'Assignment.status','Task.description')
    .from('Assignment')
        .where('studentID', studentID)
        .andWhere('status', status)
        .join('Task', 'Task.id', '=', 'Assignment.taskID')
        .modify(function(queryBuilder) {
            if (initialDate) queryBuilder.where('Assignment.dueDate','>=', initialDate);
            if(endDate) queryBuilder.where('Assignment.dueDate', '<=', endDate);
        })
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
    const { studentID } = req.user;

    db.select('Task.name', 'Assignment.dueDate', 'Task.description')
        .from('Assignment')
        .where('studentID',studentID)
        .andWhere('status', 0)
        .join('Task', 'Task.id', '=', 'Assignment.taskID')
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

export const getOneAssignment = async (req, res) => {
    const { id } = req.params;

    db.select('Assignment.id', 'Task.name', 'Task.description', 'Assignment.dueDate', 'Assignment.status',
    'Comment.id as commentID', 'Comment.content', 'Comment.createdAt', 'Comment.createdByAdmin')
    .from('Assignment')
        .where('Assignment.id', id)
        .join('Task', 'Task.id', '=', 'Assignment.taskID')
        .leftJoin('Comment', 'Comment.assignmentID','=','Assignment.id')
        .then(assignment => {
            if (assignment?.length > 0) {
                const output = assignment.reduce((result, row) => {
                    result[row.id] = result[row.id] || {
                        id:row.id, name:row.name, description:row.description, dueDate:row.dueDate, status:row.status,
                        comments: []
                      };
                      if(row.commentID !== null){
                          result[row.id].comments.push({id:row.commentID, content:row.content, createdAt:row.createdAt, createdByAdmin:row.createdByAdmin});
                      }
                      return result
                }, {})
                return res.status(200).json(Object.values(output)[0]);
            }
            res.status(400).json({"message": "Invalid id"});
        })
        .catch(err => res.status(400).json({"message": "Unable to get assignment", err}));
}