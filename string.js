var ad = "Hakan";
var soyad = 'TAŞDELEN';
var yas = 25;
console.log(ad);
console.log(soyad);
console.log(yas);

console.log(ad+"     "+soyad);
console.log("Benim adım: "+ad+""+soyad+" yaşım: "+yas);
// New String()
var ad="Hakan";
var name= new String('Hakan');
console.log(typeof(ad)+typeof(name));

console.log(ad==name);
console.log(ad===name);

//String.Length
console.log(ad.length);
console.log(soyad.length);

const fullName='Hakan';
const city ='Mersin';
const born ='1994';

val = 'my name is: '+fullName+' I\'m '+(2025-born)+' years old '+' and live:'+city;
console.log(val);

//Template Literal
 /*
    1) string ifadeyi backtick (``) arasına yazmamız gerekir(AltGr+Noktalı Virgül)
    2)Değişken isimlerini ${} sembolü içine yazılır
  */

  val = `my name is:${fullName}I'm ${(2025-born>=20)?'20 den büyük':'20 den küçük'}and live ${city}`;
  console.log(val);

                    /*  METOTLAR  */
                    
//concat() Metodu
      var adSoyad=ad.concat(' ',soyad);
      console.log(adSoyad);
//indexOf() Metodu
    var ders ="Modern Javascript Dersi: Baştan Sona Javascript";
    var sonuc=ders.indexOf("Javascript",10);
    console.log(sonuc);
//lastindexOf() Metodu
var ders ="Modern Javascript Dersi: Baştan Sona Javascript";
var sonuc=ders.lastIndexOf("Javascript");
console.log(sonuc);
//search() Metodu
var ders ="Modern Javascript Dersi: Baştan Sona Javascript";
var sonuc=ders.search("Javascript");
console.log(sonuc);

//toUpperCase() Metodu
var satır="Merhaba Dünya!";
var satır1=satır.toUpperCase();
console.log(satır1);

//toLowerCase() Metodu
var satır="Merhaba Dünya!";
var satır1=satır.toLowerCase();
console.log(satır1);
//trim() Metodu
var satır="   Merhaba Dünya!  ";
var satır1=satır.trim();
console.log(satır1);

    /* Parçalama Metotları */
    //1)slice Metodu
    var arabalar="Mazda,Opel,Toyota";
    var sonuc=arabalar.slice(6,10);
    console.log(sonuc);

    var arabalar="Mazda,Opel,Toyota";
    var sonuc=arabalar.slice(-11,-7);
    console.log(sonuc);
    //2)substring() Metodu
    var arabalar="Mazda,Opel,Toyota";
    var sonuc=arabalar.substring(6,10);
    console.log(sonuc);
    //3)substr() Metodu
    var arabalar="Mazda,Opel,Toyota";
    var sonuc=arabalar.substr(6,4);
    console.log(sonuc);
// replace() Metodu
var arabalar="Mazda,Opel,Toyota";
var sonuc=arabalar.replace("Toyota","Mercedes");
console.log(sonuc);
//split() Metodu
var adSoyad="Hakan TAŞDELEN";
sonuc=adSoyad.split(" ");
console.log(sonuc);
console.log(sonuc[0]);
console.log(sonuc[1]);

var arabalar="Mazda,Opel,Toyota";
var sonuc=arabalar.split(",");
console.log(sonuc);