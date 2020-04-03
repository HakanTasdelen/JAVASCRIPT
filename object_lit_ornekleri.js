/*
      Aşağıdaki  object literals yapısını kullanarak en az 5 araç bilgisi tutunuz

         Araç Bilgileri:

             id : bmw116d_116
             model : 116d
             yil : 2017
             renk : red apple

             servis kayıtları :
                  id : bmw116d_116_1 tarih : 30.01.2018 km : 15000 ücret : 900
                      servis detayı:
                      id : 1 işlem : yağ değişimi ücreti :300
                      id : 2 işlem : filtre değişimi ücreti :300
                      id : 3 işlem : fren hidroliği ücreti :300

                  id : bmw116d_116_2 tarih : 14.01.2019 km : 26000 ücret : 1800
                      servis detayı:
                      id : 1 işlem : yağ değişimi ücreti :350
                      id : 2 işlem : filtre değişimi ücreti :350
                      id : 3 işlem : fren hidroliği ücreti :300
                      id : 4 işlem : balata değişimi ücreti : 800
                    
                      */
/**
                       *  Burada 1 araç için işlemler yaptık
 */
var aracBilgisi = {
    id: 'bmw116d_116',
    model: '116d',
    yil: 2017,
    renk: 'red apple',
    servisKayit: [
        {
            id: 'bmw116d_116_1', tarih: '30.01.2018', km: 15000, ücret: 900,
            servisDetay: [
                { id: '1', islem: 'yağ değişimi', ücret: 300 },
                { id: '2', islem: 'filtre değişimi', ücret: 300 },
                { id: '3', islem: 'fren hidroliği', ücret: 300 }
            ]
        },
        {
            id: 'bmw116d_116_2', tarih: '14.01.2018', km: 26000, ücret: 1800,
            servisDetay: [
                { id: '1', islem: 'yağ değişimi', ücret: 350 },
                { id: '2', islem: 'filtre değişimi', ücret: 350 },
                { id: '3', islem: 'fren hidroliği', ücret: 300 },
                { id: '4', islem: 'balata değişimi', ücret: 350 }
            ]
        }
    ]

}
/**
                       *  Burada bireden çok araç için işlemler yaptık
 */

var aracBilgileri = [{
    id: 'bmw116d_116',
    model: '116d',
    yil: 2017,
    renk: 'red apple',
    servisKayit: [
        {
            id: 'bmw116d_116_1', tarih: '30.01.2018', km: 15000, ücret: 900,
            servisDetay: [
                { id: '1', islem: 'yağ değişimi', ücret: 300 },
                { id: '2', islem: 'filtre değişimi', ücret: 300 },
                { id: '3', islem: 'fren hidroliği', ücret: 300 }
            ]
        },
        {
            id: 'bmw116d_116_2', tarih: '14.01.2018', km: 26000, ücret: 1800,
            servisDetay: [
                { id: '1', islem: 'yağ değişimi', ücret: 350 },
                { id: '2', islem: 'filtre değişimi', ücret: 350 },
                { id: '3', islem: 'fren hidroliği', ücret: 300 },
                { id: '4', islem: 'balata değişimi', ücret: 350 }
            ]
        }
    ]

}, {
    id: 'bmw_118i',
    model: '118i',
    yil: 2019,
    renk: 'white',
    servisKayit: [
        {
            id: 'bmw_118i_1', tarih: '30.01.2018', km: 15000, ücret: 900,
            servisDetay: [
                { id: '1', islem: 'yağ değişimi', ücret: 300 },
                { id: '2', islem: 'filtre değişimi', ücret: 300 },
                { id: '3', islem: 'fren hidroliği', ücret: 300 }
            ]
        },
        {
            id: 'bmw_188i_2', tarih: '14.01.2018', km: 26000, ücret: 1800,
            servisDetay: [
                { id: '1', islem: 'yağ değişimi', ücret: 350 },
                { id: '2', islem: 'filtre değişimi', ücret: 350 },
                { id: '3', islem: 'fren hidroliği', ücret: 300 },
                { id: '4', islem: 'balata değişimi', ücret: 350 }
            ]
        }
    ]

}, {
    id: 'bmw_x5',
    model: 'x5',
    yil: 2018,
    renk: 'dark night',
    servisKayit: [
        {
            id: 'bmw_x5_1', tarih: '30.01.2018', km: 15000, ücret: 900,
            servisDetay: [
                { id: '1', islem: 'yağ değişimi', ücret: 300 },
                { id: '2', islem: 'filtre değişimi', ücret: 300 },
                { id: '3', islem: 'fren hidroliği', ücret: 300 }
            ]
        },
        {
            id: 'bmw_x5_2', tarih: '14.01.2018', km: 26000, ücret: 1800,
            servisDetay: [
                { id: '1', islem: 'yağ değişimi', ücret: 350 },
                { id: '2', islem: 'filtre değişimi', ücret: 350 },
                { id: '3', islem: 'fren hidroliği', ücret: 300 },
                { id: '4', islem: 'balata değişimi', ücret: 350 }
            ]
        }
    ]
}]
