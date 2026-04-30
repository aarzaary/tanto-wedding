export const data = {
    bride: {
        L: {
            id: 1,
            name: 'Widartanto',
            child: 'Putra kedua',
            father: 'Sarjono',
            mother: 'Girah',
            image: './src/assets/images/cowo.jpg'
        },
        P: {
            id: 2,
            name: 'Oktaviani Linggar Sari',
            child: 'Putri pertama',
            father: 'Jarwadi',
            mother: 'Parjiyati',
            image: './src/assets/images/cewe.jpg'
        },

        couple: './src/assets/images/couple.jpg'
    },

    time: {
        marriage: {
            year: '2026',
            month: 'Juni',
            date: '11',
            day: "Kamis",
            hours: {
                start: '10.00',
                finish: 'Selesai'
            }
        },
        reception: {
            year: '2026',
            month: 'Juni',
            date: '14',
            day: 'Minggu',
            hours: {
                start: '11.00',
                finish: 'Selesai'
            }
        },
        address: 'Gedung Serbaguna Balai Kalurahan Timbulharjo'
    },

    link: {
        calendar: 'https://calendar.app.google/oSVLRMYC79GzuA4f9',
        map: 'https://maps.app.goo.gl/r36tdjy7cARDWnkB8',
    },

    galeri: [
        {
            id: 1,
            image: './src/assets/images/1.png'
        },
        {
            id: 2,
            image: './src/assets/images/2.png'
        },
        {
            id: 3,
            image: './src/assets/images/3.png'
        },
        {
            id: 4,
            image: './src/assets/images/4.png'
        },
        {
            id: 5,
            image: './src/assets/images/5.png'
        }
    ],

    bank: [
        {
            id: 1,
            name: 'Oktaviani Linggar Sari',
            icon: './src/assets/images/bri.png',
            rekening: '664501042539534'
        },
        {
            id: 2,
            name: 'Widartanto',
            icon: './src/assets/images/sea.webp',
            rekening: '901870393584'
        },
    ],

    audio: './src/assets/audio/wedding.mp3',

    api: 'https://script.google.com/macros/s/AKfycbz2lEQfxeJADjzH-NbgDqvQ3vAkLYqvGH-PkRdiVlrCbWMyTQhrtdFTkDYEY2TezkieSA/exec',

    navbar: [
        {
            id: 1,
            teks: 'Home',
            icon: 'bx bxs-home-heart',
            path: '#home',
        },
        {
            id: 2,
            teks: 'Mempelai',
            icon: 'bx bxs-group',
            path: '#bride',
        },
        {
            id: 3,
            teks: 'Tanggal',
            icon: 'bx bxs-calendar-check',
            path: '#time',
        },
        {
            id: 5,
            teks: 'Ucapan',
            icon: 'bx bxs-message-rounded-dots',
            path: '#wishas',
        },
    ],
}
