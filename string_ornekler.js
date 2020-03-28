var asd="-Lorem ipsum -dolor sit amet, -consectetur adipiscing elit. -Suspendisse tempor volutpat turpis, sit amet posuere lectus luctus varius. Aliquam ac magna id erat faucibus congue ac nec purus. In nec lacus non ante interdum aliquam ac id libero.";
var url="https://sites.google.com/view/hakankisiselblog/web-tasarim ü ö ş ğ ı";

//1) Cümle Kaç Karakterli
console.log(asd.length);

//2)Kaç kelimeden oluşuyor
console.log(asd.trim().split(' ').length);

//3)Cümlenin Hepsini Büyük Harfe Çevirelim
console.log(asd.toUpperCase());

//4)Cümlenin basşındaki ve sonundaki boşlukları silelim
console.log(asd.trim());

//5) - karakterini silelim
console.log(asd.replace("-"," "));

//6)url'nin içinden protokol kısmını çıkarılım
var protocol='https://';
console.log(url.substr(protocol.length));
console.log(url.slice(protocol.length));

//7)Url Hangi Protokolü kullanıyor?
console.log(url.startsWith('https://'));
console.log(url.startsWith('http://'));

//8)url .com ifadesini içeriyor mu?
console.log(url.indexOf('.com'));
console.log(url.includes('.com'));

//9)url ifadesini geçerli bir url olarak düzenleyelim
console.log(url.toLowerCase()
  .replace(/ /g,'-')
  .replace(/ı/g,'i')
  .replace(/ğ/g,'g')
  .replace(/ü/g,'u')
  .replace(/ö/g,'o')
  .replace(/ş/g,'s')
  .replace(/ç/g,'c'));