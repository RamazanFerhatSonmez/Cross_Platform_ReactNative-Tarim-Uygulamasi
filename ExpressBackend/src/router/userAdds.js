const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const userController = require('./userController/userCrud')
//GET
router.get('/userLogin/:email', userController.userLogin); // Login Olma
router.get('/getTarla/:tarlaId', userController.getTarla); // tarlaları getirme
router.get('/getSezon/:email', userController.getSezon); // sezonları getirme
router.get('/getSezonTarla/:sezonId', userController.getSezonTarla); //sezona ait tarlaları getirme
router.get('/getTarlaKonum/:tarlaId', userController.getTarlaKonum); // tarlaya ait konumu getirme
router.get('/getUrunShema/:tarlaId', userController.getUrunShema);  // tarlaya ait ürünleri getirme
//POST
router.post('/SignIn/:Ad/:soyad/:email/:password/:passwordAgain', userController.userSignIn);
router.post('/TarlaKonumInsert/:tarlaId/:lat/:long/:acc', userController.TarlaKonumInsert);
//PUT
router.put('/shemaInsert/:email/:sezonName', userController.shemaInsert);
router.put('/shemaTarlaInsert/:id/:sezonId/:tarlaAd/:dekar', userController.shemaTarlaInsert);
router.put('/urunSchemaInsert/:tarlaId/:urunName/:urunMiktar', userController.urunSchemaInsert);
router.put('/urunSchemaMasraf/:tarlaid/:urunSchmaId/:desc/:miktar/:masraf', userController.urunSchemaMasraf);
router.put('/urunSchemaHasat/:tarlaid/:urunSchmaId/:birim/:hasatmiktar', userController.urunSchemaHasat);
router.put('/urunSchemaTur/:tarlaid/:urunSchmaId/:name/:masraf', userController.urunSchemaTur);
//DELETE
module.exports = router;
