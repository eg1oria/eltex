import { createTranslator, type Locale } from '@/lib/i18n';

type AboutProps = {
  locale: Locale;
};

export default function Proizvod({ locale }: AboutProps) {
  const t = createTranslator(locale);
  const badge = t('proiz.badge');
  const btn = t('proiz.link');

  return (
    <section
      id="about"
      className="bg-cover bg-center bg-no-repeat px-4 sm:px-8 md:px-16 lg:px-36 py-10 lg:py-16 bg-[#F5F5F5]">
      <div className="flex items-center gap-2">
        <div className="rounded-full bg-[#353EEA] w-2 h-2" />
        <h2 className="text-lg font-semibold text-black">{badge}</h2>
      </div>

      <a
        href="/proizvodstvo"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 flex w-full items-center justify-center gap-1 rounded-full bg-[#353EEA] px-5 py-2 text-sm text-white sm:mt-6 sm:w-max sm:justify-start lg:mt-6 lg:px-6 lg:py-2 lg:text-base">
        {btn}
      </a>
    </section>
  );
}
