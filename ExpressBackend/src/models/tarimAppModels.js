const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TarimAppUser = new Schema({
        AdSoyad: String,
        KullaniciMail: { type: String, required: true, unique: true },
        KullaniciSifre: { type: String, required: true },
        sezonTanimlama: [{
                sezonAd: String,
                sezonTarih: Date,
                tarla: [{
                        sezonId: String,
                        tarlaAd: String,
                        tarlaDekarBilgisi: String,
                        tarlaOlusTarih: Date,
                }]
        }]
});
const tarlaSchema = new Schema({
        tarla: [{
                tarlaID: String,
                tarlaKonum: [{
                        lat: Number,
                        long: Number,
                        Accuracy: Number,
                }]
        }],
        urunSheama: [{
                urunAd: String,
                urunMiktar: Number,
                urunEklemeTarih: Date,
                urunMasrafTablo: [{
                        urunSheamaId: String,
                        islemAciklama: String,
                        islemMiktari: Number,
                        islemMasraf: Number,
                }],
                islemTuru: [{
                        urunSheamaId: String,
                        islemAd: String,
                        islemMasraf: Number,
                        islemTarih: Date
                }],
                urunHasat: [{
                        urunSheamaId: String,
                        birimHasat: Number,
                        hasatMiktari: Number,
                        hasatTarihi: Date
                }]
        }]
})

module.exports = mongoose.model('useradd', TarimAppUser);
module.exports = mongoose.model('tarla', tarlaSchema);