const connection = require("../db/connection");

const sortable = {
  findAll: () =>
    new Promise((resolve, reject) => {
      connection.query(
        "SELECT sortable.name, image FROM sortable;",
        (err, result) => {
          if (err) {
            reject(err);
          }
          resolve(result);
        }
      );
    }),

  findBySearch: (search) =>
    new Promise((resolve, reject) => {
      const selectQuery =
        "SELECT sortable.name, image, sortable.type, bin_color FROM sortable INNER JOIN bins ON sortable.type = bins.type WHERE ?? = ? GROUP BY bin_color;";
      connection.query(
        selectQuery,
        [search.column, search.value],
        (err, result) => {
          if (err) {
            console.error("Error executing SQL query:", err);
            reject(err);
          } else {
            console.log("Query result:", result);
            resolve(result);
          }
        }
      );
    }),
};

module.exports = sortable;
