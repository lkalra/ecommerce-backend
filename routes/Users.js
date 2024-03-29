const express = require('express');
const { fetchUserById, updateUser, fetchAllUsers } = require('../controller/User');

const router = express.Router();
//  /users is already added in base path
router.get('/:id', fetchUserById)
      .get('/', fetchAllUsers)
      .patch('/:id', updateUser)

exports.router = router;
