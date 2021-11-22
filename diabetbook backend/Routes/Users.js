const express = require('express');
const controllerUsers = require('../controllers/adminController');
const router = express.Router();

router.post("/login", controllerUsers.Login);
router.post("/registro", controllerUsers.SignUp);


module.exports = router;