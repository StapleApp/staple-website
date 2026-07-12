/**
 * Site geneli sabitler ve DOLDURULACAK placeholder'lar.
 * Deploy etmeden önce aşağıdaki değerleri güncelle.
 */
export const SITE = {
  name: 'Staple',
  title: 'Staple — Konuş, sesli takıl, ekran paylaş. Hepsi tek yerde.',
  description:
    'Staple; sunucular, ses/metin kanalları, birebir mesajlaşma, sesli sohbet ve ekran paylaşımını tek çatı altında toplayan bir topluluk uygulaması. Windows için indir ya da web’de anında aç.',
  // og:image için kullanılacak görsel (public/ altında). 1200x630 önerilir.
  ogImage: '/profile-banner.png',
  lang: 'tr',
};

/**
 * PLACEHOLDER LİNKLER — kendi adreslerinle değiştir.
 */
export const LINKS = {
  // Masaüstü sürüm indirmeleri (GitHub Releases sayfası)
  GITHUB_RELEASES_URL: 'https://github.com/StapleApp/client/releases',
  // Web uygulamasının canlı adresi
  WEB_APP_URL: 'https://web.stapleapp.com',
  // Ana GitHub repo adresi
  GITHUB_URL: 'https://github.com/StapleApp',
  // Gizlilik politikası (henüz yoksa # bırakılabilir)
  PRIVACY_URL: '#',
};

/**
 * Masaüstü sürüm bilgileri — PLACEHOLDER.
 */
export const RELEASE = {
  version: 'v0.1.2',
  // İndirme boyutu (yaklaşık).
  sizeWindows: '~3.75 MB',
  sizeMac: '~3.9 MB',
  // Doğrudan .exe ve .dmg bağlantıları. GitHub'ın "latest" yönlendirmesi HER ZAMAN
  // en son yayınlanan release'in installer'ını indirir; yeni sürüm çıkınca
  // bu linkleri değiştirmene gerek yok.
  windowsExe:
    'https://github.com/StapleApp/client/releases/latest/download/Staple-Setup.exe',
  macDmg:
    'https://github.com/StapleApp/client/releases/latest/download/Staple.dmg',
  androidApk:
    'https://github.com/StapleApp/client/releases/latest/download/Staple.apk',
  iosZip:
    'https://github.com/StapleApp/client/releases/latest/download/Staple-iOS.zip',
};
