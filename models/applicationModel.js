const db = require("../config/db");

const Application = {
    submitApplication: (data, callback) => {
        const query = `
            INSERT INTO applications 
            (student_name, contact_number, address, parent_name, pu_college, board_studied, course_attended, course_applying) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `;
        db.query(query, 
            [data.studentName, data.contactNumber, data.address, data.parentName, data.puCollege, data.boardStudied, data.courseAttended, data.courseApplying], 
            callback
        );
    }
};

module.exports = Application;
