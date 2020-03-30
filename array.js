var names=['hakan','serkan','emin'];
var years=[2001,2011,1994];
console.log(names);
console.log(years);
console.log(names[2]);
var result="Benim Adım: "+names[0]+" ve yaşım: "+(2020-years[2]);
console.log(result);

// split() metodu string'den 
var names=('hakan,serkan,emin');
var result=names.split(',');
console.log(result);

// new komutu
var names= new Array('hakan','serkan','emin');
console.log(names);


var years=new Array(2001,2011,1994);
console.log(years);

// karışık
var mix=['hakan','emin',1995,1856,null,undefined,['sinema','futbol']];
console.log(mix);
console.log(mix[2],[0]);

//en son veri
var mix=['hakan','emin',1995,1856,null,undefined,['sinema','futbol']];
var enson=mix[mix.length-1];
console.log(enson);


//for döngüsü
for(var i=0;i<mix.length;i++){
    console.log(mix[i]);
}

//Güncelleme
var cars = ['mazda','opel','toyota'];
cars[0]="maserati";
console.log(cars);

//Ekleme
var cars = ['mazda','opel','toyota'];
cars[cars.length]="nissan";
console.log(cars);

              /*   METOTLAR      */
//  EKLEME METOTLARI
//1)Push() Metodu:
var cars = ['mazda','opel','toyota'];
cars.push('ford');
console.log(cars);

//2)Unshift() Metodu:
var cars = ['mazda','opel','toyota'];
cars.unshift('ford');
console.log(cars);

//3)Splice() Metodu
var cars = ['mazda','opel','toyota'];
cars.splice(1,0,'BMW');
console.log(cars);

var cars = ['mazda','opel','toyota','honda','bmc'];
cars.splice(1,2,'BMW');
console.log(cars);

var cars = ['mazda','opel','toyota','honda','bmc'];
var silinen=cars.splice(1,2,'BMW');
console.log(silinen);

// SİLME METOTLARI
//1)Pop Metodu():
var cars = ['mazda','opel','toyota','honda','bmc'];
var silinen=cars.pop();
console.log(silinen);

//Shift Metodu():
var cars = ['mazda','opel','toyota','honda','bmc'];
var silinen=cars.shift();
console.log(silinen);

//toString Metodu
var arabalar=cars.toString();
console.log(arabalar);

var arabalar=cars.join(' ');
console.log(arabalar);

//Concat() Metodu:
var cars1=['mazda','opel','toyota'];
var cars2=['honda','ford','ferrari'];
var cars3=['mustang','BMW','corvette'];

var carTop=cars1.concat(cars2,cars3);
console.log(carTop);

//Slice Metodu:
var yenidizi=carTop.slice(5);
console.log(yenidizi);