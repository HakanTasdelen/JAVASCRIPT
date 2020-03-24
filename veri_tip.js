/*
  1)Primitive Tipler:String,Number,Boolean,Undefined
  2)Reference Tipler:Objects,Array,Function,ObjectLiterals

*/

var FirstName = "Hakan";
console.log(typeof FirstName);


var kilo = 75;
console.log(typeof kilo);


var cinsiyet = false;
console.log(typeof cinsiyet);

var bos;
console.log(typeof bos);

var fiyat=10.50;
console.log(typeof fiyat);


let names=['Ayşe','Fatma','Hayriyr'];
console.log(typeof names);

console.log(names[1]);
console.log(names.length);

let adres={
    sehir:'Mersin',
    ulke:'Türkiye',
    posta_kodu:'33330',
    onaylama:true
}
console.log(adres);
console.log(typeof adres);


let kisi={adi:'Hakan',soyadi:'tasdelen',yas:'25'}
kisi=null;
console.log(kisi);
//console.log(kisi["yas"]);


var hesapla= function(){
    return 0;
}
console.log(hesapla);
console.log(typeof hesapla);


