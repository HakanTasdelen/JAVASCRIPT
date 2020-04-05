/**
 *                   Sayı Tahmin Oyunu
 *  1-10 arası rastgele sayı üretilen bir sayıyı aşağı yukarı ifadeleriyle buldurmaya çalışalım
 *  ** puanlama  yapalım
 *  **kullanıcı kaç kerede bileceğini belirtebilsin
 * 
 */

var hak;
var tahmin;
var sayac = 0;
var can = Number(prompt('Kaç kerede biliriniz?'))
var sayi = Math.floor((Math.random() * 10) + 1);
hak = can;
console.log(sayi);

while (hak > 0) {
   hak--;
   sayac++;
   tahmin = Number(prompt('Bir Sayı Griniz.'))
   if (sayi == tahmin) {
      console.log(`Tebrikler ${sayac} defada bildiniz`);
      console.log(`Puanınız :${100 - (100 / can) * (sayac - 1)}`);
      break;
   } else if (sayi > tahmin) {
      console.log('asağı');
   } else if (sayi < tahmin) {
      console.log('yukarı');
   }

   if (hak == 0) {
      console.log('Tüm Haklarınız Tükendi');
   }
}


