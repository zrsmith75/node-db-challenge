const express = require("express");
const Projects = require("./projects-mdoel");
const router = express.Router();

router.get("/", (req, res) => {
  db("projects")
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(error => {
      res.status(500).json({
        message: error
      });
    });
});

module.exports = router;
