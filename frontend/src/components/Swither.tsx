'use client';

import { useEffect, useRef, useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { LOCALES, LOCALE_LABELS, LOCALE_NAMES, type Locale } from '@/lib/i18n';

type Props = {
  locale: Locale;
  onSelect: (locale: Locale) => void;
};

export default function LocaleSwitcher({ locale, onSelect }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler);
    };
  }, [open]);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        className="flex items-center cursor-pointer gap-1 px-3 py-2 text-sm text-white hover:text-[#FF5A1F] transition-colors duration-200">
        {LOCALE_LABELS[locale]}
        <MdKeyboardArrowDown
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      <div
        role="menu"
        className={`absolute right-0  top-full w-44 rounded-2xl border border-white/10 bg-white/90 pt-2 px-2 pb-2 shadow-xl shadow-black/30 backdrop-blur-md transition-all duration-200 ${
          open
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none -translate-y-1 opacity-0'
        }`}>
        {LOCALES.map((option) => {
          const isActive = option === locale;
          return (
            <button
              key={option}
              role="menuitem"
              type="button"
              onClick={() => {
                onSelect(option);
                setOpen(false);
              }}
              className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm transition-colors duration-200 cursor-pointer ${
                isActive ? 'bg-[#FF5A1F]' : 'hover:bg-black/5'
              }`}>
              <span className={isActive ? 'text-white font-medium' : 'text-black'}>
                {LOCALE_NAMES[option]}
              </span>
              <span
                className={`text-xs font-semibold uppercase ${isActive ? 'text-white' : 'text-black/40'}`}>
                {LOCALE_LABELS[option]}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
