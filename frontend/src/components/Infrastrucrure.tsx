import Image from 'next/image';
import { type Locale } from '@/lib/i18n';

type Item = {
  img: string;
  title: string;
  text: string;
  value?: string;
  className?: string;
};

type InfrastructureContent = {
  title: string;
  accentTitle: string;
  description: string;
  backgroundAlt: string;
  imageAlt: string;
  moreLabel: string;
  items: Item[];
};

type InfrastructureProps = {
  locale: Locale;
};

const infrastructureGridClassName = [
  'grid gap-3 p-3 bg-black',
  'grid-cols-1 auto-rows-[260px]',
  'sm:grid-cols-2 sm:auto-rows-[280px]',
  'xl:grid-cols-12 xl:grid-rows-[220px_220px_260px] xl:auto-rows-auto',
  'px-4 sm:px-10 lg:px-36 py-12 lg:py-16',
].join(' ');

const contentByLocale: Record<Locale, InfrastructureContent> = {
  kk: {
    title: 'КЕШЕН',
    accentTitle: 'ИНФРАҚҰРЫЛЫМЫ',
    description:
      'Біздің кешен халықаралық сапа және қауіпсіздік стандарттарына сәйкес жобаланып, салынған. Инфрақұрылымның әрбір бөлшегі өнімнің сақталуына және логистикалық үдерістердің тиімділігіне бағытталған.',
    backgroundAlt: 'Инфрақұрылым фоны',
    imageAlt: 'Инфрақұрылым',
    moreLabel: 'Толығырақ',
    items: [
      {
        img: '/infra/1.webp',
        title: 'СЫЙЫМДЫЛЫҚ',
        value: '20 000+',
        text: 'паллеттік орын',
        className: 'sm:col-span-1 xl:col-span-4 xl:row-span-2',
      },
      {
        img: '/infra/2.webp',
        title: 'КЕШЕН АУМАҒЫ',
        value: '22 000 м²',
        text: 'фармацевтикалық инфрақұрылым',
        className: 'sm:col-span-1 xl:col-span-4 xl:row-span-1',
      },
      {
        img: '/infra/3.webp',
        title: '',
        text: '',
        className: 'sm:col-span-2 xl:col-span-4 xl:row-span-2',
      },
      {
        img: '/infra/4.webp',
        title: 'ТЕМПЕРАТУРАЛЫҚ БАҚЫЛАУ',
        value: '+15…+25°C',
        text: 'бақыланатын сақтау аймақтары',
        className: 'sm:col-span-1 xl:col-span-4 xl:row-span-1',
      },
      {
        img: '/infra/5.webp',
        title: 'КӨЛІК ЛОГИСТИКАСЫ',
        text: 'УСҚ, КҚ және өнімді жедел жөнелту',
        className: 'sm:col-span-1 xl:col-span-4 xl:row-span-1',
      },
      {
        img: '/infra/6.webp',
        title: 'СУЫҚ ТІЗБЕК',
        value: '+2…+8°C, +8…+15°C, -20°C',
        text: 'бақыланатын сақтау аймақтары',
        className: 'sm:col-span-1 xl:col-span-4 xl:row-span-1',
      },
      {
        img: '/infra/7.webp',
        title: 'ҚАУІПСІЗДІК',
        text: 'Түтін шығару, өрт сөндіру және мониторинг жүйелері',
        className: 'xl:col-span-4 xl:row-span-1',
      },
    ],
  },
  ru: {
    title: 'ИНФРАСТРУКТУРА',
    accentTitle: 'КОМПЛЕКСА',
    description:
      'Наш комплекс спроектирован и построен в соответствии с международными стандартами качества и безопасности. Каждая деталь инфраструктуры направлена на сохранность продукции и эффективность логистических процессов.',
    backgroundAlt: 'Фон инфраструктуры',
    imageAlt: 'Инфраструктура',
    moreLabel: 'Подробнее',
    items: [
      {
        img: '/infra/1.webp',
        title: 'ВМЕСТИМОСТЬ',
        value: '20 000+',
        text: 'паллетомест',
        className: 'sm:col-span-1 xl:col-span-4 xl:row-span-2',
      },
      {
        img: '/infra/2.webp',
        title: 'ПЛОЩАДЬ КОМПЛЕКСА',
        value: '22 000 м²',
        text: 'фармацевтической инфраструктуры',
        className: 'sm:col-span-1 xl:col-span-4 xl:row-span-1',
      },
      {
        img: '/infra/3.webp',
        title: '',
        text: '',
        className: 'sm:col-span-2 xl:col-span-4 xl:row-span-2',
      },
      {
        img: '/infra/4.webp',
        title: 'ТЕМПЕРАТУРНЫЙ КОНТРОЛЬ',
        value: '+15…+25°C',
        text: 'контролируемые зоны хранения',
        className: 'sm:col-span-1 xl:col-span-4 xl:row-span-1',
      },
      {
        img: '/infra/5.webp',
        title: 'ТРАНСПОРТНАЯ ЛОГИСТИКА',
        text: 'СВХ, ТС и быстрая отгрузка продукции',
        className: 'sm:col-span-1 xl:col-span-4 xl:row-span-1',
      },
      {
        img: '/infra/6.webp',
        title: 'ХОЛОДОВАЯ ЦЕПЬ',
        value: '+2…+8°C, +8…+15°C, -20°C',
        text: 'контролируемые зоны хранения',
        className: 'sm:col-span-1 xl:col-span-4 xl:row-span-1',
      },
      {
        img: '/infra/7.webp',
        title: 'БЕЗОПАСНОСТЬ',
        text: 'Системы дымоудаления, пожаротушения и мониторинга',
        className: 'xl:col-span-4 xl:row-span-1',
      },
    ],
  },
  en: {
    title: 'COMPLEX',
    accentTitle: 'INFRASTRUCTURE',
    description:
      'Our complex is designed and built in line with international quality and safety standards. Every detail of the infrastructure supports product integrity and efficient logistics processes.',
    backgroundAlt: 'Infrastructure background',
    imageAlt: 'Infrastructure',
    moreLabel: 'Learn more',
    items: [
      {
        img: '/infra/1.webp',
        title: 'CAPACITY',
        value: '20,000+',
        text: 'pallet positions',
        className: 'sm:col-span-1 xl:col-span-4 xl:row-span-2',
      },
      {
        img: '/infra/2.webp',
        title: 'FACILITY AREA',
        value: '22,000 m²',
        text: 'of pharmaceutical infrastructure',
        className: 'sm:col-span-1 xl:col-span-4 xl:row-span-1',
      },
      {
        img: '/infra/3.webp',
        title: '',
        text: '',
        className: 'sm:col-span-2 xl:col-span-4 xl:row-span-2',
      },
      {
        img: '/infra/4.webp',
        title: 'TEMPERATURE CONTROL',
        value: '+15…+25°C',
        text: 'controlled storage zones',
        className: 'sm:col-span-1 xl:col-span-4 xl:row-span-1',
      },
      {
        img: '/infra/5.webp',
        title: 'TRANSPORT LOGISTICS',
        text: 'Temporary storage, customs warehouse, and fast product shipment',
        className: 'sm:col-span-1 xl:col-span-4 xl:row-span-1',
      },
      {
        img: '/infra/6.webp',
        title: 'COLD CHAIN',
        value: '+2…+8°C, +8…+15°C, -20°C',
        text: 'controlled storage zones',
        className: 'sm:col-span-1 xl:col-span-4 xl:row-span-1',
      },
      {
        img: '/infra/7.webp',
        title: 'SECURITY',
        text: 'Smoke extraction, fire suppression, and monitoring systems',
        className: 'xl:col-span-4 xl:row-span-1',
      },
    ],
  },
};

export default function Infrastructure({ locale }: InfrastructureProps) {
  const content = contentByLocale[locale];

  return (
    <section>
      <div className="relative px-4 sm:px-10 lg:px-36 py-12 lg:py-16 bg-black overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-48 sm:h-64 lg:top-0 lg:right-0 lg:left-auto lg:w-1/2 lg:h-full">
          <Image
            src="/infra/bg.webp"
            alt={content.backgroundAlt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-transparent lg:bg-gradient-to-r lg:from-black lg:via-black/40 lg:to-transparent" />
        </div>

        <div className="flex flex-col gap-8 [@media(min-width:1400px)]:flex-row [@media(min-width:1400px)]:gap-16 md:pb-10">
          <div className="[@media(min-width:1400px)]:max-w-md flex flex-col gap-4 lg:gap-8 shrink-0">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-wide flex flex-col gap-1 lg:gap-2 z-1">
              {content.title}
              <span className="text-[#F4450A]">{content.accentTitle}</span>
            </h3>
            <p className="text-gray-300 text-sm sm:text-base max-w-lg z-1">{content.description}</p>
          </div>
        </div>
      </div>

      <ul className={infrastructureGridClassName}>
        {content.items.map((item) => (
          <li
            key={item.img}
            className={`group relative overflow-hidden rounded-lg bg-zinc-900 ${item.className ?? ''}`}>
            <Image
              src={item.img}
              alt={item.title || content.imageAlt}
              fill
              sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/5" />

            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 pr-16">
              <div className="min-w-0 text-white">
                {item.title && (
                  <h4 className="text-sm font-semibold tracking-wide sm:text-base uppercase">
                    {item.title}
                  </h4>
                )}
                {item.value && (
                  <p className="mt-1 text-2xl font-light leading-none tracking-wide sm:text-3xl lg:text-4xl">
                    {item.value}
                  </p>
                )}
                {item.text && (
                  <p className="mt-2 max-w-[20rem] text-xs leading-snug text-gray-300 sm:text-sm">
                    {item.text}
                  </p>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
