const tarimUser = require('../../models/tarimAppModels');
const mongoose = require('mongoose');
const userSchema = mongoose.model('useradd', tarimUser.TarimAppUser);
const tarlaSchema = mongoose.model('tarla', tarimUser.tarlaSchema);
//router.post('/createUser', user_controller.userSignIn);
exports.userSignIn = function (req, res) {
    if (req.params.password === req.params.passwordAgain) {
        let user = new userSchema({
            AdSoyad: req.params.Ad + ' ' + req.params.soyad,
            KullaniciMail: req.params.email,
            KullaniciSifre: req.params.password,
        });
        user.save(function (err) {
            if (err) return next(err);

            res.send('User Create Successfully');
        })
    } else {
        res.send('Şifreler Uyuşmuyor');
    }
};
//router.get('/userLogin:KullaniciMail', user_controller.userLogin);
exports.userLogin = function (req, res) {
        userSchema.findOne({ KullaniciMail: req.params.email }).then((user) => {
            if (!user) {
                res.send('Böyle bir id adresi sistemde kayıtlı değil.')
            } else {
                console.log('Istek Gönderildi...')
                res.send(user)
            }
        })
};
exports.shemaInsert = function (req, res) {
    console.log('Istek Gönderildi...')
    userSchema.update({ KullaniciMail: req.params.email }, {
        '$push': {
            'sezonTanimlama': [{
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
    console.log('Tarla Ekleme Istegi Gönderildi...')
    userSchema.update({ _id: req.params.id, 'sezonTanimlama._id': req.params.sezonId }, {
        '$push': {
            'sezonTanimlama.$.tarla': [{
                'tarlaAd': req.params.tarlaAd,
                'tarlaDekarBilgisi': req.params.dekar,
                'sezonId': req.params.sezonId,
                'tarlaOlusTarih': Date.now()
            }]
        }
    }, function (err, response) {
        if (err) return next(err);
        (response && response.ok === 1 && response.nModified === 1 && response.n === 1) ? res.send(response) : res.send(false);
    });
};
exports.TarlaKonumInsert = function (req, res) {
    tarlaSchema.find({ 'tarlaID': req.params.tarlaId }).then((responsee) => {
        console.log("RES:: " + responsee)
        if (responsee && responsee.length === 1) {
            console.log("RES::SSSSS ")
            tarlaSchema.update({ 'tarla.tarlaID': req.params.tarlaId }, {
                '$push': {
                    'tarla.$.tarlaKonum': [{
                        'tarlaID': req.params.tarlaId,
                        'lat': req.params.lat,
                        'long': req.params.long,
                        'Accuracy': req.params.acc,
                    }]
                }
            }, function (err, response) {
                if (err) return next(err);
                (response && response.ok === 1 && response.nModified === 1 && response.n === 1) ? res.send(true) : res.send(false);
            });
        } else {
            let tarlaSchemas = new tarlaSchema({
                tarlaID: req.params.tarlaId,
                tarla: {
                    tarlaID: req.params.tarlaId,
                    tarlaKonum: {
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
        }
    })
};
//** Urun Schema Ekleme */
exports.urunSchemaInsert = function (req, res) {
    tarlaSchema.find({ 'tarlaID': req.params.tarlaId }).then((responsee) => {
        if (responsee && responsee.length === 1) {
            tarlaSchema.update({ 'tarla.tarlaID': req.params.tarlaId }, {
                '$push': {
                    'urunSheama': [{
                        'tarlaID': req.params.tarlaId,
                        'urunAd': req.params.urunName,
                        'urunMiktar': req.params.urunMiktar,
                        'urunEklemeTarih': Date.now(),
                    }]
                }
            }, function (err, response) {
                if (err) return next(err);
                (response && (response.ok && response.nModified && response.n ) === 1) ? res.send(response) : res.send(false);
            });
        } else {
            let tarlaSchemas = new tarlaSchema({
                tarlaID: req.params.tarlaId,
                urunSheama: {
                    tarlaID: req.params.tarlaId,
                    urunAd: req.params.urunName,
                    urunMiktar: req.params.urunMiktar,
                    urunEklemeTarih: Date.now(),
                },
                tarla: {
                    tarlaID: req.params.tarlaId,
                }
            })
            tarlaSchemas.save(function (err) {
                if (err) return next(err);
                res.send('Tarla Konum Successfully');
            })
        }
    })
    console.log('Istek Gönderildi...')
};

exports.urunSchemaMasraf = function (req, res) {
    console.log('Istek Gönderildi...')
    tarlaSchema.update({ 'tarla.tarlaID': req.params.tarlaid, 'urunSheama._id': req.params.urunSchmaId }, {
        '$push': {
            'urunSheama.$.urunMasrafTablo': [{
                'islemAciklama': req.params.desc,
                'islemMiktari': req.params.miktar,
                'islemMasraf': req.params.masraf,
            }]
        }
    }, function (err, response) {
        if (err) return next(err);
        response.ok === 1 ? res.send(true) : res.send(false);
    });
};

exports.urunSchemaTur = function (req, res) {
    console.log('Istek Gönderildi...')
    tarlaSchema.update({ 'tarla.tarlaID': req.params.tarlaid, 'urunSheama._id': req.params.urunSchmaId }, {
        '$push': {
            'urunSheama.$.islemTuru': [{
                'islemAd': req.params.name,
                'islemMasraf': req.params.masraf,
                'islemTarih': Date.now(),
            }]
        }
    }, function (err, response) {
        if (err) return next(err);
        response.ok === 1 ? res.send(true) : res.send(false);
    });
};

exports.urunSchemaHasat = function (req, res) {
    console.log('Istek Gönderildi...')
    tarlaSchema.update({ 'tarla.tarlaID': req.params.tarlaid, 'urunSheama._id': req.params.urunSchmaId }, {
        '$push': {
            'urunSheama.$.urunHasat': [{
                'birimHasat': req.params.birim,
                'hasatMiktari': req.params.hasatmiktar,
                'hasatTarihi': Date.now(),
            }]
        }
    }, function (err, response) {
        if (err) return next(err);
        response.ok === 1 ? res.send("Kayıt Başarılı") : res.send("Kayıt Başarısız");
    });
};

exports.getTarla = function (req, res) {
    tarlaSchema.findOne({ 'tarla.tarlaID': req.params.tarlaId },{ 'urunSheama': 0 }).then((tarla) => {
        tarla ? res.send(tarla) : res.send(false)
    })
};
//router.get('/getSezon/:email', userController.getSezon);
exports.getSezon = function (req, res) {
    let query = { KullaniciMail: req.params.email };
    let IdentifyingFutureAreas = { '_id':0,'AdSoyad':0,'KullaniciMail':0,'KullaniciSifre':0,'sezonTanimlama.tarla':0}
    userSchema.find(query,IdentifyingFutureAreas).then((data) => {
        data ? res.send(data) : res.send(false);
    })
}
//router.get('/getSezonTarla/:sezonId', userController.getSezonTarla);
exports.getSezonTarla = function (req, res) {
    let query = { 'sezonTanimlama._id': req.params.sezonId }
    let IdentifyingFutureAreas = { 'sezonTanimlama.tarla': 1, '_id':0 }
    userSchema.findOne(query,IdentifyingFutureAreas).then((data) => {
        data ? res.json(data) : res.send(false);
    })
}
//router.get('/getTarlaKonum/:tarlaId', userController.getTarlaKonum);
exports.getTarlaKonum = function (req, res) {
    let query = { 'tarla.tarlaID': req.params.tarlaId }
    let IdentifyingFutureAreas = { 'tarla.tarlaKonum': 1 }
    tarlaSchema.find( query , IdentifyingFutureAreas).then((data) => {
        data ? res.send(data) : res.send(false);
    })
}
//router.get('/getUrunShema/:tarlaId', userController.getTarlaKonum);
exports.getUrunShema = function (req, res) {
    let query = { 'urunSheama.tarlaID': req.params.tarlaId }
    tarlaSchema.find(query, { 'tarla': 0 }).then((data) => {
        data ? res.send(data) : res.send(false);
    })
}
