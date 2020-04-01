// switch(değişken){
//     case(değer);
//     break;
//     case(değer);
//     break;
//     case(değer);
//     break;
//     case(değer);
//     break;
// ...
//     default:
//         console...

// }


let kategori = 'fırın';
switch (kategori) {
    case 'telefon':
        console.log('telefon kategorisi');
        break;
    case 'bilgisayar':
        console.log('bilgisayar kategorisi');
        break;
    case 'fırın':
        console.log('fırın kategorisi');
        break;
    default:
        console.log('Bu kategoride ürün yok');
}

// let gun;
// switch(new Date().getDay()){
//     case 0:
//         gun='Pazar';
//         break;
//         case 1:
//         gun='Pazartesi';
//         break;
//         case 2:
//         gun='Salı';
//         break;
//         case 3:
//         gun='Çarşamba';
//         break;
//         case 4:
//         gun='Perşembe';
//         break;
//         case 5:
//         gun='Cuma';
//         break;
//         case 6:
//         gun='Cumartesi';
//         break;
//         }
//         console.log(`bugün günlerden ${gun}`);

let gun;
switch (new Date().getDay()) {
    case 0:
    case 6:
        gun = 'Hafta Sonu';
        break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        gun = 'Hafta İçi';
        break;
}
console.log(`bugün  ${gun}`);

const ad = 'Hakan';
const yas = 25;
switch (true) {
    case (yas > 0 && yas < 12):
        console.log(`${yas} çocuk`);
        break;
    case (yas >= 13 && yas <= 19):
        console.log(`${yas} genç`);
        break;
    default:
        console.log(`${yas} erişkin`);
}