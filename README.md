# Cross Platform İle React-Native Tarım Uygulaması 
![1_QY5S4senfFh-mIViSi5A_Q](https://user-images.githubusercontent.com/32498472/60442783-7b1f9800-9c22-11e9-89b5-c348776b221f.png)

## Projenin Amacı
 Tarımsal Yönetim Sistemi (TYS), belirledikleri konumdaki tarlası olan
çiftçilerin tarlalarına ektikleri ürünlerin genel durumunu gözlemleyebilmeyi hedef alan
bir mobil uygulamadır.
##  Projenin Hedefi ve Başarı Kriterleri
* Kullanıcının yeni tarla ekleyebilmesi
* Kullanıcının eklediği tarlaya ait konumunu belirleyebilmesi
* Belirlediği konumdaki tarlaya ürün istediği ürün bilgilerini girerek
kaydedebilmesi
*   Sahip olduğu tarlaları görüntüleyebilmesi
* Tarlalarında ekili olan ürünleri ve ürünler hakkında detaylı bilgileri(Ekim yeri,
ekim tarihi, hasat tarihi, ekildiğinden itibaren geçen süre, hasat için kalan süre, maliyet,
ekilen kg, tarım tipi, gübre çeşidi, ekildiği alan) görebilmesi
* Tüm tarlaların maliyet ve karının hesaplanması

## Installation
``` 
git clone https://github.com/RamazanFerhatSonmez/Cross_Platform_ReactNative-Tarim-Uygulamasi.git

```

## Dependencies

Cross Platform İle React-Native Tarım App depends on the following libraries:
*  React-Native 
* Redux
* MongoDB
*ExpressJS

## Uygulamanın Login Ekranı
![giriş](https://user-images.githubusercontent.com/32498472/60434886-dba5d980-9c10-11e9-9d34-9c66b9514cd0.PNG)

## Uygulamanın Üye Olma Ekranı
![uyeol](https://user-images.githubusercontent.com/32498472/60434982-17d93a00-9c11-11e9-805a-5c5700cdeab7.PNG)

## Uygulamanın Sezon Ekleme Ekranı
![sezonpage](https://user-images.githubusercontent.com/32498472/60435038-36d7cc00-9c11-11e9-9f96-31b211ad0340.PNG)

## Uygulamanın Tarla Listeleme Ekranı
![tarlapage](https://user-images.githubusercontent.com/32498472/60435028-350e0880-9c11-11e9-93c3-86eb1a823028.PNG)
## Uygulamanın Tarla Ekleme Ekranı
![tarlaekleme](https://user-images.githubusercontent.com/32498472/60435024-34757200-9c11-11e9-974b-311e9aa484bc.PNG)
## Uygulamanın Tarla Üzerinde Yapılacak İşlemlerin Ekranı
![tarlaişlemleri](https://user-images.githubusercontent.com/32498472/60435026-34757200-9c11-11e9-9fd7-f97d5efc821d.PNG)
## Uygulamanın Tarlada Bulunan İşlemlerin Ekranı
![ürünview](https://user-images.githubusercontent.com/32498472/60435031-350e0880-9c11-11e9-924d-fd022c6748f3.PNG)
## Uygulamanın Masraf Ekleme Ekranı
![Masraf Ekleme](https://user-images.githubusercontent.com/32498472/60435037-363f3580-9c11-11e9-86b0-33e279d71df2.PNG)
## Uygulamanın İşlem Ekleme Ekranı
![islem ekleme](https://user-images.githubusercontent.com/32498472/60435036-35a69f00-9c11-11e9-87b0-349497960007.PNG)
## Uygulamanın Hasat Ekleme Ekranı
![hasatekleme](https://user-images.githubusercontent.com/32498472/60435035-35a69f00-9c11-11e9-932a-52ac0c545c79.PNG)

# React-Native
JavaScript programlama dilini kullanarak hem android hem de ios uygulamaları
geliştirebileceğiniz facebook tarafından geliştirilen bir native mobile platformudur.
React Native, facebook’un web tarafında kullandığı react sistemi üzerine inşaa
edilmiş, javascriptin her zaman programlama hatası gibi görülen tarafına farklı bir
yaklaşım göstermiş bir kütüphanedir. Sanılanın aksine react native hybrid mobil
uygulama geliştirme değildir.
React Native aslında adı üzerinde, ReactJS çatısını baz alarak Native ara yüzler
aracılığıyla mobil uygulama yazılmasını sağlayan bir geliştirme ortamıdır. Native ara yüz
bileşenlerini barındırdığı için klasik React’teki component yapısında
kullanılan <div> bileşeni yerine Android ve IOS’teki arayüzü karşılığına dönüşecek
olan <View> bileşeni, <img>yerine ise <Image> bileşeni kullanılır.
Aslında <View> ve <Image> gibi bileşenler Facebook tarafından Android ve IOS
karşılıklarının kodlanmasıyla oluşturulmuş yapılardır. Yani siz bu bileşenleri
kullandığınızda, çalıştırılan işletim sistemine göre arka planda gerçekten de native
karşılıklarına dönüştürülürler.
3.1.1.1. React Native’in Mimarisi
WebView üzerinde görüntülenen HTML bileşenlerin aksine native olan bu
yapılar tabi ki büyüsel bir şekilde oluşturulmuyor. Native tarafında eşleniklerinin
üretilmesini sağlayan “bridge” dediğimiz React kodu ile native ortamı arasında bir
köprü oluşturan bu yapı aslında React Native’in başrol oyunculuğunu üstleniyor.
 
# React Native, JavaScript kodları iletişimde bulunma şekli
Yazılan JSX kodu, uygulamanın çalışma zamanında Android ve IOS platformları
için ayrı olarak tasarlanan köprüler yardımıyla ilgili platformun Native bileşenlerine
dönüştürülüyor ve uygulamanın native olarak yazılmasıyla arasında bir fark kalmıyor. Bu
olayın bir dezavantajı da var elbette, çalışma zamanında native bileşene render etme
operasyonu aslında CPU tüketen bir işlem. Buna bağlı olarak React Native uygulamaları,
native uygulamalara kıyasla biraz daha fazla pil tüketimine sahip olacaktır. Bu fark çok
küçük olduğu için genel anlamda son kullanıcının hissedeceği bir etki oluşturmayacaktır.
Aslında React Native’in, sadece UI bileşenleri ve cihaz API’larına erişim için
“Native” özellikler taşıdığını belirtmekte yarar var. Zira yazdığınız JS kodu aslında
uygulamanın çalıştığı cihazın JS motoru tarafından çalışıyor ve Xamarin’de olduğu gibi
native kodlara dönüştürülmüyor. Bu nedenle görüntü işleme ve oyun gibi daha spesifik
uygulamalar oluşturacaksanız React Native yerine ilgili platformun native
geliştiriminden devam etmek çok daha mantıkldır. Bu kullanım alanları haricinde, web
servisten veri çekme, gelen veriyi UI’a basma ve çeşitli birtakım “basit” operasyonlarda
React Native daha kullanışlı olacaktır.
Yazılan kodun JS kodu olmasının native koda göre en büyük avantajı belki de
derleme gerektirmemesi. Bu özelliği çok iyi kullanan React Native, uygulamayı bir kez
telefona atmanız halinde yapılan kod değişiklikleri “hot reloading” denilen yöntemle
derleme gerektirmeksizin uygulamaya push edilebiliyor ve bu sayede yazılımcı için derle-
çalıştır işleminden doğan süre kısalmış oluyor.
Web’e göre aslında React Native’in bir avantajı daha var. JS kodunun ayrı bir
Thread’de çalıştığı bu sistemde, JS kodunun çalışma süresi uzasa dahi UI Thread’i
çalışmaya devam ettiği için uygulama arayüzü bu durumdan etkilenmiyor ve takılmadan
devam edebiliyor.



