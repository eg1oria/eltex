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
  const items = t('about.items') as AboutItem[];

  return (
    <section
      id="about"
      className="bg-cover bg-center bg-no-repeat px-4 sm:px-8 md:px-16 lg:px-36 py-10 lg:py-16"
      style={{ backgroundImage: "url('/about/bg.webp')" }}>
      <div className="flex items-center gap-2">
        <div className="rounded-full bg-[#353EEA] w-2 h-2" />
        <h2 className="text-lg font-semibold text-black">{badge}</h2>
      </div>

      <div className="mt-4 grid grid-cols-1 items-start gap-8 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] xl:gap-16">
        <div>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black tracking-wide mt-4">
            {title} <span className="text-[#353EEA]">{accentTitle}</span>
          </h3>
          <div className="mt-4 max-w-xl flex flex-col gap-4">
            <p className="text-black">{description}</p>
          </div>
        </div>
        <ul className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
          {items.map((item, index) => (
            <li
              key={index}
              className="flex min-h-32 items-center gap-3 rounded-lg bg-white p-4 lg:p-6"
              style={{ boxShadow: '0px 2px 7px 0px rgba(34, 60, 80, 0.2)' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.icon} width={52} height={52} alt={item.title} className="shrink-0" />
              <div className="min-w-0">
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
