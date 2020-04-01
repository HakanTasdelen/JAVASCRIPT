const ad='Hakan';
const yas=25;
const calısorMu = false;
const egitim = 'İlkOkul';

if(ad==='Hakan'){
    console.log('Merhaba '+ad);
}

if(yas===25){
    console.log('Yaşınız :'+yas);
}

if(calısorMu==true){
    console.log('Hayır Çalışmıyor.');
}else{
    console.log('Çalışıyor');
}


// if(yas>=18){
//     console.log('Ehliyet alabilirsiniz');
// }else{
//     console.log('Alamazsın');
// }

if(yas>=18){
    if(egitim=='Lisans' || egitim=='Lise'){
console.log('ehliyet alabilirsiniz');
    }else{
        console.log('ehliyet alamazsınız');
        console.log('eğitim durumu uyuşmuyor');
    }
}

if(yas>0 && yas<12){
    console.log(`${yas} çocuk`);
}else if(yas>=13 && yas<=19){
    console.log(`${yas} genç`);
}else{
    console.log(`${yas} erişkin`);
}


let id=159753;
if(typeof id!=='undefined'){
    console.log('id :'+id);
}else{
    console.log('no id');
}