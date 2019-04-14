const tarimUser = require('../../models/tarimAppModels');
//router.post('/createUser', user_controller.userSignIn);
exports.userSignIn = function (req, res) {
    if(req.params.password === req.params.passwordAgain){
        let user = new tarimUser({
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
        tarimUser.findOne({KullaniciMail:req.params.email}).then((user) => {
            if(!user){
                res.send('Böyle bir id adresi sistemde kayıtlı değil.')
            }else{
                res.send(user)
     
            }
        })
    }
    exports.shemaInsert = function (req, res) {
        tarimUser.findByIdAndUpdate(req.params.id, {
            '$push':{
                'sezonTanimlama':[{
                    'sezonAd': 'Sezon1',
                    'sezonTarih': Date.now()
                }]
            }
        }, function (err, product) {
            if (err) return next(err);
            res.send('Sezon insert.');
        });
    };
    exports.shemaTarlaInsert = function (req, res) {
        //{_id: restID, 'menuItems._id': menuItemID}TarlaKonumInsert
        tarimUser.update({_id:req.params.id,'sezonTanimlama._id':req.params.sezonId}, {
            '$push':{
                'sezonTanimlama.$.tarla':[{
                    'tarlaAd': 'tarlaEklemdi',
                    'tarlaDekarBilgisi': 2000,
                     'sezonId':req.params.id,
                    'tarlaOlusTarih': Date.now()
                }]
            }
        }, function (err, product) {
            if (err) return next(err);
            res.send('Tarla insert.');
        });
    };
    exports.TarlaKonumInsert = function (req, res) {
        tarimUser.update({_id:req.params.id,'sezonTanimlama._id':req.params.sezonId,'tarla._id':req.params.tarlaId}, {
            '$push':{
                'sezonTanimlama.$.tarla.$.tarlaKonum':[{
                    'lat': 1231,
                    'long': 12345,
                    'Accuracy': 123456,
                }]
            }
        }, function (err, product) {
            if (err) res.send(err);
            res.send('Tarla Konum insert.');
        });
    };