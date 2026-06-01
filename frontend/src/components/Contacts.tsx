import Image from 'next/image';
import { type Locale } from '@/lib/i18n';

type ContactsContent = {
  imageAlt: string;
  badge: string;
  titleStart: string;
  titleEnd: string;
  addressLabel: string;
  address: string;
  phoneOneLabel: string;
  phoneTwoLabel: string;
  emailOneLabel: string;
  emailTwoLabel: string;
};

type ContactsProps = {
  locale: Locale;
};

const contentByLocale: Record<Locale, ContactsContent> = {
  kk: {
    imageAlt: 'Байланыс',
    badge: 'Байланыс',
    titleStart: 'Әрдайым байланыстамыз.',
    titleEnd: 'Ынтымақтастыққа дайынбыз',
    addressLabel: 'Мекенжай',
    address: 'Алматы қ., Гумилев көш. 1, «Алатау» АИП ЕЭА',
    phoneOneLabel: 'Телефон 1',
    phoneTwoLabel: 'Телефон 2',
    emailOneLabel: 'E-MAIL 1',
    emailTwoLabel: 'E-MAIL 2',
  },
  ru: {
    imageAlt: 'Контакты',
    badge: 'Контакты',
    titleStart: 'Всегда на связи.',
    titleEnd: 'Готовы к сотрудничеству',
    addressLabel: 'Адрес',
    address: 'г. Алматы, ул. Гумилев 1, СЭЗ ПИТ «Алатау»',
    phoneOneLabel: 'Телефон 1',
    phoneTwoLabel: 'Телефон 2',
    emailOneLabel: 'E-MAIL 1',
    emailTwoLabel: 'E-MAIL 2',
  },
  en: {
    imageAlt: 'Contacts',
    badge: 'Contacts',
    titleStart: 'Always in touch.',
    titleEnd: 'Ready to cooperate',
    addressLabel: 'Address',
    address: '1 Gumilev St., Almaty, SEZ PIT «Alatau»',
    phoneOneLabel: 'Phone 1',
    phoneTwoLabel: 'Phone 2',
    emailOneLabel: 'E-MAIL 1',
    emailTwoLabel: 'E-MAIL 2',
  },
};

export default function Contacts({ locale }: ContactsProps) {
  const content = contentByLocale[locale];

  return (
    <section id="contacts" className="md:px-0 px-0 py-8 lg:py-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 items-start border bo border-gray-400 overflow-hidden">
        {/* Левая часть — изображение */}
        <div className="relative w-full h-[300px] lg:h-[480px] rounded-br-lg rounded-bl-lg lg:rounded-bl-none lg:rounded-tr-lg overflow-hidden">
          <Image
            src="/contacts-img.webp"
            alt={content.imageAlt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        {/* Правая часть — контакты */}
        <div className="flex flex-col gap-3 md:px-4 px-4 py-4">
          <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">
            {content.badge}
          </span>

          <h2 className="text-2xl lg:text-4xl font-bold text-black leading-tight">
            {content.titleStart} <br />
            {content.titleEnd}
          </h2>

          <div className="flex flex-col gap-5 mt-4">
            {/* Адрес */}
            <div className="flex flex-col">
              <span className="text-xs text-gray-500 mb-1">{content.addressLabel}</span>
              <span className="text-sm font-semibold text-black">{content.address}</span>
            </div>

            {/* Телефон 1 */}
            <div className="flex flex-col">
              <span className="text-xs text-gray-500 mb-1">{content.phoneOneLabel}</span>
              <a
                href="tel:+79037181331"
                className="text-sm font-semibold text-black hover:text-[#353EEA] transition-colors">
                +7 701 467 3649
              </a>
            </div>

            {/* Телефон 2 */}
            <div className="flex flex-col">
              <span className="text-xs text-gray-500 mb-1">{content.phoneTwoLabel}</span>
              <a
                href="tel:+77775105005"
                className="text-sm font-semibold text-black underline hover:text-[#353EEA] transition-colors">
                +7 701 765 4148
              </a>
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <span className="text-xs text-gray-500 mb-1">{content.emailOneLabel}</span>
              <a
                href="mailto:sergey.arutunov@htl.kz"
                className="text-sm font-semibold text-black underline hover:text-[#353EEA] transition-colors">
                post@eltexalatau.kz
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
