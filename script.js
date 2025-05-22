// Ülke ve nüfus verileri (2024 tahmini veriler)
const countries = [
    { name: "Çin", population: 1411750000, code: "cn", comment: "1.4 milyar insanla yaşamak... En azından organların için sıra bekleyen çok olur! 🏙️" },
    { name: "Hindistan", population: 1380004385, code: "in", comment: "Trenlerde yer bulamazsın ama en azından düşersen birileri seni yakalar! 🚂" },
    { name: "ABD", population: 331002651, code: "us", comment: "Amerikan rüyası... Tabii ki bir silahla uyanmazsan! 🗽" },
    { name: "Endonezya", population: 273523615, code: "id", comment: "17,000 adada kaybolma şansın var... Ve tsunamilerle dans etme ihtimalin de! 🏝️" },
    { name: "Pakistan", population: 220892340, code: "pk", comment: "Dünyanın en yüksek dağlarından birine sahipsin... Düşme şansın da o kadar yüksek! 🏔️" },
    { name: "Brezilya", population: 212559417, code: "br", comment: "Karnaval zamanı! Amazon'da kaybolma ihtimalin de var! 🎉" },
    { name: "Nijerya", population: 206139589, code: "ng", comment: "Afrika'nın en kalabalık ülkesi... En azından cenazende kalabalık olur! 🌍" },
    { name: "Bangladeş", population: 164689383, code: "bd", comment: "Nehirler ülkesinde yaşamak... Boğulma riskin de o kadar yüksek! 🛶" },
    { name: "Rusya", population: 145912025, code: "ru", comment: "Vodka ve soğuk hava... Ya donarsın ya da zehirlenirsin! ❄️" },
    { name: "Meksika", population: 128932753, code: "mx", comment: "Tacos ve tequila... Karteller de cabası! 🌮" },
    { name: "Japonya", population: 126476461, code: "jp", comment: "Teknoloji ve gelenekler... Ve depremler! 🗾" },
    { name: "Etiyopya", population: 114963588, code: "et", comment: "Kahvenin anavatanı... Açlığın da! ☕" },
    { name: "Filipinler", population: 109581078, code: "ph", comment: "7,000 adada yaşamak... Ve tayfunlarla dans etmek! 🏖️" },
    { name: "Mısır", population: 102334404, code: "eg", comment: "Piramitlerin gölgesinde yaşamak... Mumyalanma şansın da var! 🏺" },
    { name: "Vietnam", population: 97338579, code: "vn", comment: "Pho ve baharatlı yemekler... Ve sıtma! 🍜" },
    { name: "Türkiye", population: 84339067, code: "tr", comment: "Hoş geldin kardeşim! En azından depremde yalnız ölmezsin! 🫖" },
    { name: "İran", population: 83992949, code: "ir", comment: "Pers medeniyetinin kalbinde... Ve nükleer tehdidin! 🕌" },
    { name: "Almanya", population: 83783942, code: "de", comment: "Bira ve sosisler... Ve soğuk insanlar! 🍺" },
    { name: "Tayland", population: 69799978, code: "th", comment: "Tayland masajı ve egzotik yemekler... Ve turist tuzakları! 🍛" },
    { name: "Birleşik Krallık", population: 67886011, code: "gb", comment: "Çay saatini kaçırma! Yağmurlu günlerin de cabası! ☕" },
    { name: "Fransa", population: 65273511, code: "fr", comment: "Eiffel Kulesi'nin gölgesinde yaşamak... Ve grevlerin! 🗼" },
    { name: "İtalya", population: 60461826, code: "it", comment: "Pizza ve makarna cenneti... Ve mafyanın! 🍕" },
    { name: "Güney Afrika", population: 59308690, code: "za", comment: "Safari zamanı! Aslanlarla dans etme şansın da var! 🦁" },
    { name: "Tanzanya", population: 59734218, code: "tz", comment: "Kilimanjaro'nun eteklerinde yaşamak... Ve sıtmanın! 🏔️" },
    { name: "Myanmar", population: 54409800, code: "mm", comment: "Altın Pagodalar ülkesi... Ve askeri darbelerin! 🏛️" },
    { name: "Kenya", population: 53771296, code: "ke", comment: "Safari ve kahve keyfi... Ve aç aslanların! 🦒" },
    { name: "Güney Kore", population: 51269185, code: "kr", comment: "K-pop ve teknoloji dünyası... Ve komşunun nükleer silahlarının! 🎵" },
    { name: "Kolombiya", population: 50882891, code: "co", comment: "Kahve ve dans! Uyuşturucu kartelleri de cabası! 💃" },
    { name: "İspanya", population: 46754778, code: "es", comment: "Flamenko ve tapas zamanı! İşsizliğin de! 🎭" },
    { name: "Uganda", population: 45741007, code: "ug", comment: "Gorillerin ülkesi! İç savaşın da! 🦍" },
    { name: "Arjantin", population: 45195774, code: "ar", comment: "Tango ve et yemekleri! Ekonomik krizin de! 🥩" },
    { name: "Cezayir", population: 44616624, code: "dz", comment: "Sahra Çölü'nün kumları... Ve terörün! 🏜️" },
    { name: "Sudan", population: 43849260, code: "sd", comment: "Nil Nehri'nin kıyısında yaşamak... Ve iç savaşın! 🌊" },
    { name: "Ukrayna", population: 43733762, code: "ua", comment: "Ayçiçeği tarlaları ve kültür... Ve savaşın! 🌻" },
    { name: "Irak", population: 41179353, code: "iq", comment: "Medeniyetlerin beşiği... Ve bombaların! 🕌" },
    { name: "Afganistan", population: 38928346, code: "af", comment: "Dağların ülkesi... Ve terörün! ⛰️" },
    { name: "Polonya", population: 37846611, code: "pl", comment: "Pierogi ve kültür! Soğuk havanın da! 🥟" },
    { name: "Kanada", population: 37742154, code: "ca", comment: "Akçaağaç şurubu ve doğa! Donma riskin de! 🍁" },
    { name: "Fas", population: 36910560, code: "ma", comment: "Çöl ve denizin buluştuğu yer... Ve kum fırtınalarının! 🏜️" },
    { name: "Suudi Arabistan", population: 34813871, code: "sa", comment: "Çöl ve modernite... Ve insan hakları ihlallerinin! 🕌" },
    { name: "Özbekistan", population: 34232050, code: "uz", comment: "İpek Yolu'nun kalbi... Ve diktatörlüğün! 🧵" },
    { name: "Peru", population: 32971854, code: "pe", comment: "İnka medeniyetinin izleri... Ve yoksulluğun! 🏛️" },
    { name: "Angola", population: 32866272, code: "ao", comment: "Afrika'nın incisi... Ve iç savaşın! 💎" },
    { name: "Malezya", population: 32365999, code: "my", comment: "Yağmur ormanları ve plajlar... Ve sel felaketlerinin! 🌴" },
    { name: "Mozambik", population: 31255435, code: "mz", comment: "Hint Okyanusu'nun incisi... Ve yoksulluğun! 🌊" },
    { name: "Gana", population: 31072940, code: "gh", comment: "Altın Sahili! Sıtmanın da! 🏖️" },
    { name: "Yemen", population: 29825964, code: "ye", comment: "Kahvenin anavatanı... Ve açlığın! ☕" },
    { name: "Nepal", population: 29136808, code: "np", comment: "Everest'in eteklerinde yaşamak... Ve donma riskinin! 🏔️" },
    { name: "Venezuela", population: 28435943, code: "ve", comment: "Angel Şelalesi'nin ülkesi... Ve hiperenflasyonun! 🌊" },
    { name: "Madagaskar", population: 27691018, code: "mg", comment: "Lemurların ülkesi! Yoksulluğun da! 🦊" },
    { name: "Kamerun", population: 26545863, code: "cm", comment: "Afrika'nın minyatürü... Ve iç savaşın! 🌍" },
    { name: "Fildişi Sahili", population: 26378274, code: "ci", comment: "Kakao ve kahve cenneti... Ve yoksulluğun! 🍫" },
    { name: "Kuzey Kore", population: 25778816, code: "kp", comment: "Gizemli bir ülke... Ve açlığın! 🎭" },
    { name: "Avustralya", population: 25499884, code: "au", comment: "Kangurular ve koalalar... Ve ölümcül yılanların! 🦘" },
    { name: "Sri Lanka", population: 21919000, code: "lk", comment: "Çay ve plajlar... Ve iç savaşın! 🫖" },
    { name: "Romanya", population: 19237691, code: "ro", comment: "Dracula'nın ülkesi... Ve yolsuzluğun! 🧛" },
    { name: "Şili", population: 19116201, code: "cl", comment: "Şarap ve depremler... Ve Pinochet'in hayaletinin! 🍷" },
    { name: "Kazakistan", population: 18754440, code: "kz", comment: "Bozkırlar ve nükleer test alanları! ☢️" },
    { name: "Zimbabve", population: 14862924, code: "zw", comment: "Hiperenflasyon ve diktatörlük... İyi şanslar! 💸" },
    { name: "Suriye", population: 17500658, code: "sy", comment: "Medeniyetler beşiği... Ve savaşın! 🕌" },
    { name: "Küba", population: 11326616, code: "cu", comment: "Puro ve rom... Ve ambargonun! 🚬" },
    { name: "Belarus", population: 9449323, code: "by", comment: "Son Avrupa diktatörlüğü... Ve soğuğun! ❄️" },
    { name: "Libya", population: 6871292, code: "ly", comment: "Çöl ve petrol... Ve iç savaşın! 🏜️" },
    { name: "Lübnan", population: 6825442, code: "lb", comment: "Humus ve iç savaş... İyi şanslar! 🥙" },
    { name: "Ermenistan", population: 2963243, code: "am", comment: "Dağlar ve depremler... Ve komşuların! ⛰️" },
    { name: "Kosova", population: 1935259, code: "xk", comment: "Yeni ülke... Ve eski düşmanların! 🏛️" },
    { name: "Karadağ", population: 621718, code: "me", comment: "Plajlar ve mafya... İyi şanslar! 🏖️" },
    { name: "Maldivler", population: 540544, code: "mv", comment: "Cennet adaları... Ve yükselen deniz seviyesinin! 🏝️" },
    { name: "Vatikan", population: 825, code: "va", comment: "En küçük ülke... Ve en büyük skandalların! ⛪" },
    { name: "İsveç", population: 10353442, code: "se", comment: "IKEA ve soğuk hava... Ve depresyonun! 🏠" },
    { name: "Norveç", population: 5421241, code: "no", comment: "Fiyortlar ve petrol... Ve soğuğun! ⛰️" },
    { name: "Finlandiya", population: 5540720, code: "fi", comment: "Sauna ve kış sporları... Ve intiharın! 🧖" },
    { name: "Danimarka", population: 5831404, code: "dk", comment: "Hygge ve bisikletler... Ve yüksek vergilerin! 🚲" },
    { name: "Hollanda", population: 17441139, code: "nl", comment: "Tulipanlar ve yel değirmenleri... Ve sel felaketlerinin! 🌷" },
    { name: "Belçika", population: 11589623, code: "be", comment: "Çikolata ve bira... Ve bölünmüşlüğün! 🍫" },
    { name: "İsviçre", population: 8654622, code: "ch", comment: "Çikolata ve saatler... Ve bankacılığın! 🍫" },
    { name: "Avusturya", population: 9006398, code: "at", comment: "Mozart ve Alpler... Ve Hitler'in! 🎵" },
    { name: "Portekiz", population: 10196709, code: "pt", comment: "Porto şarabı ve plajlar... Ve ekonomik krizin! 🍷" },
    { name: "Yunanistan", population: 10423054, code: "gr", comment: "Antik Yunan ve plajlar... Ve ekonomik krizin! 🏛️" },
    { name: "Macaristan", population: 9660351, code: "hu", comment: "Gulaş ve termal kaplıcalar... Ve Orban'ın! 🥘" },
    { name: "Çek Cumhuriyeti", population: 10708981, code: "cz", comment: "Bira ve kültür... Ve komünizmin! 🍺" },
    { name: "Slovakya", population: 5459642, code: "sk", comment: "Dağlar ve kültür... Ve komünizmin! ⛰️" },
    { name: "Slovenya", population: 2078938, code: "si", comment: "Göller ve dağlar... Ve komünizmin! 🏔️" },
    { name: "Hırvatistan", population: 4105267, code: "hr", comment: "Plajlar ve kültür... Ve savaşın! 🏖️" },
    { name: "Sırbistan", population: 6908224, code: "rs", comment: "Kültür ve tarih... Ve savaşın! 🎾" },
    { name: "Bulgaristan", population: 6948445, code: "bg", comment: "Yogurt ve kültür... Ve komünizmin! 🥛" },
    { name: "Moldova", population: 2617820, code: "md", comment: "Şarap ve kültür... Ve yoksulluğun! 🍷" },
    { name: "Estonya", population: 1326535, code: "ee", comment: "Teknoloji ve kültür... Ve soğuğun! 💻" },
    { name: "Letonya", population: 1886198, code: "lv", comment: "Ormanlar ve kültür... Ve soğuğun! 🌲" },
    { name: "Litvanya", population: 2722289, code: "lt", comment: "Amber ve kültür... Ve soğuğun! 🟡" },
    { name: "Tayvan", population: 23503349, code: "tw", comment: "Teknoloji ve kültür... Ve Çin tehdidinin! 💻" },
    { name: "Hong Kong", population: 7496981, code: "hk", comment: "Finans ve kültür... Ve Çin baskısının! 💰" },
    { name: "Singapur", population: 5685807, code: "sg", comment: "Temizlik ve zenginlik... Ve sıkı kuralların! 💰" },
    { name: "Kamboçya", population: 16718965, code: "kh", comment: "Angkor Wat ve kültür... Ve Kızıl Kmerlerin! 🏛️" },
    { name: "Laos", population: 7275560, code: "la", comment: "Budizm ve kültür... Ve yoksulluğun! 🕌" },
    { name: "Brunei", population: 437479, code: "bn", comment: "Petrol ve zenginlik... Ve sıkı kuralların! 💰" },
    { name: "Doğu Timor", population: 1318445, code: "tl", comment: "Bağımsızlık ve kültür... Ve yoksulluğun! 🏝️" },
    { name: "Ruanda", population: 12952218, code: "rw", comment: "Dağ gorilleri ve kültür... Ve soykırımın! 🦍" },
    { name: "Burundi", population: 11890784, code: "bi", comment: "Göller ve kültür... Ve iç savaşın! 🌊" },
    { name: "Kongo Demokratik Cumhuriyeti", population: 89561403, code: "cd", comment: "Yağmur ormanları ve madenler... Ve iç savaşın! 🌲" },
    { name: "Kongo Cumhuriyeti", population: 5518087, code: "cg", comment: "Yağmur ormanları ve petrol... Ve iç savaşın! 🌲" },
    { name: "Gabon", population: 2225734, code: "ga", comment: "Yağmur ormanları ve petrol... Ve diktatörlüğün! 🌲" },
    { name: "Ekvator Ginesi", population: 1402985, code: "gq", comment: "Petrol ve zenginlik... Ve diktatörlüğün! 💰" },
    { name: "São Tomé ve Príncipe", population: 219159, code: "st", comment: "Adalar ve kültür... Ve yoksulluğun! 💰" },
    { name: "Namibya", population: 2540905, code: "na", comment: "Çöl ve kültür... Ve yoksulluğun! 🏜️" },
    { name: "Botsvana", population: 2351627, code: "bw", comment: "Safari ve elmaslar... Ve AIDS'in! 💎" },
    { name: "Malavi", population: 19129952, code: "mw", comment: "Göller ve kültür... Ve yoksulluğun! 🌊" },
    { name: "Zambiya", population: 18383955, code: "zm", comment: "Victoria Şelalesi ve bakır... Ve yoksulluğun! 🌊" },
    { name: "Komorlar", population: 869601, code: "km", comment: "Adalar ve kültür... Ve yoksulluğun! 🏝️" },
    { name: "Mauritius", population: 1271768, code: "mu", comment: "Plajlar ve şeker... Ve yoksulluğun! 🏖️" },
    { name: "Seyşeller", population: 98347, code: "sc", comment: "Cennet adaları... Ve yoksulluğun! 🏝️" },
    { name: "Cape Verde", population: 555987, code: "cv", comment: "Adalar ve kültür... Ve yoksulluğun! 🏝️" },
    { name: "Gine-Bissau", population: 1968001, code: "gw", comment: "Kültür ve yoksulluk... Ve iç savaşın! 🌍" },
    { name: "Gine", population: 13132795, code: "gn", comment: "Boksit ve kültür... Ve diktatörlüğün! 💎" },
    { name: "Sierra Leone", population: 7976983, code: "sl", comment: "Elmaslar ve kültür... Ve iç savaşın! 💎" },
    { name: "Liberya", population: 5057681, code: "lr", comment: "Özgürlük ve kültür... Ve iç savaşın! 🌍" },
    { name: "Togo", population: 8278724, code: "tg", comment: "Kültür ve yoksulluk... Ve diktatörlüğün! 🌍" },
    { name: "Benin", population: 12123200, code: "bj", comment: "Voodoo ve kültür... Ve yoksulluğun! 🧙" },
    { name: "Nijer", population: 24206644, code: "ne", comment: "Çöl ve uranyum... Ve yoksulluğun! 🏜️" },
    { name: "Burkina Faso", population: 20903273, code: "bf", comment: "Altın ve kültür... Ve yoksulluğun! 💎" },
    { name: "Mali", population: 20250833, code: "ml", comment: "Altın ve kültür... Ve terörün! 💎" },
    { name: "Senegal", population: 16743927, code: "sn", comment: "Futbol ve kültür... Ve yoksulluğun! ⚽" },
    { name: "Gambiya", population: 2416668, code: "gm", comment: "Nehir ve kültür... Ve yoksulluğun! 🌊" },
    { name: "İzlanda", population: 341243, code: "is", comment: "Volkanlar ve buzullar... Ve soğuğun! 🌋" },
    { name: "Lüksemburg", population: 625978, code: "lu", comment: "Zenginlik ve bankacılık... Ve sıkıcılığın! 💰" },
    { name: "Malta", population: 441543, code: "mt", comment: "Adalar ve tarih... Ve sıkıcılığın! 🏝️" },
    { name: "Andorra", population: 77265, code: "ad", comment: "Kayak ve vergi cenneti... Ve sıkıcılığın! ⛷️" },
    { name: "Lihtenştayn", population: 38128, code: "li", comment: "Zenginlik ve bankacılık... Ve sıkıcılığın! 💰" },
    { name: "Monako", population: 39242, code: "mc", comment: "Kumar ve lüks... Ve sıkıcılığın! 🎰" },
    { name: "San Marino", population: 33931, code: "sm", comment: "Tarih ve kültür... Ve sıkıcılığın! 🏛️" },
    { name: "Palau", population: 18094, code: "pw", comment: "Cennet adaları... Ve yoksulluğun! 🏝️" },
    { name: "Tuvalu", population: 11792, code: "tv", comment: "Cennet adaları... Ve yükselen deniz seviyesinin! 🏝️" },
    { name: "Nauru", population: 10084, code: "nr", comment: "Fosfat ve obezite... Ve yoksulluğun! 💰" },
    { name: "Vatikan", population: 825, code: "va", comment: "En küçük ülke... Ve en büyük skandalların! ⛪" }
];

// Oyun durumu
let gameState = {
    remainingTries: 3,
    selectedCountries: new Set()
};

// Toplam dünya nüfusu
const totalPopulation = countries.reduce((sum, country) => sum + country.population, 0);

// Nüfusa göre ağırlıklı rastgele seçim fonksiyonu
function weightedRandomSelection() {
    const availableCountries = countries.filter(country => !gameState.selectedCountries.has(country.name));
    if (availableCountries.length === 0) {
        return null; // Tüm ülkeler seçilmiş
    }

    // Sadece seçilmemiş ülkelerin toplam nüfusunu hesapla
    const availablePopulation = availableCountries.reduce((sum, country) => sum + country.population, 0);
    const random = Math.random() * availablePopulation;
    let cumulativeWeight = 0;

    for (const country of availableCountries) {
        cumulativeWeight += country.population;
        if (random <= cumulativeWeight) {
            return country;
        }
    }

    // Bu satıra asla ulaşılmamalı, ama güvenlik için
    return availableCountries[0];
}

// DOM elementlerini seçme
const restartButton = document.getElementById('restartButton');
const resultDiv = document.getElementById('result');
const countryInfo = document.getElementById('countryInfo');
const flagContainer = document.getElementById('flagContainer');
const countryName = document.getElementById('countryName');
const population = document.getElementById('population');
const comment = document.getElementById('comment');
const triesDisplay = document.getElementById('tries');

// Oyun durumunu güncelleme fonksiyonu
function updateGameState() {
    triesDisplay.textContent = gameState.remainingTries;
}

// Butona tıklama olayı ekleme
restartButton.addEventListener('click', () => {
    if (gameState.remainingTries <= 0) {
        alert('Tüm haklarınız bitti! Sayfayı yenileyerek yeni bir oyuna başlayabilirsiniz.');
        return;
    }

    // Buton animasyonu
    restartButton.style.transform = 'scale(0.95)';
    setTimeout(() => {
        restartButton.style.transform = 'scale(1)';
    }, 100);

    const selectedCountry = weightedRandomSelection();
    
    if (!selectedCountry) {
        alert('Tüm ülkeler seçildi! Sayfayı yenileyerek yeni bir oyuna başlayabilirsiniz.');
        return;
    }

    // Seçilen ülkeyi kaydet
    gameState.selectedCountries.add(selectedCountry.name);
    gameState.remainingTries--;
    
    // Bayrak güncelleme
    flagContainer.style.backgroundImage = `url(https://flagcdn.com/w320/${selectedCountry.code}.png)`;
    
    // Detayları güncelleme
    countryName.textContent = selectedCountry.name;
    population.textContent = selectedCountry.population.toLocaleString();
    comment.textContent = selectedCountry.comment;

    // Ülke bilgilerini göster
    countryInfo.style.display = 'flex';

    // Oyun durumunu güncelle
    updateGameState();

    // Son hak kontrolü
    if (gameState.remainingTries === 0) {
        setTimeout(() => {
            alert('Tüm haklarınız bitti! Sayfayı yenileyerek yeni bir oyuna başlayabilirsiniz.');
        }, 500);
    }
});

// İlk oyun durumunu göster
updateGameState(); 