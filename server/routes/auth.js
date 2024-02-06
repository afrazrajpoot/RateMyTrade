const express = require('express');
const router = express.Router();
const { authenticateJWT } = require('../middleware/authMiddleware');
const multer = require('multer');
const path = require('path');
const {signUp, login, getUserDetails, allUsers} = require('../controllers/auth');
const storage = multer.diskStorage({
    // destination: ('./public/uploads/'),
    filename: (req, file, cb) => {
      cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
    },
  });
  
  const upload = multer({
    storage: storage,
    limits: {
      fieldSize: 10 * 1024 * 1024, // Increase field size limit to 10MB (adjust as needed)
    }
  });
  
  const uploadFiles = upload.single('image');


router.route('/signup').post(uploadFiles,signUp);
router.route('/login').post(login);
router.route('/getDetails').get(getUserDetails);
router.route('/getAllUsers').get(authenticateJWT, allUsers);

module.exports = router