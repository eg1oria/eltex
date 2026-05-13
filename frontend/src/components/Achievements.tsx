import { type Locale } from '@/lib/i18n';

type AchievementStat = {
  value: string;
  title: string;
  subtitle: string;
};

type AchievementsContent = {
  title: string;
  description: string;
  stats: AchievementStat[];
};

type AchievementsProps = {
  locale: Locale;
};

const contentByLocale: Record<Locale, AchievementsContent> = {
  kk: {
    title: 'Біздің жетістіктеріміз',
    description: 'Сандармен\nдәлелденген\nсенімділік.',
    stats: [
      {
        value: '14+',
        title: 'жыл нарықта',
        subtitle: 'Қойма логистикасын басқаруда',
      },
      {
        value: '170 000',
        title: 'жылына тонна өнім',
        subtitle: 'Өңдеу және сақтау',
      },
      {
        value: '11 340',
        title: 'көлік операциясы',
        subtitle: 'Жыл сайын',
      },
    ],
  },
  ru: {
    title: 'Наши достижения',
    description: 'Надежность,\nподтвержденная\nцифрами.',
    stats: [
      {
        value: '14+',
        title: 'лет на рынке',
        subtitle: 'В управлении складской логистикой',
      },
      {
        value: '170 000',
        title: 'тонн продукции в год',
        subtitle: 'Обработка и хранение',
      },
      {
        value: '11 340',
        title: 'транспортных операций',
        subtitle: 'Ежегодно',
      },
    ],
  },
  en: {
    title: 'Our achievements',
    description: 'Reliability\nconfirmed\nby figures.',
    stats: [
      {
        value: '14+',
        title: 'years on the market',
        subtitle: 'In warehouse logistics management',
      },
      {
        value: '170,000',
        title: 'tons of products per year',
        subtitle: 'Handling and storage',
      },
      {
        value: '11,340',
        title: 'transport operations',
        subtitle: 'Annually',
      },
    ],
  },
};

export default function Achievements({ locale }: AchievementsProps) {
  const content = contentByLocale[locale];

  return (
    <section id="companies" className=" px-4 sm:px-10 lg:px-36 py-12 lg:py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 items-start">
        {/* Заголовок блока */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-black  text-3xl font-bold tracking-wider uppercase">
              {content.title}
            </h2>
          </div>
          <div className="w-[40%] h-[2px] bg-orange-500 mb-4" />
          <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
            {content.description}
          </p>
        </div>

        {/* Цифры */}
        {content.stats.map((stat, i) => (
          <div key={i} className="flex flex-col">
            <span className="text-4xl lg:text-5xl font-bold text-[#F4450A] mb-4">{stat.value}</span>
            <span className="text-sm font-semibold text-black mb-1">{stat.title}</span>
            <span className="text-xs text-gray-500">{stat.subtitle}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
