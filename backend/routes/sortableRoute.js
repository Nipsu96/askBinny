const express = require("express");
const {
  getSortables,
  getSortableBySearch,
} = require("../controllers/sortableControl");

const router = express.Router();

router.get("/", getSortables);
router.get("/filter", getSortableBySearch);

module.exports = router;
