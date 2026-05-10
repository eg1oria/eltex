import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { createTranslator, type AboutItem, type Locale } from '@/lib/i18n';

type AboutProps = {
  locale: Locale;
};

export default function About({ locale }: AboutProps) {
  const t = createTranslator(locale);
  const badge = t('about.badge');
  const title = t('about.title');
  const accentTitle = t('about.accentTitle');
  const description = t('about.description');
  const cta = t('about.cta');
  const items = t('about.items') as AboutItem[];

  return (
    <section
      className="bg-cover bg-center bg-no-repeat px-4 sm:px-8 md:px-16 lg:px-36 py-10 lg:py-16"
      style={{ backgroundImage: "url('/about/bg.webp')" }}>
      <div className="flex items-center gap-2">
        <div className="rounded-full bg-[#F4450A] w-2 h-2" />
        <h2 className="text-lg font-semibold text-black">{badge}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 [@media(min-width:1500px)]:grid-cols-[400px_400px_minmax(0,1fr)] gap-8 lg:gap-16 mt-0">
        {/* Заголовок */}
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black tracking-wide mt-4">
          {title} <span className="text-[#F4450A]">{accentTitle}</span>
        </h3>

        {/* Описание */}
        <div className="w-full flex flex-col gap-4">
          <p className="text-black">{description}</p>
          <div className="w-[50%] bg-[#F4450A] mt-4" style={{ height: '2px' }} />
          <Link
            href="/about"
            className="flex items-center gap-1 mt-4 text-black font-bold text-xl hover:underline">
            {cta} <IoIosArrowRoundForward size={24} />
          </Link>
        </div>

        {/* Карточки — на md занимают обе колонки, на 1500px+ своя колонка */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 col-span-1 md:col-span-2 [@media(min-width:1500px)]:col-span-1">
          {items.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-3 rounded-lg p-4 lg:p-6"
              style={{ boxShadow: '0px 2px 7px 0px rgba(34, 60, 80, 0.2)' }}>
              <Image src={item.icon} width={52} height={52} alt={item.title} className="shrink-0" />
              <div>
                <h4 className="font-semibold text-black">{item.title}</h4>
                <p className="text-gray-600">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
