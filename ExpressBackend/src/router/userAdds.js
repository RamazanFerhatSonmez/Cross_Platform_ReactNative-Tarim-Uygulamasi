const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const userController = require('./userController/userCrud')
// Models
const tarimUser = require('../models/tarimAppModels');

router.post('/SignIn/:Ad/:soyad/:email/:password/:passwordAgain', userController.userSignIn);
router.get('/userLogin/:email', userController.userLogin);
router.get('/getTarla/:tarlaId', userController.getTarla);
router.put('/shemaInsert/:id/:sezonName', userController.shemaInsert);
router.put('/shemaTarlaInsert/:id/:sezonId/:tarlaAd/:dekar', userController.shemaTarlaInsert);
router.post('/TarlaKonumInsert/:tarlaId/:lat/:long/:acc', userController.TarlaKonumInsert);
router.put('/urunSchemaInsert/:tarlaId/:urunName/:urunMiktar', userController.urunSchemaInsert);
router.put('/urunSchemaMasraf/:tarlaid/:urunSchmaId/:desc/:miktar/:masraf',userController.urunSchemaMasraf);
router.put('/urunSchemaHasat/:tarlaid/:urunSchmaId/:birim/:hasatmiktar',userController.urunSchemaHasat);
router.put('/urunSchemaTur/:tarlaid/:urunSchmaId/:name/:masraf',userController.urunSchemaTur); 
module.exports = router;
