var date= new Date();
console.log(date);
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getFullYear());
console.log(date.getHours());
console.log(date.getMilliseconds());
console.log(date.getMinutes());
console.log(date.getMonth());
console.log(date.getSeconds());
console.log(date.getTime());


// 1/1/2000 tarihinden bir gün öncesini yazalım
var dt= new Date('1/1/2000');
var dtm = dt.getDate();
dt.setDate(dtm-1);
console.log(dt);


// 2 tarih arası hesapla
var basla = new Date('1/1/2000');
var son = new Date('1/1/2015');
var milisaniye= son - basla;
var saniye = milisaniye/1000;
var dakika= saniye/60;
var saat = dakika/60;
var gun =saat/24;
console.log('milisanie'+milisaniye);
console.log('saniye'+saniye);
console.log('gün'+gun);


// Yaş Hesaplama
var dogumGunu = new Date('5/1/1975');
var fark = Date.now()-dogumGunu.getTime();
var gun = new Date(fark);
console.log(gun.getFullYear()-1970);

// Anneler Gunu 
var anne= new Date();
anne.setHours(0,0,0,0);
anne.setFullYear(2020);
anne.setDate(1);
anne.setMonth(4);
while(anne.getDay()!=0){
    anne.setDate(anne.getDate()+1)
}
anne.setDate(anne.getDate()+7);
console.log(anne);