const express = require("express");
const {
  getSortables,
  getSortableBySearch,
  getMapBySearch,
} = require("../controllers/sortableControl");

const router = express.Router();

router.get("/", getSortables);
router.get("/filter", getSortableBySearch);
router.get("/map", getMapBySearch);

module.exports = router;
