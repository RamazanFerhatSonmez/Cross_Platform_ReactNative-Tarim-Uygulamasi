const tarimUser = require('../../models/tarimAppModels');
const mongoose = require('mongoose');
const userSchema = mongoose.model('useradd', tarimUser.TarimAppUser);
const tarlaSchema = mongoose.model('tarla', tarimUser.tarlaSchema);
//router.post('/createUser', user_controller.userSignIn);
exports.userSignIn = function (req, res) {
    if(req.params.password === req.params.passwordAgain){
        let user = new userSchema({
            AdSoyad: req.params.Ad + ' ' + req.params.soyad,
            KullaniciMail: req.params.email,
            KullaniciSifre: req.params.password,
        });
        user.save(function (err) {
            if (err) return next(err);
    
            res.send('User Create Successfully');
        })
    }else{
        res.send('Şifreler Uyuşmuyor');
    }
},

    //router.get('/userLogin:KullaniciMail', user_controller.userLogin);

    exports.userLogin = function (req, res) {
        userSchema.findOne({KullaniciMail:req.params.email}).then((user) => {
            if(!user){
                res.send('Böyle bir id adresi sistemde kayıtlı değil.')
            }else{
                console.log('Istek Gönderildi...')
                res.send(user)
     
            }
        })
    }
    exports.shemaInsert = function (req, res) {
        userSchema.findByIdAndUpdate(req.params.id, {
            '$push':{
                'sezonTanimlama':[{
                    'sezonAd': req.params.sezonName,
                    'sezonTarih': Date.now()
                }]
            }
        }, function (err, product) {
            if (err) return next(err);
            res.send('Sezon insert.');
        });
    };
    exports.shemaTarlaInsert = function (req, res) {
        console.log('Istek Gönderildi...')
        //{_id: restID, 'menuItems._id': menuItemID}TarlaKonumInsert
        userSchema.update({_id:req.params.id,'sezonTanimlama._id':req.params.sezonId}, {
            '$push':{
                'sezonTanimlama.$.tarla':[{
                    'tarlaAd': req.params.tarlaAd,
                    'tarlaDekarBilgisi': req.params.dekar,
                     'sezonId':req.params.sezonId,
                    'tarlaOlusTarih': Date.now()
                }]
            }
        }, function (err, response) {
            if (err) return next(err);
            response.ok === 1 ? res.send("Kayıt Başarılı") : res.send("Tarla eklenemedi") ;
        });
    };
    exports.TarlaKonumInsert = function (req, res) {
        let tarlaSchemas = new tarlaSchema({
            tarla:{
                tarlaID: req.params.tarlaId,
                tarlaKonum:{
                    lat: req.params.lat,
                    long: req.params.long,
                    Accuracy: req.params.acc,
                 }
           }
        })
        tarlaSchemas.save(function (err) {
            if (err) return next(err);
    
            res.send('Tarla Konum Successfully');
        })
    };

    //** Urun Schema Ekleme */
    exports.urunSchemaInsert = function (req, res) {
        console.log('Istek Gönderildi...')
        tarlaSchema.update({'tarla.tarlaID':req.params.tarlaId}, {
            '$push':{
                'urunSheama':[{
                    'urunAd': req.params.urunName,
                    'urunMiktar': req.params.urunMiktar,
                    'urunEklemeTarih': Date.now(),
                }]
            }
        }, function (err, response) {
            if (err) return next(err);
            response.ok === 1 ? res.send("Kayıt Başarılı") : res.send("Tarla eklenemedi") ;
        });
    };