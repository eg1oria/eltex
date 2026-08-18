'use client';

import { useEffect, useState } from 'react';

interface IUser {
  name: string;
  age: number;
  prof: string;
  course: number;
  isAdmin: boolean;
  nameColor: string | null;
}

export default function Tes() {
  const [theme, setTheme] = useState<boolean>(true); // true = светлая, false = тёмная
  const [color, setColor] = useState<string>('f1f1f1');
  const [inputValue, setInputValue] = useState<string>('');
  const [inputElValue, setInputElValue] = useState<string>('');
  const [elementValue, setElementValue] = useState<number[]>([]);
  const [searched, setSearched] = useState<boolean>(false);
  const [factNum, setFactNum] = useState<number>();
  const [numPlus, setNumPlus] = useState<number>();

  const elements: (string | number)[] = [1, 'привет', 4, 5, 93, 8, 1];

  function searchEl(arr: (string | number)[], el: string | number): number[] {
    const foundIndexes: number[] = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === el) {
        foundIndexes.push(i);
      }
    }

    return foundIndexes;
  }

  function fact(number: number) {
    let num = 1;
    for (let i = 1; i <= number; i++) {
      num = num * i;
      setFactNum(num);
    }
  }

  function point(num, po) {
    let result = 1;
    for (let i = 1; i <= po; i++) {
      result = result * num;
      setNumPlus(result);
    }
  }

  useEffect(() => {
    fact(1);
    point(4, 2);
  }, []);

  function handleSearch() {
    const asNumber = Number(inputElValue.trim());
    const searchValue: string | number =
      inputElValue.trim() !== '' && !Number.isNaN(asNumber) ? asNumber : inputElValue.trim();

    setElementValue(searchEl(elements, searchValue));
    setSearched(true);
  }

  function switchColor() {
    setColor(inputValue.replace(/^#/, ''));
  }

  const user: IUser = {
    name: 'Egor',
    age: 19,
    prof: 'software engineer',
    course: 2,
    isAdmin: true,
    nameColor: color,
  };

  function switchTheme() {
    setTheme((prev) => !prev);
  }

  const isDark = !theme;

  return (
    <div
      className={`min-h-screen w-full flex items-center justify-center transition-colors duration-300 ${
        isDark ? 'bg-neutral-900 text-neutral-100' : 'bg-neutral-50 text-neutral-900'
      }`}>
      <div
        className={`w-full max-w-md mx-4 rounded-2xl border p-6 space-y-6 shadow-sm ${
          isDark ? 'border-neutral-700 bg-neutral-800' : 'border-neutral-200 bg-white'
        }`}>
        {/* Шапка */}
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold tracking-tight">Тестовая песочница</h1>
          <button
            onClick={switchTheme}
            className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
              isDark
                ? 'border-neutral-600 hover:bg-neutral-700'
                : 'border-neutral-300 hover:bg-neutral-100'
            }`}>
            {isDark ? '☀️ Светлая' : '🌙 Тёмная'}
          </button>
        </div>

        {/* Пользователь */}
        <section className="space-y-1.5">
          <p className="text-sm">
            Ваше имя:{' '}
            <span className="font-medium" style={{ color: `#${user.nameColor}` }}>
              {user.name}
            </span>
          </p>
          <p
            className={`inline-block text-xs px-2 py-0.5 rounded-full ${
              user.isAdmin
                ? 'bg-emerald-500/15 text-emerald-500'
                : 'bg-neutral-500/15 text-neutral-500'
            }`}>
            {user.isAdmin ? 'Admin' : 'Не admin'}
          </p>
        </section>

        {/* Цвет имени */}
        <section className="space-y-2">
          <label className="block text-xs uppercase tracking-wide opacity-60" htmlFor="color-input">
            Цвет имени (hex без #)
          </label>
          <div className="flex gap-2">
            <input
              id="color-input"
              type="text"
              placeholder="f1f1f1"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className={`flex-1 rounded-lg px-3 py-2 text-sm outline-none border focus:ring-2 ${
                isDark
                  ? 'bg-neutral-900 border-neutral-700 focus:ring-neutral-500'
                  : 'bg-neutral-100 border-neutral-200 focus:ring-neutral-400'
              }`}
            />
            <button
              onClick={switchColor}
              className="rounded-lg px-3 py-2 text-sm font-medium bg-blue-600 text-white hover:bg-blue-500 transition-colors">
              Применить
            </button>
          </div>
        </section>

        {/* Поиск */}
        <section className="space-y-2">
          <label
            className="block text-xs uppercase tracking-wide opacity-60"
            htmlFor="search-input">
            Поиск в массиве
          </label>
          <div className="flex gap-2">
            <input
              id="search-input"
              type="text"
              placeholder="Например: 93 или привет"
              value={inputElValue}
              onChange={(e) => setInputElValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              className={`flex-1 rounded-lg px-3 py-2 text-sm outline-none border focus:ring-2 ${
                isDark
                  ? 'bg-neutral-900 border-neutral-700 focus:ring-neutral-500'
                  : 'bg-neutral-100 border-neutral-200 focus:ring-neutral-400'
              }`}
            />
            <button
              onClick={handleSearch}
              className="rounded-lg px-3 py-2 text-sm font-medium bg-blue-600 text-white hover:bg-blue-500 transition-colors">
              Найти
            </button>
          </div>
          <p className="text-sm font-mono opacity-80">
            {!searched
              ? '—'
              : elementValue.length
                ? `Индексы: ${elementValue.join(', ')}`
                : 'Не найдено'}
          </p>
          <p className="text-sm font-mono opacity-80">{elementValue.length}</p>
          <p className="text-sm font-mono opacity-80">{factNum}</p>
          <p className="text-sm font-mono opacity-80">{numPlus}</p>
        </section>
      </div>
    </div>
  );
}
