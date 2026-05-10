import Image from 'next/image';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { type Locale } from '@/lib/i18n';

type ServiceItem = {
  number: string;
  title: string;
};

type ServicesContent = {
  badge: string;
  titleStart: string;
  titleAccent: string;
  titleEnd: string;
  description: string;
  imageAlt: string;
  items: ServiceItem[];
};

type ServicesProps = {
  locale: Locale;
};

const contentByLocale: Record<Locale, ServicesContent> = {
  kk: {
    badge: 'Кызметтер',
    titleStart: 'ТОЛЫҚ',
    titleAccent: 'ЦИКЛДІ',
    titleEnd: 'ЛОГИСТИКА',
    description:
      'Фармацевтикалық компанияларға арналған кешенді шешімдерді ұсынамыз: сақтау мен өңдеуден бастап кедендік сүйемелдеу мен препараттарды жоюға дейін.',
    imageAlt: 'Қызметтер',
    items: [
      { number: '01', title: 'Лицензияланған қоймада жауапты сақтау' },
      { number: '02', title: 'Уақытша сақтау қоймасы (УСҚ) және кеден қоймасы (КҚ)' },
      { number: '03', title: 'Копакинг (таңбалау, лифлеттерді салу)' },
      { number: '04', title: 'Өнімді агрегациялау және сериализациялау' },
      { number: '05', title: 'Рұқсат құжаттарын алуға қолдау көрсету' },
      { number: '06', title: 'Кедендік-брокерлік қызметтер' },
      { number: '07', title: 'Дәрілік заттарды жою' },
    ],
  },
  ru: {
    badge: 'Услуги',
    titleStart: 'ЛОГИСТИКА',
    titleAccent: 'ПОЛНОГО',
    titleEnd: 'ЦИКЛА',
    description:
      'Предоставляем комплексные решения для фармацевтических компаний — от хранения и обработки до таможенного сопровождения и утилизации препаратов.',
    imageAlt: 'Услуги',
    items: [
      { number: '01', title: 'Ответственное хранение на лицензированном складе' },
      { number: '02', title: 'Склад временного хранения (СВХ) и таможенный склад (ТС)' },
      { number: '03', title: 'Копакинг (маркировка, вложение лифлетов)' },
      { number: '04', title: 'Агрегация и сериализация продукции' },
      { number: '05', title: 'Поддержка в получении разрешительной документации' },
      { number: '06', title: 'Таможенно-брокерские услуги' },
      { number: '07', title: 'Утилизация лекарственных средств' },
    ],
  },
  en: {
    badge: 'Services',
    titleStart: 'END-TO-END',
    titleAccent: 'LOGISTICS',
    titleEnd: '',
    description:
      'We provide end-to-end solutions for pharmaceutical companies, from storage and handling to customs support and product disposal.',
    imageAlt: 'Services',
    items: [
      { number: '01', title: 'Responsible storage in a licensed warehouse' },
      { number: '02', title: 'Temporary storage warehouse and bonded customs warehouse' },
      { number: '03', title: 'Copacking, labeling, and leaflet insertion' },
      { number: '04', title: 'Product aggregation and serialization' },
      { number: '05', title: 'Support in obtaining regulatory documentation' },
      { number: '06', title: 'Customs brokerage services' },
      { number: '07', title: 'Pharmaceutical product disposal' },
    ],
  },
};

export default function Services({ locale }: ServicesProps) {
  const content = contentByLocale[locale];

  return (
    <section className="pl-4 pr-4 pb-10 sm:pl-8 sm:pr-8 md:pl-16 md:pr-16 lg:pl-36 lg:pr-0 lg:pb-16">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <div className="mt-4 flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-[#F4450A]" />
            <h2 className="text-lg font-semibold text-black">{content.badge}</h2>
          </div>
          <h3 className="mt-4 flex flex-col gap-1 text-3xl font-semibold tracking-wide text-black sm:text-4xl lg:gap-2 lg:text-5xl">
            {content.titleStart} <span className="text-[#F4450A]">{content.titleAccent}</span>{' '}
            {content.titleEnd}
          </h3>
          <p className="mt-4 max-w-lg text-black">{content.description}</p>
          <div className="mt-4 h-[2px] w-[30%] bg-[#F4450A]" />

          <ul className="mt-8 divide-y divide-black/10">
            {content.items.map((item) => (
              <li
                key={item.number}
                className="group grid cursor-pointer grid-cols-[2rem_minmax(0,1fr)_1.5rem] items-start gap-3 px-2 py-4 transition-colors duration-200 sm:grid-cols-[2.5rem_minmax(0,1fr)_2rem] sm:gap-4">
                <span className="pt-0.5 text-sm font-bold text-[#F4450A] sm:text-base">
                  {item.number}
                </span>
                <p className="max-w-[18rem] text-2xl leading-7 text-black transition-colors duration-200 group-hover:text-[#F4450A] sm:max-w-none sm:text-lg">
                  {item.title}
                </p>
                <IoIosArrowRoundForward className="place-self-center text-2xl text-black transition-all duration-200 group-hover:translate-x-1 group-hover:text-[#F4450A]" />
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <Image
            src="/services.webp"
            alt={content.imageAlt}
            width={1200}
            height={900}
            className="h-auto w-full lg:h-full lg:object-cover"
          />
        </div>
      </div>
    </section>
  );
}
