export type TourHighlight = {
  title: string;
  description: string;
};

export type TourItineraryItem = {
  time: string;
  title: string;
  description: string;
};

export type TourFaqItem = {
  question: string;
  answer: string;
};

export type TourDestination = {
  slug: string;
  title: string;
  badge: string;
  location: string;
  duration: string;
  price: string;
  priceUnit: string;
  priceNote: string;
  departurePoint: string;
  vehicleType: string;
  heroImage: string;
  heroImageAlt: string;
  gallery: { src: string; alt: string; caption: string }[];
  summary: string;
  description: string[];
  highlights: TourHighlight[];
  itinerary: TourItineraryItem[];
  included: string[];
  excluded: string[];
  tips: string[];
  faqs: TourFaqItem[];
  whatsappMessage: string;
};

export const tourDestinationsData: Record<string, TourDestination> = {
  "lava-tour": {
    slug: "lava-tour",
    title: "Lava Tour Merapi",
    badge: "Private Tour Jogja",
    location: "Kaliurang & Cangkringan, Sleman, D.I. Yogyakarta",
    duration: "1 Hari (Sekitar 5-6 Jam)",
    price: "Rp300.000",
    priceUnit: "/ orang",
    priceNote: "Estimasi mulai dari untuk rombongan privat. Rute dan paket jeep dapat disesuaikan.",
    departurePoint: "Omahku Hostel (Timuran, Mergangsan, Kota Yogyakarta)",
    vehicleType: "Mobil Antar-Jemput AC + Jeep 4x4 Offroad Terbuka",
    heroImage: "/tour-lava-merapi.png",
    heroImageAlt: "Rombongan wisatawan Lava Tour dengan jeep terbuka di depan pemandangan Gunung Merapi",
    gallery: [
      {
        src: "/tour-lava-merapi.png",
        alt: "Rombongan Lava Tour dengan jeep di depan Merapi",
        caption: "Armada Jeep 4x4 berlatar Gunung Merapi yang megah",
      },
      {
        src: "/tour-merapi-bunker.jpg",
        alt: "Jeep offroad di kawasan Bunker Kaliadem Merapi",
        caption: "Petualangan offroad di kawasan Bunker Kaliadem",
      },
      {
        src: "/hero-merapi.png",
        alt: "Pemandangan alam lereng Gunung Merapi dari kejauhan",
        caption: "Panorama alam lereng Merapi di pagi hari",
      },
    ],
    summary:
      "Petualangan jeep offroad menyusuri jejak erupsi Gunung Merapi, Bunker Kaliadem, Museum Sisa Hartaku, dan sensasi manuver air di aliran Kali Kuning.",
    description: [
      "Lava Tour Merapi adalah salah satu pengalaman wisata petualangan paling ikonik di Yogyakarta. Menggunakan jeep terbuka 4x4 dengan sopir lokal yang handal, Anda akan diajak menyusuri kawasan lereng Merapi yang pernah dilalui aliran lahar dingin dan awan panas.",
      "Perjalanan ini dirancang khusus sebagai private tour dengan titik berangkat dari Omahku Hostel di pusat kota Jogja. Anda tidak perlu repot mencari transportasi ke lereng Kaliurang karena seluruh perjalanan antar-jemput sudah kami koordinasikan secara privat untuk kenyamanan rombongan Anda.",
      "Selain menikmati pemandangan alam puncak Merapi yang memukau, Anda juga akan diajak melihat saksi sejarah letusan Merapi tahun 2010 di Museum Sisa Hartaku dan Bunker Kaliadem, serta merasakan keseruan cipratan air saat jeep bermanuver di aliran Kali Kuning.",
    ],
    highlights: [
      {
        title: "Bunker Kaliadem",
        description:
          "Berada tepat di kaki lereng Merapi, menjadi saksi bisu kedahsyatan erupsi dengan sudut pandang puncak yang sangat dekat.",
      },
      {
        title: "Museum Sisa Hartaku",
        description:
          "Menyaksikan langsung peninggalan rumah warga, jam dinding yang meleleh, dan kerangka kendaraan yang tersapu erupsi 2010.",
      },
      {
        title: "Batu Alien (Batu Wajah)",
        description:
          "Batu vulkanik berukuran raksasa yang terlempar dari kawah Merapi dengan formasi alami menyerupai raut wajah manusia.",
      },
      {
        title: "Manuver Air Kali Kuning",
        description:
          "Aksi offroad seru jeep menerobos aliran air berbatu di Kali Kuning, menciptakan cipratan air segar dan tawa gembira.",
      },
    ],
    itinerary: [
      {
        time: "07.30 - 08.00",
        title: "Penjemputan di Omahku Hostel",
        description:
          "Tim driver menjemput Anda langsung di lobi Omahku Hostel Jogja. Perjalanan santai sekitar 45 menit menuju basecamp lereng Merapi.",
      },
      {
        time: "08.45 - 09.00",
        title: "Tiba di Basecamp & Persiapan Jeep",
        description:
          "Singgah di basecamp jeep Kaliurang, bertemu dengan driver jeep lokal berlisensi, serta briefing rute dan perlengkapan.",
      },
      {
        time: "09.00 - 10.15",
        title: "Eksplorasi Bunker Kaliadem",
        description:
          "Menyusuri jalur vulkanik menuju Bunker Kaliadem dan berfoto di spot panorama puncak Gunung Merapi saat cuaca masih cerah.",
      },
      {
        time: "10.15 - 11.15",
        title: "Museum Sisa Hartaku & Batu Alien",
        description:
          "Kunjungan reflektif ke museum mini peninggalan warga dan formasi batu vulkanik raksasa Batu Alien.",
      },
      {
        time: "11.15 - 12.00",
        title: "Sensasi Offroad Manuver Air Kali Kuning",
        description:
          "Jeep melaju melintasi aliran Kali Kuning dengan putaran manuver air yang memacu adrenalin dan menyegarkan.",
      },
      {
        time: "12.00 - 13.30",
        title: "Istirahat & Kuliner Lereng Merapi",
        description:
          "Bersih-bersih dan berganti pakaian, dilanjutkan santap siang masakan khas lereng Merapi seperti Kopi Klotok atau Jejamuran.",
      },
      {
        time: "14.30",
        title: "Tiba Kembali di Omahku Hostel",
        description:
          "Pengantaran kembali ke Omahku Hostel di Jogja. Anda bisa langsung beristirahat atau melanjutkan agenda wisata malam di Malioboro.",
      },
    ],
    included: [
      "Penjemputan dan pengantaran pulang ke Omahku Hostel Jogja",
      "Mobil privat ber-AC selama perjalanan Jogja ke Kaliurang PP",
      "Sewa 1 unit Jeep 4x4 kapasitas 4 orang beserta driver jeep berpengalaman",
      "Bahan bakar mobil dan jeep",
      "Tiket retribusi kawasan wisata lereng Merapi",
      "Air mineral dingin untuk peserta",
    ],
    excluded: [
      "Pengeluaran konsumsi makan siang pribadi",
      "Pakaian ganti pribadi",
      "Tips sukarela untuk driver atau pemandu lokal",
    ],
    tips: [
      "Kenakan pakaian santai yang menyerap keringat dan siapkan 1 stel baju ganti jika basah saat manuver air.",
      "Gunakan kacamata hitam, topi, dan tabir surya (sunblock) untuk melindungi diri dari terik matahari lereng gunung.",
      "Bawa masker untuk mengantisipasi debu pasir saat melintasi jalur berbatu.",
      "Siapkan kantong waterproof atau ziplock untuk mengamankan smartphone dan dompet saat sesi air.",
    ],
    faqs: [
      {
        question: "Apakah rute dan jam keberangkatan bisa disesuaikan?",
        answer:
          "Tentu saja. Sebagai private tour, jam berangkat dapat disesuaikan dengan rencana rombongan Anda, misalnya ingin berangkat lebih pagi untuk sunrise atau siang hari.",
      },
      {
        question: "Berapa kapasitas satu armada Jeep Merapi?",
        answer:
          "Satu armada Jeep 4x4 standar berkapasitas maksimal 4 orang penumpang demi kenyamanan dan keselamatan selama offroad.",
      },
      {
        question: "Bisakah langsung menginap di Omahku Hostel sebelum tour?",
        answer:
          "Sangat direkomendasikan. Anda dapat memesan kamar dorm AC nyaman di Omahku Hostel mulai Rp70.000/orang sehingga pagi hari bisa langsung berangkat santai tanpa terburu-buru.",
      },
    ],
    whatsappMessage:
      "Halo Omahku, saya ingin menanyakan jadwal dan konsultasi Private Tour Lava Tour Merapi.",
  },

  bromo: {
    slug: "bromo",
    title: "Sunrise Gunung Bromo",
    badge: "Private Tour Jawa Timur",
    location: "Taman Nasional Bromo Tengger Semeru, Jawa Timur",
    duration: "1-2 Hari (Keberangkatan Malam dari Jogja)",
    price: "Rp300.000",
    priceUnit: "/ orang",
    priceNote: "Estimasi per orang untuk rombongan privat. Rute dan jadwal berangkat fleksibel dari Jogja.",
    departurePoint: "Omahku Hostel (Timuran, Mergangsan, Kota Yogyakarta)",
    vehicleType: "Mobil Privat AC Nyaman (Tol Trans Jawa) + Jeep 4x4 Hardtop Bromo",
    heroImage: "/tour-bromo-sunrise.png",
    heroImageAlt: "Wisatawan menikmati momen keemasan matahari terbit di kawasan Gunung Bromo",
    gallery: [
      {
        src: "/tour-bromo-sunrise.png",
        alt: "Wisatawan menikmati pemandangan matahari terbit di Bromo",
        caption: "Golden Sunrise spektakuler dari puncak Penanjakan Bromo",
      },
      {
        src: "/tour-bromo-pasir.jpg",
        alt: "Jeep Hardtop 4x4 melintasi Lautan Pasir dan kaldera Gunung Bromo",
        caption: "Eksotisme kaldera Bromo dan armada Jeep Hardtop di Lautan Pasir",
      },
      {
        src: "/tour-bromo-kelompok.png",
        alt: "Rombongan wisatawan di kawasan pegunungan Bromo",
        caption: "Momen berkesan bersama rombongan di hamparan savana Bromo",
      },
    ],
    summary:
      "Menyaksikan keajaiban golden sunrise dari puncak Penanjakan, kawah vulkanik aktif Bromo, hamparan luas Lautan Pasir Berbisik, dan hijaunya Bukit Teletubbies.",
    description: [
      "Gunung Bromo menyuguhkan panorama alam vulkanik paling mempesona di Pulau Jawa. Berdiri di tepi kawah aktif sambil memandangi hamparan lautan pasir dan siluet Gunung Batok serta Gunung Semeru yang menjulang di kejauhan adalah pengalaman seumur hidup.",
      "Perjalanan privat ini diberangkatkan langsung dari Omahku Hostel Jogja pada malam hari. Melalui jalan Tol Trans Jawa yang mulus dan cepat, Anda dapat beristirahat nyaman di mobil hingga tiba di pos transit Bromo sebelum fajar menyingsing.",
      "Setibanya di kawasan Tengger, Anda akan berpindah ke Jeep Hardtop 4x4 untuk mendaki spot sunrise terbaik, lalu turun menyusuri hamparan kaldera pasir, mendaki tangga bibir kawah aktif, dan menikmati segarnya hamparan Savana Bukit Teletubbies.",
    ],
    highlights: [
      {
        title: "Golden Sunrise Penanjakan 1 / Kingkong Hill",
        description:
          "Menyaksikan gradasi warna fajar perlahan menyinari lautan kabut yang menyelimuti kaldera Bromo dan Batok.",
      },
      {
        title: "Kawah Aktif Gunung Bromo",
        description:
          "Trekking atau menunggang kuda melintasi Lautan Pasir lalu menaiki 250 anak tangga menuju bibir kawah aktif yang bergemuruh.",
      },
      {
        title: "Lautan Pasir Berbisik",
        description:
          "Hamparan padang pasir vulkanik seluas 10 kilometer persegi, lokasi foto ikonik bersama jeep hardtop klasik.",
      },
      {
        title: "Savana & Bukit Teletubbies",
        description:
          "Padang rumput hijau bergelombang di sisi timur Bromo yang kontras dan menyegarkan mata sehabis menjelajah kawah.",
      },
    ],
    itinerary: [
      {
        time: "22.30 - 23.00",
        title: "Berangkat Malam dari Omahku Hostel",
        description:
          "Penjemputan di Omahku Hostel Jogja. Anda bisa menitipkan barang bawaan besar di hostel dan membawa tas ransel untuk tour. Perjalanan melalui Tol Trans Jawa.",
      },
      {
        time: "03.00 - 03.30",
        title: "Tiba di Rest Area Bromo & Pindah Jeep 4x4",
        description:
          "Tiba di basecamp transit Sukapura atau Tosari. Istirahat sejenak, menikmati teh atau kopi hangat, dan berganti ke armada Jeep Hardtop 4x4.",
      },
      {
        time: "04.30 - 06.00",
        title: "Menikmati Momen Golden Sunrise",
        description:
          "Menikmati pesona fajar keemasan di spot pandang Penanjakan dengan latar belakang kawah Bromo dan kabut caldera.",
      },
      {
        time: "06.30 - 08.30",
        title: "Eksplorasi Kawah Aktif Bromo",
        description:
          "Jeep meluncur ke Lautan Pasir. Berjalan santai melintasi Pura Poten dan menaiki tangga menuju bibir kawah aktif Bromo.",
      },
      {
        time: "08.30 - 09.30",
        title: "Lautan Pasir Berbisik & Bukit Teletubbies",
        description:
          "Sesi foto estetik di hamparan Pasir Berbisik dan menikmati hijaunya bukit Teletubbies yang asri.",
      },
      {
        time: "10.00 - 11.30",
        title: "Sarapan & Bersih-bersih di Rest Area",
        description:
          "Kembali ke basecamp transit, menikmati santap pagi hangat dan membersihkan diri sebelum perjalanan pulang.",
      },
      {
        time: "18.00 - 19.00",
        title: "Tiba Kembali di Omahku Hostel Jogja",
        description:
          "Perjalanan kembali via jalan tol menuju Omahku Hostel di Jogja dengan suasana santai dan istirahat yang cukup.",
      },
    ],
    included: [
      "Mobil privat full AC untuk rute Jogja ke Bromo PP via Tol Trans Jawa",
      "Driver privat berpengalaman, ramah, dan menguasai rute",
      "Bahan bakar kendaraan dan tiket tol Trans Jawa PP",
      "Sewa 1 unit Jeep Hardtop 4x4 resmi di Bromo beserta driver lokal",
      "Air mineral selama perjalanan",
      "Layanan penitipan koper dan bagasi gratis di Omahku Hostel",
    ],
    excluded: [
      "Tiket masuk kawasan Taman Nasional Bromo Tengger Semeru",
      "Sewa kuda di kaldera Bromo (opsional)",
      "Makan dan pengeluaran pribadi",
      "Sewa jaket tebal di lokasi (bila tidak membawa sendiri)",
    ],
    tips: [
      "Suhu dini hari di Penanjakan sangat dingin (bisa mencapai 5-10 derajat Celcius). Wajib memakai jaket tebal/windbreaker, kupluk (beanie), dan sarung tangan.",
      "Gunakan sepatu kets atau sepatu trekking bertapak nyaman karena area kaldera berupa pasir vulkanik.",
      "Bawa masker dan kacamata untuk mengantisipasi tiupan debu pasir di Lautan Pasir.",
      "Pastikan baterai smartphone dan kamera terisi penuh serta membawa power bank cadangan.",
    ],
    faqs: [
      {
        question: "Apakah bisa request drop di Malang atau Surabaya setelah tour?",
        answer:
          "Bisa sekali. Karena ini adalah private tour, rute kepulangan bisa diatur apakah ingin kembali ke Omahku Hostel di Jogja atau diantar ke stasiun/bandara di Surabaya atau Malang.",
      },
      {
        question: "Bagaimana jika anggota rombongan ingin jalan santai tanpa naik tangga kawah?",
        answer:
          "Sangat fleksibel. Wisatawan yang tidak ingin mendaki kawah dapat bersantai dan berfoto di sekitar area jeep Lautan Pasir atau beristirahat di warung kopi lokal.",
      },
      {
        question: "Apakah aman membawa anak-anak atau orang tua?",
        answer:
          "Aman, asalkan menggunakan pakaian yang cukup hangat dan tidak memaksakan trekking tangga bibir kawah. Spot sunrise dan savana sangat ramah untuk semua kalangan.",
      },
    ],
    whatsappMessage:
      "Halo Omahku, saya ingin bertanya dan konsultasi paket Private Tour Sunrise Gunung Bromo.",
  },

  "tumpak-sewu": {
    slug: "tumpak-sewu",
    title: "Air Terjun Tumpak Sewu",
    badge: "Private Tour Alam & Petualangan",
    location: "Pronojiwo, Lumajang, Jawa Timur",
    duration: "1-2 Hari (Keberangkatan Malam dari Jogja)",
    price: "Rp300.000",
    priceUnit: "/ orang",
    priceNote: "Estimasi per orang rombongan privat. Jadwal fleksibel dan titik berangkat dari Omahku Hostel.",
    departurePoint: "Omahku Hostel (Timuran, Mergangsan, Kota Yogyakarta)",
    vehicleType: "Mobil Privat AC Nyaman (Tol Trans Jawa & Jalur Lumajang)",
    heroImage: "/tour-air-terjun.png",
    heroImageAlt: "Wisatawan mengagumi keindahan tirai raksasa air terjun Tumpak Sewu Lumajang",
    gallery: [
      {
        src: "/tour-air-terjun.png",
        alt: "Wisatawan mengunjungi air terjun Tumpak Sewu",
        caption: "Keagungan tirai raksasa Air Terjun Tumpak Sewu setinggi 120 meter",
      },
      {
        src: "/tour-goa-tetes.jpg",
        alt: "Trekking alami di lembah air terjun dan tebing Goa Tetes",
        caption: "Trekking menelusuri lembah alami dan rembesan air keemasan Goa Tetes",
      },
    ],
    summary:
      "Menikmati tirai air raksasa 'Niagara Indonesia', sensasi trekking menuruni tebing alami, dan keunikan stalaktit rembesan air di Goa Tetes.",
    description: [
      "Air Terjun Tumpak Sewu sering dijuluki sebagai 'Niagara-nya Indonesia' karena formasi air terjunnya yang melingkar menyerupai tirai raksasa setinggi 120 meter dengan latar belakang Gunung Semeru.",
      "Perjalanan petualangan ini kami kelola secara privat dari Omahku Hostel di Jogja. Dengan jadwal keberangkatan malam hari via jalur tol cepat, Anda akan tiba di Lumajang pada pagi hari saat udara masih sejuk dan kawasan wisata belum terlalu ramai pengunjung.",
      "Pengalaman di Tumpak Sewu terbagi menjadi dua bagian menarik: menikmati kemegahan panorama atas dari gardu pandang, serta petualangan trekking menyusuri tangga tebing alami menuju dasar lembah air terjun dan menjelajahi tebing rembesan air alami di Goa Tetes.",
    ],
    highlights: [
      {
        title: "Panorama Tirai Air Raksasa",
        description:
          "Menyaksikan keindahan formasi air terjun setengah lingkaran yang mengalir deras dari tebing hijau berlumut dari gardu pandang atas.",
      },
      {
        title: "Trekking Tebing Alami",
        description:
          "Menuruni tangga bambu dan jalur tebing dengan aliran gemericik mata air alami yang menyegarkan di sepanjang perjalanan.",
      },
      {
        title: "Dasar Lembah Nirwana",
        description:
          "Berdiri di dasar ngarai tepat di bawah gemuruh tirai air raksasa Tumpak Sewu dengan suasana alam yang masih sangat asri.",
      },
      {
        title: "Goa Tetes yang Eksotis",
        description:
          "Gua tebing dengan rembesan air belerang yang membentuk formasi stalaktit dan kolam-kolam alami berwarna keemasan.",
      },
    ],
    itinerary: [
      {
        time: "22.00 - 22.30",
        title: "Keberangkatan Malam dari Omahku Hostel",
        description:
          "Driver privat menjemput rombongan di Omahku Hostel Jogja. Anda dapat beristirahat nyaman di dalam mobil sepanjang perjalanan via Tol Trans Jawa.",
      },
      {
        time: "05.30 - 06.30",
        title: "Tiba di Lumajang & Sarapan Pagi",
        description:
          "Tiba di kawasan Pronojiwo Lumajang, menikmati udara segar pedesaan lereng Semeru dan santap sarapan pagi lokal.",
      },
      {
        time: "07.00 - 08.00",
        title: "Panorama Tumpak Sewu Gardu Pandang Atas",
        description:
          "Menikmati pemandangan magis tirai air Tumpak Sewu dari sisi atas sebelum melanjutkan trekking ke dasar ngarai.",
      },
      {
        time: "08.00 - 10.30",
        title: "Trekking Dasar Lembah & Eksplorasi Goa Tetes",
        description:
          "Menuruni tebing menuju dasar air terjun, merasakan hembusan kabut air yang segar, dan menjelajah formasi stalaktit Goa Tetes.",
      },
      {
        time: "11.00 - 12.00",
        title: "Bersih-bersih & Istirahat di Rest Area",
        description:
          "Kembali ke area atas, mandi dan berganti pakaian kering di fasilitas rest area lokal yang bersih.",
      },
      {
        time: "12.30 - 13.30",
        title: "Santap Siang Kuliner Khas",
        description:
          "Makan siang bersama rombongan menikmati hidangan kuliner hangat khas Jawa Timur.",
      },
      {
        time: "14.00",
        title: "Perjalanan Pulang Nyaman ke Jogja",
        description:
          "Perjalanan kembali menuju Omahku Hostel di Jogja dengan suasana santai dan istirahat yang leluasa.",
      },
    ],
    included: [
      "Mobil privat ber-AC eksekutif dari Omahku Hostel Jogja PP",
      "Driver privat berpengalaman yang siap mendampingi perjalanan",
      "BBM kendaraan dan tiket tol Trans Jawa PP",
      "Air mineral untuk seluruh anggota rombongan",
      "Layanan penitipan koper dan barang di Omahku Hostel Jogja",
    ],
    excluded: [
      "Tiket retribusi masuk kawasan Tumpak Sewu dan Goa Tetes",
      "Jasa pemandu lokal (guide trekking tebing)",
      "Makan dan pengeluaran pribadi",
    ],
    tips: [
      "Wajib memakai alas kaki anti-slip seperti sandal gunung atau water shoes karena batuan tebing sering basah dan licin.",
      "Bawa 1 stel pakaian ganti lengkap dan handuk kecil karena Anda pasti akan basah terkena cipratan air terjun.",
      "Gunakan kantong pelindung kedap air (dry bag / waterproof pouch) untuk melindungi smartphone dan kamera.",
      "Pastikan kondisi fisik dalam keadaan fit untuk menuruni dan menaiki jalur tangga tebing.",
    ],
    faqs: [
      {
        question: "Apakah bisa hanya menikmati pemandangan dari atas tanpa turun tebing?",
        answer:
          "Sangat bisa. Gardu pandang atas berjarak hanya sekitar 5-10 menit jalan kaki dari area parkir dengan jalur yang sangat landai dan nyaman untuk segala usia.",
      },
      {
        question: "Berapa lama waktu trekking turun dan naik ke dasar air terjun?",
        answer:
          "Rata-rata waktu turun sekitar 30-40 menit, dan waktu naik kembali sekitar 45-60 menit tergantung pada ritme santai rombongan.",
      },
      {
        question: "Bisakah menggabungkan rute Tumpak Sewu dengan Bromo?",
        answer:
          "Bisa! Banyak tamu yang memilih paket kombinasi Bromo dan Tumpak Sewu dalam perjalanan 2-3 hari. Silakan diskusikan rencana Anda via WhatsApp.",
      },
    ],
    whatsappMessage:
      "Halo Omahku, saya ingin bertanya dan konsultasi paket Private Tour Air Terjun Tumpak Sewu.",
  },
};
