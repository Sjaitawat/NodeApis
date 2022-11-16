const pool = require("../../config/database");

module.exports = {
  addOrders: (data, callBack) => {
    pool.query(
      "INSERT INTO `orders`(user_id, sub_total, phone_number) VALUES(?,?,?)",
      [data.user_id, data.sub_total, data.phone_number],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getOrdersById: (id, callBack) => {
    pool.query(
      "SELECT * FROM `orders` WHERE id = ?",
      [id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  }
};