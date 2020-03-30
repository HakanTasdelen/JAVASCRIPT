//1- "Bmw,Mercedes,Opel,Mazda" elemanlarına sahip bir dizi oluşturun.
var arr = ["Bmw","Merdeces","Opel","Mazda"];
console.log(arr);

//2- Dizi kaç elemanlıdır ?
console.log(arr.length);

//3- Dizinin ilk ve son elemanı nedir ?
console.log(arr[0])
console.log(arr[3])
    // 2. kullanım console.log(arr[arr.length-1])

//4- "Renault" değerini dizinin sonuna ekleyin.
arr[4] = "Renault";
console.log(arr);
//5- "Toyota" değerini dizinin başına ekleyin.
arr.unshift('Toyota');
console.log(arr);
//6- "Toyota" değerini siliniz.
arr.shift();
console.log(arr);

//8- Dizi elemanlarını ters çevirin
arr.reverse();
console.log(arr);
//9- Dizi elemanlarını alfabetik olarak sıralayın
arr.sort();
console.log(arr);
//10- [1,2,5,80] dizisini sıralayın.
var numbers =[1,2,5,80,15];
function compare(a,b){
    if(a>b) return 1;
    if(a==b) return 0;
    if (a<b) return -1;
}
console.log(numbers.sort(compare));

//11- "Opel" değeri dizinin bir elemanımıdır ?
console.log(arr);
console.log(arr.indexOf('Opel'));
console.log(arr.includes('Opel'));

//12- var str = "Chevrolet,Dacia"; ifadesini diziye çeviriniz.
var str = "Chevrolet,Dacia";
var arr2 = str.split(',');
console.log(arr2)


//13- Oluşturulan 2 dizinin elemanlarını bir başka dizi ile birleştirin.
var arr3 = arr.concat(arr2);
console.log(arr3);


//14- Oluşturulan diziden son 2 elemanı siliniz
console.log(arr3.splice(6,2));
console.log(arr3);


//15- Aşağıda verilen elemanları bir dizi içerisinde saklayınız.
     //studentA : Yiğit Bilgi 2010
     //StudentB : Sena Turan 1999
     //studentC : Ahmet Turan 1998
var studentA = ['Yiğit','Bilgi',2010];
var studentB = ['Sena','Turan',1999];
var studentC = ['Ahmet','Turan',1998];
var students =[studentA,studentB,studentC];
