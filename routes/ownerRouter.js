const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
    res.send('Hey This Owner Router');
})

module.exports = router;