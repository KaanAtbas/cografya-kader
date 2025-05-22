// Ülke ve nüfus verileri (2024 tahmini veriler)
const countries = [
    { name: "Çin", population: 1411750000, code: "cn", comment: "" },
    { name: "Hindistan", population: 1380004385, code: "in", comment: "" },
    { name: "ABD", population: 331002651, code: "us", comment: "" },
    { name: "Endonezya", population: 273523615, code: "id", comment: "" },
    { name: "Pakistan", population: 220892340, code: "pk", comment: "" },
    { name: "Brezilya", population: 212559417, code: "br", comment: "" },
    { name: "Nijerya", population: 206139589, code: "ng", comment: "" },
    { name: "Bangladeş", population: 164689383, code: "bd", comment: "" },
    { name: "Rusya", population: 145912025, code: "ru", comment: "" },
    { name: "Meksika", population: 128932753, code: "mx", comment: "" },
    { name: "Japonya", population: 126476461, code: "jp", comment: "" },
    { name: "Etiyopya", population: 114963588, code: "et", comment: "" },
    { name: "Filipinler", population: 109581078, code: "ph", comment: "" },
    { name: "Mısır", population: 102334404, code: "eg", comment: "" },
    { name: "Vietnam", population: 97338579, code: "vn", comment: "" },
    { name: "Türkiye", population: 84339067, code: "tr", comment: "" },
    { name: "İran", population: 83992949, code: "ir", comment: "" },
    { name: "Almanya", population: 83783942, code: "de", comment: "" },
    { name: "Tayland", population: 69799978, code: "th", comment: "" },
    { name: "Birleşik Krallık", population: 67886011, code: "gb", comment: "" },
    { name: "Fransa", population: 65273511, code: "fr", comment: "" },
    { name: "İtalya", population: 60461826, code: "it", comment: "" },
    { name: "Güney Afrika", population: 59308690, code: "za", comment: "" },
    { name: "Tanzanya", population: 59734218, code: "tz", comment: "" },
    { name: "Myanmar", population: 54409800, code: "mm", comment: "" },
    { name: "Kenya", population: 53771296, code: "ke", comment: "" },
    { name: "Güney Kore", population: 51269185, code: "kr", comment: "" },
    { name: "Kolombiya", population: 50882891, code: "co", comment: "" },
    { name: "İspanya", population: 46754778, code: "es", comment: "" },
    { name: "Uganda", population: 45741007, code: "ug", comment: "" },
    { name: "Arjantin", population: 45195774, code: "ar", comment: "" },
    { name: "Cezayir", population: 44616624, code: "dz", comment: "" },
    { name: "Sudan", population: 43849260, code: "sd", comment: "" },
    { name: "Ukrayna", population: 43733762, code: "ua", comment: "" },
    { name: "Irak", population: 41179353, code: "iq", comment: "" },
    { name: "Afganistan", population: 38928346, code: "af", comment: "" },
    { name: "Polonya", population: 37846611, code: "pl", comment: "" },
    { name: "Kanada", population: 37742154, code: "ca", comment: "" },
    { name: "Fas", population: 36910560, code: "ma", comment: "" },
    { name: "Suudi Arabistan", population: 34813871, code: "sa", comment: "" },
    { name: "Özbekistan", population: 34232050, code: "uz", comment: "" },
    { name: "Peru", population: 32971854, code: "pe", comment: "" },
    { name: "Angola", population: 32866272, code: "ao", comment: "" },
    { name: "Malezya", population: 32365999, code: "my", comment: "" },
    { name: "Mozambik", population: 31255435, code: "mz", comment: "" },
    { name: "Gana", population: 31072940, code: "gh", comment: "" },
    { name: "Yemen", population: 29825964, code: "ye", comment: "" },
    { name: "Nepal", population: 29136808, code: "np", comment: "" },
    { name: "Venezuela", population: 28435943, code: "ve", comment: "" },
    { name: "Madagaskar", population: 27691018, code: "mg", comment: "" },
    { name: "Kamerun", population: 26545863, code: "cm", comment: "" },
    { name: "Fildişi Sahili", population: 26378274, code: "ci", comment: "" },
    { name: "Kuzey Kore", population: 25778816, code: "kp", comment: "" },
    { name: "Avustralya", population: 25499884, code: "au", comment: "" },
    { name: "Sri Lanka", population: 21919000, code: "lk", comment: "" },
    { name: "Romanya", population: 19237691, code: "ro", comment: "" },
    { name: "Şili", population: 19116201, code: "cl", comment: "" },
    { name: "Kazakistan", population: 18754440, code: "kz", comment: "" },
    { name: "Zimbabve", population: 14862924, code: "zw", comment: "" },
    { name: "Suriye", population: 17500658, code: "sy", comment: "" },
    { name: "Küba", population: 11326616, code: "cu", comment: "" },
    { name: "Belarus", population: 9449323, code: "by", comment: "" },
    { name: "Libya", population: 6871292, code: "ly", comment: "" },
    { name: "Lübnan", population: 6825442, code: "lb", comment: "" },
    { name: "Ermenistan", population: 2963243, code: "am", comment: "" },
    { name: "Kosova", population: 1935259, code: "xk", comment: "" },
    { name: "Karadağ", population: 621718, code: "me", comment: "" },
    { name: "Maldivler", population: 540544, code: "mv", comment: "" },
    { name: "Vatikan", population: 825, code: "va", comment: "" },
    { name: "İsveç", population: 10353442, code: "se", comment: "" },
    { name: "Norveç", population: 5421241, code: "no", comment: "" },
    { name: "Finlandiya", population: 5540720, code: "fi", comment: "" },
    { name: "Danimarka", population: 5831404, code: "dk", comment: "" },
    { name: "Hollanda", population: 17441139, code: "nl", comment: "" },
    { name: "Belçika", population: 11589623, code: "be", comment: "" },
    { name: "İsviçre", population: 8654622, code: "ch", comment: "" },
    { name: "Avusturya", population: 9006398, code: "at", comment: "" },
    { name: "Portekiz", population: 10196709, code: "pt", comment: "" },
    { name: "Yunanistan", population: 10423054, code: "gr", comment: "" },
    { name: "Macaristan", population: 9660351, code: "hu", comment: "" },
    { name: "Çek Cumhuriyeti", population: 10708981, code: "cz", comment: "" },
    { name: "Slovakya", population: 5459642, code: "sk", comment: "" },
    { name: "Slovenya", population: 2078938, code: "si", comment: "" },
    { name: "Hırvatistan", population: 4105267, code: "hr", comment: "" },
    { name: "Sırbistan", population: 6908224, code: "rs", comment: "" },
    { name: "Bulgaristan", population: 6948445, code: "bg", comment: "" },
    { name: "Moldova", population: 2617820, code: "md", comment: "" },
    { name: "Estonya", population: 1326535, code: "ee", comment: "" },
    { name: "Letonya", population: 1886198, code: "lv", comment: "" },
    { name: "Litvanya", population: 2722289, code: "lt", comment: "" },
    { name: "Tayvan", population: 23503349, code: "tw", comment: "" },
    { name: "Hong Kong", population: 7496981, code: "hk", comment: "" },
    { name: "Singapur", population: 5685807, code: "sg", comment: "" },
    { name: "Kamboçya", population: 16718965, code: "kh", comment: "" },
    { name: "Laos", population: 7275560, code: "la", comment: "" },
    { name: "Brunei", population: 437479, code: "bn", comment: "" },
    { name: "Doğu Timor", population: 1318445, code: "tl", comment: "" },
    { name: "Ruanda", population: 12952218, code: "rw", comment: "" },
    { name: "Burundi", population: 11890784, code: "bi", comment: "" },
    { name: "Kongo Demokratik Cumhuriyeti", population: 89561403, code: "cd", comment: "" },
    { name: "Kongo Cumhuriyeti", population: 5518087, code: "cg", comment: "" },
    { name: "Gabon", population: 2225734, code: "ga", comment: "" },
    { name: "Ekvator Ginesi", population: 1402985, code: "gq", comment: "" },
    { name: "São Tomé ve Príncipe", population: 219159, code: "st", comment: "" },
    { name: "Namibya", population: 2540905, code: "na", comment: "" },
    { name: "Botsvana", population: 2351627, code: "bw", comment: "" },
    { name: "Malavi", population: 19129952, code: "mw", comment: "" },
    { name: "Zambiya", population: 18383955, code: "zm", comment: "" },
    { name: "Komorlar", population: 869601, code: "km", comment: "" },
    { name: "Mauritius", population: 1271768, code: "mu", comment: "" },
    { name: "Seyşeller", population: 98347, code: "sc", comment: "" },
    { name: "Cape Verde", population: 555987, code: "cv", comment: "" },
    { name: "Gine-Bissau", population: 1968001, code: "gw", comment: "" },
    { name: "Gine", population: 13132795, code: "gn", comment: "" },
    { name: "Sierra Leone", population: 7976983, code: "sl", comment: "" },
    { name: "Liberya", population: 5057681, code: "lr", comment: "" },
    { name: "Togo", population: 8278724, code: "tg", comment: "" },
    { name: "Benin", population: 12123200, code: "bj", comment: "" },
    { name: "Nijer", population: 24206644, code: "ne", comment: "" },
    { name: "Burkina Faso", population: 20903273, code: "bf", comment: "" },
    { name: "Mali", population: 20250833, code: "ml", comment: "" },
    { name: "Senegal", population: 16743927, code: "sn", comment: "" },
    { name: "Gambiya", population: 2416668, code: "gm", comment: "" },
    { name: "İzlanda", population: 341243, code: "is", comment: "" },
    { name: "Lüksemburg", population: 625978, code: "lu", comment: "" },
    { name: "Malta", population: 441543, code: "mt", comment: "" },
    { name: "Andorra", population: 77265, code: "ad", comment: "" },
    { name: "Lihtenştayn", population: 38128, code: "li", comment: "" },
    { name: "Monako", population: 39242, code: "mc", comment: "" },
    { name: "San Marino", population: 33931, code: "sm", comment: "" },
    { name: "Palau", population: 18094, code: "pw", comment: "" },
    { name: "Tuvalu", population: 11792, code: "tv", comment: "" },
    { name: "Nauru", population: 10084, code: "nr", comment: "" },
    { name: "Vatikan", population: 825, code: "va", comment: "" }
];

// Oyun durumu
let gameState = {
    remainingTries: 3,
    selectedCountries: [] // Seçilen ülkeleri saklamak için dizi
};

// Toplam dünya nüfusu
const totalPopulation = countries.reduce((sum, country) => sum + country.population, 0);

// Nüfusa göre ağırlıklı rastgele seçim fonksiyonu
function weightedRandomSelection() {
    const random = Math.random() * totalPopulation;
    let cumulativeWeight = 0;

    for (const country of countries) {
        cumulativeWeight += country.population;
        if (random <= cumulativeWeight) {
            return country;
        }
    }

    return countries[0];
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
        alert('Tüm haklarınız bitti! Sonuçlarınızı görebilirsiniz.');
        return;
    }

    // Buton animasyonu
    restartButton.style.transform = 'scale(0.95)';
    setTimeout(() => {
        restartButton.style.transform = 'scale(1)';
    }, 100);

    const selectedCountry = weightedRandomSelection();
    gameState.remainingTries--;
    
    // Seçilen ülkeyi kaydet
    gameState.selectedCountries.push(selectedCountry);
    
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
            showResults();
        }, 500);
    }
});

// Sonuçları gösteren fonksiyon
function showResults() {
    // Mevcut ülke bilgilerini gizle
    countryInfo.style.display = 'none';
    
    // Sonuç container'ını oluştur
    const resultContainer = document.createElement('div');
    resultContainer.className = 'results-container';
    
    // Başlık
    const title = document.createElement('h2');
    title.textContent = 'sonuçlar:';
    resultContainer.appendChild(title);
    
    // Ülkeler container'ı
    const countriesContainer = document.createElement('div');
    countriesContainer.className = 'countries-grid';
    
    // Her ülke için kart oluştur
    gameState.selectedCountries.forEach(country => {
        const countryCard = document.createElement('div');
        countryCard.className = 'country-card';
        
        const flag = document.createElement('div');
        flag.className = 'flag';
        flag.style.backgroundImage = `url(https://flagcdn.com/w320/${country.code}.png)`;
        
        const name = document.createElement('div');
        name.className = 'country-name';
        name.textContent = country.name;
        
        countryCard.appendChild(flag);
        countryCard.appendChild(name);
        countriesContainer.appendChild(countryCard);
    });
    
    resultContainer.appendChild(countriesContainer);
    
    // Sonuç div'ini temizle ve yeni içeriği ekle
    resultDiv.innerHTML = '';
    resultDiv.appendChild(resultContainer);
    
    // Sonuç div'ini göster
    resultDiv.style.display = 'block';
}

// İlk oyun durumunu göster
updateGameState(); 