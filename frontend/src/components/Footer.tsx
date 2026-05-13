import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedinIn, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';
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

const footerSocialLinks = [
  {
    label: 'LinkedIn',
    href: '#',
    Icon: FaLinkedinIn,
  },
  {
    label: 'Telegram',
    href: '#',
    Icon: FaTelegramPlane,
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/77775105005',
    Icon: FaWhatsapp,
  },
];

const footerLinkHrefs = ['#about', '#services', '#companies', '#contacts'];

const contentByLocale: Record<Locale, FooterContent> = {
  kk: {
    description:
      'Фармацевтикалық өнімдерге арналған, халықаралық сапа және қауіпсіздік стандарттарын сақтайтын A класты заманауи қойма кешені.',
    navigationTitle: 'Бөлімдер',
    contactsTitle: 'Байланыс',
    address: 'Первомайская өнеркәсіптік аймағы, 235В',
    copyright: '© 2024 Manata Logistics. Барлық құқықтар қорғалған.',
    privacyPolicy: 'Құпиялылық саясаты',
    userAgreement: 'Пайдаланушы келісімі',
  },
  ru: {
    description:
      'Современный складской комплекс класса A для фармацевтической продукции с соблюдением международных стандартов качества и безопасности.',
    navigationTitle: 'Навигация',
    contactsTitle: 'Контакты',
    address: 'Первомайская промышленная зона, 235В',
    copyright: '© 2024 Manata Logistics. Все права защищены.',
    privacyPolicy: 'Политика конфиденциальности',
    userAgreement: 'Пользовательское соглашение',
  },
  en: {
    description:
      'A modern Class A warehouse complex for pharmaceutical products, built to international quality and safety standards.',
    navigationTitle: 'Navigation',
    contactsTitle: 'Contacts',
    address: 'Pervomayskaya industrial zone, 235V',
    copyright: '© 2024 Manata Logistics. All rights reserved.',
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
            <Image
              src="/header-logo.png"
              width={44}
              height={44}
              alt="logo"
              className="w-10 h-10 sm:w-12 sm:h-12 lg:w-[54px] lg:h-[54px]"
            />
            <div className="flex flex-col leading-tight">
              <p className="font-extrabold text-black text-base sm:text-lg lg:text-xl leading-tight">
                MANATA
              </p>
              <span className="font-semibold text-sm text-black sm:text-base lg:text-lg leading-tight">
                LOGISTICS
              </span>
            </div>
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
                    className=" text-black transition-colors hover:text-[#F4450A] sm:text-base lg:text-lg">
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
                  className="text-sm  text-black transition-colors hover:text-[#F4450A]">
                  +7&nbsp;903&nbsp;718 1331
                </a>
              </div>

              <div className="flex flex-col">
                <a
                  href="tel:+77775105005"
                  className="text-sm  text-black underline transition-colors hover:text-[#F4450A]">
                  +7&nbsp;777&nbsp;510 50 05
                </a>
              </div>

              <div className="flex flex-col">
                <a
                  href="mailto:sergey.arutunov@htl.kz"
                  className="text-sm  text-black underline transition-colors hover:text-[#F4450A]">
                  sergey.arutunov@htl.kz
                </a>
              </div>

              <div className="flex flex-col">
                <a
                  href="mailto:Oxana.Komissarova@htl.kz"
                  className="text-sm  text-black underline transition-colors hover:text-[#F4450A]">
                  Oxana.Komissarova@htl.kz
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
          <div className="flex items-center gap-5">
            {footerSocialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-white/40 hover:text-[#F4450A]">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
