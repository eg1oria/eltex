import Image from 'next/image';
import { IoIosArrowRoundForward } from 'react-icons/io';

const items = [
  { number: '01', title: 'Ответственное хранение на лицензированном складе' },
  { number: '02', title: 'Склад временного хранения (СВХ) и таможенный склад (ТС)' },
  { number: '03', title: 'Копакинг (маркировка, вложение лифлетов)' },
  { number: '04', title: 'Агрегация и сериализация продукции' },
  { number: '05', title: 'Поддержка в получении разрешительной документации' },
  { number: '06', title: 'Таможенно-брокерские услуги' },
  { number: '07', title: 'Утилизация лекарственных средств' },
];

export default function Services() {
  return (
    <section className="pl-4 pr-4 sm:pl-8 sm:pr-8 md:pl-16 md:pr-16 lg:pl-36 lg:pr-0 pb-10 lg:pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2 mt-4">
            <div className="rounded-full bg-[#F4450A] w-2 h-2" />
            <h2 className="text-lg font-semibold text-black">Услуги</h2>
          </div>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black tracking-wide mt-4 flex flex-col gap-1 lg:gap-2">
            ЛОГИСТИКА <span className="text-[#F4450A]">ПОЛНОГО</span> ЦИКЛА
          </h3>
          <p className="text-black mt-4 max-w-lg">
            Предоставляем комплексные решения для фармацевтических компаний — от хранения и
            обработки до таможенного сопровождения и утилизации препаратов.
          </p>
          <div className="w-[30%] bg-[#F4450A] mt-4" style={{ height: '2px' }} />

          <ul className="mt-8 divide-y divide-black/10">
            {items.map((item) => (
              <li
                key={item.number}
                className="grid grid-cols-[2rem_minmax(0,1fr)_1.5rem] items-start gap-3 py-4 sm:grid-cols-[2.5rem_minmax(0,1fr)_2rem] sm:gap-4 cursor-pointer group transition-colors duration-200 px-2">
                <span className="pt-0.5 text-sm font-bold text-[#F4450A] sm:text-base">
                  {item.number}
                </span>
                <p className="max-w-[18rem] text-2xl leading-7 text-black sm:max-w-none sm:text-lg group-hover:text-[#F4450A] transition-colors duration-200">
                  {item.title}
                </p>
                <IoIosArrowRoundForward className="place-self-center text-2xl text-black group-hover:text-[#F4450A] group-hover:translate-x-1 transition-all duration-200" />
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <Image
            src="/services.webp"
            alt="Services"
            width={1200}
            height={900}
            className="w-full h-auto lg:h-full lg:object-cover"
          />
        </div>
      </div>
    </section>
  );
}
