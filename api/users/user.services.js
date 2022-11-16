const pool = require("../../config/database");

module.exports = {
    addUser: (data, callBack) => {
        pool.query(
            'INSERT INTO `users`(name, phNo, psswd) VALUES(?,?,?)',
            [
                data.name,
                data.phNo,
                data.psswd
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error)
                }
                return callBack(null, results)
            }
        );
    },

    getUserByPhNo: (phNo, callBack) => {
        pool.query(
            'SELECT * FROM `users` WHERE phNo = ?',
            [phNo],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results[0])
            }
        )
    }}