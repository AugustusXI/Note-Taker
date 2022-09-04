const fs = require("fs");
const router = require("express").Router();
const uniqid = require("uniqid");

// get the notes from the "db" i.e. json file
router.get("/notes", function (req, res) {
  console.log("ooooooooooh hey there");
  fs.readFile("./db/db.json", "utf-8", (err, data) => {
    if (err) throw err;
    const parsedData = JSON.parse(data);
    res.status(200).json(parsedData);
    console.log(parsedData);
  });
});
// post request for a new note
router.post("/notes", function (req, res) {
  let newNote = {
    id: uniqid(),
    title: req.body.title,
    body: req.body.body,
  };
  console.log(newNote);
  fs.readFile("./db/db.json", "utf-8", (err, data) => {
    if (err) throw err;
    let pushNote = JSON.parse(data);
    console.log(pushNote);
    pushNote.push(newNote);

    fs.writeFile("./db/db.json", JSON.stringify(pushNote), (err) => {
      if (err) throw err;
      res.send("Your note has been saved");
    });
  });
});

module.exports = router;
