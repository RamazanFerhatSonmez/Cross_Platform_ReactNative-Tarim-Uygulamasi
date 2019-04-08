const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TarimAppUser = new Schema({
    AdSoyad:String,
    KullaniciMail:{type:String,required:true,unique:true},
    KullaniciSifre:{type:String,required:true},
    sezonTanimlama:[{
            sezonAd:String,
            sezonTarih:Date,
            tarla:[{
                    tarlaAd:String,
                    tarlaDekarBilgisi:String,
                    tarlaOlusTarih:Date,
                    
                    tarlaKonum:[{
                            lat:Number,
                            long:Number,
                            Accuracy:Number
                    }],
                    urunSheama:[{
                            urunAd:String,
                            urunMiktar:Number,
                            urunEklemeTarih:Date,

                            urunMasrafTablo:[{
                                    islemAciklama:String,
                                    islemMiktari:Number,
                                    islemMasraf:Number,
                            }],
                            islemTuru:[{
                                    islemAd:String,
                                    islemMasraf:Number,
                                    islemTarih:Date
                            }],
                            urunHasat:[{
                                    birimHasat:Number,
                                    hasatMiktari:Number,
                                    hasatTarihi:Date
                            }]

                    }] 
                }]
    }]
})

module.exports = mongoose.model('tarimUser', TarimAppUser);