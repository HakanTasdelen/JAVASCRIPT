                    /*   *   3 Yıl Birer Yıllık Muayene Örneği *    */

var trafikCikis = new Date('04/20/2019');
trafikCikis.setHours(0,0,0,0);
var trafikMs = Date.now()-trafikCikis.getTime();
var trafikGun = Math.floor(trafikMs/(1000*60*60*24));

if(trafikGun<=365){
    console.log('1. servis bakım zamanı ');
}else if(trafikGun>365 && trafikGun<=365*2){
    console.log('2. servis bakım zamanı ');
}else if(trafikGun>365*2 && trafikGun<=365*3){
    console.log('3. servis bakım zamanı ');
}else{
    console.log('bilinmeyen süre ');
}

console.log(trafikGun);



                     /*   *   Kullanıcı Girişli Prompt Örneği *    */
//prompt popup dediğimiz diyalog kutusu ekrana getirir
//Bununla kullanıcıdan bilgi alabiliriz
var result= prompt('Kimsin');
if (result =='cancel') {
    console.log('çıkış yapıldı!');
}else if (result=='Admin') {

    var password = prompt('Şifre Giriniz');
    if (password=='cancel') {
        console.log('çıkış yapıldı!');
    }else if (password =='123456789') {
        console.log('Oooo Admin reis dönmüş :)');    
    }else{
        console.log('Hatalı Şifre!');
    }
    
}else{
    console.log('Tanımlanmayan Giriş Tespit Edildi ');
}
console.log(result);