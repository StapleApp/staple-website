# Staple — Tanıtım & İndirme Sitesi

[Staple](https://github.com/) uygulamasının tanıtım/indirme (landing) sitesi.
Statik, hızlı ve SEO uyumlu. **Astro + Tailwind CSS v4** ile yazıldı; tek sayfa,
akıcı scroll, koyu tema.

## Teknoloji

- **Astro 5** — statik site üretimi (SSG), minimal JS
- **Tailwind CSS v4** — `@tailwindcss/vite` eklentisiyle
- **@astrojs/sitemap** — otomatik `sitemap-index.xml`
- Ada (island) bileşen / React yok — saf statik + küçük bir IntersectionObserver
  animasyonu dışında JS yok.

## Geliştirme

Node 18+ gerekir (test edildiği sürüm: Node 24).

```bash
npm install      # bağımlılıkları kur
npm run dev      # http://localhost:4321 geliştirme sunucusu
npm run build    # ./dist içine statik çıktı üret
npm run preview  # üretim çıktısını yerelde önizle
```

## Proje yapısı

```
staple-website/
├─ public/
│  ├─ staple-icon.png       # logo + favicon (zımba ikonu)
│  ├─ tile.png              # tekrarlı arka plan dokusu
│  ├─ profile-banner.png    # hero banner + og:image
│  ├─ robots.txt
│  └─ screenshots/          # ← ekran görüntülerini buraya koy (aşağıya bak)
├─ src/
│  ├─ config.ts             # ← DOLDURULACAK placeholder linkler burada
│  ├─ styles/global.css     # marka paleti (CSS değişkenleri) + Tailwind teması
│  ├─ layouts/Layout.astro  # <head>, SEO, OG/Twitter meta, animasyon scripti
│  ├─ components/
│  │  ├─ Header.astro       # sabit üst menü
│  │  ├─ Hero.astro         # başlık + 2 CTA + banner
│  │  ├─ Features.astro     # 8 özellik kartı (inline SVG ikonlar)
│  │  ├─ Screens.astro      # ekran görüntüsü bölümü (placeholder’lı)
│  │  ├─ Download.astro     # Windows / Web / (macOS·Linux yakında) kartları
│  │  ├─ Faq.astro          # <details> tabanlı SSS
│  │  └─ Footer.astro
│  └─ pages/index.astro     # bölümleri birleştiren tek sayfa
└─ astro.config.mjs         # site adresi + entegrasyonlar
```

## ⚠️ Doldurulacak placeholder’lar

Deploy etmeden önce aşağıdakileri güncelle:

### 1. `src/config.ts`
| Değişken | Ne? |
|---|---|
| `LINKS.GITHUB_RELEASES_URL` | Masaüstü sürümlerin (GitHub Releases) adresi |
| `LINKS.WEB_APP_URL` | Web uygulamasının canlı adresi |
| `LINKS.GITHUB_URL` | Ana GitHub repo adresi |
| `LINKS.PRIVACY_URL` | Gizlilik politikası (yoksa `#` kalabilir) |
| `RELEASE.version` | Sürüm no (ör. `v0.1.0`) |
| `RELEASE.sizeWindows` | İndirme boyutu (ör. `~64 MB`) |
| `RELEASE.windowsExe` / `windowsMsi` | İsteğe bağlı doğrudan `.exe`/`.msi` linkleri (boşsa Releases sayfasına gider) |

### 2. `astro.config.mjs`
- `site: 'https://staple.app'` → kendi alan adınla değiştir (sitemap ve kanonik URL’ler bunu kullanır).

### 3. `public/robots.txt`
- İçindeki `Sitemap:` satırını kendi alan adınla güncelle.

### 4. Ekran görüntüleri — `public/screenshots/`
Aşağıdaki dosyaları ekle (16:9 önerilir). Dosya yoksa site zarif bir
"yakında" yer tutucu gösterir, bozulmaz:
- `home.png` — sunucu/ana görünüm
- `chat.png` — mesajlaşma
- `voice.png` — sesli kanal + ekran paylaşımı

### 5. (İsteğe bağlı) og:image
Sosyal paylaşım görseli `SITE.ogImage` (`/profile-banner.png`) ile ayarlı.
1200×630 özel bir görsel koyup `src/config.ts` içinden değiştirebilirsin.

## Marka paleti

`src/styles/global.css` içinde CSS değişkenleri olarak tanımlı:

| Değişken | Renk | Kullanım |
|---|---|---|
| `--primary-bg` | `#222831` | ana zemin (koyu lacivert) |
| `--secondary-bg` | `#393E46` | kartlar / paneller (gri) |
| `--tertiary-bg` | `#ffbc1f` | CTA / vurgu (altın) |
| `--quaternary-bg` | `#fff3a1` | hover (açık sarı) |
| `--primary-text` | `#BBBBBB` | birincil metin |
| `--secondary-text` | `#DDDDDD` | ikincil metin |

Tailwind tarafında da `bg-primary`, `bg-secondary`, `text-gold`, `bg-gold-soft`,
`text-ink`, `text-ink-bright` yardımcı sınıfları olarak kullanılabilir.

## Deploy

Site tamamen statik (`dist/`). Herhangi bir statik barındırıcıya deploy edilebilir.

- **Vercel / Netlify:** Repo’yu bağla. Otomatik algılamazsa → Build: `npm run build`,
  Output: `dist`.
- **GitHub Pages:** `npm run build` sonrası `dist/` klasörünü yayınla
  (ör. `actions/deploy-pages` veya `gh-pages`). Alt yolda barındıracaksan
  `astro.config.mjs` içine `base: '/repo-adi'` ekle.

## Erişilebilirlik & performans

- Sadece koyu tema, yeterli kontrast, tüm görsellerde `alt` metni.
- Klavye ile gezilebilir; görünür odak halkaları.
- `prefers-reduced-motion` desteği (animasyonlar kapanır).
- Yatay taşma yok; geniş içerik kendi içinde ölçeklenir.
