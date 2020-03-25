// Matematiksel Operatörler
var a = 5 +6;
var b = 5-6;
var c = 5*6;
var d = 5/6;
var e = 5%6;
var f = ++a;
var g = a++;
var h = --a;
var i = a--;
console.log(a,b,c,d,e,f,g,h,i);

//Atama Operatörleri 
var a;
a = 0;
a += 6;
console.log(a);
a = 5;
a -= 6;
console.log(a);
a = 5;
a *= 6;
console.log(a);
a = 5;
a /= 6;
console.log(a);
a = 5;
a %= 6;
console.log(a);

//String Operatörleri
var s ="Hakan"+"TAŞDELEN";
console.log(s);

var a ="Hakan";
var s ="TAŞDELEN";
console.log(a+s);

//Karşılaştırma Operatörleri
var a = 5, b = "5";
var c = a == b;
console.log(c);
c = a === b;
console.log(c);
c = a != b;
console.log(c);
c = a > b;
console.log(c);
c = a < b;
console.log(c);
c = a >= b;
console.log(c);
c = a <= b;
console.log(c);

//Mantıksal Operatörler
var a = true, b = false;
var c = a&&b;
console.log(c);
c = a||b;
console.log(c);
c =!a;
console.log(c);

//Koşul Operatörleri
var a = true;
var c = a ? "a true" : "a false";
console.log(c);