const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owners_model");

if (process.env.NODE_ENV === "development") {
  router.post("/create", async function (req, res) {
    let owners = await ownerModel.find();
    if (owners.length > 0) {
      return res
        .send(500)
        .send("You Do not have permission to create new owner");
    }

    let {fullname, email, password} = req.body;

    let createdOwner = await ownerModel.create({
      fullname,
      email,
      password
    });
    res.status(201).send(createdOwner);
  });
}

router.get("/", function (req, res) {
  res.send("Hey This Owner Router");
});

module.exports = router;
