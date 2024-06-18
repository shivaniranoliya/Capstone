const express = require('express');
const { userProfile, updateProfile,changePassword } = require('../controllers/userController');
const router = express.Router();

router.post('/getuser', userProfile);
router.put('/profile', updateProfile);
router.put('/change-password', changePassword);


module.exports = router;
