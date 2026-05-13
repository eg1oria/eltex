import Image from 'next/image';
import { type IconType } from 'react-icons';
import { IoIosArrowRoundForward } from 'react-icons/io';
import {
  LuBoxes,
  LuFileText,
  LuPackageCheck,
  LuScanLine,
  LuThermometer,
  LuTrash2,
} from 'react-icons/lu';
import { type Locale } from '@/lib/i18n';

type ServiceItem = {
  number: string;
  title: string;
};

type ServiceImageLabelKey =
  | 'storage'
  | 'customs'
  | 'packing'
  | 'serialization'
  | 'docs'
  | 'disposal';

type ServiceImageLabel = {
  key: ServiceImageLabelKey;
  title: string;
  meta?: string;
};

type ServicesContent = {
  badge: string;
  titleStart: string;
  titleAccent: string;
  titleEnd: string;
  description: string;
  imageAlt: string;
  items: ServiceItem[];
  imageLabels: ServiceImageLabel[];
};

type ServicesProps = {
  locale: Locale;
};

const serviceImageLabelStyles: Record<ServiceImageLabelKey, { icon: IconType; className: string }> =
  {
    storage: {
      icon: LuThermometer,
      className:
        'left-[4%] top-[8%] max-w-[7rem] sm:left-[7%] sm:top-[10%] sm:max-w-[12rem] lg:max-w-[14rem]',
    },
    customs: {
      icon: LuBoxes,
      className:
        'right-[3%] top-[12%] max-w-[7rem] sm:right-[7%] sm:top-[13%] sm:max-w-[12rem] lg:max-w-[15rem]',
    },
    packing: {
      icon: LuPackageCheck,
      className: 'left-[4%] top-[42%] max-w-[6.5rem] sm:left-[7%] sm:top-[43%] sm:max-w-[10rem]',
    },
    serialization: {
      icon: LuScanLine,
      className: 'right-[3%] top-[50%] max-w-[6.5rem] sm:right-[7%] sm:top-[50%] sm:max-w-[11rem]',
    },
    docs: {
      icon: LuFileText,
      className:
        'bottom-[17%] left-[4%] max-w-[7rem] sm:bottom-[18%] sm:left-[7%] sm:max-w-[12rem]',
    },
    disposal: {
      icon: LuTrash2,
      className:
        'bottom-[12%] right-[3%] max-w-[7rem] sm:bottom-[12%] sm:right-[8%] sm:max-w-[12rem]',
    },
  };

const contentByLocale: Record<Locale, ServicesContent> = {
  kk: {
    badge: 'Қызметтер',
    titleStart: 'ТОЛЫҚ',
    titleAccent: 'ЦИКЛДІ',
    titleEnd: 'ЛОГИСТИКА',
    description:
      'Фармацевтикалық компанияларға арналған кешенді шешімдерді ұсынамыз: сақтау мен өңдеуден бастап кедендік сүйемелдеу мен препараттарды жоюға дейін.',
    imageAlt: 'Қызметтер',
    items: [
      { number: '01', title: 'Лицензияланған қоймада жауапты сақтау' },
      { number: '04', title: 'Өнімді агрегациялау және сериализациялау' },
      { number: '06', title: 'Кедендік-брокерлік қызметтер' },
      { number: '03', title: 'Копакинг (таңбалау, лифлеттерді салу)' },
      { number: '02', title: 'Уақытша сақтау қоймасы (УСҚ) және кеден қоймасы (КҚ)' },
      { number: '05', title: 'Рұқсат құжаттарын алуға қолдау көрсету' },
      { number: '07', title: 'Дәрілік заттарды жою' },
    ],
    imageLabels: [
      { key: 'storage', title: 'GDP талаптарына сәйкес сақтау', meta: '2-8°C    15-25°C' },
      { key: 'customs', title: 'Кеден қоймасы және уақытша сақтау қоймасы' },
      { key: 'packing', title: 'Қаптау және таңбалау' },
      { key: 'serialization', title: 'Сериализация және агрегация' },
      { key: 'docs', title: 'Лицензиялар мен құжаттаманы қолдау' },
      { key: 'disposal', title: 'Дәрілік заттарды жою' },
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
      { number: '04', title: 'Агрегация и сериализация продукции' },
      { number: '06', title: 'Таможенно-брокерские услуги' },
      { number: '03', title: 'Копакинг (маркировка, вложение лифлетов)' },
      { number: '02', title: 'Склад временного хранения (СВХ) и таможенный склад (ТС)' },
      { number: '05', title: 'Поддержка в получении разрешительной документации' },
      { number: '07', title: 'Утилизация лекарственных средств' },
    ],
    imageLabels: [
      { key: 'storage', title: 'Температурный режим', meta: '8-15°C' },
      { key: 'customs', title: 'Таможенный склад и склад временного хранения' },
      { key: 'packing', title: 'Упаковка и маркировка' },
      { key: 'serialization', title: 'Сериализация и агрегация' },
      { key: 'docs', title: 'Поддержка лицензий и документации' },
      { key: 'disposal', title: 'Утилизация лекарственных средств' },
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
      { number: '04', title: 'Product aggregation and serialization' },
      { number: '06', title: 'Customs brokerage services' },
      { number: '03', title: 'Copacking, labeling, and leaflet insertion' },
      { number: '02', title: 'Temporary storage warehouse and bonded customs warehouse' },
      { number: '05', title: 'Support in obtaining regulatory documentation' },
      { number: '07', title: 'Pharmaceutical product disposal' },
    ],
    imageLabels: [
      { key: 'storage', title: 'GDP-compliant storage', meta: '2-8°C    15-25°C' },
      { key: 'customs', title: 'Bonded customs and temporary storage warehouse' },
      { key: 'packing', title: 'Packaging and labeling' },
      { key: 'serialization', title: 'Serialization and aggregation' },
      { key: 'docs', title: 'License and documentation support' },
      { key: 'disposal', title: 'Pharmaceutical product disposal' },
    ],
  },
};

export default function Services({ locale }: ServicesProps) {
  const content = contentByLocale[locale];

  return (
    <section
      id="services"
      className="pl-4 pr-4 pb-10 sm:pl-8 sm:pr-8 md:pl-16 md:pr-16 lg:pb-0 lg:pl-36 lg:pr-0">
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
          <div className="relative h-full overflow-hidden bg-white">
            <Image
              src="/services1.jpg"
              alt={content.imageAlt}
              width={1200}
              height={900}
              className="block h-auto w-full    lg:h-full lg:object-cover"
            />
            <div className="pointer-events-none absolute inset-0 z-10 text-black">
              {content.imageLabels.map((label) => {
                const { icon: Icon, className } = serviceImageLabelStyles[label.key];

                return (
                  <div
                    key={label.key}
                    className={`absolute flex items-start gap-1.5 rounded-md bg-black/15 px-1.5 py-1 shadow-sm backdrop-blur-[1px] sm:gap-2.5 sm:px-3 sm:py-2 ${className}`}>
                    <Icon className="h-4 text-white w-4 shrink-0 stroke-[2.3] sm:h-7 sm:w-7 lg:h-8 lg:w-8" />
                    <div>
                      <p className="text-[6px] text-white font-semibold uppercase leading-[1.15] tracking-[0] sm:text-[10px] lg:text-[12px]">
                        {label.title}
                      </p>
                      {label.meta ? (
                        <p className="mt-2 whitespace-nowrap text-[6px] text-white font-semibold leading-none tracking-[0] sm:mt-3 sm:text-[10px] lg:text-[12px]">
                          {label.meta}
                        </p>
                      ) : null}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
