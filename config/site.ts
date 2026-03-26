/**
 * Single source of truth for a new client site.
 * After cloning: edit this file, swap files in /public, set NEXT_PUBLIC_SITE_URL in .env
 */

export type ServiceIconKey = "threading" | "skin" | "facials" | "makeup";

export type PriceRow = {
  name: string;
  amount: string;
  currency: string;
};

export type PriceListSection = {
  heading: string;
  tabLabel?: string;
  rows: readonly PriceRow[];
};

export type SiteService = {
  title: string;
  description: string;
  icon: ServiceIconKey;
  priceList?: {
    sections: readonly PriceListSection[];
  };
};

export type NavItem = { href: string; label: string };

export type BlogPost = {
  title: string;
  excerpt: string;
  image: string;
  alt: string;
};

const publicUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

/**
 * In-page nav hashes → element ids (smooth scroll). When you add a `site.nav`
 * link like `#pricing`, add a matching entry and put `id="pricing-heading"` on the section.
 */
export const scrollTargetIds: Record<string, string> = {
  hero: "hero",
  services: "services-heading",
  philosophy: "philosophy-heading",
  contact: "contact-heading",
  "about-us": "about-us-heading",
  blog: "blog-heading",
};

export const site = {
  /** Used for metadataBase, sitemap, robots */
  publicUrl,

  /** <html lang=""> */
  htmlLang: "sr",

  seo: {
    title: "Invictus — Kozmetički salon",
    description:
      "Laserska epilacija, tretmani lica, puder obrve, šminka, spray ten, manikir, pedikir i lash & brow lift u Novom Beogradu.",
    openGraphLocale: "sr_RS",
  },

  brand: {
    /** Full name — metadata, hero eyebrow, etc. */
    name: "Invictus",
    /** Mobile hero: first line (uppercase block) */
    heroTitleLine1: "INVICTUS",
    /** Mobile hero: second line (lighter, under line 1) */
    heroTitleLine2: "Kozmetički salon",
    /** Logo in header/footer */
    logoSrc: "/logo.png",
    logoAlt: "Invictus — kozmetički salon",
  },

  /** Main navigation + footer quick links */
  nav: [
    { href: "#hero", label: "Početna" },
    { href: "#services", label: "Usluge" },
    { href: "#contact", label: "Kontakt" },
    { href: "#about-us", label: "O nama" },
    { href: "#blog", label: "Blog" },
  ] as const satisfies readonly NavItem[],

  ui: {
    book: "Zakaži",
    openMenu: "Otvori meni",
    closeMenu: "Zatvori meni",
    mobileNavLabel: "Mobilna navigacija",
    footerMenuTitle: "Meni",
    footerContactTitle: "Kontakt",
    instagramLabel: "Instagram",
    facebookLabel: "Facebook",
    copyrightReserved:
      "Sva prava zadržana.",
    copyrightTagline: "Dizajn sa namerom.",
  },

  hero: {
    imageSrc: "/hero.jpg",
    imageAltMobile:
      "Tretman u kozmetičkom salonu Invictus u Novom Beogradu",
    imageAltDesktop:
      "Relaksirajući tretman lepote u studiju Invictus",
    /** After wave on mobile */
    tagline: "Nega, preciznost i rezultat koji traje",
    /** Large serif lines on desktop (second line is italic in UI) */
    desktopHeadlineLine1: "Kompletna nega lepote,",
    desktopHeadlineLine2: "na adresi kojoj verujete",
    ctaPrimaryMobile: "Zakaži Termin",
    ctaPrimaryDesktop: "Zakaži Termin",
    ctaSecondary: "Pogledaj Usluge",
    intro:
      "Laserska epilacija, nega lica, manikir, pedikir i specijalizovani tretmani u Novom Beogradu — sve na jednom mestu, uz stručan tim i higijenske standarde.",
  },

  footer: {
    blurb:
      "Invictus je kozmetički salon na Novom Beogradu posvećen rezultatima koji izgledaju prirodno i tretmanima prilagođenim vašem ritmu.",
    social: {
      instagram: "#",
      facebook: "#",
    },
  },

  contact: {
    sectionEyebrow: "Stupite u vezu",
    sectionTitle: "Kontakt",
    mapIframeTitle: "Invictus — mapa lokacije",
    /** Google Maps embed URL */
    mapEmbedSrc:
      "https://www.google.com/maps?q=Jurija+Gagarina+219b%2C+Novi+Beograd+11070%2C+Srbija&output=embed",
    addressLines: ["Jurija Gagarina 219b", "Novi Beograd 11070, Srbija"] as const,
    phoneDisplay: "064 255 8956",
    phoneTel: "+381642558956",
    email: "kontakt@saloninvictus.rs",
    hours: [
      "Termini se zakazuju telefonom ili putem forme.",
      "Javite nam se za slobodan termin.",
    ] as const,
    formTitle: "Pošaljite nam poruku",
    formLabels: {
      name: "Ime i Prezime",
      namePlaceholder: "Vaše ime",
      email: "Email",
      emailPlaceholder: "vas@email.com",
      phone: "Telefon",
      phonePlaceholder: "+381...",
      message: "Poruka",
      messagePlaceholder: "Vaša poruka...",
      submit: "Pošalji Poruku",
    },
    cards: {
      address: "Adresa",
      phone: "Telefon",
      email: "Email",
      hours: "Radno Vreme",
    },
  },

  services: {
    eyebrow: "Naša ponuda",
    title: "Usluge",
    priceListToggleLabel: "Cenovnik",
    priceTabsAriaLabel: "Cenovnik po polu",
  },

  servicesList: [
    {
      title: "Laserska epilacija",
      description:
        "Savremena laserska tehnologija za dugotrajnu uklanjanje dlačica uz prilagođenu negu kože i plan tretmana po vašim potrebama.",
      icon: "threading",
    },
    {
      title: "Tretmani lica",
      description:
        "Individualno osmišljeni tretmani za čišćenje, hidrataciju, anti-age ili obnovu — u skladu sa tipom kože i ciljevima.",
      icon: "facials",
    },
    {
      title: "Puder obrve",
      description:
        "Trajna pigmenatacija obrva za ujednačen oblik i prirodnu boju koja umanjuje potrebu za dnevnom korekcijom.",
      icon: "makeup",
    },
    {
      title: "Profesionalna šminka",
      description:
        "Šminkanje za venčanja, fotografisanje, televiziju ili posebne prilike — postojan izgled prilagođen vašem licu.",
      icon: "makeup",
    },
    {
      title: "Spray ten",
      description:
        "Brza, ravnomerna boja koja naglašava konture bez sunčanja — prirodan preplanuli ton prilagođen vašem undertone-u.",
      icon: "skin",
    },
    {
      title: "Gel / gel lak / izlivanje",
      description:
        "Manikir sa dugotrajnim gel lakom ili izlivanjem — oblikovanje, jačanje i izdržljiv sjaj.",
      icon: "makeup",
    },
    {
      title: "Pedikir",
      description:
        "Nega stopala, oblikovanje noktiju i finish po izboru u pažljivo održavanim, higijenskim uslovima.",
      icon: "skin",
    },
    {
      title: "Lash lift / brow lift",
      description:
        "Podizanje i negovanje prirodnih trepavica i obrva za otvoren pogled — bez ekstenzija, uz pravilan post-treatment savet.",
      icon: "threading",
    },
  ] as const satisfies readonly SiteService[],

  philosophy: {
    imageSrc: "/about.jpg",
    imageAlt: "Enterijer kozmetičkog salona Invictus",
    quote:
      '"Lepota počinje kada se osećate sigurno u rukama onih koji znaju svoj posao."',
    eyebrow: "Naša filozofija",
    title: "Stručnost, higijena, rezultat",
    paragraphs: [
      "U Invictusu radimo kao tim stručnjaka koji poštuje vaše vreme i očekivanja. Svaki tretman planiramo uz jasnu procenu stanja kože, kose ili nokta i korake koji su sigurni i u skladu sa savremenim standardima.",
      "Naš cilj je uzdržavan rezultat koji izgleda prirodno — bilo da je reč o laserskoj epilaciji, negi lica ili manikiru i pedikiru u zatvorenom, prijatnom ambijentu.",
    ] as const,
    credentialTitle: "Sertifikovani stručnjaci",
    credentialSubtitle: "Ažurirane tehnike i oprema",
  },

  about: {
    eyebrow: "O nama",
    title: "Salon na Novom Beogradu, posvećen vašoj lepoti",
    paragraphs: [
      "Invictus je kozmetički salon na adresi Jurija Gagarina 219b u Novom Beogradu, gde možete zakazati širok spektar usluga — od laserske epilacije i tretmana lica, preko puder obrva i profesionalne šminke, do spray tena, manikira, pedikira i lash & brow lift tretmana.",
      "Držimo se jasne komunikacije oko trajanja, pripreme i nakon tretmana, kako biste znali šta očekivati i rezultat što duže uživali u svakodnevnom ritmu.",
    ] as const,
    imageSrc: "/owner.jpg",
    imageAlt: "Studio owner portrait",
  },

  blog: {
    eyebrow: "Edukacija",
    title: "Stručni Saveti",
    viewAll: "Pročitaj Sve Članke",
    readMore: "Pročitaj Više",
    listPath: "/blog" as const,
    posts: [
      {
        title: "5 Saveta za Zdraviju Kožu",
        excerpt:
          "Otkrijte osnovne jutarnje rituale koji štite vašu kožu od svakodnevnih spoljašnjih uticaja.",
        image: "/blog-1.jpg",
        alt: "Skincare bottles and products arranged on a table",
      },
      {
        title: "Priprema pred Vama Važan Događaj",
        excerpt:
          "Kako da pripremite kožu za dugotrajan, blistav izgled koji zrači od jutra do mraka.",
        image: "/blog-2.jpg",
        alt: "Makeup palette and brushes laid out on a surface",
      },
      {
        title: "Nega Nakon Tretmana",
        excerpt:
          "Zadržite rezultate uz naš profesionalni vodič za kućnu negu nakon svakog tretmana.",
        image: "/blog-3.jpg",
        alt: "Illustrated woman with a calming facial mask",
      },
    ] as const satisfies readonly BlogPost[],
  },
} as const;
