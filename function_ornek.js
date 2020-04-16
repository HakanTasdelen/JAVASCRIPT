/*  Bankamatik Uygulaması  */

var hesapA = {
    ad: 'Hakan TAŞDELEN',
    hesapNo: '5131246',
    bakiye : 2500,
    ekHesap : 1200
}

var hesapB = {
    ad: 'Emin TAŞDELEN',
    hesapNo: '6531548',
    bakiye : 3200,
    ekHesap : 2125
}

function paraCek(hesap,miktar){
    console.log(`Merhaba ${hesap.ad}`);

    if (hesap.bakiye>= miktar) {
        hesap.bakiye=hesap.bakiye-miktar;
        console.log('Paranızı Alabilirsiniz');
    }else{
        var toplam=hesap.bakiye+hesap.ekHesap;

        if (toplam>=miktar) {
            if (confirm('Ek Hesabınızı Kullanmak İster Misiniz?')) {
                console.log('Paranızı Alabilirsiniz');
                var bakiye = hesap.bakiye;
                var ekHesap=miktar-bakiye;
                hesap.bakiye=0;
                hesap.ekHesap=hesap.ekHesap-ekHesap;
            
            } else {
                console.log(`${hesap.hesapNo} nolu hesabınızda ${miktar} bakiye bulunmamaktadır`);
            }
        }else{
            console.log('Bakiyeniz Yetersiz');
        }
    }
    }
    


paraCek(hesapA,2500);
paraCek(hesapA,1000);