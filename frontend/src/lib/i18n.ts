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
    btn: string;
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
  'about.btn': string;
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
      title: 'ЭлтексАлатау',
      description:
        'Қазақстандық электроника және заманауи телекоммуникациялық жабдық өндірушісі. Қазақстандағы Eltex зауытының жалғыз ресми өкілі.',
    },
    header: {
      navLinks: [
        { label: 'Компания туралы' },
        { label: 'Артықшылықтар' },
        { label: 'Қызметтер' },
        { label: 'Байланыс' },
      ],
      requestCta: 'Өтінім қалдыру',
      menuLabel: 'Мәзір',
      closeLabel: 'Жабу',
      switchLocaleLabel: 'Тілді ауыстыру',
    },
    hero: {
      description:
        'ЭлтексАлатау — электроника және заманауи телекоммуникациялық жабдық өндірушісі. Қазақстандағы Новосибирск Элтекс зауытының жалғыз ресми өкілі. Компания 2012 жылы құрылған.',
      cta: 'Монтаж құнын бағалау',
      items: [
        {
          title: 'Алматыдағы өндіріс',
          text: '«Алатау» АИП ЕЭА аумағындағы өндірістік кешен',
          img: '/hero/hero-icon1.webp',
        },
        {
          title: 'Компанияның ресурстары мен мүмкіндіктері:',
          text: 'SMD және ТНТ - платаларды монтаждау; Тестілеу; Қорытынды жинау',
          img: '/hero/hero-icon2.webp',
        },
      ],
    },
    about: {
      badge: 'КОМПАНИЯ ТУРАЛЫ',
      title: 'БИЗНЕСКЕ АРНАЛҒАН',
      accentTitle: 'ТЕЛЕКОММУНИКАЦИЯ',
      description:
        'ЭлтексАлатау — операторлық деңгейдегі электроника және телекоммуникациялық жабдық өндірушісі. 12 жыл жұмыс барысында біздің жабдықтар Қазақстан, Өзбекстан және Қырғызстанның ірі операторлары желілерінде орнатылды.',
      cta: 'Компания туралы толығырақ',
      btn: 'Презентация',
      items: [
        {
          title: 'Сапаны бақылау',
          text: 'Өндірістің 3 сатылы сапаны бақылау жүйесі',
          icon: '/about/about1.svg',
        },
        {
          title: 'Ресми өкіл',
          text: 'Қазақстандағы Eltex зауытының жалғыз ресми серіктесі',
          icon: '/about/about2.svg',
        },
        {
          title: 'Жергілікті өндіріс',
          text: 'Алматыдағы «Алатау» АИП ЕЭА аумағындағы өндірістік кешен',
          icon: '/about/about3.svg',
        },
        {
          title: 'Мемлекеттік қолдау',
          text: '«Самрұқ-Қазына» АҚ, ҚР БҒМ және басқа мемлекеттік құрылымдармен жұмыс істейміз',
          icon: '/about/about4.svg',
        },
      ],
    },
    advantages: {
      badge: 'АРТЫҚШЫЛЫҚТАРЫ',
      title: 'СТАРТАПТАРҒА. ӨНДІРУШІЛЕРГЕ.',
      accentTitle: 'ӘЗІРЛЕУШІЛЕРГЕ.',
      description:
        'Біз операторлық деңгейдегі телекоммуникациялық жабдықтарды әзірлеп, өндіреміз және тапсырыс берушінің инфрақұрылымына үздіксіз интеграцияны қамтамасыз етеміз.',
      items: [
        {
          title: [
            { text: 'Өз ', accent: false },
            { text: 'өндірісіміз', accent: false },
          ],
          text: [
            { text: 'Алматыдағы ', accent: false },
            { text: '«Алатау» АИП ЕЭА ', accent: true },
            { text: 'аумағында толық', accent: false },
            { text: ' өндіріс циклі.', accent: false },
          ],
        },
        {
          title: [
            { text: 'Шығарылатын', accent: false },
            { text: 'өнімдер', accent: false },
          ],
          text: [
            { text: 'Eltex операторлық сыныптағы жабдық ', accent: false },
            { text: 'Өнеркәсіптік және ауылшаруашылық электроника ', accent: true },
            { text: 'Премиум сегменттегі киілетін электроника', accent: false },
          ],
        },
        {
          title: [
            { text: 'Сапаны бақылау ', accent: false },
            { text: 'барлық кезеңде', accent: false },
          ],
          text: [
            { text: 'Әр құрылғының ', accent: false },
            { text: 'сапасын бақылаудың', accent: true },
            { text: ' 3 сатылы жүйесі.', accent: false },
          ],
        },
        {
          title: [
            { text: 'Қазақстандағы ', accent: true },
            { text: 'локализация', accent: false },
          ],
          text: [
            { text: 'Жабдықты елде тікелей ', accent: false },
            { text: 'өндіру және қолдау —', accent: false },
            { text: ' жылдам және сенімді.', accent: false },
          ],
        },
      ],
      stats: [
        { title: '12+', text: 'жыл нарықта' },
        { title: '20+', text: 'балама провайдерлер' },
        { title: '3', text: 'елде қатысу' },
        { title: '2015', text: '«Алтын Сапа» сыйлығы' },
      ],
    },
  },
  ru: {
    metadata: {
      title: 'ЭлтексАлатау',
      description:
        'Казахстанский производитель телекоммуникационного оборудования в Алматы. Контрактное производство (локализация) и услуги SMD-монтажа плат. Компания основана в 2012 году.',
    },
    header: {
      navLinks: [
        { label: 'О компании' },
        { label: 'Преимущества' },
        { label: 'Услуги' },
        { label: 'Контакты' },
      ],
      requestCta: 'Оставить заявку',
      menuLabel: 'Меню',
      closeLabel: 'Закрыть',
      switchLocaleLabel: 'Сменить язык',
    },
    hero: {
      description:
        'ЭлтексАлатау — производитель телекоммуникационного оборудования в Алматы. Контрактное производство (локализация) и услуги SMD-монтажа плат. Компания основана в 2012 году.',
      cta: 'Оценить стоимость монтажа',
      items: [
        {
          title: 'Производство в Алматы',
          text: 'Производственный комплекс на территории СЭЗ ПИТ «Алатау»',
          img: '/hero/hero-icon1.webp',
        },
        {
          title: 'Ресурсы и возможности компании:',
          text: 'SMD и ТНТ - монтаж плат; Тестирование; Финальная сборка',
          img: '/hero/hero-icon2.webp',
        },
      ],
    },
    about: {
      badge: 'О КОМПАНИИ',
      title: 'ТЕЛЕКОММУНИКАЦИИ ДЛЯ',
      accentTitle: 'БИЗНЕСА',
      description:
        'ЭлтексАлатау — казахстанский производитель электроники и телекоммуникационного оборудования операторского уровня. За 12 лет работы наше оборудование установлено на сетях крупнейших операторов Казахстана, Узбекистана и Кыргызстана.',
      cta: 'Подробнее о компании',
      btn: 'Презентация',
      items: [
        {
          title: 'Контроль качества',
          text: '3-х ступенчатая система контроля качества производства',
          icon: '/about/about1.svg',
        },
        {
          title: 'Официальный представитель',
          text: 'Единственный официальный партнёр завода Eltex в Казахстане',
          icon: '/about/about2.svg',
        },
        {
          title: 'Локальное производство',
          text: 'Производственный комплекс на территории СЭЗ ПИТ «Алатау» в Алматы',
          icon: '/about/about3.svg',
        },
        {
          title: 'Господдержка',
          text: 'Работаем с АО «Самрук-Қазына», МОН РК и другими госструктурами',
          icon: '/about/about4.svg',
        },
      ],
    },
    advantages: {
      badge: 'ПРЕИМУЩЕСТВА',
      title: 'СТАРТАПАМ. ПРОИЗВОДИТЕЛЯМ.',
      accentTitle: 'РАЗРАБОТЧИКАМ.',
      description:
        'Мы разрабатываем и производим телекоммуникационное оборудование операторского уровня, обеспечивая бесшовную интеграцию в инфраструктуру заказчика.',
      items: [
        {
          title: [
            { text: 'Собственное ', accent: false },
            { text: 'производство', accent: false },
          ],
          text: [
            { text: 'Полный цикл ', accent: false },
            { text: 'производства ', accent: true },
            { text: 'на территории СЭЗ ПИТ «Алатау»', accent: false },
            { text: ' в Алматы.', accent: false },
          ],
        },
        {
          title: [
            { text: 'Выпускаемая ', accent: false },
            { text: 'продукция', accent: false },
          ],
          text: [
            { text: 'Оборудование операторского класса Eltex. ', accent: false },
            { text: 'Промышленная и сельскохозяйственная электроника. ', accent: true },
            { text: 'Носимая электроника премиум-сегмента', accent: false },
          ],
        },
        {
          title: [
            { text: 'Контроль качества ', accent: false },
            { text: 'на всех этапах', accent: false },
          ],
          text: [
            { text: '3-х ступенчатая система ', accent: false },
            { text: 'контроля качества', accent: true },
            { text: ' каждого устройства.', accent: false },
          ],
        },
        {
          title: [
            { text: 'Локализация ', accent: true },
            { text: 'в Казахстане', accent: false },
          ],
          text: [
            { text: 'Производство и поддержка ', accent: false },
            { text: 'оборудования прямо в стране — ', accent: false },
            { text: 'быстро и надёжно.', accent: false },
          ],
        },
      ],
      stats: [
        { title: '14+', text: 'лет на рынке' },
        { title: '1млн+', text: 'исполненных заказов' },
        { title: '50+', text: 'видов номенклатуры' },
        { title: '50+', text: 'довольных заказчиков' },
      ],
    },
  },
  en: {
    metadata: {
      title: 'EltexAlatau',
      description:
        'A Kazakhstani manufacturer of electronics and modern telecommunications equipment. The sole official representative of the Eltex factory in Kazakhstan.',
    },
    header: {
      navLinks: [
        { label: 'About' },
        { label: 'Advantages' },
        { label: 'Services' },
        { label: 'Contact' },
      ],
      requestCta: 'Submit a request',
      menuLabel: 'Menu',
      closeLabel: 'Close',
      switchLocaleLabel: 'Switch language',
    },
    hero: {
      description:
        'EltexAlatau is a manufacturer of electronics and modern telecommunications equipment. The sole official representative of the Novosibirsk Eltex factory in Kazakhstan. Founded in 2012.',
      cta: 'Get installation quote',
      items: [
        {
          title: 'Production in Almaty',
          text: 'Manufacturing facility located in the SEZ PIT «Alatau»',
          img: '/hero/hero-icon1.webp',
        },
        {
          title: 'Company resources and capabilities:',
          text: 'SMD and THT - PCB assembly; Testing; Final assembly',
          img: '/hero/hero-icon2.webp',
        },
      ],
    },
    about: {
      badge: 'ABOUT US',
      title: 'TELECOMMUNICATIONS FOR',
      accentTitle: 'BUSINESS',
      description:
        'EltexAlatau is a Kazakhstani manufacturer of electronics and carrier-grade telecommunications equipment. Over 12 years, our equipment has been deployed across the networks of major operators in Kazakhstan, Uzbekistan and Kyrgyzstan.',
      cta: 'Learn more about the company',
      btn: 'Presentation',
      items: [
        {
          title: 'Quality Control',
          text: 'A 3-stage quality control system throughout production',
          icon: '/about/about1.svg',
        },
        {
          title: 'Official Representative',
          text: 'The sole official partner of the Eltex factory in Kazakhstan',
          icon: '/about/about2.svg',
        },
        {
          title: 'Local Manufacturing',
          text: 'Production facility within the SEZ PIT «Alatau» in Almaty',
          icon: '/about/about3.svg',
        },
        {
          title: 'Government Partnership',
          text: 'Working with Samruk-Kazyna JSC, Ministry of Education of Kazakhstan and other government bodies',
          icon: '/about/about4.svg',
        },
      ],
    },
    advantages: {
      badge: 'ADVANTAGES',
      title: 'FOR STARTUPS. FOR MANUFACTURERS.',
      accentTitle: 'FOR DEVELOPERS.',
      description:
        "We develop and manufacture carrier-grade telecommunications equipment, ensuring seamless integration into the customer's infrastructure.",
      items: [
        {
          title: [
            { text: 'In-house ', accent: false },
            { text: 'manufacturing', accent: false },
          ],
          text: [
            { text: 'Full production cycle ', accent: false },
            { text: 'at the SEZ PIT «Alatau» ', accent: true },
            { text: 'facility', accent: false },
            { text: ' in Almaty.', accent: false },
          ],
        },
        {
          title: [
            { text: 'Products', accent: false },
            { text: 'manufactured', accent: false },
          ],
          text: [
            { text: 'Eltex operator-class equipment ', accent: false },
            { text: 'Industrial and agricultural electronics ', accent: true },
            { text: 'Premium-segment wearable electronics', accent: false },
          ],
        },
        {
          title: [
            { text: 'Quality control ', accent: false },
            { text: 'at every stage', accent: false },
          ],
          text: [
            { text: 'A 3-stage ', accent: false },
            { text: 'quality assurance', accent: true },
            { text: ' system for every device.', accent: false },
          ],
        },
        {
          title: [
            { text: 'Localization ', accent: true },
            { text: 'in Kazakhstan', accent: false },
          ],
          text: [
            { text: 'Equipment manufactured and supported ', accent: false },
            { text: 'right in the country — ', accent: false },
            { text: 'fast and reliable.', accent: false },
          ],
        },
      ],
      stats: [
        { title: '12+', text: 'years on the market' },
        { title: '20+', text: 'alternative providers' },
        { title: '3', text: 'countries of presence' },
        { title: '2015', text: '«Altyn Sapa» Award' },
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
