export type Locale = 'kk' | 'ru' | 'en';

export const LOCALES: Locale[] = ['kk', 'ru', 'en'];

export const LOCALE_LABELS: Record<Locale, string> = {
  kk: 'KK',
  ru: 'RU',
  en: 'EN',
};

export const LOCALE_NAMES: Record<Locale, string> = {
  kk: 'Қазақша',
  ru: 'Русский',
  en: 'English',
};

export const DEFAULT_LOCALE: Locale = 'ru';

export type NavigationLink = { label: string };
export type HeroItem = { title: string; text: string; img: string };
export type AboutItem = { title: string; text: string; icon: string };
export type TextPart = { text: string; accent: boolean };
export type AdvantageItem = { title: TextPart[]; text: TextPart[] };
export type AdvantageStat = { title: string; text: string };

type Dictionary = {
  metadata: {
    title: string;
    description: string;
  };
  header: {
    navLinks: NavigationLink[];
    requestCta: string;
    menuLabel: string;
    closeLabel: string;
    switchLocaleLabel: string;
  };
  hero: {
    description: string;
    cta: string;
    items: HeroItem[];
  };
  about: {
    badge: string;
    title: string;
    accentTitle: string;
    description: string;
    cta: string;
    items: AboutItem[];
  };
  advantages: {
    badge: string;
    title: string;
    accentTitle: string;
    description: string;
    items: AdvantageItem[];
    stats: AdvantageStat[];
  };
};

type TranslationMap = {
  'metadata.title': string;
  'metadata.description': string;
  'header.navLinks': NavigationLink[];
  'header.requestCta': string;
  'header.menuLabel': string;
  'header.closeLabel': string;
  'header.switchLocaleLabel': string;
  'hero.description': string;
  'hero.cta': string;
  'hero.items': HeroItem[];
  'about.badge': string;
  'about.title': string;
  'about.accentTitle': string;
  'about.description': string;
  'about.cta': string;
  'about.items': AboutItem[];
  'advantages.badge': string;
  'advantages.title': string;
  'advantages.accentTitle': string;
  'advantages.description': string;
  'advantages.items': AdvantageItem[];
  'advantages.stats': AdvantageStat[];
};

const dictionaries: Record<Locale, Dictionary> = {
  kk: {
    metadata: {
      title: 'Manata Logistics',
      description:
        'Фармацевтикалық және медициналық өнімдерді сақтауға және өңдеуге арналған A класты логистикалық кешен.',
    },
    header: {
      navLinks: [
        { label: 'Компания туралы' },
        { label: 'Қызметтер' },
        { label: 'Компаниялар' },
        { label: 'Байланыс' },
      ],
      requestCta: 'Өтінім қалдыру',
      menuLabel: 'Мәзір',
      closeLabel: 'Жабу',
      switchLocaleLabel: 'Тілді ауыстыру',
    },
    hero: {
      description:
        'Дәрілік заттарды, медициналық бұйымдар мен жабдықтарды сақтауға және өңдеуге арналған заманауи A класты логистикалық кешен.',
      cta: 'Маманмен байланысу',
      items: [
        {
          title: 'GDP стандарты',
          text: 'Жоғары сапалы логистикалық қызметтер',
          img: '/hero/hero-icon1.webp',
        },
        {
          title: 'WMS жүйелері',
          text: 'Қойма үдерістерін интеллектуалды басқару',
          img: '/hero/hero-icon2.webp',
        },
        {
          title: 'Class A',
          text: 'Қоймалық жылжымайтын мүліктің халықаралық стандарты',
          img: '/hero/hero-icon3.webp',
        },
      ],
    },
    about: {
      badge: 'КОМПАНИЯ ТУРАЛЫ',
      title: 'ДӘЛДІККЕ АРНАЛҒАН',
      accentTitle: 'ИНФРАҚҰРЫЛЫМ',
      description:
        'Manata Logistics - халықаралық сапа стандарттарын сақтай отырып, дәрілік заттар мен медициналық жабдықтарды қауіпсіз сақтауға және өңдеуге арналған жоғары технологиялық кешен.',
      cta: 'Компания туралы толығырақ',
      items: [
        {
          title: 'Температуралық бақылау',
          text: 'Белгіленген температуралық режимді сақтау',
          icon: '/about/about1.svg',
        },
        {
          title: 'Қауіпсіздік жүйесі',
          text: 'Заманауи бақылау және қорғау жүйелері',
          icon: '/about/about2.svg',
        },
        {
          title: 'WMS жүйелері',
          text: 'Қойма және логистикалық үдерістерді оңтайландыру',
          icon: '/about/about3.svg',
        },
        {
          title: 'Теміржол логистикасы',
          text: 'Теміржол желілеріне тікелей қолжетімділік',
          icon: '/about/about4.svg',
        },
      ],
    },
    advantages: {
      badge: 'АРТЫҚШЫЛЫҚТАРЫ',
      title: 'ТЕХНОЛОГИЯ. СЕНІМДІЛІК.',
      accentTitle: 'САПА.',
      description:
        'Өнімдеріңіздің әр кезеңде сақталуын қамтамасыз ету үшін біз озық технологияларды қолданып, қатаң стандарттарды ұстанамыз.',
      items: [
        {
          title: [
            { text: 'Автоматтандырылған ', accent: false },
            { text: 'үдерістер', accent: false },
          ],
          text: [
            {
              text: 'Қойманы басқару және операцияларды бақылауға арналған заманауи ',
              accent: false,
            },
            { text: 'IT шешімдері', accent: true },
            { text: '.', accent: false },
          ],
        },
        {
          title: [
            { text: 'Заманауи ', accent: false },
            { text: 'жабдық', accent: false },
          ],
          text: [
            { text: 'Өнімдерді сақтау мен өңдеуге арналған жоғары технологиялық ', accent: false },
            { text: 'жабдық', accent: true },
            { text: '.', accent: false },
          ],
        },
        {
          title: [
            { text: 'Сапаны бақылау ', accent: false },
            { text: 'әр кезеңде', accent: false },
          ],
          text: [
            { text: 'Стандарттар мен талаптарға ', accent: false },
            { text: 'сәйкестікті көпдеңгейлі бақылау', accent: true },
            { text: '.', accent: false },
          ],
        },
        {
          title: [
            { text: 'Энергияны үнемдейтін ', accent: true },
            { text: 'шешімдер', accent: false },
          ],
          text: [
            { text: 'Энергияны тиімді тұтыну және экологиялық технологиялар.', accent: false },
          ],
        },
      ],
      stats: [
        { title: '10+', text: 'жыл нарықта' },
        { title: '200+', text: 'қанағаттанған клиент' },
        { title: '99,9%', text: 'дәлдік пен сақталу' },
        { title: '45 000 м²', text: 'кешен аумағы' },
      ],
    },
  },
  ru: {
    metadata: {
      title: 'Manata Logistics',
      description:
        'Логистический комплекс класса A для хранения и обработки фармацевтической и медицинской продукции.',
    },
    header: {
      navLinks: [
        { label: 'О компании' },
        { label: 'Услуги' },
        { label: 'Компании' },
        { label: 'Контакты' },
      ],
      requestCta: 'Оставить заявку',
      menuLabel: 'Меню',
      closeLabel: 'Закрыть',
      switchLocaleLabel: 'Сменить язык',
    },
    hero: {
      description:
        'Современный логистический комплекс класса A для хранения и обработки лекарственных средств, медицинских изделий и оборудования.',
      cta: 'Связаться со специалистом',
      items: [
        {
          title: 'GDP стандарт',
          text: 'Высококачественные логистические услуги',
          img: '/hero/hero-icon1.webp',
        },
        {
          title: 'WMS-системы',
          text: 'Интеллектуальное управление складскими процессами',
          img: '/hero/hero-icon2.webp',
        },
        {
          title: 'Class A',
          text: 'Международный стандарт складской недвижимости',
          img: '/hero/hero-icon3.webp',
        },
      ],
    },
    about: {
      badge: 'О КОМПАНИИ',
      title: 'ИНФРАСТРУКТУРА ДЛЯ',
      accentTitle: 'ТОЧНОСТИ',
      description:
        'Manata Logistics — это высокотехнологичный комплекс, созданный для безопасного хранения и обработки медикаментов и медицинского оборудования с соблюдением международных стандартов качества.',
      cta: 'Подробнее о компании',
      items: [
        {
          title: 'Температурный контроль',
          text: 'Поддержание заданного температурного режима',
          icon: '/about/about1.svg',
        },
        {
          title: 'Система безопасности',
          text: 'Современные системы контроля и защиты',
          icon: '/about/about2.svg',
        },
        {
          title: 'WMS-системы',
          text: 'Оптимизация складских и логистических процессов',
          icon: '/about/about3.svg',
        },
        {
          title: 'ЖД логистика',
          text: 'Прямой доступ к железнодорожным путям',
          icon: '/about/about4.svg',
        },
      ],
    },
    advantages: {
      badge: 'ПРЕИМУЩЕСТВА',
      title: 'ТЕХНОЛОГИИ. НАДЕЖНОСТЬ.',
      accentTitle: 'КАЧЕСТВО.',
      description:
        'Мы используем передовые технологии и поддерживаем строгие стандарты, чтобы гарантировать сохранность вашей продукции на каждом этапе.',
      items: [
        {
          title: [
            { text: 'Автоматизированные ', accent: false },
            { text: 'процессы', accent: false },
          ],
          text: [
            { text: 'Современные ', accent: false },
            { text: 'IT-решения ', accent: true },
            { text: 'для управления складом', accent: false },
            { text: ' и контроля операций.', accent: false },
          ],
        },
        {
          title: [
            { text: 'Современное ', accent: false },
            { text: 'оборудование', accent: false },
          ],
          text: [
            { text: 'Высокотехнологичное ', accent: true },
            { text: 'оборудование ', accent: false },
            { text: 'для хранения', accent: false },
            { text: ' и обработки продукции.', accent: false },
          ],
        },
        {
          title: [
            { text: 'Контроль качества ', accent: false },
            { text: 'на всех этапах', accent: false },
          ],
          text: [
            { text: 'Многоуровневый контроль ', accent: false },
            { text: 'соответствия стандартам', accent: true },
            { text: ' и требованиям.', accent: false },
          ],
        },
        {
          title: [
            { text: 'Энергоэффективные ', accent: true },
            { text: 'решения', accent: false },
          ],
          text: [
            { text: 'Экономичное потребление энергии ', accent: false },
            { text: 'и экологичные технологии.', accent: false },
          ],
        },
      ],
      stats: [
        { title: '10+', text: 'лет на рынке' },
        { title: '200+', text: 'довольных клиентов' },
        { title: '99,9%', text: 'точность и сохранность' },
        { title: '45 000 м²', text: 'площадь комплекса' },
      ],
    },
  },
  en: {
    metadata: {
      title: 'Manata Logistics',
      description:
        'A Class A logistics complex for the storage and handling of pharmaceutical and medical products.',
    },
    header: {
      navLinks: [
        { label: 'About Us' },
        { label: 'Services' },
        { label: 'Companies' },
        { label: 'Contacts' },
      ],
      requestCta: 'Submit a request',
      menuLabel: 'Menu',
      closeLabel: 'Close',
      switchLocaleLabel: 'Switch language',
    },
    hero: {
      description:
        'A modern Class A logistics complex for the storage and handling of pharmaceuticals, medical devices, and equipment.',
      cta: 'Contact a specialist',
      items: [
        {
          title: 'GDP standard',
          text: 'High-quality logistics services',
          img: '/hero/hero-icon1.webp',
        },
        {
          title: 'WMS systems',
          text: 'Intelligent warehouse process management',
          img: '/hero/hero-icon2.webp',
        },
        {
          title: 'Class A',
          text: 'International standard for warehouse real estate',
          img: '/hero/hero-icon3.webp',
        },
      ],
    },
    about: {
      badge: 'ABOUT US',
      title: 'INFRASTRUCTURE BUILT FOR',
      accentTitle: 'PRECISION',
      description:
        'Manata Logistics is a high-tech facility designed for the safe storage and handling of pharmaceuticals and medical equipment in compliance with international quality standards.',
      cta: 'Learn more about the company',
      items: [
        {
          title: 'Temperature control',
          text: 'Maintaining specified temperature conditions',
          icon: '/about/about1.svg',
        },
        {
          title: 'Security system',
          text: 'Modern monitoring and protection systems',
          icon: '/about/about2.svg',
        },
        {
          title: 'WMS systems',
          text: 'Optimization of warehouse and logistics processes',
          icon: '/about/about3.svg',
        },
        {
          title: 'Rail logistics',
          text: 'Direct access to railway lines',
          icon: '/about/about4.svg',
        },
      ],
    },
    advantages: {
      badge: 'ADVANTAGES',
      title: 'TECHNOLOGY. RELIABILITY.',
      accentTitle: 'QUALITY.',
      description:
        'We use advanced technologies and maintain strict standards to ensure the safety of your products at every stage.',
      items: [
        {
          title: [
            { text: 'Automated ', accent: false },
            { text: 'processes', accent: false },
          ],
          text: [
            { text: 'Modern ', accent: false },
            { text: 'IT solutions ', accent: true },
            { text: 'for warehouse management', accent: false },
            { text: ' and operational control.', accent: false },
          ],
        },
        {
          title: [
            { text: 'Modern ', accent: false },
            { text: 'equipment', accent: false },
          ],
          text: [
            { text: 'High-tech ', accent: true },
            { text: 'equipment ', accent: false },
            { text: 'for product storage', accent: false },
            { text: ' and handling.', accent: false },
          ],
        },
        {
          title: [
            { text: 'Quality control ', accent: false },
            { text: 'at every stage', accent: false },
          ],
          text: [
            { text: 'Multi-level compliance monitoring ', accent: false },
            { text: 'with standards', accent: true },
            { text: ' and requirements.', accent: false },
          ],
        },
        {
          title: [
            { text: 'Energy-efficient ', accent: true },
            { text: 'solutions', accent: false },
          ],
          text: [
            { text: 'Efficient energy consumption ', accent: false },
            { text: 'and eco-friendly technologies.', accent: false },
          ],
        },
      ],
      stats: [
        { title: '10+', text: 'years on the market' },
        { title: '200+', text: 'satisfied clients' },
        { title: '99.9%', text: 'accuracy and safety' },
        { title: '45,000 m²', text: 'facility area' },
      ],
    },
  },
};

function getTranslationValue<Key extends keyof TranslationMap>(
  dictionary: Dictionary,
  key: Key,
): TranslationMap[Key] {
  return key.split('.').reduce<unknown>((value, segment) => {
    if (!value || typeof value !== 'object' || !(segment in value)) {
      throw new Error(`Missing translation for key "${key}"`);
    }

    return (value as Record<string, unknown>)[segment];
  }, dictionary) as TranslationMap[Key];
}

export function createTranslator(locale: Locale = DEFAULT_LOCALE) {
  const dictionary = dictionaries[locale] ?? dictionaries[DEFAULT_LOCALE];

  return function t<Key extends keyof TranslationMap>(key: Key): TranslationMap[Key] {
    return getTranslationValue(dictionary, key);
  };
}
