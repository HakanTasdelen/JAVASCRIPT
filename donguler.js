/**
 *   For , While ve do-While
 * 
 */

//  for(let i=0;i<=10;i++){
//      console.log(i);
//  }


//  for(let i=0;i<=10;i++){
//     if (i==5) {
//         console.log('en sevdiğim sayı: '+i); 
//     continue;   
//     }
//     if (i==8) {
//         console.log('en sevmediğim sayı: '+i);
//         break;
//     }
//     console.log(i);
// }


/** While  */
// let i=0;
// while(i<10){
//     i++;
//     console.log(i);
// }

/** do While  */
// let i=0;
// do{
//         console.log(i);
//         i++;
// }
// while(i<10)

// for (let i=10;i>=0;i--){
//     console.log(i);
// }

// let toplam=0;
// for(let i=10;i>0;i--){
//   toplam+=i;
//   console.log(toplam);
// }

// let toplam=0;
// for(let i=0;i<=10;i++){
//   toplam+=i;
//   console.log(toplam);
// }

// let toplam=1;
// for(let i=1;i<=10;i++){
//   toplam*=i;
//   console.log(toplam);
// }

// let sonuc=2;
// for(let i=1;i<=10;i++){
//     if (i%2==0) {
//         sonuc*=i;
//     }
//     console.log(sonuc);
// }

// for(let i=0; i<=5;i++){
//     for(let x=0;x<=5;x++){
//         console.log(`i:${i} x:${x}`);
//     }
// }


// let val='\n';
// for(let i=0;i<5;i++){
//       for(let j=0;j<8;j++){
//           val+='1';
//       }   
//       val+='\n';  
// } 

// console.log(val);

/***    Dizi    */
let cars = ['BMW', 'Maserati', 'Porche'];
// console.log(cars);
// console.log(cars[2]);

// for(let i=0; i<cars.length;i++){
//     console.log(cars[i]);
// }

/** for in */
// for(let i in cars){
//     //console.log(cars[i]);
//     console.log(`index : ${i} value: ${cars[i]}`);
// }

/** for each */
// cars.forEach(function(item){
//     console.log(item);
// })


/***    Nesne    */
let people = [
    { firstName: 'Hakan', lastName: 'TAŞDELEN' },
    { firstName: 'Serkan', lastName: 'TAŞDELEN' },
    { firstName: 'Emin', lastName: 'TAŞDELEN' },
];
// for(let i=0; i<people.length;i++){
//     console.log(people[i].firstName);
// }
// for(let i in people){
//     console.log(`index:${i} value: ${people[i].firstName}`);

// }

// people.forEach(function(item){
// console.log(item.firstName);
// });

// let val = people.map(function(item){
//     return item.firstName + ' '+item.lastName;
// }); 
// console.log(val);

let numbers = [1, 2, 4, 9, 5];
let num = numbers.map(function (x) {
    return x * x;
}); console.log(num);