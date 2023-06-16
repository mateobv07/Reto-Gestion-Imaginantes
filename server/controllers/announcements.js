import { db } from '../app.js'

export const getAnnouncements = async (req, res) => {
    db('Announcement')
        .orderBy('createdAt', 'desc')
        .then(announcement => {
            if (announcement?.length) {
                return res.status(200).json(announcement);
            }
            res.status(200).json({"message": "No data"});
        })
        .catch(err => res.status(500).json({"message": "Unable to get announcements"}));
}