// Hediye verileri
const GIFTS = {
    'default': {
        title: 'Özel Yeni Yıl Hediyesi',
        gift: 'Sihirli Dilek Kutusu',
        description: '2025 yılında tüm dileklerinizin gerçekleşmesi için özel hazırlanmış sihirli kutu',
        color: 'from-blue-500 to-purple-500'
    },
    'artist': {
        title: 'Sanat Tutkunu',
        gift: 'Sınırsız İlham Paleti',
        description: '2025 boyunca sanatsal yaratıcılığınızı zirveye taşıyacak sihirli palet',
        color: 'from-pink-500 to-rose-500'
    },
    'musician': {
        title: 'Müzik Sever',
        gift: 'Harmonik Başarı Notaları',
        description: 'Yeni yılda müzikle dolu başarılı anlar yaşamanız için özel beste',
        color: 'from-green-500 to-teal-500'
    },
    'writer': {
        title: 'Kitapsever',
        gift: 'Sihirli Kütüphane Anahtarı',
        description: '2025\'te tüm kitapların kapılarını açacak özel anahtar',
        color: 'from-yellow-500 to-orange-500'
    },
    'traveler': {
        title: 'Gezgin Ruhu',
        gift: 'Dünya Gezgini Pusulası',
        description: 'Yeni yılda sizi en güzel maceralara götürecek sihirli pusula',
        color: 'from-cyan-500 to-blue-500'
    },
    'tech': {
        title: 'Teknoloji Meraklısı',
        gift: 'Dijital Sihir Kutusu',
        description: '2025\'in en yenilikçi fikirlerini size getirecek özel cihaz',
        color: 'from-indigo-500 to-purple-500'
    },
    'doctor': {
        title: 'Doktor',
        gift: 'Sağlık İksiri',
        description: '2025 boyunca size ve hastalarınıza şifa getirecek sihirli iksir',
        color: 'from-red-500 to-pink-500'
    },
    'engineer': {
        title: 'Mühendis',
        gift: 'İnovasyon Kitabı',
        description: '2025\'te en yenilikçi projeleri hayata geçirmenizi sağlayacak özel kitap',
        color: 'from-blue-500 to-green-500'
    },
    'teacher': {
        title: 'Öğretmen',
        gift: 'Bilgi Hazinesi',
        description: '2025 boyunca öğrencilerinize ilham verecek sihirli bilgi hazinesi',
        color: 'from-yellow-500 to-red-500'
    },
    'lawyer': {
        title: 'Avukat',
        gift: 'Adalet Kalkanı',
        description: '2025\'te adaleti savunmanız için özel güç verecek sihirli kalkan',
        color: 'from-gray-500 to-black-500'
    },
    'architect': {
        title: 'Mimar',
        gift: 'Tasarım Kitabı',
        description: '2025\'te en yaratıcı projeleri tasarlamanız için özel kitap',
        color: 'from-cyan-500 to-indigo-500'
    },
    'scientist': {
        title: 'Bilim İnsanı',
        gift: 'Keşif Mikroskobu',
        description: '2025 boyunca en büyük keşifleri yapmanızı sağlayacak sihirli mikroskop',
        color: 'from-green-500 to-blue-500'
    },
    'pilot': {
        title: 'Pilot',
        gift: 'Uçuş Haritası',
        description: '2025\'te en güvenli ve keyifli uçuşları yapmanızı sağlayacak sihirli harita',
        color: 'from-blue-500 to-purple-500'
    },
    'nurse': {
        title: 'Hemşire',
        gift: 'Şifa Torbası',
        description: '2025 boyunca hastalarınıza şifa dağıtmanızı sağlayacak sihirli torba',
        color: 'from-pink-500 to-red-500'
    },
    'firefighter': {
        title: 'İtfaiyeci',
        gift: 'Kahraman Madalyası',
        description: '2025\'te cesaretinizi ve kahramanlığınızı onurlandıracak özel madalya',
        color: 'from-red-500 to-orange-500'
    },
    'police': {
        title: 'Polis',
        gift: 'Güvenlik Rozeti',
        description: '2025 boyunca güvenliği sağlamanız için özel güç verecek sihirli rozet',
        color: 'from-blue-500 to-black-500'
    },
    'mechanic': {
        title: 'Tamirci',
        gift: 'Sihirli Alet Kutusu',
        description: '2025\'te her türlü tamiratı kolayca yapmanızı sağlayacak sihirli alet kutusu, şirket',
        color: 'from-gray-500 to-blue-500'
    },
    'civil_aviation': {
        title: 'Sivil Havacı',
        gift: 'Sihirli Seyahat Bileti',
        description: '2025 boyunca sizi en güzel destinasyonlara götürecek sihirli seyahat bileti',
        color: 'from-blue-500 to-green-500'
    },
    'postman': {
        title: 'Postacı',
        gift: 'Sihirli Posta Çantası',
        description: '2025\'te tüm postaları güvenle ve hızlıca dağıtmanızı sağlayacak sihirli çanta',
        color: 'from-yellow-500 to-orange-500'
    }
};

// Lucide ikonlarını başlat
lucide.createIcons();

// URL'den hediye tipini al
const urlParams = new URLSearchParams(window.location.search);
const giftType = urlParams.get('type') || 'default';
const currentGift = GIFTS[giftType] || GIFTS.default;

// Geri sayım fonksiyonu
function updateCountdown() {
    const now = new Date();
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0);
    const diff = midnight - now;

    if (diff > 0) {
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / 1000 / 60) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    } else {
        revealGift();
    }
}

// Hediyeyi göster
function revealGift() {
    document.getElementById('countdown').style.display = 'none';
    document.getElementById('gift-box').style.display = 'none';
    
    const revealedGift = document.getElementById('revealed-gift');
    revealedGift.classList.remove('hidden');
    
    const giftTitle = revealedGift.querySelector('.gift-content .text-2xl');
    const giftDesc = revealedGift.querySelector('.gift-content p');
    
    giftTitle.textContent = currentGift.gift;
    giftDesc.textContent = currentGift.description;
    
    const giftContent = revealedGift.querySelector('.gift-content');
    giftContent.className = `gift-content p-6 rounded-lg bg-gradient-to-r ${currentGift.color}`;
}

// Test modu için
const testMode = urlParams.get('test') === 'true';
if (testMode) {
    setTimeout(revealGift, 3000); // 3 saniye sonra hediyeyi göster
} else {
    // Normal geri sayım
    setInterval(updateCountdown, 1000);
    updateCountdown();
}

// Hediye kutusu tıklama animasyonu
const giftBox = document.getElementById('gift-box');
giftBox.addEventListener('click', () => {
    giftBox.style.transform = 'scale(0.95)';
    setTimeout(() => {
        giftBox.style.transform = 'scale(1)';
    }, 200);
});
