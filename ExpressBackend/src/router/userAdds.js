const express = require('express');
const router = express.Router();
const routerController = require('./RouterController/userCrud')
//GET
router.get('/userLogin/:email', routerController.userLogin); // Login Olma
router.get('/getTarla/:tarlaId', routerController.getTarla); // tarlaları getirme
router.get('/getSezon/:email', routerController.getSezon); // sezonları getirme
router.get('/getSezonTarla/:sezonId', routerController.getSezonTarla); //sezona ait tarlaları getirme
router.get('/getTarlaKonum/:tarlaId', routerController.getTarlaKonum); // tarlaya ait konumu getirme
router.get('/getUrunShema/:tarlaId', routerController.getUrunShema);  // tarlaya ait ürünleri getirme
//POST
router.post('/SignIn/:Ad/:soyad/:email/:password/:passwordAgain', routerController.userSignIn);
router.post('/TarlaKonumInsert/:tarlaId/:lat/:long/:acc', routerController.TarlaKonumInsert);
//PUT
router.put('/shemaInsert/:email/:sezonName', routerController.shemaInsert);
router.put('/shemaTarlaInsert/:id/:sezonId/:tarlaAd/:dekar', routerController.shemaTarlaInsert);
router.put('/urunSchemaInsert/:tarlaId/:urunName/:urunMiktar', routerController.urunSchemaInsert);
router.put('/urunSchemaMasraf/:tarlaid/:urunSchmaId/:desc/:miktar/:masraf', routerController.urunSchemaMasraf);
router.put('/urunSchemaHasat/:tarlaid/:urunSchmaId/:birim/:hasatmiktar', routerController.urunSchemaHasat);
router.put('/urunSchemaTur/:tarlaid/:urunSchmaId/:name/:masraf', routerController.urunSchemaTur);
//DELETE
module.exports = router;
