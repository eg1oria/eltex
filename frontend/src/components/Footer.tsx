import Image from 'next/image';
import Link from 'next/link';
import { createTranslator, type Locale, type NavigationLink } from '@/lib/i18n';

type FooterProps = {
  locale: Locale;
};

type FooterContent = {
  description: string;
  navigationTitle: string;
  contactsTitle: string;
  address: string;
  copyright: string;
  privacyPolicy: string;
  userAgreement: string;
};

const footerLinkHrefs = ['#about', '#services', '#companies', '#contacts'];

const contentByLocale: Record<Locale, FooterContent> = {
  kk: {
    description:
      'Қазақстандық электроника және заманауи телекоммуникациялық жабдық өндірушісі. Қазақстандағы Eltex зауытының жалғыз ресми өкілі.',
    navigationTitle: 'Бөлімдер',
    contactsTitle: 'Байланыс',
    address: 'Алматы қ., Гумилев көш. 1, ЕЭА АИП «Алатау»',
    copyright: '© 2012 ЭлтексАлатау. Барлық құқықтар қорғалған.',
    privacyPolicy: 'Құпиялылық саясаты',
    userAgreement: 'Пайдаланушы келісімі',
  },
  ru: {
    description:
      'Казахстанский производитель электроники и современного телекоммуникационного оборудования. Единственный официальный представитель завода Eltex в Казахстане.',
    navigationTitle: 'Навигация',
    contactsTitle: 'Контакты',
    address: 'г. Алматы, ул. Гумилев 1, СЭЗ ПИТ «Алатау»',
    copyright: '© 2012 ЭлтексАлатау. Все права защищены.',
    privacyPolicy: 'Политика конфиденциальности',
    userAgreement: 'Пользовательское соглашение',
  },
  en: {
    description:
      'A Kazakhstani manufacturer of electronics and modern telecommunications equipment. The sole official representative of the Eltex factory in Kazakhstan.',
    navigationTitle: 'Navigation',
    contactsTitle: 'Contacts',
    address: '1 Gumilev St., Almaty, SEZ PIT «Alatau»',
    copyright: '© 2012 EltexAlatau. All rights reserved.',
    privacyPolicy: 'Privacy policy',
    userAgreement: 'User agreement',
  },
};

export default function Footer({ locale }: FooterProps) {
  const t = createTranslator(locale);
  const navLinks = t('header.navLinks') as NavigationLink[];
  const content = contentByLocale[locale];

  return (
    <footer className="bg-white">
      <div className="grid grid-cols-1 items-start gap-8 px-4 py-12 sm:px-10 md:grid-cols-3 md:gap-12 lg:px-36 lg:py-16">
        <div>
          <Link href="/" className="flex items-center gap-1 shrink-0 cursor-pointer">
            <Image src="/logo.png" width={170} height={44} alt="logo" />
          </Link>
          <p
            className="text-black sm:text-base lg:text-lg leading-tight mt-4 max-w-[250px]"
            style={{
              fontSize: 14,
            }}>
            {content.description}
          </p>
        </div>
        <div>
          <nav className="flex flex-col gap-3">
            <h4 className="text-base font-bold tracking-widest text-gray-500 uppercase">
              {content.navigationTitle}
            </h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link, index) => (
                <li key={link.label}>
                  <Link
                    style={{
                      fontSize: 15,
                    }}
                    href={footerLinkHrefs[index] ?? '/'}
                    className=" text-black transition-colors hover:text-[#353EEA] sm:text-base lg:text-lg">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div>
          <div className="flex flex-col gap-3">
            <h4 className="text-base font-bold tracking-widest text-gray-500 uppercase">
              {content.contactsTitle}
            </h4>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col">
                <span className="text-sm  text-black">{content.address}</span>
              </div>

              <div className="flex flex-col">
                <a
                  href="tel:+79037181331"
                  className="text-sm  text-black transition-colors hover:text-[#353EEA]">
                  +7 701 467 3649
                </a>
              </div>

              <div className="flex flex-col">
                <a
                  href="tel:+77775105005"
                  className="text-sm  text-black underline transition-colors hover:text-[#353EEA]">
                  +7 701 765 4148
                </a>
              </div>

              <div className="flex flex-col">
                <a
                  href="mailto:sergey.arutunov@htl.kz"
                  className="text-sm  text-black underline transition-colors hover:text-[#353EEA]">
                  post@eltexalatau.kz
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#111214] px-4 py-4 sm:px-10 lg:px-36">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2 text-[11px] leading-none text-white/45">
            <p>{content.copyright}</p>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <a href="#" className="transition-colors hover:text-white/80">
                {content.privacyPolicy}
              </a>
              <span className="h-3 w-px bg-white/20" />
              <a href="#" className="transition-colors hover:text-white/80">
                {content.userAgreement}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
