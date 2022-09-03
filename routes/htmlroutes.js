const express = require("express");
const router = express.Router();
const path = require("path");

// ----------------------------------------------------
// get request for when the notes page is requested
router.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// get request for when no matching route is found
router.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;
