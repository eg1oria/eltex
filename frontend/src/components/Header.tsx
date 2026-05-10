'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { MdMenu, MdClose } from 'react-icons/md';
import { createTranslator, type Locale, type NavigationLink } from '@/lib/i18n';
import LocaleSwitcher from './Swither';
import Link from 'next/link';

type HeaderProps = {
  locale: Locale;
  onSelectLocale: (locale: Locale) => void;
};

export default function Header({ locale, onSelectLocale }: HeaderProps) {
  const t = createTranslator(locale);
  const navLinks = t('header.navLinks') as NavigationLink[];
  const requestCta = t('header.requestCta');
  const menuLabel = t('header.menuLabel');
  const closeLabel = t('header.closeLabel');
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileLocaleMenuOpen, setMobileLocaleMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileLocaleMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
        setMobileLocaleMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!mobileLocaleMenuOpen) return;

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        mobileLocaleMenuRef.current &&
        !mobileLocaleMenuRef.current.contains(event.target as Node)
      ) {
        setMobileLocaleMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [mobileLocaleMenuOpen]);

  const handleToggleMenu = () => {
    setMenuOpen((currentValue) => !currentValue);
    setMobileLocaleMenuOpen(false);
  };

  const closeMobileMenu = () => {
    setMenuOpen(false);
    setMobileLocaleMenuOpen(false);
  };

  return (
    <>
      <header
        className={`px-4 sm:px-8 md:px-16 lg:px-36 py-4 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-black/60 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}>
        <div className="flex items-center justify-between">
          {/* Логотип */}
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-1 shrink-0 cursor-pointer">
              <Image
                src="/header-logo.png"
                width={44}
                height={44}
                alt="logo"
                className="w-10 h-10 sm:w-12 sm:h-12 lg:w-[54px] lg:h-[54px]"
              />
              <div className="flex flex-col leading-tight">
                <p className="font-extrabold text-base sm:text-lg lg:text-xl leading-tight">
                  MANATA
                </p>
                <span className="font-semibold text-sm sm:text-base lg:text-lg leading-tight">
                  LOGISTICS
                </span>
              </div>
            </Link>

            {/* Desktop навигация */}
            <nav className="hidden lg:block">
              <ul className="flex items-center gap-6 xl:gap-8">
                {navLinks.map((link) => (
                  <li
                    key={link.label}
                    className="text-base xl:text-lg cursor-pointer hover:text-[#FF5A1F] transition-colors duration-200 whitespace-nowrap">
                    {link.label}
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Desktop правая часть */}
          <div className="hidden lg:flex items-center gap-4">
            <LocaleSwitcher locale={locale} onSelect={onSelectLocale} />

            <button className="px-4 cursor-pointer py-1 border border-[#FF5A1F] text-white rounded-full hover:bg-[#FF5A1F] transition-colors duration-200 whitespace-nowrap">
              {requestCta}
            </button>
          </div>

          {/* Mobile: язык + бургер */}
          <div className="flex lg:hidden items-center gap-2">
            <LocaleSwitcher locale={locale} onSelect={onSelectLocale} />

            <button
              onClick={handleToggleMenu}
              className="p-2 text-white text-2xl focus:outline-none cursor-pointer"
              aria-label={menuLabel}>
              {menuOpen ? <MdClose /> : <MdMenu />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile меню — оверлей */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMobileMenu}
      />

      {/* Mobile меню — панель */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-72 sm:w-80 bg-[#0a0a0a] border-l border-white/10 flex flex-col pt-20 px-6 pb-8 transition-transform duration-300 ease-in-out lg:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
        <button
          onClick={closeMobileMenu}
          className="absolute top-4 right-4 p-2 text-white text-2xl"
          aria-label={closeLabel}>
          <MdClose />
        </button>

        <nav className="flex-1">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <button
                  onClick={closeMobileMenu}
                  className="w-full text-left py-4 text-lg text-white border-b border-white/10 hover:text-[#FF5A1F] transition-colors duration-200 cursor-pointer">
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-auto pt-6">
          <button className="w-full py-3 border border-[#FF5A1F] text-white rounded-full hover:bg-[#FF5A1F] transition-colors duration-200 text-base font-medium">
            {requestCta}
          </button>
        </div>
      </div>
    </>
  );
}
