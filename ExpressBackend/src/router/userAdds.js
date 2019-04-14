const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const userController = require('./userController/userCrud')
// Models
const tarimUser = require('../models/tarimAppModels');

router.post('/SignIn/:Ad/:soyad/:email/:password/:passwordAgain', userController.userSignIn);
router.get('/userLogin/:email', userController.userLogin);
router.put('/shemaInsert/:id', userController.shemaInsert);
router.put('/shemaTarlaInsert/:id/:sezonId/:tarlaAd/:dekar', userController.shemaTarlaInsert);
router.put('/TarlaKonumInsert/:id/:sezonId/:tarlaId', userController.TarlaKonumInsert);

module.exports = router;