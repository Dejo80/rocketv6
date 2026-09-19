/* ==========================================================================
   RocketTV — Premium IPTV
   main.js — router + i18n (SR / EN / DE / TR) + interakcije
   ========================================================================== */
"use strict";

/* --------------------------------------------------------------------------
   Konstante / kontakt
-------------------------------------------------------------------------- */
const CONTACT = {
  waNumber: "381641234567",
  waDisplay: "+381 64 123 4567",
  telegram: "rockettv_podrska",
  email: "podrska@rockettv.rs",
};

const LOCALES = { sr: "sr-Latn-RS", en: "en-US", de: "de-DE", tr: "tr-TR" };

const PLANS = [
  { id: "1m", months: 1, price: 10, per: 10.0, save: 0, badge: null },
  { id: "3m", months: 3, price: 25, per: 8.33, save: 17, badge: "popular" },
  { id: "6m", months: 6, price: 40, per: 6.67, save: 33, badge: null },
  { id: "12m", months: 12, price: 60, per: 5.0, save: 50, badge: "best" },
];

const CATS = ["sport", "filmovi", "serije", "deca", "vesti", "dokumentarci", "domaci", "muzika"];

const CHANNELS = [
  { n: "Arena Sport 1", c: "sport", q: "4K", r: "Balkan" },
  { n: "Arena Sport 2", c: "sport", q: "FHD", r: "Balkan" },
  { n: "Arena Sport 3", c: "sport", q: "FHD", r: "Balkan" },
  { n: "Arena Sport 1 Premium", c: "sport", q: "4K", r: "Balkan" },
  { n: "Sport Klub 1", c: "sport", q: "4K", r: "Balkan" },
  { n: "Sport Klub 2", c: "sport", q: "FHD", r: "Balkan" },
  { n: "Sport Klub 3", c: "sport", q: "FHD", r: "Balkan" },
  { n: "Sport Klub Golf", c: "sport", q: "HD", r: "Balkan" },
  { n: "Sky Sport Premier League", c: "sport", q: "4K", r: "UK" },
  { n: "Sky Sport F1", c: "sport", q: "4K", r: "UK" },
  { n: "Sky Sport Bundesliga", c: "sport", q: "4K", r: "DE" },
  { n: "ESPN", c: "sport", q: "FHD", r: "USA" },
  { n: "ESPN 2", c: "sport", q: "HD", r: "USA" },
  { n: "beIN Sports 1", c: "sport", q: "4K", r: "TR" },
  { n: "beIN Sports 2", c: "sport", q: "FHD", r: "TR" },
  { n: "DAZN 1", c: "sport", q: "4K", r: "DE" },
  { n: "DAZN 2", c: "sport", q: "FHD", r: "DE" },
  { n: "Eurosport 1", c: "sport", q: "FHD", r: "EU" },
  { n: "Eurosport 2", c: "sport", q: "HD", r: "EU" },
  { n: "NBA TV", c: "sport", q: "FHD", r: "USA" },
  { n: "TRT Spor", c: "sport", q: "FHD", r: "TR" },
  { n: "S Sport", c: "sport", q: "FHD", r: "TR" },
  { n: "MUTV", c: "sport", q: "HD", r: "UK" },

  { n: "HBO", c: "filmovi", q: "4K", r: "Balkan" },
  { n: "HBO 2", c: "filmovi", q: "FHD", r: "Balkan" },
  { n: "HBO 3", c: "filmovi", q: "FHD", r: "Balkan" },
  { n: "Cinemax", c: "filmovi", q: "FHD", r: "Balkan" },
  { n: "Cinemax 2", c: "filmovi", q: "HD", r: "Balkan" },
  { n: "AXN Movies", c: "filmovi", q: "FHD", r: "Balkan" },
  { n: "Sky Cinema Premiere", c: "filmovi", q: "4K", r: "UK" },
  { n: "TNT Film", c: "filmovi", q: "FHD", r: "USA" },
  { n: "RTL Cinema", c: "filmovi", q: "FHD", r: "DE" },
  { n: "FilmBox", c: "filmovi", q: "HD", r: "EU" },
  { n: "Pink Film", c: "filmovi", q: "FHD", r: "Balkan" },
  { n: "TRT Türk", c: "filmovi", q: "HD", r: "TR" },

  { n: "AXN", c: "serije", q: "FHD", r: "Balkan" },
  { n: "AXN Spin", c: "serije", q: "HD", r: "Balkan" },
  { n: "Fox Life", c: "serije", q: "FHD", r: "Balkan" },
  { n: "Sky Atlantic", c: "serije", q: "4K", r: "UK" },
  { n: "Comedy Central", c: "serije", q: "FHD", r: "EU" },
  { n: "TLC", c: "serije", q: "FHD", r: "EU" },
  { n: "Diva", c: "serije", q: "HD", r: "EU" },
  { n: "Pink Serije", c: "serije", q: "FHD", r: "Balkan" },

  { n: "Cartoon Network", c: "deca", q: "FHD", r: "Balkan" },
  { n: "Nickelodeon", c: "deca", q: "FHD", r: "Balkan" },
  { n: "Nick Jr.", c: "deca", q: "HD", r: "Balkan" },
  { n: "Boomerang", c: "deca", q: "HD", r: "EU" },
  { n: "Disney Channel", c: "deca", q: "FHD", r: "EU" },
  { n: "Disney Junior", c: "deca", q: "HD", r: "EU" },
  { n: "Baby TV", c: "deca", q: "HD", r: "EU" },
  { n: "Minika Çocuk", c: "deca", q: "HD", r: "TR" },

  { n: "N1", c: "vesti", q: "FHD", r: "Balkan" },
  { n: "Al Jazeera Balkans", c: "vesti", q: "FHD", r: "Balkan" },
  { n: "Euronews Srbija", c: "vesti", q: "HD", r: "Balkan" },
  { n: "CNN International", c: "vesti", q: "FHD", r: "USA" },
  { n: "BBC World News", c: "vesti", q: "FHD", r: "UK" },
  { n: "Bloomberg", c: "vesti", q: "HD", r: "USA" },
  { n: "Al Jazeera English", c: "vesti", q: "FHD", r: "EU" },
  { n: "DW", c: "vesti", q: "FHD", r: "DE" },
  { n: "TRT World", c: "vesti", q: "FHD", r: "TR" },
  { n: "HRT 4", c: "vesti", q: "HD", r: "Balkan" },

  { n: "National Geographic", c: "dokumentarci", q: "4K", r: "Balkan" },
  { n: "Nat Geo Wild", c: "dokumentarci", q: "FHD", r: "EU" },
  { n: "Discovery Channel", c: "dokumentarci", q: "FHD", r: "Balkan" },
  { n: "Animal Planet", c: "dokumentarci", q: "FHD", r: "EU" },
  { n: "History", c: "dokumentarci", q: "FHD", r: "EU" },
  { n: "History 2", c: "dokumentarci", q: "HD", r: "EU" },
  { n: "Viasat Nature", c: "dokumentarci", q: "HD", r: "EU" },
  { n: "DocuBox", c: "dokumentarci", q: "HD", r: "EU" },

  { n: "RTS 1", c: "domaci", q: "4K", r: "Balkan" },
  { n: "RTS 2", c: "domaci", q: "FHD", r: "Balkan" },
  { n: "Pink", c: "domaci", q: "FHD", r: "Balkan" },
  { n: "Prva", c: "domaci", q: "FHD", r: "Balkan" },
  { n: "Happy TV", c: "domaci", q: "FHD", r: "Balkan" },
  { n: "B92", c: "domaci", q: "HD", r: "Balkan" },
  { n: "HRT 1", c: "domaci", q: "FHD", r: "Balkan" },
  { n: "Nova TV", c: "domaci", q: "FHD", r: "Balkan" },
  { n: "Federalna TV", c: "domaci", q: "HD", r: "Balkan" },
  { n: "Hayat TV", c: "domaci", q: "HD", r: "Balkan" },

  { n: "MTV", c: "muzika", q: "FHD", r: "EU" },
  { n: "VH1", c: "muzika", q: "HD", r: "EU" },
  { n: "Mezzo", c: "muzika", q: "HD", r: "EU" },
  { n: "Trace Urban", c: "muzika", q: "HD", r: "EU" },
  { n: "Deluxe Music", c: "muzika", q: "FHD", r: "DE" },
  { n: "Pink Music", c: "muzika", q: "FHD", r: "Balkan" },
  { n: "CMC", c: "muzika", q: "FHD", r: "Balkan" },
  { n: "TRT Müzik", c: "muzika", q: "HD", r: "TR" },
];

const IMAGES = {
  hero: "https://images-assets.nasa.gov/image/sts129-s-069/sts129-s-069~large.jpg",
  space: "https://images.pexels.com/photos/1477156/pexels-photo-1477156.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  sport: "https://images.pexels.com/photos/35898730/pexels-photo-35898730.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  filmovi: "https://images.pexels.com/photos/7991318/pexels-photo-7991318.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  serije: "https://images.pexels.com/photos/3811867/pexels-photo-3811867.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  deca: "https://images.pexels.com/photos/4089661/pexels-photo-4089661.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  vesti: "https://images.pexels.com/photos/39332193/pexels-photo-39332193.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  dokumentarci: "https://images.pexels.com/photos/28623688/pexels-photo-28623688.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  av1: "https://images.pexels.com/photos/6102841/pexels-photo-6102841.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  av2: "https://images.pexels.com/photos/6497114/pexels-photo-6497114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  av3: "https://images.pexels.com/photos/39420877/pexels-photo-39420877.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
};

const MARQUEE = [
  ["Arena Sport 1", "Sport Klub", "Sky Sport", "ESPN", "beIN Sports", "DAZN", "Eurosport", "NBA TV", "HBO", "Cinemax", "RTL", "ProSieben"],
  ["RTS 1", "Pink", "Prva", "N1", "CNN", "BBC", "Nat Geo", "Discovery", "Cartoon Network", "Nickelodeon", "TRT 1", "Show TV"],
];

/* --------------------------------------------------------------------------
   i18n rečnik
-------------------------------------------------------------------------- */
const I18N = {
  /* ================= SRPSKI ================= */
  sr: {
    langName: "Srpski",
    nav: { home: "Početna", channels: "Kanali", packages: "Paketi", support: "Podrška", terms: "Uslovi", trial: "24h trial" },
    hero: {
      badge: "Sezona 2026/27 · svi sportovi uključeni",
      h1a: "Sva", h1b: "televizija.", h1c: "Jedna pretplata.",
      sub: "28.000+ kanala, 150.000 filmova i serija, 4K sport bez seckanja. Aktivacija za 5 minuta — na TV-u, telefonu, Fire Sticku i svemu između.",
      cta1: "Godišnji paket · 60€",
      cta2: "Zatraži 24h trial",
      trust: ["Bez ugovora", "Anti-freeze serveri", "Podrška 24/7"],
      live: "Uživo",
      match: "Liga šampiona · 21:00",
      buffer: "Baferovanje: 0 s",
      chipLive: "4K uživo",
      chipVod: "+150.000 VOD",
      chipEpg: "EPG · 7 dana",
      scroll: "Skroluj",
    },
    stats: ["Live kanala", "Filmova i serija", "Uptime", "Ultra HD"],
    why: {
      eyebrow: "ZAŠTO ROCKETTV",
      title: "Nismo kablovska sa novim logom.",
      sub: "Gradili smo servis oko sporta, filma i brzine — pa tek onda oko cene.",
      items: [
        { icon: "monitor-play", t: "4K Ultra HD", d: "Gledaj utakmice, premijere i serije u kristalnom 4K i FHD kvalitetu, bez kompromisa." },
        { icon: "zap", t: "Anti-freeze mreža", d: "Višestruki serveri i load-balancing. Buffering ostaje u prošlosti — čak i u derbiju." },
        { icon: "calendar-clock", t: "EPG i catch-up", d: "Pun TV vodič i vraćanje emisija do 7 dana unazad. Ništa ti neće promaknuti." },
        { icon: "trophy", t: "Svi sportovi + PPV", d: "Liga šampiona, Premier liga, NBA, F1, UFC, Arena Sport, Sport Klub — bez dodatnih pretplata." },
        { icon: "clapperboard", t: "VOD biblioteka", d: "Najnoviji filmovi, kompletne sezone serija i dečiji sadržaj — dostupni odmah, on-demand." },
        { icon: "smartphone", t: "Svi uređaji", d: "Smart TV, Fire Stick, Android, iPhone, MAG, Windows, laptop. Jedan nalog, tvoj ritam." },
        { icon: "rocket", t: "Brza aktivacija", d: "Platiš — i za pet minuta stižu podaci. Nema tehničara, nema kablova, nema čekanja." },
        { icon: "headphones", t: "Podrška 24/7", d: "Pravi ljudi na WhatsApp-u i Telegramu, na srpskom, u bilo koje doba dana i noći." },
      ],
    },
    cats: {
      eyebrow: "SADRŽAJ",
      title: "Sve što voliš da gledaš. Na jednom mestu.",
      sub: "Od derbija do premijere — pokriven je svaki žanr.",
      items: [
        { key: "sport", count: "1.200+", unit: "kanala", d: "Arena, SK, ESPN, Sky, BeIN, DAZN i svi PPV prenosi." },
        { key: "filmovi", count: "85.000+", unit: "naslova", d: "Holivud, Evropa, premijere i klasici u 4K." },
        { key: "serije", count: "65.000+", unit: "epizoda", d: "Kompletne sezone, odmah, bez čekanja nove nedelje." },
        { key: "deca", count: "400+", unit: "kanala", d: "Disney, Nick, Cartoon Network i edukativni program." },
        { key: "vesti", count: "300+", unit: "kanala", d: "N1, CNN, BBC, Al Jazeera, Bloomberg, regionalne mreže." },
        { key: "dokumentarci", count: "250+", unit: "kanala", d: "NatGeo, Discovery, History, Animal Planet." },
      ],
    },
    catNames: { sport: "Sport", filmovi: "Filmovi", serije: "Serije", deca: "Deca", vesti: "Vesti", dokumentarci: "Dokumentarci", domaci: "Domaći", muzika: "Muzika" },
    devices: {
      eyebrow: "UREĐAJI",
      title: "Radi na svemu što ima ekran.",
      sub: "Šaljemo kratko uputstvo za tvoj model. Nema tehničara, nema kablova — samo aplikacija i podaci.",
      items: [
        { icon: "tv", n: "Smart TV", d: "Samsung, LG, Sony, TCL" },
        { icon: "cast", n: "Fire Stick", d: "4K i Max" },
        { icon: "smartphone", n: "Android", d: "Telefon i box" },
        { icon: "tablet", n: "iPhone / iPad", d: "iOS 14+" },
        { icon: "box", n: "MAG / Formuler", d: "Linux STB" },
        { icon: "monitor", n: "Windows", d: "PC i laptop" },
        { icon: "laptop", n: "macOS", d: "Safari / app" },
        { icon: "hard-drive", n: "Enigma2", d: "Vu+, Dreambox" },
        { icon: "airplay", n: "Android TV", d: "Google TV" },
        { icon: "gamepad-2", n: "Xbox", d: "Browser app" },
        { icon: "globe", n: "Web player", d: "Bilo koji browser" },
        { icon: "wifi", n: "Smartfon", d: "Gledaj u pokretu" },
      ],
    },
    pricing: {
      eyebrow: "PAKETI",
      title: "Transparentne cene. Bez ugovora.",
      sub: "Plaćaš period unapred. Ne vezujemo te ugovorom i ne skidamo ti novac iznenađenja.",
      durations: { "1m": "1 mesec", "3m": "3 meseca", "6m": "6 meseci", "12m": "12 meseci" },
      popular: "Najtraženiji",
      best: "Najbolja vrednost",
      perMonth: "/ mesec",
      saveWord: "ušteda",
      choose: "Poruči paket",
      includedTitle: "Svaki paket uključuje",
      included: [
        "28.000+ live kanala", "150.000+ filmova i serija", "4K / FHD / HD kvalitet",
        "EPG TV vodič", "Catch-up do 7 dana", "Anti-freeze serveri",
        "1 uređaj po pretplati", "Aktivacija u 5 minuta", "24/7 podrška na srpskom",
      ],
    },
    steps: {
      eyebrow: "KAKO FUNKCIONIŠE",
      title: "Od porudžbine do gledanja za 5 minuta.",
      items: [
        { n: "01", t: "Izaberi paket", d: "Jedan mesec za probu ili godinu za najbolju cenu. Bez ugovora i skrivenih stavki." },
        { n: "02", t: "Plati kako ti odgovara", d: "Kartica, PayPal, kripto ili uplatnica. Potvrda stiže odmah na WhatsApp." },
        { n: "03", t: "Gledaj za 5 minuta", d: "Šaljemo ti podatke i kratko uputstvo za tvoj uređaj. Uključiš i ideš." },
      ],
    },
    voices: {
      eyebrow: "GLAS PUBLIKE",
      title: "Šta kažu korisnici.",
      items: [
        { q: "Prešao sam sa kablovske posle derbija koji se secko. RocketTV vuče 4K bez problema, a Arena i SK su tu. Porodica gleda na TV-u, ja na telefonu.", n: "Nikola Jovanović", c: "Beograd" },
        { q: "Rekla bih da je setup trajao duže od pravljenja kafe. Dečiji kanali su spašeni za vikend, a serije stignu istog dana kad izađu.", n: "Marija Stojanović", c: "Novi Sad" },
        { q: "Uzeo godišnji paket — isplati se već posle trećeg meseca. Podrška stvarno odgovara noću, što kod prethodnog provajdera nije bio slučaj.", n: "Marko Ilić", c: "Niš" },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Pitanja koja svi pitaju.",
      items: [
        { q: "Koja brzina interneta mi je potrebna?", a: "Za stabilan HD dovoljno je 15 Mbps, a za 4K preporučujemo 25 Mbps ili više. Radi i na 4G/5G mreži — bitno je da je veza stabilna, ne brza na papiru." },
        { q: "Mogu li prvo da probam servis?", a: "Naravno. Zatraži 24h trial i dobijaš pun pristup svim kanalima i VOD biblioteci. Bez kartice, bez obaveza — samo WhatsApp poruka." },
        { q: "Na koliko uređaja mogu da gledam?", a: "Jedna pretplata = jedna aktivna veza. Možeš da instaliraš na koliko god uređaja želiš, ali gledaš na jednom u datom trenutku. Dodatne veze se doplaćuju po povoljnijoj ceni." },
        { q: "Koji su načini plaćanja?", a: "Platna kartica, PayPal, kripto (BTC/USDT) ili uplatnica za Srbiju i region. Potvrdu i podatke za pristup šaljemo na WhatsApp odmah posle uplate." },
        { q: "Šta ako slika secka ili kanal ne radi?", a: "Naši anti-freeze serveri drže 99.9% uptime, ali ako zapne — javi podršci. Većina problema se reši za par minuta zamenom servera ili podešavanjem aplikacije." },
        { q: "Imate li kanale za dijasporu?", a: "Da — kompletan ex-yu program plus kanali iz Nemačke, Austrije, Švajcarske, Turske, Skandinavije i ostatka sveta. Idealno ako živiš vani, a želiš domaći program." },
        { q: "Koliko traje aktivacija i da li pomažete kod instalacije?", a: "U proseku 5 minuta od uplate. Uz porudžbinu stiže kratko uputstvo za tvoj uređaj, a podrška 24/7 može da te vodi korak po korak." },
      ],
    },
    final: {
      eyebrow: "SPREMAN ZA POLETAK?",
      title: "Večeras gledaš. Sutra se ne vraćaš na kablovsku.",
      sub: "Trial traje 24 sata. Ako ti se svidi slika — biraš paket. Ako ne — ništa nisi izgubio osim jednog večera.",
      b1: "Godišnji paket · 60€",
      b2: "Zatraži 24h trial",
    },
    kanali: {
      eyebrow: "LISTA KANALA",
      title: "28.000+ kanala. Evo isečka.",
      sub: "Ovo je reprezentativni uzorak. Puna lista stiže uz pretplatu — plus VOD biblioteka od 150.000 naslova.",
      search: "Traži kanal...",
      all: "Sve",
      shown: "kanala u prikazu",
      cols: ["Kanal", "Kategorija", "Kvalitet", "Region"],
      empty: "Nema rezultata za ovu pretragu.",
      ctaT: "Hoćeš punu listu na svom TV-u?",
      ctaS: "Aktivacija za 5 minuta. Trial 24h ako želiš prvo da proveriš sliku.",
      ctaB1: "Poruči paket",
      ctaB2: "24h trial",
    },
    paketi: {
      eyebrow: "CENE",
      title: "Transparentni paketi. Nula sitnog slova.",
      sub: "Svi paketi imaju isti sadržaj — razlikuje se samo trajanje. Što duže ideš, to je mesec jeftiniji.",
    },
    podrska: {
      eyebrow: "PODRŠKA 24/7",
      title: "Ljudi, ne botovi. Na srpskom.",
      sub: "Piši nam kad zapne slika, kad menjaš uređaj ili kad samo želiš da proveriš da li je derbi u 4K. Odgovaramo brzo.",
      ans: "Odgovor za ~5 min",
      guidesTitle: "Brza uputstva po uređaju",
      guides: [
        { t: "Smart TV (Samsung / LG)", steps: ["Otvori App Store / Content Store i instaliraj IPTV Smarters, TiviMate ili SS IPTV.", "Pokreni aplikaciju i izaberi Xtream Codes login.", "Unesi URL, korisničko ime i lozinku koje ti pošaljemo.", "Sačekaj učitavanje liste — gotovo."] },
        { t: "Amazon Fire Stick", steps: ["Uključi Downloader (kod šaljemo uz porudžbinu).", "Instaliraj TiviMate ili IPTV Smarters Pro.", "Ubaci Xtream podatke.", "Podesi EPG iz menija (opciono, dolazi automatski)."] },
        { t: "Android telefon / box", steps: ["Preuzmi IPTV Smarters, TiviMate ili GSE iz Play Store-a.", "Dodaj novi playlist / Xtream nalog.", "Kopiraj podatke iz naše poruke.", "Gledaj. Za 4K koristi Ethernet ili 5 GHz Wi-Fi."] },
        { t: "iPhone / iPad", steps: ["Instaliraj GSE Smart IPTV ili Smarters Player Lite.", "Dodaj Xtream Codes nalog.", "Dozvoli mrežu u podešavanjima aplikacije.", "AirPlay na Apple TV ako želiš veliki ekran."] },
      ],
      ctaT: "Još nisi pretplaćen?",
      ctaS: "Trial je najbrži način da vidiš da li nam slika odgovara tvom internetu.",
      ctaB: "Zatraži 24h trial",
    },
    terms: {
      eyebrow: "PRAVILA",
      title: "Uslovi korišćenja",
      updated: "Poslednje ažuriranje: 7. septembar 2026.",
      intro: "RocketTV je pretplatnički IPTV servis za zabavu. Kupovinom paketa dobijaš ličnu, neprenosivu licencu za gledanje sadržaja na dogovorenom broju veza, tokom plaćenog perioda.",
      sections: [
        { h: "Pretplata", p: "Pretplata se plaća unapred. Ne obnavlja se automatski. Po isteku perioda nalog prestaje da radi dok se ne produži. Cene na sajtu su u evrima; dinarski iznosi se šalju uz instrukcije za uplatu." },
        { h: "Refundacije", p: "Trial je besplatan. Posle aktivacije plaćenog paketa refundacija se odobrava samo ako servis tehnički ne može da radi na tvojoj mreži, i to u prvih 24 sata uz dokaz (snimak/ekran). Zloupotreba trial-a (višestruki nalozi) dovodi do trajne blokade." },
        { h: "Odgovorna upotreba", p: "Zabranjeno je deljenje podataka, preprodaja, javno prikazivanje u ugostiteljstvu bez posebnog dogovora i bilo kakvo reverse-engineering naših tokova. Jedna veza = jedan uređaj u datom trenutku, osim ako nije kupljena dodatna." },
        { h: "Dostupnost", p: "Ciljamo 99.9% uptime, ali internet, lokalni ISP i tvoj Wi-Fi utiču na sliku. Ne garantujemo da će svaki kanal u svakom trenutku biti u 4K. EPG i catch-up zavise od izvora." },
        { h: "Privatnost", p: "Čuvamo ime, telefon i uređaj isključivo radi aktivacije i podrške. Ne prodajemo podatke trećim licima. Porudžbine idu preko WhatsApp / Telegram kanala koje sam izabereš." },
        { h: "Kontakt", p: "Za pravna pitanja: podrska@rockettv.rs. Za hitnu tehničku pomoć — WhatsApp linija navedena u podnožju sajta." },
      ],
    },
    order: {
      title: "Poruči paket",
      trialTitle: "24h besplatna proba",
      trialBox: "24h trial · besplatno",
      name: "Ime i prezime",
      namePh: "npr. Milan Jovanović",
      contact: "WhatsApp / Telegram broj",
      contactPh: "+381 6x xxx xx xx",
      device: "Uređaj",
      note: "Napomena (opciono)",
      notePh: "npr. Želim da gledam na dva TV-a",
      send: "Pošalji preko WhatsApp-a",
      sendTg: "Pošalji preko Telegrama",
      hint: "Poruka se otvara u aplikaciji — samo pritisni „pošalji“. Odgovaramo za ~5 minuta.",
      errName: "Unesi ime i prezime (min. 3 karaktera).",
      errContact: "Unesi ispravan broj telefona ili @korisničko ime.",
      devices: ["Smart TV (Samsung/LG)", "Amazon Fire Stick", "Android TV / box", "Android telefon", "iPhone / iPad", "Windows / macOS", "MAG / Enigma2", "Nisam siguran — treba mi pomoć"],
      msgPlan: (p) => `Zdravo! Želim da poručim RocketTV.\nPaket: ${p.plan}\nCena: ${p.price}\nIme: ${p.name}\nUređaj: ${p.device}\nKontakt: ${p.contact}${p.note ? `\nNapomena: ${p.note}` : ""}`,
      msgTrial: (p) => `Zdravo! Želim 24h besplatnu probu RocketTV servisa.\nIme: ${p.name}\nUređaj: ${p.device}\nKontakt: ${p.contact}${p.note ? `\nNapomena: ${p.note}` : ""}`,
      msgHello: "Zdravo! Zanima me RocketTV IPTV pretplata.",
    },
    footer: {
      desc: "Premium IPTV za Balkan i dijasporu. 28.000+ kanala, 150.000 filmova i serija, 4K sport — bez ugovora.",
      pages: "Navigacija",
      legal: "Pravno",
      contact: "Kontakt",
      terms: "Uslovi korišćenja",
      privacy: "Politika privatnosti",
      rights: "© 2026 RocketTV. Sva prava zadržana.",
      note: "Cene su u evrima (EUR)",
    },
    misc: { menu: "Meni", close: "Zatvori" },
  },

  /* ================= ENGLISH ================= */
  en: {
    langName: "English",
    nav: { home: "Home", channels: "Channels", packages: "Plans", support: "Support", terms: "Terms", trial: "24h trial" },
    hero: {
      badge: "Season 2026/27 · every sport included",
      h1a: "All of", h1b: "television.", h1c: "One subscription.",
      sub: "28,000+ channels, 150,000 movies & series, 4K sports without buffering. Activated in 5 minutes — on TV, phone, Fire Stick and everything in between.",
      cta1: "Annual plan · €60",
      cta2: "Get the 24h trial",
      trust: ["No contract", "Anti-freeze servers", "24/7 support"],
      live: "Live",
      match: "Champions League · 21:00",
      buffer: "Buffering: 0 s",
      chipLive: "4K live",
      chipVod: "+150,000 VOD",
      chipEpg: "EPG · 7 days",
      scroll: "Scroll",
    },
    stats: ["Live channels", "Movies & series", "Uptime", "Ultra HD"],
    why: {
      eyebrow: "WHY ROCKETTV",
      title: "We’re not cable TV with a new logo.",
      sub: "We built the service around sports, film and speed — and only then around price.",
      items: [
        { icon: "monitor-play", t: "4K Ultra HD", d: "Watch matches, premieres and series in crystal-clear 4K and FHD — no compromises." },
        { icon: "zap", t: "Anti-freeze network", d: "Multiple servers with load balancing. Buffering stays in the past — even during the derby." },
        { icon: "calendar-clock", t: "EPG & catch-up", d: "Full TV guide and replays up to 7 days back. You’ll never miss a thing." },
        { icon: "trophy", t: "All sports + PPV", d: "Champions League, Premier League, NBA, F1, UFC, Arena Sport, Sport Klub — no extra subscriptions." },
        { icon: "clapperboard", t: "VOD library", d: "The newest movies, complete series seasons and kids content — instantly, on demand." },
        { icon: "smartphone", t: "Every device", d: "Smart TV, Fire Stick, Android, iPhone, MAG, Windows, laptop. One account, your rhythm." },
        { icon: "rocket", t: "Fast activation", d: "Pay — and within five minutes your credentials arrive. No technician, no cables, no waiting." },
        { icon: "headphones", t: "24/7 support", d: "Real people on WhatsApp and Telegram, in your language, any time of day or night." },
      ],
    },
    cats: {
      eyebrow: "CONTENT",
      title: "Everything you love to watch. In one place.",
      sub: "From the derby to the premiere — every genre covered.",
      items: [
        { key: "sport", count: "1,200+", unit: "channels", d: "Arena, SK, ESPN, Sky, BeIN, DAZN and every PPV broadcast." },
        { key: "filmovi", count: "85,000+", unit: "titles", d: "Hollywood, Europe, premieres and classics in 4K." },
        { key: "serije", count: "65,000+", unit: "episodes", d: "Full seasons, instantly, without waiting for next week." },
        { key: "deca", count: "400+", unit: "channels", d: "Disney, Nick, Cartoon Network and educational programs." },
        { key: "vesti", count: "300+", unit: "channels", d: "N1, CNN, BBC, Al Jazeera, Bloomberg, regional networks." },
        { key: "dokumentarci", count: "250+", unit: "channels", d: "NatGeo, Discovery, History, Animal Planet." },
      ],
    },
    catNames: { sport: "Sports", filmovi: "Movies", serije: "Series", deca: "Kids", vesti: "News", dokumentarci: "Documentaries", domaci: "Local", muzika: "Music" },
    devices: {
      eyebrow: "DEVICES",
      title: "Works on anything with a screen.",
      sub: "We send a quick setup guide for your model. No technician, no cables — just an app and credentials.",
      items: [
        { icon: "tv", n: "Smart TV", d: "Samsung, LG, Sony, TCL" },
        { icon: "cast", n: "Fire Stick", d: "4K & Max" },
        { icon: "smartphone", n: "Android", d: "Phone & box" },
        { icon: "tablet", n: "iPhone / iPad", d: "iOS 14+" },
        { icon: "box", n: "MAG / Formuler", d: "Linux STB" },
        { icon: "monitor", n: "Windows", d: "PC & laptop" },
        { icon: "laptop", n: "macOS", d: "Safari / app" },
        { icon: "hard-drive", n: "Enigma2", d: "Vu+, Dreambox" },
        { icon: "airplay", n: "Android TV", d: "Google TV" },
        { icon: "gamepad-2", n: "Xbox", d: "Browser app" },
        { icon: "globe", n: "Web player", d: "Any browser" },
        { icon: "wifi", n: "Smartphone", d: "Watch on the go" },
      ],
    },
    pricing: {
      eyebrow: "PLANS",
      title: "Transparent pricing. No fine print.",
      sub: "You pay for the period upfront. No contract tying you down, no surprise charges.",
      durations: { "1m": "1 month", "3m": "3 months", "6m": "6 months", "12m": "12 months" },
      popular: "Most popular",
      best: "Best value",
      perMonth: "/ month",
      saveWord: "save",
      choose: "Order plan",
      includedTitle: "Every plan includes",
      included: [
        "28,000+ live channels", "150,000+ movies & series", "4K / FHD / HD quality",
        "EPG TV guide", "Catch-up up to 7 days", "Anti-freeze servers",
        "1 device per plan", "5-minute activation", "24/7 support",
      ],
    },
    steps: {
      eyebrow: "HOW IT WORKS",
      title: "From order to watching in 5 minutes.",
      items: [
        { n: "01", t: "Pick a plan", d: "One month to test, or a year for the best price. No contracts, no hidden line items." },
        { n: "02", t: "Pay the way you like", d: "Card, PayPal, crypto or bank transfer. Confirmation lands on WhatsApp instantly." },
        { n: "03", t: "Watch within 5 minutes", d: "We send credentials plus a short guide for your device. Switch on and go." },
      ],
    },
    voices: {
      eyebrow: "WHAT VIEWERS SAY",
      title: "Words from our customers.",
      items: [
        { q: "I left cable after a derby that kept buffering. RocketTV pulls 4K without a hiccup, and Arena and SK are there. The family watches on TV, I watch on my phone.", n: "Nikola Jovanović", c: "Belgrade" },
        { q: "Honestly, setup took longer than making coffee. Kids channels save the weekend, and new episodes land the same day they air.", n: "Marija Stojanović", c: "Novi Sad" },
        { q: "Took the annual plan — it pays for itself by month three. Support actually answers at night, which wasn’t the case with my previous provider.", n: "Marko Ilić", c: "Niš" },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Questions everyone asks.",
      items: [
        { q: "What internet speed do I need?", a: "For stable HD, 15 Mbps is enough; for 4K we recommend 25 Mbps or more. It also works on 4G/5G — a stable connection matters more than paper speed." },
        { q: "Can I try the service first?", a: "Of course. Request the 24-hour trial and get full access to every channel and the VOD library. No card, no obligations — just a WhatsApp message." },
        { q: "On how many devices can I watch?", a: "One subscription = one active connection. Install on as many devices as you like, but watch on one at a time. Extra connections are available at a discount." },
        { q: "What payment methods do you accept?", a: "Bank card, PayPal, crypto (BTC/USDT) or bank transfer. Confirmation and access details arrive on WhatsApp right after payment." },
        { q: "What if the picture buffers or a channel goes down?", a: "Our anti-freeze servers hold 99.9% uptime, but if something jams, message support. Most issues are fixed in minutes by switching servers or tweaking the app." },
        { q: "Do you have channels for the diaspora?", a: "Yes — the complete ex-Yu lineup plus channels from Germany, Austria, Switzerland, Turkey, Scandinavia and beyond. Perfect if you live abroad but want home programming." },
        { q: "How long does activation take, and do you help with setup?", a: "On average 5 minutes after payment. Your order includes a short setup guide for your device, and 24/7 support can walk you through step by step." },
      ],
    },
    final: {
      eyebrow: "READY FOR LIFTOFF?",
      title: "Tonight you watch. Tomorrow you don’t go back to cable.",
      sub: "The trial runs 24 hours. If you like the picture — pick a plan. If not — you’ve lost nothing but an evening.",
      b1: "Annual plan · €60",
      b2: "Get the 24h trial",
    },
    kanali: {
      eyebrow: "CHANNEL LIST",
      title: "28,000+ channels. Here’s a slice.",
      sub: "This is a representative sample. The full list comes with your subscription — plus a VOD library of 150,000 titles.",
      search: "Search channels...",
      all: "All",
      shown: "channels shown",
      cols: ["Channel", "Category", "Quality", "Region"],
      empty: "No results for this search.",
      ctaT: "Want the full list on your TV?",
      ctaS: "Activation in 5 minutes. 24h trial if you want to check the picture first.",
      ctaB1: "Order a plan",
      ctaB2: "24h trial",
    },
    paketi: {
      eyebrow: "PRICING",
      title: "Transparent plans. Zero fine print.",
      sub: "All plans carry the same content — only the duration differs. The longer you go, the cheaper the month.",
    },
    podrska: {
      eyebrow: "24/7 SUPPORT",
      title: "Humans, not bots. In your language.",
      sub: "Message us when the picture freezes, when you switch devices, or just to check if the derby is in 4K. We answer fast.",
      ans: "Reply in ~5 min",
      guidesTitle: "Quick setup guides by device",
      guides: [
        { t: "Smart TV (Samsung / LG)", steps: ["Open App Store / Content Store and install IPTV Smarters, TiviMate or SS IPTV.", "Launch the app and choose Xtream Codes login.", "Enter the URL, username and password we send you.", "Wait for the list to load — done."] },
        { t: "Amazon Fire Stick", steps: ["Open Downloader (we send the code with your order).", "Install TiviMate or IPTV Smarters Pro.", "Enter the Xtream details.", "Set up EPG from the menu (optional, arrives automatically)."] },
        { t: "Android phone / box", steps: ["Download IPTV Smarters, TiviMate or GSE from Play Store.", "Add a new playlist / Xtream account.", "Copy the details from our message.", "Watch. For 4K use Ethernet or 5 GHz Wi-Fi."] },
        { t: "iPhone / iPad", steps: ["Install GSE Smart IPTV or Smarters Player Lite.", "Add an Xtream Codes account.", "Allow network access in the app settings.", "AirPlay to Apple TV if you want the big screen."] },
      ],
      ctaT: "Not subscribed yet?",
      ctaS: "The trial is the fastest way to see if our picture suits your internet.",
      ctaB: "Get the 24h trial",
    },
    terms: {
      eyebrow: "RULES",
      title: "Terms of Use",
      updated: "Last updated: September 7, 2026.",
      intro: "RocketTV is a subscription-based IPTV service for entertainment. By purchasing a plan you receive a personal, non-transferable license to watch content on the agreed number of connections during the paid period.",
      sections: [
        { h: "Subscription", p: "The subscription is paid upfront. It does not renew automatically. After the period ends, the account stops working until renewed. Prices on the site are in euros; local-currency amounts are sent with payment instructions." },
        { h: "Refunds", p: "The trial is free. After a paid plan is activated, a refund is granted only if the service technically cannot work on your network, within the first 24 hours and with proof (recording/screenshot). Trial abuse (multiple accounts) leads to a permanent ban." },
        { h: "Responsible use", p: "Sharing credentials, reselling, public screening in hospitality venues without a separate agreement, and any reverse-engineering of our streams are prohibited. One connection = one device at a time unless an additional one is purchased." },
        { h: "Availability", p: "We target 99.9% uptime, but the internet, your local ISP and your Wi-Fi affect the picture. We do not guarantee every channel will be 4K at all times. EPG and catch-up depend on sources." },
        { h: "Privacy", p: "We store name, phone and device solely for activation and support. We do not sell data to third parties. Orders go through the WhatsApp / Telegram channels you choose." },
        { h: "Contact", p: "For legal questions: podrska@rockettv.rs. For urgent technical help — the WhatsApp line listed in the site footer." },
      ],
    },
    order: {
      title: "Order plan",
      trialTitle: "24-hour free trial",
      trialBox: "24h trial · free",
      name: "Full name",
      namePh: "e.g. John Smith",
      contact: "WhatsApp / Telegram number",
      contactPh: "+44 7xxx xxxxxx",
      device: "Device",
      note: "Note (optional)",
      notePh: "e.g. I want to watch on two TVs",
      send: "Send via WhatsApp",
      sendTg: "Send via Telegram",
      hint: "The message opens in the app — just press send. We reply within ~5 minutes.",
      errName: "Enter your full name (min. 3 characters).",
      errContact: "Enter a valid phone number or @username.",
      devices: ["Smart TV (Samsung/LG)", "Amazon Fire Stick", "Android TV / box", "Android phone", "iPhone / iPad", "Windows / macOS", "MAG / Enigma2", "Not sure — I need help"],
      msgPlan: (p) => `Hello! I’d like to order RocketTV.\nPlan: ${p.plan}\nPrice: ${p.price}\nName: ${p.name}\nDevice: ${p.device}\nContact: ${p.contact}${p.note ? `\nNote: ${p.note}` : ""}`,
      msgTrial: (p) => `Hello! I’d like the 24-hour free trial of RocketTV.\nName: ${p.name}\nDevice: ${p.device}\nContact: ${p.contact}${p.note ? `\nNote: ${p.note}` : ""}`,
      msgHello: "Hello! I’m interested in the RocketTV IPTV subscription.",
    },
    footer: {
      desc: "Premium IPTV for the Balkans and diaspora. 28,000+ channels, 150,000 movies & series, 4K sports — no contract.",
      pages: "Navigation",
      legal: "Legal",
      contact: "Contact",
      terms: "Terms of Use",
      privacy: "Privacy Policy",
      rights: "© 2026 RocketTV. All rights reserved.",
      note: "Prices in euros (EUR)",
    },
    misc: { menu: "Menu", close: "Close" },
  },

  /* ================= DEUTSCH ================= */
  de: {
    langName: "Deutsch",
    nav: { home: "Start", channels: "Sender", packages: "Pakete", support: "Support", terms: "AGB", trial: "24h Trial" },
    hero: {
      badge: "Saison 2026/27 · alle Sportarten inklusive",
      h1a: "Das ganze", h1b: "Fernsehen.", h1c: "Ein Abo.",
      sub: "28.000+ Sender, 150.000 Filme & Serien, 4K-Sport ohne Ruckeln. Aktivierung in 5 Minuten — auf TV, Handy, Fire Stick und allem dazwischen.",
      cta1: "Jahrespaket · 60€",
      cta2: "24h Trial anfordern",
      trust: ["Kein Vertrag", "Anti-Freeze-Server", "24/7 Support"],
      live: "Live",
      match: "Champions League · 21:00",
      buffer: "Puffern: 0 s",
      chipLive: "4K live",
      chipVod: "+150.000 VOD",
      chipEpg: "EPG · 7 Tage",
      scroll: "Scrollen",
    },
    stats: ["Live-Sender", "Filme & Serien", "Uptime", "Ultra HD"],
    why: {
      eyebrow: "WARUM ROCKETTV",
      title: "Wir sind kein Kabel-TV mit neuem Logo.",
      sub: "Wir haben den Service um Sport, Film und Geschwindigkeit gebaut — und erst dann um den Preis.",
      items: [
        { icon: "monitor-play", t: "4K Ultra HD", d: "Spiele, Premieren und Serien in kristallklarem 4K und FHD — ohne Kompromisse." },
        { icon: "zap", t: "Anti-Freeze-Netz", d: "Mehrere Server mit Load-Balancing. Puffern gehört der Vergangenheit an — sogar beim Derby." },
        { icon: "calendar-clock", t: "EPG & Catch-up", d: "Voller TV-Guide und Wiederholung bis zu 7 Tage zurück. Du verpasst nichts." },
        { icon: "trophy", t: "Alle Sportarten + PPV", d: "Champions League, Premier League, NBA, F1, UFC, Arena Sport, Sport Klub — ohne Zusatzabos." },
        { icon: "clapperboard", t: "VOD-Bibliothek", d: "Neueste Filme, komplette Staffeln und Kinderinhalte — sofort verfügbar, on demand." },
        { icon: "smartphone", t: "Alle Geräte", d: "Smart TV, Fire Stick, Android, iPhone, MAG, Windows, Laptop. Ein Konto, dein Rhythmus." },
        { icon: "rocket", t: "Schnelle Aktivierung", d: "Zahlen — und in fünf Minuten kommen deine Zugangsdaten. Kein Techniker, keine Kabel, kein Warten." },
        { icon: "headphones", t: "24/7 Support", d: "Echte Menschen auf WhatsApp und Telegram, in deiner Sprache, zu jeder Tages- und Nachtzeit." },
      ],
    },
    cats: {
      eyebrow: "INHALT",
      title: "Alles, was du gerne schaust. An einem Ort.",
      sub: "Vom Derby bis zur Premiere — jedes Genre abgedeckt.",
      items: [
        { key: "sport", count: "1.200+", unit: "Sender", d: "Arena, SK, ESPN, Sky, BeIN, DAZN und alle PPV-Übertragungen." },
        { key: "filmovi", count: "85.000+", unit: "Titel", d: "Hollywood, Europa, Premieren und Klassiker in 4K." },
        { key: "serije", count: "65.000+", unit: "Episoden", d: "Komplette Staffeln, sofort, ohne auf die neue Woche zu warten." },
        { key: "deca", count: "400+", unit: "Sender", d: "Disney, Nick, Cartoon Network und Lernprogramme." },
        { key: "vesti", count: "300+", unit: "Sender", d: "N1, CNN, BBC, Al Jazeera, Bloomberg, regionale Netze." },
        { key: "dokumentarci", count: "250+", unit: "Sender", d: "NatGeo, Discovery, History, Animal Planet." },
      ],
    },
    catNames: { sport: "Sport", filmovi: "Filme", serije: "Serien", deca: "Kinder", vesti: "Nachrichten", dokumentarci: "Dokus", domaci: "Lokal", muzika: "Musik" },
    devices: {
      eyebrow: "GERÄTE",
      title: "Läuft auf allem mit Bildschirm.",
      sub: "Wir schicken eine Kurzanleitung für dein Modell. Kein Techniker, keine Kabel — nur App und Zugangsdaten.",
      items: [
        { icon: "tv", n: "Smart TV", d: "Samsung, LG, Sony, TCL" },
        { icon: "cast", n: "Fire Stick", d: "4K und Max" },
        { icon: "smartphone", n: "Android", d: "Handy und Box" },
        { icon: "tablet", n: "iPhone / iPad", d: "iOS 14+" },
        { icon: "box", n: "MAG / Formuler", d: "Linux STB" },
        { icon: "monitor", n: "Windows", d: "PC und Laptop" },
        { icon: "laptop", n: "macOS", d: "Safari / App" },
        { icon: "hard-drive", n: "Enigma2", d: "Vu+, Dreambox" },
        { icon: "airplay", n: "Android TV", d: "Google TV" },
        { icon: "gamepad-2", n: "Xbox", d: "Browser-App" },
        { icon: "globe", n: "Web-Player", d: "Jeder Browser" },
        { icon: "wifi", n: "Smartphone", d: "Schau unterwegs" },
      ],
    },
    pricing: {
      eyebrow: "PAKETE",
      title: "Transparente Preise. Kein Kleingedrucktes.",
      sub: "Du zahlst den Zeitraum im Voraus. Kein Vertrag, keine Überraschungsabbuchungen.",
      durations: { "1m": "1 Monat", "3m": "3 Monate", "6m": "6 Monate", "12m": "12 Monate" },
      popular: "Beliebtester",
      best: "Bester Wert",
      perMonth: "/ Monat",
      saveWord: "gespart",
      choose: "Paket bestellen",
      includedTitle: "Jedes Paket beinhaltet",
      included: [
        "28.000+ Live-Sender", "150.000+ Filme & Serien", "4K / FHD / HD Qualität",
        "EPG TV-Guide", "Catch-up bis zu 7 Tage", "Anti-Freeze-Server",
        "1 Gerät pro Abo", "Aktivierung in 5 Minuten", "24/7 Support",
      ],
    },
    steps: {
      eyebrow: "SO FUNKTIONIERT ES",
      title: "Von der Bestellung zum Schauen in 5 Minuten.",
      items: [
        { n: "01", t: "Paket wählen", d: "Einen Monat zum Testen oder ein Jahr zum besten Preis. Ohne Vertrag und versteckte Posten." },
        { n: "02", t: "Zahlen, wie es dir passt", d: "Karte, PayPal, Krypto oder Überweisung. Bestätigung kommt sofort per WhatsApp." },
        { n: "03", t: "In 5 Minuten schauen", d: "Wir schicken Zugangsdaten und Kurzanleitung für dein Gerät. Einschalten und los." },
      ],
    },
    voices: {
      eyebrow: "KUNDENSTIMMEN",
      title: "Das sagen unsere Kunden.",
      items: [
        { q: "Ich bin vom Kabel weg, nachdem das Derby geruckelt hat. RocketTV zieht 4K problemlos, Arena und SK sind dabei. Die Familie schaut am TV, ich am Handy.", n: "Nikola Jovanović", c: "Belgrad" },
        { q: "Ehrlich, das Setup dauerte kürzer als ein Kaffee. Kinderkanäle retten das Wochenende, und Serien kommen noch am selben Tag raus.", n: "Marija Stojanović", c: "Novi Sad" },
        { q: "Habe das Jahrespaket — es lohnt sich ab dem dritten Monat. Der Support antwortet wirklich nachts, was beim alten Anbieter nicht der Fall war.", n: "Marko Ilić", c: "Niš" },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Fragen, die alle stellen.",
      items: [
        { q: "Welche Internetgeschwindigkeit brauche ich?", a: "Für stabiles HD reichen 15 Mbit/s, für 4K empfehlen wir 25 Mbit/s oder mehr. Funktioniert auch über 4G/5G — wichtig ist eine stabile Verbindung." },
        { q: "Kann ich den Service vorher testen?", a: "Natürlich. Fordere den 24h-Trial an und erhalte vollen Zugriff auf alle Sender und die VOD-Bibliothek. Ohne Karte, ohne Verpflichtung — nur eine WhatsApp-Nachricht." },
        { q: "Auf wie vielen Geräten kann ich schauen?", a: "Ein Abo = eine aktive Verbindung. Installieren kannst du auf so vielen Geräten wie du willst, geschaut wird auf einem gleichzeitig. Zusätzliche Verbindungen gibt es günstiger." },
        { q: "Welche Zahlungsmethoden gibt es?", a: "Karte, PayPal, Krypto (BTC/USDT) oder Überweisung. Bestätigung und Zugangsdaten schicken wir direkt nach Zahlung per WhatsApp." },
        { q: "Was, wenn das Bild ruckelt oder ein Sender ausfällt?", a: "Unsere Anti-Freeze-Server halten 99,9 % Uptime. Falls doch etwas klemmt — Support anschreiben. Die meisten Probleme sind in Minuten gelöst." },
        { q: "Habt ihr Sender für die Diaspora?", a: "Ja — das komplette Ex-Yu-Programm plus Sender aus Deutschland, Österreich, der Schweiz, der Türkei, Skandinavien und der ganzen Welt." },
        { q: "Wie lange dauert die Aktivierung und helft ihr bei der Installation?", a: "Im Schnitt 5 Minuten nach Zahlung. Zur Bestellung gibt es eine Kurzanleitung für dein Gerät, und der Support führt dich bei Bedarf Schritt für Schritt." },
      ],
    },
    final: {
      eyebrow: "BEREIT ZUM START?",
      title: "Heute Abend schaust du. Morgen kehrst du nicht zum Kabel zurück.",
      sub: "Der Trial läuft 24 Stunden. Gefällt dir das Bild — wählst du ein Paket. Wenn nicht — hast du nur einen Abend verloren.",
      b1: "Jahrespaket · 60€",
      b2: "24h Trial anfordern",
    },
    kanali: {
      eyebrow: "SENDERLISTE",
      title: "28.000+ Sender. Hier ein Ausschnitt.",
      sub: "Dies ist eine repräsentative Auswahl. Die volle Liste gibt es mit dem Abo — plus VOD-Bibliothek mit 150.000 Titeln.",
      search: "Sender suchen...",
      all: "Alle",
      shown: "Sender in der Ansicht",
      cols: ["Sender", "Kategorie", "Qualität", "Region"],
      empty: "Keine Ergebnisse für diese Suche.",
      ctaT: "Willst du die volle Liste auf deinem TV?",
      ctaS: "Aktivierung in 5 Minuten. 24h Trial, wenn du zuerst das Bild prüfen willst.",
      ctaB1: "Paket bestellen",
      ctaB2: "24h Trial",
    },
    paketi: {
      eyebrow: "PREISE",
      title: "Transparente Pakete. Null Kleingedrucktes.",
      sub: "Alle Pakete haben denselben Inhalt — nur die Laufzeit unterscheidet sich. Je länger, desto günstiger der Monat.",
    },
    podrska: {
      eyebrow: "SUPPORT 24/7",
      title: "Menschen, keine Bots. Auf Deutsch.",
      sub: "Schreib uns, wenn das Bild hängt, du das Gerät wechselst oder nur prüfen willst, ob das Derby in 4K läuft. Wir antworten schnell.",
      ans: "Antwort in ~5 Min.",
      guidesTitle: "Kurzanleitungen nach Gerät",
      guides: [
        { t: "Smart TV (Samsung / LG)", steps: ["App Store / Content Store öffnen und IPTV Smarters, TiviMate oder SS IPTV installieren.", "App starten und Xtream-Codes-Login wählen.", "URL, Benutzername und Passwort eingeben, die wir dir schicken.", "Laden der Liste abwarten — fertig."] },
        { t: "Amazon Fire Stick", steps: ["Downloader öffnen (Code schicken wir mit der Bestellung).", "TiviMate oder IPTV Smarters Pro installieren.", "Xtream-Daten eingeben.", "EPG im Menü einstellen (optional, kommt automatisch)."] },
        { t: "Android-Handy / Box", steps: ["IPTV Smarters, TiviMate oder GSE aus dem Play Store laden.", "Neue Playlist / Xtream-Konto hinzufügen.", "Daten aus unserer Nachricht kopieren.", "Schauen. Für 4K Ethernet oder 5-GHz-WLAN nutzen."] },
        { t: "iPhone / iPad", steps: ["GSE Smart IPTV oder Smarters Player Lite installieren.", "Xtream-Codes-Konto hinzufügen.", "Netzwerk in den App-Einstellungen erlauben.", "AirPlay auf Apple TV für den großen Bildschirm."] },
      ],
      ctaT: "Noch nicht abonniert?",
      ctaS: "Der Trial ist der schnellste Weg zu sehen, ob unser Bild zu deinem Internet passt.",
      ctaB: "24h Trial anfordern",
    },
    terms: {
      eyebrow: "REGELN",
      title: "Nutzungsbedingungen",
      updated: "Zuletzt aktualisiert: 7. September 2026.",
      intro: "RocketTV ist ein IPTV-Abodienst zur Unterhaltung. Mit dem Kauf eines Pakets erhältst du eine persönliche, nicht übertragbare Lizenz zum Ansehen der Inhalte auf der vereinbarten Anzahl von Verbindungen während des bezahlten Zeitraums.",
      sections: [
        { h: "Abo", p: "Das Abo wird im Voraus bezahlt. Es verlängert sich nicht automatisch. Nach Ablauf funktioniert das Konto erst wieder nach Verlängerung. Preise sind in Euro; Beträge in Landeswährung senden wir mit den Zahlungsanweisungen." },
        { h: "Erstattungen", p: "Der Trial ist kostenlos. Nach Aktivierung eines bezahlten Pakets wird eine Erstattung nur gewährt, wenn der Service in deinem Netz technisch nicht funktioniert — innerhalb der ersten 24 Stunden mit Nachweis (Video/Screenshot). Missbrauch des Trials (Mehrfachkonten) führt zur dauerhaften Sperrung." },
        { h: "Verantwortungsvolle Nutzung", p: "Verboten sind das Teilen von Zugangsdaten, Weiterverkauf, öffentliches Zeigen in der Gastronomie ohne gesonderte Vereinbarung und jegliches Reverse-Engineering unserer Streams. Eine Verbindung = ein Gerät gleichzeitig, sofern keine zusätzliche gekauft wurde." },
        { h: "Verfügbarkeit", p: "Wir zielen auf 99,9 % Uptime, aber Internet, lokaler ISP und dein WLAN beeinflussen das Bild. Wir garantieren nicht, dass jeder Sender jederzeit in 4K läuft. EPG und Catch-up hängen von den Quellen ab." },
        { h: "Datenschutz", p: "Wir speichern Name, Telefonnummer und Gerät ausschließlich für Aktivierung und Support. Wir verkaufen keine Daten an Dritte. Bestellungen laufen über die WhatsApp-/Telegram-Kanäle, die du wählst." },
        { h: "Kontakt", p: "Für rechtliche Fragen: podrska@rockettv.rs. Für dringende technische Hilfe — die WhatsApp-Nummer im Footer." },
      ],
    },
    order: {
      title: "Paket bestellen",
      trialTitle: "24h kostenloser Trial",
      trialBox: "24h Trial · kostenlos",
      name: "Vollständiger Name",
      namePh: "z. B. Max Mustermann",
      contact: "WhatsApp / Telegram Nummer",
      contactPh: "+49 1xx xxxxxxx",
      device: "Gerät",
      note: "Notiz (optional)",
      notePh: "z. B. Ich möchte auf zwei TVs schauen",
      send: "Per WhatsApp senden",
      sendTg: "Per Telegram senden",
      hint: "Die Nachricht öffnet sich in der App — einfach auf Senden drücken. Wir antworten in ~5 Minuten.",
      errName: "Bitte vollständigen Namen eingeben (mind. 3 Zeichen).",
      errContact: "Gültige Telefonnummer oder @Benutzername eingeben.",
      devices: ["Smart TV (Samsung/LG)", "Amazon Fire Stick", "Android TV / Box", "Android-Handy", "iPhone / iPad", "Windows / macOS", "MAG / Enigma2", "Nicht sicher — ich brauche Hilfe"],
      msgPlan: (p) => `Hallo! Ich möchte RocketTV bestellen.\nPaket: ${p.plan}\nPreis: ${p.price}\nName: ${p.name}\nGerät: ${p.device}\nKontakt: ${p.contact}${p.note ? `\nNotiz: ${p.note}` : ""}`,
      msgTrial: (p) => `Hallo! Ich möchte den 24-Stunden-Gratistrial von RocketTV.\nName: ${p.name}\nGerät: ${p.device}\nKontakt: ${p.contact}${p.note ? `\nNotiz: ${p.note}` : ""}`,
      msgHello: "Hallo! Ich interessiere mich für das RocketTV-IPTV-Abo.",
    },
    footer: {
      desc: "Premium-IPTV für den Balkan und die Diaspora. 28.000+ Sender, 150.000 Filme & Serien, 4K-Sport — ohne Vertrag.",
      pages: "Navigation",
      legal: "Rechtliches",
      contact: "Kontakt",
      terms: "Nutzungsbedingungen",
      privacy: "Datenschutzerklärung",
      rights: "© 2026 RocketTV. Alle Rechte vorbehalten.",
      note: "Preise in Euro (EUR)",
    },
    misc: { menu: "Menü", close: "Schließen" },
  },

  /* ================= TÜRKÇE ================= */
  tr: {
    langName: "Türkçe",
    nav: { home: "Ana Sayfa", channels: "Kanallar", packages: "Paketler", support: "Destek", terms: "Koşullar", trial: "24s deneme" },
    hero: {
      badge: "2026/27 sezonu · tüm sporlar dahil",
      h1a: "Tüm", h1b: "televizyon.", h1c: "Tek abonelik.",
      sub: "28.000’den fazla kanal, 150.000 film ve dizi, donmadan 4K spor. 5 dakikada aktivasyon — TV’de, telefonda, Fire Stick’te ve aradaki her şeyde.",
      cta1: "Yıllık paket · 60€",
      cta2: "24 saat deneme iste",
      trust: ["Sözleşme yok", "Donma önleyici sunucular", "7/24 destek"],
      live: "Canlı",
      match: "Şampiyonlar Ligi · 21:00",
      buffer: "Donma: 0 sn",
      chipLive: "4K canlı",
      chipVod: "+150.000 VOD",
      chipEpg: "EPG · 7 gün",
      scroll: "Kaydır",
    },
    stats: ["Canlı kanal", "Film ve dizi", "Çalışma süresi", "Ultra HD"],
    why: {
      eyebrow: "NEDEN ROCKETTV",
      title: "Yeni logolu bir kablo TV değiliz.",
      sub: "Servisi önce spor, film ve hız etrafında kurduk — fiyatı sonra düşündük.",
      items: [
        { icon: "monitor-play", t: "4K Ultra HD", d: "Maçları, galaları ve dizileri kristal netliğinde 4K ve FHD kalitesinde izle — tavizsiz." },
        { icon: "zap", t: "Donma önleyici ağ", d: "Çoklu sunucular ve yük dengeleme. Donma, derbide bile geçmişte kalır." },
        { icon: "calendar-clock", t: "EPG ve geri sarma", d: "Tam TV rehberi ve 7 güne kadar geriye dönük izleme. Hiçbir şeyi kaçırmazsın." },
        { icon: "trophy", t: "Tüm sporlar + PPV", d: "Şampiyonlar Ligi, Premier Lig, NBA, F1, UFC, Arena Sport, Sport Klub — ek abonelik yok." },
        { icon: "clapperboard", t: "VOD kütüphanesi", d: "En yeni filmler, komple sezonlar ve çocuk içerikleri — anında, isteğe bağlı." },
        { icon: "smartphone", t: "Tüm cihazlar", d: "Smart TV, Fire Stick, Android, iPhone, MAG, Windows, laptop. Tek hesap, senin ritmin." },
        { icon: "rocket", t: "Hızlı aktivasyon", d: "Öde — beş dakika içinde bilgiler gelsin. Teknisyen yok, kablo yok, bekleme yok." },
        { icon: "headphones", t: "7/24 destek", d: "WhatsApp ve Telegram’da gerçek insanlar, kendi dilinde, günün her saati." },
      ],
    },
    cats: {
      eyebrow: "İÇERİK",
      title: "İzlemeyi sevdiğin her şey. Tek yerde.",
      sub: "Derbiden galaya — her tür kapsamda.",
      items: [
        { key: "sport", count: "1.200+", unit: "kanal", d: "Arena, SK, ESPN, Sky, BeIN, DAZN ve tüm PPV yayınları." },
        { key: "filmovi", count: "85.000+", unit: "içerik", d: "Hollywood, Avrupa, galalar ve 4K klasikler." },
        { key: "serije", count: "65.000+", unit: "bölüm", d: "Komple sezonlar, hemen, yeni haftayı beklemeden." },
        { key: "deca", count: "400+", unit: "kanal", d: "Disney, Nick, Cartoon Network ve eğitici programlar." },
        { key: "vesti", count: "300+", unit: "kanal", d: "N1, CNN, BBC, Al Jazeera, Bloomberg, bölgesel ağlar." },
        { key: "dokumentarci", count: "250+", unit: "kanal", d: "NatGeo, Discovery, History, Animal Planet." },
      ],
    },
    catNames: { sport: "Spor", filmovi: "Filmler", serije: "Diziler", deca: "Çocuk", vesti: "Haberler", dokumentarci: "Belgesel", domaci: "Yerel", muzika: "Müzik" },
    devices: {
      eyebrow: "CİHAZLAR",
      title: "Ekranı olan her şeyde çalışır.",
      sub: "Modeline kısa bir kurulum kılavuzu gönderiyoruz. Teknisyen yok, kablo yok — sadece uygulama ve bilgiler.",
      items: [
        { icon: "tv", n: "Smart TV", d: "Samsung, LG, Sony, TCL" },
        { icon: "cast", n: "Fire Stick", d: "4K ve Max" },
        { icon: "smartphone", n: "Android", d: "Telefon ve box" },
        { icon: "tablet", n: "iPhone / iPad", d: "iOS 14+" },
        { icon: "box", n: "MAG / Formuler", d: "Linux STB" },
        { icon: "monitor", n: "Windows", d: "PC ve laptop" },
        { icon: "laptop", n: "macOS", d: "Safari / uygulama" },
        { icon: "hard-drive", n: "Enigma2", d: "Vu+, Dreambox" },
        { icon: "airplay", n: "Android TV", d: "Google TV" },
        { icon: "gamepad-2", n: "Xbox", d: "Tarayıcı uygulaması" },
        { icon: "globe", n: "Web oynatıcı", d: "Herhangi bir tarayıcı" },
        { icon: "wifi", n: "Akıllı telefon", d: "Hareket halinde izle" },
      ],
    },
    pricing: {
      eyebrow: "PAKETLER",
      title: "Şeffaf fiyatlar. Sözleşme yok.",
      sub: "Dönemi peşin ödersin. Seni sözleşmeyle bağlamayız ve habersiz para çekmeyiz.",
      durations: { "1m": "1 ay", "3m": "3 ay", "6m": "6 ay", "12m": "12 ay" },
      popular: "En popüler",
      best: "En iyi fırsat",
      perMonth: "/ ay",
      saveWord: "tasarruf",
      choose: "Paketi sipariş et",
      includedTitle: "Her pakete dahil",
      included: [
        "28.000+ canlı kanal", "150.000+ film ve dizi", "4K / FHD / HD kalite",
        "EPG TV rehberi", "7 güne kadar geri izleme", "Donma önleyici sunucular",
        "Abonelik başına 1 cihaz", "5 dakikada aktivasyon", "7/24 destek",
      ],
    },
    steps: {
      eyebrow: "NASIL ÇALIŞIR",
      title: "Siparişten izlemeye 5 dakika.",
      items: [
        { n: "01", t: "Paketini seç", d: "Denemek için bir ay, en iyi fiyat için bir yıl. Sözleşme ve gizli madde yok." },
        { n: "02", t: "Sana uyan şekilde öde", d: "Kart, PayPal, kripto veya havale/EFT. Onay hemen WhatsApp’a gelir." },
        { n: "03", t: "5 dakikada izle", d: "Bilgileri ve cihazına özel kısa kurulumu gönderiyoruz. Aç ve izle." },
      ],
    },
    voices: {
      eyebrow: "İZLEYİCİLERDEN",
      title: "Kullanıcılarımız ne diyor?",
      items: [
        { q: "Donan bir derbiden sonra kablodan geçtim. RocketTV 4K’yı sorunsuz çekiyor, Arena ve SK var. Aile TV’de izliyor, ben telefonda.", n: "Nikola Jovanović", c: "Belgrad" },
        { q: "Kurulum kahve yapmaktan uzun sürmedi derim. Çocuk kanalları hafta sonunu kurtarıyor, diziler çıktığı gün geliyor.", n: "Marija Stojanović", c: "Novi Sad" },
        { q: "Yıllık paketi aldım — üçüncü aydan itibaren kendini ödüyor. Destek gece gerçekten cevap veriyor, önceki sağlayıcıda böyle değildi.", n: "Marko Ilić", c: "Niş" },
      ],
    },
    faq: {
      eyebrow: "SSS",
      title: "Herkesin sorduğu sorular.",
      items: [
        { q: "Hangi internet hızına ihtiyacım var?", a: "Stabil HD için 15 Mbps yeterli, 4K için 25 Mbps ve üzeri öneririz. 4G/5G ile de çalışır — önemli olan bağlantının stabil olması." },
        { q: "Servisi önce deneyebilir miyim?", a: "Elbette. 24 saatlik deneme talep et, tüm kanallara ve VOD kütüphanesine tam erişim kazan. Kart yok, zorunluluk yok — sadece bir WhatsApp mesajı." },
        { q: "Kaç cihazda izleyebilirim?", a: "Bir abonelik = bir aktif bağlantı. İstediğin kadar cihaza kurabilirsin ama aynı anda bir cihazda izlersin. Ek bağlantılar daha uygun fiyatla eklenir." },
        { q: "Ödeme yöntemleri neler?", a: "Kart, PayPal, kripto (BTC/USDT) veya havale/EFT. Onay ve erişim bilgileri ödeme sonrası hemen WhatsApp’a gelir." },
        { q: "Görüntü donarsa veya kanal çalışmazsa?", a: "Donma önleyici sunucularımız %99,9 çalışma süresi sağlar ama sorun olursa desteğe yaz. Çoğu sorun birkaç dakikada çözülür." },
        { q: "Diaspora için kanallarınız var mı?", a: "Evet — eks-Yugoslavya’nın tam programı artı Almanya, Avusturya, İsviçre, Türkiye, İskandinavya ve dünyadan kanallar." },
        { q: "Aktivasyon ne kadar sürer, kurulumda yardım eder misiniz?", a: "Ödemeden sonra ortalama 5 dakika. Siparişle cihazına özel kısa kılavuz gelir, destek 7/24 adım adım eşlik eder." },
      ],
    },
    final: {
      eyebrow: "KALKIŞA HAZIR MISIN?",
      title: "Bu akşam izliyorsun. Yarın kabloya dönmüyorsun.",
      sub: "Deneme 24 saat sürer. Görüntü hoşuna giderse paket seçersin. Gitmezse bir akşamdan fazlasını kaybetmezsin.",
      b1: "Yıllık paket · 60€",
      b2: "24 saat deneme iste",
    },
    kanali: {
      eyebrow: "KANAL LİSTESİ",
      title: "28.000+ kanal. İşte bir kesit.",
      sub: "Bu temsili bir örnektir. Tam liste abonelikle gelir — artı 150.000 içerikli VOD kütüphanesi.",
      search: "Kanal ara...",
      all: "Tümü",
      shown: "kanal görüntüleniyor",
      cols: ["Kanal", "Kategori", "Kalite", "Bölge"],
      empty: "Bu arama için sonuç yok.",
      ctaT: "Tam listeyi TV’nde ister misin?",
      ctaS: "5 dakikada aktivasyon. Önce görüntüyü denemek istersen 24 saat deneme.",
      ctaB1: "Paket sipariş et",
      ctaB2: "24 saat deneme",
    },
    paketi: {
      eyebrow: "FİYATLAR",
      title: "Şeffaf paketler. Sıfır ince yazı.",
      sub: "Tüm paketlerde içerik aynı — sadece süre değişir. Ne kadar uzun, ay o kadar ucuz.",
    },
    podrska: {
      eyebrow: "7/24 DESTEK",
      title: "İnsanlar, bot değil. Türkçe.",
      sub: "Görüntü takıldığında, cihaz değiştirdiğinde ya da derbinin 4K olup olmadığını kontrol etmek istediğinde bize yaz. Hızlı cevap veriyoruz.",
      ans: "~5 dk içinde cevap",
      guidesTitle: "Cihaza göre hızlı kurulum",
      guides: [
        { t: "Smart TV (Samsung / LG)", steps: ["App Store / Content Store’u aç ve IPTV Smarters, TiviMate veya SS IPTV kur.", "Uygulamayı başlat ve Xtream Codes girişini seç.", "Sana gönderdiğimiz URL, kullanıcı adı ve şifreyi gir.", "Listenin yüklenmesini bekle — bitti."] },
        { t: "Amazon Fire Stick", steps: ["Downloader’ı aç (kodu siparişle gönderiyoruz).", "TiviMate veya IPTV Smarters Pro kur.", "Xtream bilgilerini gir.", "EPG’yi menüden ayarla (isteğe bağlı, otomatik gelir)."] },
        { t: "Android telefon / box", steps: ["Play Store’dan IPTV Smarters, TiviMate veya GSE indir.", "Yeni playlist / Xtream hesabı ekle.", "Mesajımızdaki bilgileri kopyala.", "İzle. 4K için Ethernet veya 5 GHz Wi-Fi kullan."] },
        { t: "iPhone / iPad", steps: ["GSE Smart IPTV veya Smarters Player Lite kur.", "Xtream Codes hesabı ekle.", "Uygulama ayarlarında ağa izin ver.", "Büyük ekran için Apple TV’ye AirPlay yap."] },
      ],
      ctaT: "Henüz abone değil misin?",
      ctaS: "Deneme, görüntümüzün internetine uyup uymadığını görmenin en hızlı yolu.",
      ctaB: "24 saat deneme iste",
    },
    terms: {
      eyebrow: "KURALLAR",
      title: "Kullanım Koşulları",
      updated: "Son güncelleme: 7 Eylül 2026.",
      intro: "RocketTV, eğlence amaçlı abonelik tabanlı bir IPTV servisidir. Paket satın alarak, ücretli dönem boyunca kararlaştırılan bağlantı sayısında içerik izlemek için kişisel, devredilemez bir lisans alırsın.",
      sections: [
        { h: "Abonelik", p: "Abonelik peşin ödenir. Otomatik yenilenmez. Süre bitince hesap, uzatılana kadar çalışmaz. Fiyatlar eurodur; yerel para birimi tutarları ödeme talimatıyla gönderilir." },
        { h: "İade", p: "Deneme ücretsizdir. Ücretli paket aktive edildikten sonra iade, yalnızca servis ağında teknik olarak çalışmıyorsa ve ilk 24 saat içinde kanıtla (video/ekran görüntüsü) verilir. Denemenin kötüye kullanımı (çoklu hesap) kalıcı engellemeye yol açar." },
        { h: "Sorumlu kullanım", p: "Bilgileri paylaşmak, yeniden satmak, özel anlaşma olmadan işletmelerde halka açık göstermek ve yayınlarımıza tersine mühendislik yapmak yasaktır. Ek satın alınmadıkça bir bağlantı = aynı anda bir cihaz." },
        { h: "Erişilebilirlik", p: "%99,9 çalışma süresi hedefliyoruz ancak internet, yerel ISP ve Wi-Fi’ın görüntüyü etkiler. Her kanalın her an 4K olacağını garanti etmeyiz. EPG ve geri izleme kaynaklara bağlıdır." },
        { h: "Gizlilik", p: "Ad, telefon ve cihazı yalnızca aktivasyon ve destek için saklarız. Verileri üçüncü taraflara satmayız. Siparişler seçtiğin WhatsApp / Telegram kanallarından gider." },
        { h: "İletişim", p: "Yasal sorular için: podrska@rockettv.rs. Acil teknik yardım için — footer’daki WhatsApp hattı." },
      ],
    },
    order: {
      title: "Paket sipariş et",
      trialTitle: "24 saat ücretsiz deneme",
      trialBox: "24s deneme · ücretsiz",
      name: "Ad soyad",
      namePh: "örn. Ahmet Yılmaz",
      contact: "WhatsApp / Telegram numarası",
      contactPh: "+90 5xx xxx xx xx",
      device: "Cihaz",
      note: "Not (isteğe bağlı)",
      notePh: "örn. İki TV’de izlemek istiyorum",
      send: "WhatsApp ile gönder",
      sendTg: "Telegram ile gönder",
      hint: "Mesaj uygulamada açılır — sadece gönder’e bas. ~5 dakika içinde cevaplıyoruz.",
      errName: "Ad soyad girin (en az 3 karakter).",
      errContact: "Geçerli bir telefon numarası veya @kullanıcı adı girin.",
      devices: ["Smart TV (Samsung/LG)", "Amazon Fire Stick", "Android TV / box", "Android telefon", "iPhone / iPad", "Windows / macOS", "MAG / Enigma2", "Emin değilim — yardım lazım"],
      msgPlan: (p) => `Merhaba! RocketTV sipariş etmek istiyorum.\nPaket: ${p.plan}\nFiyat: ${p.price}\nAd: ${p.name}\nCihaz: ${p.device}\nİletişim: ${p.contact}${p.note ? `\nNot: ${p.note}` : ""}`,
      msgTrial: (p) => `Merhaba! RocketTV’nin 24 saatlik ücretsiz denemesini istiyorum.\nAd: ${p.name}\nCihaz: ${p.device}\nİletişim: ${p.contact}${p.note ? `\nNot: ${p.note}` : ""}`,
      msgHello: "Merhaba! RocketTV IPTV aboneliği hakkında bilgi almak istiyorum.",
    },
    footer: {
      desc: "Balkanlar ve diaspora için premium IPTV. 28.000+ kanal, 150.000 film ve dizi, 4K spor — sözleşmesiz.",
      pages: "Gezinme",
      legal: "Yasal",
      contact: "İletişim",
      terms: "Kullanım Koşulları",
      privacy: "Gizlilik Politikası",
      rights: "© 2026 RocketTV. Tüm hakları saklıdır.",
      note: "Fiyatlar Euro (EUR) cinsindendir",
    },
    misc: { menu: "Menü", close: "Kapat" },
  },
};

/* --------------------------------------------------------------------------
   Stanje
-------------------------------------------------------------------------- */
let lang = localStorage.getItem("rt_lang") || "sr";
if (!I18N[lang]) lang = "sr";
const t = () => I18N[lang];
const nf = () => new Intl.NumberFormat(LOCALES[lang]);

const $ = (sel, root) => (root || document).querySelector(sel);
const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));
const icon = (name) => `<i data-lucide="${name}"></i>`;

/* --------------------------------------------------------------------------
   Router
-------------------------------------------------------------------------- */
function getRoute() {
  const raw = (location.hash || "#/").replace(/^#/, "");
  const [path, qs] = raw.split("?");
  const params = new URLSearchParams(qs || "");
  return { path: path || "/", params };
}

function render() {
  const { path, params } = getRoute();
  const app = $("#app");
  let html = "";
  switch (path) {
    case "/":
      html = pageHome();
      break;
    case "/kanali":
      html = pageKanali(params.get("cat"));
      break;
    case "/paketi":
      html = pagePaketi();
      break;
    case "/podrska":
      html = pagePodrska();
      break;
    case "/uslovi":
      html = pageUslovi();
      break;
    default:
      html = pageHome();
  }
  app.innerHTML = html;
  window.scrollTo({ top: 0, behavior: "auto" });
  postRender(path);
}

function postRender(path) {
  // aktivni nav linkovi
  const map = { "/": "home", "/kanali": "channels", "/paketi": "packages", "/podrska": "support" };
  const active = map[path] || null;
  $$("[data-nav]").forEach((a) => a.classList.toggle("active", a.dataset.nav === active));
  if (window.lucide) lucide.createIcons();
  initReveals();
  initCounters();
  initFaq();
  if (path === "/kanali") initKanali();
}

window.addEventListener("hashchange", render);

/* --------------------------------------------------------------------------
   Zajednički blokovi
-------------------------------------------------------------------------- */
function head(eyebrow, title, sub) {
  return `<span class="eyebrow reveal">${eyebrow}</span>
    <h2 class="h2 reveal" style="transition-delay:60ms">${title}</h2>
    ${sub ? `<p class="lead reveal" style="transition-delay:120ms">${sub}</p>` : ""}`;
}

function blockPricing() {
  const d = t().pricing;
  const cards = PLANS.map((p, i) => {
    const featured = p.badge === "popular";
    const badge = p.badge
      ? `<span class="plan-badge ${p.badge === "best" ? "gold" : ""}">${p.badge === "best" ? d.best : d.popular}</span>`
      : "";
    const save = p.save
      ? ` · <span class="save">${d.saveWord} ${p.save}%</span>`
      : "";
    return `
    <article class="plan-card ${featured ? "featured" : ""} reveal" style="transition-delay:${i * 70}ms">
      ${badge}
      <span class="plan-duration">${d.durations[p.id]}</span>
      <div class="plan-price"><span class="amount">${p.price}</span><span class="cur">€</span></div>
      <p class="plan-per">${nf().format(p.per)} € ${d.perMonth}${save}</p>
      <div class="plan-spacer"></div>
      <button class="btn ${featured ? "btn-primary" : "btn-ghost"} btn-block" data-order="${p.id}">${d.choose}</button>
    </article>`;
  }).join("");

  return `
  <section class="section pricing-wrap" id="paketi">
    <div class="glow"></div>
    <div class="container">
      ${head(d.eyebrow, d.title, d.sub)}
      <div class="plans-grid">${cards}</div>
      <div class="included reveal">
        <h3>${icon("shield-check")} ${d.includedTitle}</h3>
        <ul class="included-grid">
          ${d.included.map((x) => `<li>${icon("check")}<span>${x}</span></li>`).join("")}
        </ul>
      </div>
    </div>
  </section>`;
}

function blockSteps() {
  const d = t().steps;
  return `
  <section class="section" style="padding-top:24px">
    <div class="container">
      ${head(d.eyebrow, d.title, "")}
      <div class="steps-grid">
        ${d.items.map((s, i) => `
        <article class="step-card reveal" style="transition-delay:${i * 80}ms">
          <span class="step-num">${s.n}</span>
          <span class="step-line">${icon(["package", "credit-card", "play"][i])}</span>
          <h3>${s.t}</h3>
          <p>${s.d}</p>
        </article>`).join("")}
      </div>
    </div>
  </section>`;
}

function blockFaq() {
  const d = t().faq;
  return `
  <section class="section" id="faq">
    <div class="container" style="max-width:900px">
      ${head(d.eyebrow, d.title, "")}
      <div class="faq-wrap reveal">
        ${d.items.map((f) => `
        <div class="faq-item">
          <button class="faq-q" type="button"><span>${f.q}</span>${icon("chevron-down")}</button>
          <div class="faq-a"><p>${f.a}</p></div>
        </div>`).join("")}
      </div>
    </div>
  </section>`;
}

function blockFinalCta() {
  const d = t().final;
  return `
  <section class="final-cta">
    <div class="container">
      <div class="cta-panel reveal">
        <img class="bg" src="${IMAGES.space}" alt="" loading="lazy">
        <div class="cta-ov"></div>
        <div class="cta-inner">
          <div>
            <span class="eyebrow">${d.eyebrow}</span>
            <h2>${d.title}</h2>
            <p class="lead">${d.sub}</p>
          </div>
          <div class="cta-actions">
            <button class="btn btn-primary" data-order="12m">${icon("rocket")}${d.b1}</button>
            <button class="btn btn-ghost" data-order="trial" data-trial="1">${icon("flame")}${d.b2}</button>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}

/* --------------------------------------------------------------------------
   Stranica: Početna
-------------------------------------------------------------------------- */
function pageHome() {
  const d = t();
  const h = d.hero;

  const mq = (row, rev) => `
    <div class="marquee-row ${rev ? "mq-rev" : ""}">
      <div class="mq-track">
        ${(row.concat(row)).map((c) => `<span class="mq-item">${c}</span>`).join("")}
      </div>
    </div>`;

  return `
  <!-- HERO -->
  <section class="hero">
    <div class="hero-bg">
      <img src="${IMAGES.hero}" alt="" fetchpriority="high" style="object-position:center 42%">
      <div class="ov-1"></div><div class="ov-2"></div><div class="ov-3"></div>
      <div class="hero-grid-lines"></div>
    </div>
    <div class="container hero-inner">
      <div>
        <span class="hero-badge reveal"><span class="pulse"></span>${h.badge}</span>
        <h1 class="reveal" style="transition-delay:80ms">${h.h1a} <span class="flame-text">${h.h1b}</span><br>${h.h1c}</h1>
        <p class="hero-sub reveal" style="transition-delay:160ms">${h.sub}</p>
        <div class="hero-ctas reveal" style="transition-delay:240ms">
          <button class="btn btn-primary" data-order="12m">${icon("rocket")}${h.cta1}</button>
          <button class="btn btn-ghost" data-order="trial" data-trial="1">${icon("flame")}${h.cta2}</button>
        </div>
        <div class="hero-trust reveal" style="transition-delay:300ms">
          ${h.trust.map((x) => `<span class="chip">${icon("check")}${x}</span>`).join("")}
        </div>
        <div class="hero-stats reveal" style="transition-delay:380ms">
          <div class="stat"><div class="stat-num" data-target="28000" data-suffix="+">0</div><div class="stat-label">${d.stats[0]}</div></div>
          <div class="stat"><div class="stat-num" data-target="150000" data-suffix="+">0</div><div class="stat-label">${d.stats[1]}</div></div>
          <div class="stat"><div class="stat-num" data-target="99.9" data-dec="1" data-suffix="%">0</div><div class="stat-label">${d.stats[2]}</div></div>
          <div class="stat"><div class="stat-num" data-target="4" data-suffix="K">0</div><div class="stat-label">${d.stats[3]}</div></div>
        </div>
      </div>

      <div class="hero-visual" aria-hidden="true">
        <div class="ring ring-1"><span class="sat"></span></div>
        <div class="ring ring-2"><span class="sat"></span></div>
        <div class="ring ring-3"><span class="sat"></span></div>
        <div class="tv-card">
          <div class="tv-card-top">
            <span class="live-tag"><i></i>${h.live}</span>
            <span class="chan">Arena Sport 1 · 4K</span>
          </div>
          <div class="tv-screen">
            <img src="${IMAGES.sport}" alt="" loading="lazy">
            <span class="play-btn">${icon("play")}</span>
            <span class="tv-match">${h.match}</span>
          </div>
          <div class="tv-meta"><span>EPG · HEVC</span><span>${h.buffer}</span></div>
          <div class="tv-bar"><i></i></div>
        </div>
        <span class="float-chip fc-1">${icon("monitor-play")}${h.chipLive}</span>
        <span class="float-chip fc-2">${icon("clapperboard")}${h.chipVod}</span>
        <span class="float-chip fc-3">${icon("calendar-clock")}${h.chipEpg}</span>
      </div>
    </div>
    <div class="scroll-hint">${h.scroll}<i></i></div>
  </section>

  <!-- MARQUEE -->
  <div class="marquee-band" aria-hidden="true">
    ${mq(MARQUEE[0], false)}
    ${mq(MARQUEE[1], true)}
  </div>

  <!-- WHY -->
  <section class="section">
    <div class="container">
      ${head(d.why.eyebrow, d.why.title, d.why.sub)}
      <div class="features-grid">
        ${d.why.items.map((f, i) => `
        <article class="feature-card reveal" style="transition-delay:${(i % 4) * 70}ms">
          <div class="f-icon">${icon(f.icon)}</div>
          <h3>${f.t}</h3>
          <p>${f.d}</p>
        </article>`).join("")}
      </div>
    </div>
  </section>

  <!-- KATEGORIJE -->
  <section class="section" style="padding-top:8px">
    <div class="container">
      ${head(d.cats.eyebrow, d.cats.title, d.cats.sub)}
      <div class="cats-grid">
        ${d.cats.items.map((c, i) => `
        <a class="cat-card reveal" style="transition-delay:${(i % 3) * 70}ms" href="#/kanali?cat=${c.key}">
          <img src="${IMAGES[c.key]}" alt="${d.catNames[c.key]}" loading="lazy">
          <div class="cat-ov"></div>
          <div class="cat-body">
            <span class="cat-count">${c.count} ${c.unit}</span>
            <div class="cat-title">${d.catNames[c.key]} ${icon("arrow-up-right")}</div>
            <p class="cat-desc">${c.d}</p>
          </div>
        </a>`).join("")}
      </div>
    </div>
  </section>

  <!-- UREĐAJI -->
  <section class="section" style="padding-top:8px">
    <div class="container">
      ${head(d.devices.eyebrow, d.devices.title, d.devices.sub)}
      <div class="devices-grid">
        ${d.devices.items.map((dv, i) => `
        <div class="device-card reveal" style="transition-delay:${(i % 6) * 50}ms">
          ${icon(dv.icon)}<h4>${dv.n}</h4><p>${dv.d}</p>
        </div>`).join("")}
      </div>
    </div>
  </section>

  ${blockPricing()}
  ${blockSteps()}

  <!-- TESTIMONIALS -->
  <section class="section">
    <div class="container">
      ${head(d.voices.eyebrow, d.voices.title, "")}
      <div class="voices-grid">
        ${d.voices.items.map((v, i) => `
        <article class="voice-card reveal" style="transition-delay:${i * 80}ms">
          ${icon("quote")}
          <div class="stars">${icon("star")}${icon("star")}${icon("star")}${icon("star")}${icon("star")}</div>
          <blockquote>“${v.q}”</blockquote>
          <div class="voice-meta">
            <img src="${[IMAGES.av1, IMAGES.av2, IMAGES.av3][i]}" alt="${v.n}" loading="lazy">
            <div><div class="n">${v.n}</div><div class="c">${v.c}</div></div>
          </div>
        </article>`).join("")}
      </div>
    </div>
  </section>

  ${blockFaq()}
  ${blockFinalCta()}`;
}

/* --------------------------------------------------------------------------
   Stranica: Kanali
-------------------------------------------------------------------------- */
function pageKanali(catParam) {
  const d = t().kanali;
  const activeCat = catParam && CATS.includes(catParam) ? catParam : "sve";
  return `
  <section class="page-head">
    <img class="ph-bg" src="${IMAGES.sport}" alt="">
    <div class="ph-ov"></div><div class="ph-ov2"></div>
    <div class="container">
      <span class="eyebrow reveal">${d.eyebrow}</span>
      <h1 class="reveal" style="transition-delay:60ms">${d.title}</h1>
      <p class="lead reveal" style="transition-delay:120ms">${d.sub}</p>
    </div>
  </section>

  <section class="section" style="padding-top:56px">
    <div class="container">
      <div class="kanali-controls reveal">
        <div class="cat-pills" id="catPills">
          <button class="pill ${activeCat === "sve" ? "active" : ""}" data-cat="sve">${d.all}</button>
          ${CATS.map((c) => `<button class="pill ${activeCat === c ? "active" : ""}" data-cat="${c}">${t().catNames[c]}</button>`).join("")}
        </div>
        <label class="search-box">
          ${icon("search")}
          <input type="text" id="chanSearch" placeholder="${d.search}" autocomplete="off">
        </label>
      </div>
      <p class="count-line reveal" id="chanCount"></p>
      <div class="chan-table reveal" id="chanTable"></div>

      <div class="cta-box reveal">
        <h3>${d.ctaT}</h3>
        <p>${d.ctaS}</p>
        <div class="row">
          <button class="btn btn-flame" data-order="3m">${d.ctaB1}</button>
          <button class="btn btn-ghost" data-order="trial" data-trial="1">${d.ctaB2}</button>
        </div>
      </div>
    </div>
  </section>`;
}

function initKanali() {
  const d = t().kanali;
  let cat = $("#catPills .pill.active") ? $("#catPills .pill.active").dataset.cat : "sve";
  let query = "";

  const paint = () => {
    const filtered = CHANNELS.filter((ch) => {
      const okC = cat === "sve" || ch.c === cat;
      const q = query.trim().toLowerCase();
      const okQ = !q || ch.n.toLowerCase().includes(q) || ch.r.toLowerCase().includes(q);
      return okC && okQ;
    });
    $("#chanCount").textContent = `${filtered.length} ${d.shown}`;
    $("#chanTable").innerHTML = `
      <div class="chan-row head"><span>${d.cols[0]}</span><span>${d.cols[1]}</span><span>${d.cols[2]}</span><span>${d.cols[3]}</span></div>
      ${filtered.map((ch) => `
      <div class="chan-row">
        <span class="name">${ch.n}</span>
        <span class="cat">${t().catNames[ch.c]}</span>
        <span class="q ${ch.q === "4K" ? "k4" : ""}">${ch.q}</span>
        <span class="reg">${ch.r}</span>
      </div>`).join("")}
      ${filtered.length === 0 ? `<div class="chan-empty">${d.empty}</div>` : ""}`;
  };

  $$("#catPills .pill").forEach((p) =>
    p.addEventListener("click", () => {
      $$("#catPills .pill").forEach((x) => x.classList.remove("active"));
      p.classList.add("active");
      cat = p.dataset.cat;
      paint();
    })
  );
  $("#chanSearch").addEventListener("input", (e) => { query = e.target.value; paint(); });
  paint();
}

/* --------------------------------------------------------------------------
   Stranica: Paketi
-------------------------------------------------------------------------- */
function pagePaketi() {
  const d = t().paketi;
  return `
  <section class="page-head">
    <div class="ph-ov2"></div>
    <div class="container">
      <span class="eyebrow reveal">${d.eyebrow}</span>
      <h1 class="reveal" style="transition-delay:60ms">${d.title}</h1>
      <p class="lead reveal" style="transition-delay:120ms">${d.sub}</p>
    </div>
  </section>
  ${blockPricing()}
  ${blockSteps()}
  ${blockFaq()}
  ${blockFinalCta()}`;
}

/* --------------------------------------------------------------------------
   Stranica: Podrška
-------------------------------------------------------------------------- */
function pagePodrska() {
  const d = t().podrska;
  return `
  <section class="page-head">
    <div class="ph-ov2"></div>
    <div class="container">
      <span class="eyebrow reveal">${d.eyebrow}</span>
      <h1 class="reveal" style="transition-delay:60ms">${d.title}</h1>
      <p class="lead reveal" style="transition-delay:120ms">${d.sub}</p>

      <div class="contact-grid">
        <a class="contact-card reveal" href="${waLink(t().order.msgHello)}" target="_blank" rel="noreferrer">
          <span class="c-icon ci-wa">${waSvg()}</span>
          <h4>WhatsApp ${icon("arrow-up-right")}</h4>
          <p class="handle">${CONTACT.waDisplay}</p>
          <p class="ans">${d.ans}</p>
        </a>
        <a class="contact-card reveal" style="transition-delay:80ms" href="https://t.me/${CONTACT.telegram}" target="_blank" rel="noreferrer">
          <span class="c-icon ci-tg">${icon("send")}</span>
          <h4>Telegram ${icon("arrow-up-right")}</h4>
          <p class="handle">@${CONTACT.telegram}</p>
          <p class="ans">${d.ans}</p>
        </a>
        <a class="contact-card reveal" style="transition-delay:160ms" href="mailto:${CONTACT.email}">
          <span class="c-icon ci-ml">${icon("mail")}</span>
          <h4>Email ${icon("arrow-up-right")}</h4>
          <p class="handle">${CONTACT.email}</p>
          <p class="ans">${d.ans}</p>
        </a>
      </div>
    </div>
  </section>

  <section class="section" style="padding-top:64px; padding-bottom:24px">
    <div class="container">
      <h2 class="h2 reveal" style="font-size:clamp(1.6rem,3.4vw,2.4rem)">${d.guidesTitle}</h2>
      <div class="guides-grid">
        ${d.guides.map((g, i) => `
        <article class="guide-card reveal" style="transition-delay:${(i % 2) * 80}ms">
          <h3>${g.t}</h3>
          <ol>
            ${g.steps.map((s, j) => `<li><span class="n">${String(j + 1).padStart(2, "0")}</span><span>${s}</span></li>`).join("")}
          </ol>
        </article>`).join("")}
      </div>

      <div class="cta-box reveal" style="margin-top:48px">
        <h3>${d.ctaT}</h3>
        <p>${d.ctaS}</p>
        <div class="row">
          <button class="btn btn-flame" data-order="trial" data-trial="1">${d.ctaB}</button>
        </div>
      </div>
    </div>
  </section>`;
}

/* --------------------------------------------------------------------------
   Stranica: Uslovi
-------------------------------------------------------------------------- */
function pageUslovi() {
  const d = t().terms;
  return `
  <section class="page-head">
    <div class="ph-ov2"></div>
    <div class="container terms-body">
      <span class="eyebrow reveal">${d.eyebrow}</span>
      <h1 class="reveal" style="transition-delay:60ms">${d.title}</h1>
      <p class="updated reveal" style="transition-delay:120ms">${d.updated}</p>
      <p class="intro reveal" style="transition-delay:160ms">${d.intro}</p>
      ${d.sections.map((s, i) => `
      <div class="terms-sec reveal">
        <h2>${s.h}</h2>
        <p>${s.p}</p>
      </div>`).join("")}
    </div>
  </section>
  <div style="height:64px"></div>`;
}

/* --------------------------------------------------------------------------
   Statički delovi (header / footer / modal) — i18n
-------------------------------------------------------------------------- */
function applyStatic() {
  const d = t();
  document.documentElement.lang = lang === "sr" ? "sr-Latn" : lang;
  document.title = {
    sr: "RocketTV — Premium IPTV za Balkan",
    en: "RocketTV — Premium IPTV for the Balkans",
    de: "RocketTV — Premium IPTV für den Balkan",
    tr: "RocketTV — Balkanlar için Premium IPTV",
  }[lang];
  const md = $('meta[name="description"]');
  if (md) md.setAttribute("content", {
    sr: "RocketTV: 28.000+ kanala, 150.000 filmova i serija, 4K sport. Aktivacija za 5 minuta. Paketi od 10€.",
    en: "RocketTV: 28,000+ channels, 150,000 movies & series, 4K sports. 5-minute activation. Plans from €10.",
    de: "RocketTV: 28.000+ Sender, 150.000 Filme & Serien, 4K-Sport. Aktivierung in 5 Minuten. Ab 10€.",
    tr: "RocketTV: 28.000+ kanal, 150.000 film ve dizi, 4K spor. 5 dakikada aktivasyon. 10€’dan başlayan paketler.",
  }[lang]);

  $$("[data-i18n]").forEach((el) => {
    const val = el.dataset.i18n.split(".").reduce((o, k) => (o ? o[k] : ""), d);
    if (typeof val === "string") el.textContent = val;
  });

  // footer linkovi sa kontaktom
  $("#fWa").href = waLink(d.order.msgHello);
  $("#fTg").href = `https://t.me/${CONTACT.telegram}`;
  $("#fMail").href = `mailto:${CONTACT.email}`;
  $("#fsWa").href = waLink(d.order.msgHello);
  $("#fsTg").href = `https://t.me/${CONTACT.telegram}`;
  $("#fsMail").href = `mailto:${CONTACT.email}`;
  $("#fWaNum").textContent = CONTACT.waDisplay;
  $("#fTgUser").textContent = "@" + CONTACT.telegram;
  $("#fMailAddr").textContent = CONTACT.email;

  // floating WhatsApp
  $("#waFloat").href = waLink(d.order.msgHello);

  // lang dugme
  $("#langCode").textContent = lang.toUpperCase();
  $$(".lang-item").forEach((b) => b.classList.toggle("active", b.dataset.lang === lang));
}

/* --------------------------------------------------------------------------
   Order modal
-------------------------------------------------------------------------- */
let orderState = { plan: "3m", trial: false };

function openOrder(plan, trial) {
  // ako je mobilni meni otvoren — zatvori ga (modal ide preko njega)
  const mm = $("#mobileMenu");
  if (mm && mm.classList.contains("open")) {
    mm.classList.remove("open");
    const burger = $("#burger");
    if (burger) {
      burger.innerHTML = '<i data-lucide="menu"></i>';
      if (window.lucide) lucide.createIcons();
    }
  }
  orderState.plan = plan && PLANS.some((p) => p.id === plan) ? plan : "3m";
  orderState.trial = !!trial;
  paintOrderBox();
  resetOrderValidation();
  const m = $("#modal");
  m.classList.add("open");
  document.body.classList.add("locked");
  setTimeout(() => $("#oName").focus(), 250);
}

function closeOrder() {
  $("#modal").classList.remove("open");
  document.body.classList.remove("locked");
}

function paintOrderBox() {
  const d = t();
  const box = $("#orderBox");
  if (orderState.trial) {
    box.classList.add("trial");
    box.innerHTML = `<span class="p-name">${d.order.trialBox}</span><span class="p-price" style="color:var(--gold)">0€</span>`;
    $("#modalTitle").textContent = d.order.trialTitle;
  } else {
    box.classList.remove("trial");
    const p = PLANS.find((x) => x.id === orderState.plan);
    box.innerHTML = `<span class="p-name">${d.pricing.durations[p.id]}</span><span class="p-price">${p.price}€</span>`;
    $("#modalTitle").textContent = d.order.title;
  }
  // select paketa (sakriven u trial modu)
  const selWrap = $("#planField");
  selWrap.style.display = orderState.trial ? "none" : "";
  if (!orderState.trial) $("#oPlan").value = orderState.plan;
}

function buildOrderMessage() {
  const d = t().order;
  const p = PLANS.find((x) => x.id === orderState.plan);
  const payload = {
    plan: t().pricing.durations[p.id],
    price: `${p.price}€`,
    name: $("#oName").value.trim() || "—",
    contact: $("#oContact").value.trim() || "—",
    device: $("#oDevice").value,
    note: $("#oNote").value.trim(),
  };
  return orderState.trial ? d.msgTrial(payload) : d.msgPlan(payload);
}

/* --- validacija order forme --- */
const orderTouched = { name: false, contact: false };
let orderAttempted = false;

const isNameOk = (v) => v.trim().length >= 3 && /[\p{L}]/u.test(v);
const isContactOk = (v) => {
  const s = v.trim();
  if (!s) return false;
  if (s.startsWith("@")) return /^@[A-Za-z0-9_]{4,}$/.test(s);
  return /^[+\d][\d\s\-().]{4,}$/.test(s) && s.replace(/\D/g, "").length >= 6;
};

function markField(field, ok) {
  const input = field === "name" ? $("#oName") : $("#oContact");
  const err = field === "name" ? $("#oNameErr") : $("#oContactErr");
  const show = (orderTouched[field] || orderAttempted) && !ok;
  input.classList.toggle("invalid", show);
  input.classList.toggle("valid-ok", ok && input.value.trim().length > 0);
  err.classList.toggle("visible", show);
  if (!ok) err.textContent = t().order[field === "name" ? "errName" : "errContact"];
}

function refreshValidation() {
  // dugmad za slanje su uvek aktivna — greške se javljaju inline
  const nameOk = isNameOk($("#oName").value);
  const contactOk = isContactOk($("#oContact").value);
  markField("name", nameOk);
  markField("contact", contactOk);
  return nameOk && contactOk;
}

function resetOrderValidation() {
  orderTouched.name = orderTouched.contact = false;
  orderAttempted = false;
  ["#oName", "#oContact"].forEach((s) => $(s).classList.remove("invalid", "valid-ok"));
  ["#oNameErr", "#oContactErr"].forEach((s) => $(s).classList.remove("visible"));
  refreshValidation();
}

function trySend(makeUrl) {
  orderAttempted = true;
  if (!refreshValidation()) {
    const panel = $(".modal-panel");
    panel.classList.remove("shake");
    void panel.offsetWidth;
    panel.classList.add("shake");
    const firstInvalid = $(".field input.invalid");
    if (firstInvalid) firstInvalid.focus();
    return;
  }
  window.open(makeUrl(), "_blank");
}

function waLink(msg) {
  return `https://wa.me/${CONTACT.waNumber}?text=${encodeURIComponent(msg)}`;
}

function waSvg() {
  return `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.074-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>`;
}
function tgSvg() {
  return `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>`;
}

/* --------------------------------------------------------------------------
   Animacije: reveal + counter + faq
-------------------------------------------------------------------------- */
function initReveals() {
  const els = $$(".reveal:not(.in)");
  if (!("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("in")); return; }
  const io = new IntersectionObserver(
    (entries) => entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }),
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  els.forEach((e) => io.observe(e));
}

function initCounters() {
  const els = $$(".stat-num[data-target]");
  if (!els.length) return;
  const run = (el) => {
    const target = parseFloat(el.dataset.target);
    const dec = parseInt(el.dataset.dec || "0", 10);
    const suffix = el.dataset.suffix || "";
    const dur = 1600;
    const t0 = performance.now();
    const step = (now) => {
      const p = Math.min(1, (now - t0) / dur);
      const eased = 1 - Math.pow(1 - p, 4);
      const val = target * eased;
      el.textContent = (dec ? val.toFixed(dec).replace(".", lang === "en" ? "." : ",") : nf().format(Math.round(val))) + suffix;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  if (!("IntersectionObserver" in window)) { els.forEach(run); return; }
  const io = new IntersectionObserver(
    (entries) => entries.forEach((en) => { if (en.isIntersecting) { run(en.target); io.unobserve(en.target); } }),
    { threshold: 0.4 }
  );
  els.forEach((e) => io.observe(e));
}

function initFaq() {
  $$(".faq-q").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".faq-item");
      const answer = $(".faq-a", item);
      const isOpen = item.classList.contains("open");
      // zatvori ostale
      $$(".faq-item.open").forEach((o) => {
        o.classList.remove("open");
        $(".faq-a", o).style.maxHeight = "0px";
      });
      if (!isOpen) {
        item.classList.add("open");
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });
}

/* --------------------------------------------------------------------------
   Globalni eventi
-------------------------------------------------------------------------- */
function initGlobal() {
  // header scroll glass
  const header = $("#header");
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 24);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // language dropdown
  const langBox = $("#langBox");
  $("#langBtn").addEventListener("click", (e) => { e.stopPropagation(); langBox.classList.toggle("open"); });
  document.addEventListener("click", (e) => { if (!langBox.contains(e.target)) langBox.classList.remove("open"); });
  $$(".lang-item").forEach((b) =>
    b.addEventListener("click", () => {
      lang = b.dataset.lang;
      localStorage.setItem("rt_lang", lang);
      langBox.classList.remove("open");
      applyStatic();
      fillOrderForm();
      paintOrderBox();
      refreshValidation();
      render();
    })
  );

  // mobile menu
  const mm = $("#mobileMenu");
  $("#burger").addEventListener("click", () => {
    const open = !mm.classList.contains("open");
    mm.classList.toggle("open", open);
    document.body.classList.toggle("locked", open);
    $("#burger").innerHTML = open ? '<i data-lucide="x"></i>' : '<i data-lucide="menu"></i>';
    if (window.lucide) lucide.createIcons();
  });
  $$("#mobileMenu a").forEach((a) =>
    a.addEventListener("click", () => {
      mm.classList.remove("open");
      document.body.classList.remove("locked");
      $("#burger").innerHTML = '<i data-lucide="menu"></i>';
      if (window.lucide) lucide.createIcons();
    })
  );

  // order dugmad (delegacija)
  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-order]");
    if (btn) {
      e.preventDefault();
      const plan = btn.dataset.order === "trial" ? "3m" : btn.dataset.order;
      openOrder(plan, btn.dataset.trial === "1" || btn.dataset.order === "trial");
    }
  });

  // modal zatvaranje
  $("#modalClose").addEventListener("click", closeOrder);
  $("#modalBackdrop").addEventListener("click", closeOrder);
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") { closeOrder(); } });

  // modal forma
  $("#oPlan").addEventListener("change", (e) => { orderState.plan = e.target.value; paintOrderBox(); });
  $("#oName").addEventListener("input", refreshValidation);
  $("#oName").addEventListener("blur", () => { orderTouched.name = true; refreshValidation(); });
  $("#oContact").addEventListener("input", refreshValidation);
  $("#oContact").addEventListener("blur", () => { orderTouched.contact = true; refreshValidation(); });
  $("#sendWa").addEventListener("click", () => trySend(() => waLink(buildOrderMessage())));
  $("#sendTg").addEventListener("click", () => trySend(() => `https://t.me/${CONTACT.telegram}?text=${encodeURIComponent(buildOrderMessage())}`));
}

function fillOrderForm() {
  const d = t().order;
  $("#oPlan").innerHTML = PLANS.map(
    (p) => `<option value="${p.id}">${t().pricing.durations[p.id]} — ${p.price}€</option>`
  ).join("");
  $("#oDevice").innerHTML = d.devices.map((x) => `<option>${x}</option>`).join("");
  $("#oName").placeholder = d.namePh;
  $("#oContact").placeholder = d.contactPh;
  $("#oNote").placeholder = d.notePh;
}

/* --------------------------------------------------------------------------
   Init
-------------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  applyStatic();
  initGlobal();
  fillOrderForm();
  render();
  if (window.lucide) lucide.createIcons();
});
