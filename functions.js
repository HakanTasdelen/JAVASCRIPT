function yasHesaplama(dogumYili){
    return 2020-dogumYili;
}

// let val= yasHesaplama(1985);
// console.log(val);

let ageHakan = yasHesaplama(1994);
let ageEmin = yasHesaplama(2001);
let ageSerkan = yasHesaplama(2011);

console.log(ageHakan);
console.log(ageEmin);
console.log(ageSerkan);


function EmekliligeKacYil(dogumYili,isim){
    let yas= yasHesaplama(dogumYili);
    let emeklilik=65-yas;
    if (emeklilik>0) {
        console.log(`${isim} Emekli Olmanıza ${emeklilik} yıl kaldı`);
    }else{
        console.log('Zaten Emeklisiniz');
    }
}

EmekliligeKacYil(1994,'Hakan');
EmekliligeKacYil(2011,'Emin');
EmekliligeKacYil(2001,'Serkan');
EmekliligeKacYil(1945,'Emre');


// Function Declarations
// function sum(a,b){
//     var c=a+b;
//     return c;
// }

// console.log(sum(20,50));
// console.log(sum(20));
// console.log(sum(20,50,50,80,96));

// Function Expression
// const sum=function(a,b){
//     var c=a+b;
//     return c;
// }
// console.log(sum(20,50));

// const sum=function(a,b){
//     if(typeof a === 'undefined'){a=0;}
//     if(typeof b === 'undefined'){b=0;}
//     var c=a+b;
//     return c;
// }

// console.log(sum(10));

const sum =function(a=0,b=0){
    var c=a+b;
    return c;
}

console.log(sum(25));

function args(){
    console.log(arguments);
}
args(10,20,50,45,60,80,90,45,70);

function sumAll(){
    var total=0;
    for(let i=0;i<arguments.length;i++){
        total+=arguments[i];
    }
      return total;
}
console.log(sumAll(11,50,90,65,45,78,98,50,62,41));