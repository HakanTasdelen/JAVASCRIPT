var x=10;
var y = 10.5;
console.log(x);
console.log(y);

var x = 10;
var y = 20;
var toplam=x+y;
console.log(toplam);

var x ="10";
var y = 20;
var toplam=x+y;
console.log(toplam);

var x =10;
var y = 20;
var z = "5";
var toplam=x+y+z;
console.log(toplam);


var x =10;
var y = "20";
var toplam=x*y;
console.log(toplam);


var x =10;
var y = "20";
var toplam=x-y;
console.log(toplam);


var x =10;
var y = "20";
var toplam=x/y;
console.log(toplam);


var x =10;
var y = "20";
var toplam=x%y;
console.log(toplam);


var x=120/"2a";
console.log(x);

var x=120/'2a';
console.log(x);

var x=isNaN("2a");
console.log(x);

var x=isNaN("2");
console.log(x);


/* Number Metotları */
//new Number Metodu
var x=10;
var y=new Number(10);
console.log(x,y);

//toString Metodu
var x=10;
var y=20;
var z=x.toString()+y.toString();
console.log(z);

//toFixed Metodu
var x =10.539;
console.log(x.toFixed(0));

console.log(x.toFixed(1));

console.log(x.toFixed(2));

console.log(x.toFixed(5));

var x =10.259;
console.log(x.toFixed(0));

//toPrecision Metodu
var x =10.539;
console.log(x.toPrecision(3));
console.log(x.toPrecision(1));

console.log(x.toPrecision(2));

console.log(x.toPrecision(5));

var x =10.139;
console.log(x.toPrecision(2));

//Number Metodu
var n=Number(true);
console.log(n);
var n=Number(false);
console.log(n);
var n=Number("10");
console.log(n);
var n=Number("10.55");
console.log(n);
var n=Number(" 10.55");
console.log(n);
var n=Number("10.55  ");
console.log(n);
var n=Number("10,55");
console.log(n);
var n=Number("10.a");
console.log(n);


//parseInt Metodu
var n=parseInt("10.55");
console.log(n);

var n=parseInt("10");
console.log(n);

var n=parseInt("10 20 30");
console.log(n);

var n=parseInt("10a");
console.log(n);

var n=parseInt("a10");
console.log(n);

//parseFloat Metodu
var n=parseFloat("10.55");
console.log(n);

var n=parseFloat("10");
console.log(n);

var n=parseFloat("10 20 30");
console.log(n);

var n=parseFloat("10a");
console.log(n);

var n=parseFloat("a10");
console.log(n);



