// Ülke ve nüfus verileri (2024 tahmini veriler)
const countries = [
    { name: "Çin", population: 1411750000, code: "cn", comment: "1.4 milyar insanla yaşamak... En azından organların için sıra bekleyen çok olur! 🏙️" },
    { name: "Hindistan", population: 1380004385, code: "in", comment: "Trenlerde yer bulamazsın ama en azından düşersen birileri seni yakalar... Sonra tecavüz eder! 🚂" },
    { name: "ABD", population: 331002651, code: "us", comment: "Amerikan rüyası... Tabii ki bir silahla uyanmazsan! En azından sağlık sigortan yoksa ölürsün! 🗽" },
    { name: "Endonezya", population: 273523615, code: "id", comment: "17,000 adada kaybolma şansın var... Ve tsunamilerle dans etme ihtimalin de! 🏝️" },
    { name: "Pakistan", population: 220892340, code: "pk", comment: "Dünyanın en yüksek dağlarından birine sahipsin... Düşme şansın da o kadar yüksek! En azından düşerken güzel manzara var! 🏔️" },
    { name: "Brezilya", population: 212559417, code: "br", comment: "Karnaval zamanı! Amazon'da kaybolma ihtimalin de var... Ve favelalarda soyulma şansın da! 🎉" },
    { name: "Nijerya", population: 206139589, code: "ng", comment: "Afrika'nın en kalabalık ülkesi... En azından cenazende kalabalık olur! Boko Haram da cabası! 🌍" },
    { name: "Bangladeş", population: 164689383, code: "bd", comment: "Nehirler ülkesinde yaşamak... Boğulma riskin de o kadar yüksek! En azından yıkanırsın! 🛶" },
    { name: "Rusya", population: 145912025, code: "ru", comment: "Vodka ve soğuk hava... Ya donarsın ya da zehirlenirsin! En azından Putin'in propagandasını izlersin! ❄️" },
    { name: "Meksika", population: 128932753, code: "mx", comment: "Tacos ve tequila... Karteller de cabası! En azından uyuşturucu ticareti iyi para! 🌮" },
    { name: "Japonya", population: 126476461, code: "jp", comment: "Teknoloji ve gelenekler... Ve depremler! En azından intihar etme kültürün var! 🗾" },
    { name: "Etiyopya", population: 114963588, code: "et", comment: "Kahvenin anavatanı... Açlığın da! En azından açken kahve içersin! ☕" },
    { name: "Filipinler", population: 109581078, code: "ph", comment: "7,000 adada yaşamak... Ve tayfunlarla dans etmek! En azından Duterte seni vurmaz! 🏖️" },
    { name: "Mısır", population: 102334404, code: "eg", comment: "Piramitlerin gölgesinde yaşamak... Mumyalanma şansın da var! En azından Sisi seni hapse atmaz! 🏺" },
    { name: "Vietnam", population: 97338579, code: "vn", comment: "Pho ve baharatlı yemekler... Ve sıtma! En azından Agent Orange'ı unutursun! 🍜" },
    { name: "Türkiye", population: 84339067, code: "tr", comment: "Hoş geldin kardeşim! En azından depremde yalnız ölmezsin! Çay demli mi? 🫖" },
    { name: "İran", population: 83992949, code: "ir", comment: "Pers medeniyetinin kalbinde... Ve nükleer tehdidin! En azından rejim seni asar! 🕌" },
    { name: "Almanya", population: 83783942, code: "de", comment: "Bira ve sosisler... Ve soğuk insanlar! En azından Nazi olursun! 🍺" },
    { name: "Tayland", population: 69799978, code: "th", comment: "Tayland masajı ve egzotik yemekler... Ve turist tuzakları! En azından ladyboy olursun! 🍛" },
    { name: "Birleşik Krallık", population: 67886011, code: "gb", comment: "Çay saatini kaçırma! Yağmurlu günlerin de cabası! En azından Brexit'ten sonra yalnız kalırsın! ☕" },
    { name: "Fransa", population: 65273511, code: "fr", comment: "Eiffel Kulesi'nin gölgesinde yaşamak... Ve grevlerin! En azından sarı yelekliler seni döver! 🗼" },
    { name: "İtalya", population: 60461826, code: "it", comment: "Pizza ve makarna cenneti... Ve mafyanın! En azından Berlusconi gibi olmazsın! 🍕" },
    { name: "Güney Afrika", population: 59308690, code: "za", comment: "Safari zamanı! Aslanlarla dans etme şansın da var! En azından apartheid bitmiş! 🦁" },
    { name: "Tanzanya", population: 59734218, code: "tz", comment: "Kilimanjaro'nun eteklerinde yaşamak... Ve sıtmanın! En azından aslanlar seni yemez! 🏔️" },
    { name: "Myanmar", population: 54409800, code: "mm", comment: "Altın Pagodalar ülkesi... Ve askeri darbelerin! En azından Rohingyaları öldürürsün! 🏛️" },
    { name: "Kenya", population: 53771296, code: "ke", comment: "Safari ve kahve keyfi... Ve aç aslanların! En azından maraton koşarsın! 🦒" },
    { name: "Güney Kore", population: 51269185, code: "kr", comment: "K-pop ve teknoloji dünyası... Ve komşunun nükleer silahlarının! En azından BTS dinlersin! 🎵" },
    { name: "Kolombiya", population: 50882891, code: "co", comment: "Kahve ve dans! Uyuşturucu kartelleri de cabası! En azından Escobar gibi olursun! 💃" },
    { name: "İspanya", population: 46754778, code: "es", comment: "Flamenko ve tapas zamanı! İşsizliğin de! En azından boğa güreşinde ölürsün! 🎭" },
    { name: "Uganda", population: 45741007, code: "ug", comment: "Gorillerin ülkesi! İç savaşın da! En azından Kony seni kaçırmaz! 🦍" },
    { name: "Arjantin", population: 45195774, code: "ar", comment: "Tango ve et yemekleri! Ekonomik krizin de! En azından Messi gibi olmazsın! 🥩" },
    { name: "Cezayir", population: 44616624, code: "dz", comment: "Sahra Çölü'nün kumları... Ve terörün! En azından Fransızlar seni sömürmez! 🏜️" },
    { name: "Sudan", population: 43849260, code: "sd", comment: "Nil Nehri'nin kıyısında yaşamak... Ve iç savaşın! En azından Darfur'da ölürsün! 🌊" },
    { name: "Ukrayna", population: 43733762, code: "ua", comment: "Ayçiçeği tarlaları ve kültür... Ve savaşın! En azından Zelenski gibi olursun! 🌻" },
    { name: "Irak", population: 41179353, code: "iq", comment: "Medeniyetlerin beşiği... Ve bombaların! En azından Saddam gibi asılmazsın! 🕌" },
    { name: "Afganistan", population: 38928346, code: "af", comment: "Dağların ülkesi... Ve terörün! En azından Taliban seni kafir ilan etmez! ⛰️" },
    { name: "Polonya", population: 37846611, code: "pl", comment: "Pierogi ve kültür! Soğuk havanın da! En azından Auschwitz'e gitmezsin! 🥟" },
    { name: "Kanada", population: 37742154, code: "ca", comment: "Akçaağaç şurubu ve doğa! Donma riskin de! En azından Trudeau gibi olmazsın! 🍁" },
    { name: "Fas", population: 36910560, code: "ma", comment: "Çöl ve denizin buluştuğu yer... Ve kum fırtınalarının! En azından kral seni öldürmez! 🏜️" },
    { name: "Suudi Arabistan", population: 34813871, code: "sa", comment: "Çöl ve modernite... Ve insan hakları ihlallerinin! En azından Khashoggi gibi olmazsın! 🕌" },
    { name: "Özbekistan", population: 34232050, code: "uz", comment: "İpek Yolu'nun kalbi... Ve diktatörlüğün! En azından Karimov gibi olmazsın! 🧵" },
    { name: "Peru", population: 32971854, code: "pe", comment: "İnka medeniyetinin izleri... Ve yoksulluğun! En azından Machu Picchu'da ölürsün! 🏛️" },
    { name: "Angola", population: 32866272, code: "ao", comment: "Afrika'nın incisi... Ve iç savaşın! En azından elmasların olur! 💎" },
    { name: "Malezya", population: 32365999, code: "my", comment: "Yağmur ormanları ve plajlar... Ve sel felaketlerinin! En azından MH370'te olmazsın! 🌴" },
    { name: "Mozambik", population: 31255435, code: "mz", comment: "Hint Okyanusu'nun incisi... Ve yoksulluğun! En azından deniz korsanları seni kaçırmaz! 🌊" },
    { name: "Gana", population: 31072940, code: "gh", comment: "Altın Sahili! Sıtmanın da! En azından altın madeninde ölürsün! 🏖️" },
    { name: "Yemen", population: 29825964, code: "ye", comment: "Kahvenin anavatanı... Ve açlığın! En azından Houthiler seni vurmaz! ☕" },
    { name: "Nepal", population: 29136808, code: "np", comment: "Everest'in eteklerinde yaşamak... Ve donma riskinin! En azından yeti seni yemez! 🏔️" },
    { name: "Venezuela", population: 28435943, code: "ve", comment: "Angel Şelalesi'nin ülkesi... Ve hiperenflasyonun! En azından Maduro gibi olmazsın! 🌊" },
    { name: "Madagaskar", population: 27691018, code: "mg", comment: "Lemurların ülkesi! Yoksulluğun da! En azından King Julian gibi olursun! 🦊" },
    { name: "Kamerun", population: 26545863, code: "cm", comment: "Afrika'nın minyatürü... Ve iç savaşın! En azından Eto'o gibi olursun! 🌍" },
    { name: "Fildişi Sahili", population: 26378274, code: "ci", comment: "Kakao ve kahve cenneti... Ve yoksulluğun! En azından Drogba gibi olursun! 🍫" },
    { name: "Kuzey Kore", population: 25778816, code: "kp", comment: "Gizemli bir ülke... Ve açlığın! En azından Kim Jong-un gibi olursun! 🎭" },
    { name: "Avustralya", population: 25499884, code: "au", comment: "Kangurular ve koalalar... Ve ölümcül yılanların! En azından Aborjinleri öldürürsün! 🦘" },
    { name: "Sri Lanka", population: 21919000, code: "lk", comment: "Çay ve plajlar... Ve iç savaşın! En azından Tamil Kaplanları seni öldürmez! 🫖" },
    { name: "Romanya", population: 19237691, code: "ro", comment: "Dracula'nın ülkesi... Ve yolsuzluğun! En azından vampir olursun! 🧛" },
    { name: "Şili", population: 19116201, code: "cl", comment: "Şarap ve depremler... Ve Pinochet'in hayaletinin! En azından Allende gibi olmazsın! 🍷" },
    { name: "Kazakistan", population: 18754440, code: "kz", comment: "Bozkırlar ve nükleer test alanları! En azından Borat gibi olursun! ☢️" },
    { name: "Zimbabve", population: 14862924, code: "zw", comment: "Hiperenflasyon ve diktatörlük... İyi şanslar! En azından Mugabe gibi olursun! 💸" },
    { name: "Suriye", population: 17500658, code: "sy", comment: "Medeniyetler beşiği... Ve savaşın! En azından Esad gibi olursun! 🕌" },
    { name: "Küba", population: 11326616, code: "cu", comment: "Puro ve rom... Ve ambargonun! En azından Castro gibi olursun! 🚬" },
    { name: "Belarus", population: 9449323, code: "by", comment: "Son Avrupa diktatörlüğü... Ve soğuğun! En azından Lukaşenko gibi olursun! ❄️" },
    { name: "Libya", population: 6871292, code: "ly", comment: "Çöl ve petrol... Ve iç savaşın! En azından Kaddafi gibi olursun! 🏜️" },
    { name: "Lübnan", population: 6825442, code: "lb", comment: "Humus ve iç savaş... İyi şanslar! En azından Beyrut'ta patlamazsın! 🥙" },
    { name: "Ermenistan", population: 2963243, code: "am", comment: "Dağlar ve depremler... Ve komşuların! En azından soykırımı unutursun! ⛰️" },
    { name: "Kosova", population: 1935259, code: "xk", comment: "Yeni ülke... Ve eski düşmanların! En azından Sırplar seni öldürmez! 🏛️" },
    { name: "Karadağ", population: 621718, code: "me", comment: "Plajlar ve mafya... İyi şanslar! En azından Milo gibi olursun! 🏖️" },
    { name: "Maldivler", population: 540544, code: "mv", comment: "Cennet adaları... Ve yükselen deniz seviyesinin! En azından boğulursun! 🏝️" },
    { name: "Vatikan", population: 825, code: "va", comment: "En küçük ülke... Ve en büyük skandalların! En azından Papa olursun! ⛪" }
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

    const random = Math.random() * totalPopulation;
    let cumulativeWeight = 0;

    for (const country of availableCountries) {
        cumulativeWeight += country.population;
        if (random <= cumulativeWeight) {
            return country;
        }
    }

    return availableCountries[availableCountries.length - 1];
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