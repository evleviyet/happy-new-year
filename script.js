// Hediye verileri
const GIFTS = {
    'default': {
        title: 'Özel Yeni Yıl Hediyesi',
        gift: 'Sihirli Dilek Kutusu',
        description: '2025 yılında tüm dileklerinizin gerçekleşmesi için özel hazırlanmış sihirli kutu',
        color: 'from-blue-500 to-purple-500'
    },
    'friend1': {
        title: 'Sanat Tutkunu',
        gift: 'Sınırsız İlham Paleti',
        description: '2025 boyunca sanatsal yaratıcılığınızı zirveye taşıyacak sihirli palet',
        color: 'from-pink-500 to-rose-500'
    },
    'friend2': {
        title: 'Müzik Sever',
        gift: 'Harmonik Başarı Notaları',
        description: 'Yeni yılda müzikle dolu başarılı anlar yaşamanız için özel beste',
        color: 'from-green-500 to-teal-500'
    },
    'friend3': {
        title: 'Kitapsever',
        gift: 'Sihirli Kütüphane Anahtarı',
        description: '2025\'te tüm kitapların kapılarını açacak özel anahtar',
        color: 'from-yellow-500 to-orange-500'
    },
    'friend4': {
        title: 'Gezgin Ruhu',
        gift: 'Dünya Gezgini Pusulası',
        description: 'Yeni yılda sizi en güzel maceralara götürecek sihirli pusula',
        color: 'from-cyan-500 to-blue-500'
    },
    'friend5': {
        title: 'Teknoloji Meraklısı',
        gift: 'Dijital Sihir Kutusu',
        description: '2025\'in en yenilikçi fikirlerini size getirecek özel cihaz',
        color: 'from-indigo-500 to-purple-500'
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
