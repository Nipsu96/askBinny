const sortable = require("../models/sortableModel");

const getSortables = async (req, res) => {
  try {
    const response = await sortable.findAll();

    if (response) {
      res.send(response);
    }
  } catch (e) {
    res.sendStatus(500);
  }
};

const getSortableBySearch = async (req, res) => {
  const searchColumn = Object.keys(req.query)[0];
  try {
    let search = " ";
    if (searchColumn === "sortable.name" || searchColumn === "sortable.image") {
      search = {
        column: searchColumn,
        value: req.query[searchColumn].toString(),
      };
    } else {
      search = {
        column: searchColumn,
        value: req.query[searchColumn].toString(),
      };
    }
    const response = await sortable.findBySearch(search);
    if (response) {
      res.send(response);
    }
  } catch (e) {
    res.sendStatus(500);
  }
};

module.exports = {
  getSortables,
  getSortableBySearch,
};
