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
  const [theme, setTheme] = useState<boolean>(true);
  const [color, setColor] = useState('f1f1f1');
  const [inputValue, setInputValue] = useState('');

  const switchColor = () => {
    setColor(inputValue);
  };

  switch (key) {
    case value:
      break;

    default:
      break;
  }

  const user: IUser = {
    name: 'Egor',
    age: 19,
    prof: 'software ingener',
    course: 2,
    isAdmin: true,
    nameColor: color,
  };

  function switchTheme() {
    setTheme((prev) => !prev);
  }

  return (
    <div className={`flex w-full h-[100vh] ${theme == false ? 'bg-black' : 'bg-white'}`}>
      <p className="w-full h-full" onClick={switchTheme}>
        HEllo
      </p>

      <button onClick={switchTheme}>Переключить тему</button>

      <input
        type="text"
        value={inputValue}
        className="bg-gray-200"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={switchColor}>Применить цвет</button>
      <p className="">
        Ваше имя:{' '}
        <span
          style={{
            color: `#${user.nameColor}`,
          }}>
          {user.name}
        </span>
      </p>
      <p className="">{user.isAdmin ? 'Admin' : 'Not a admin'}</p>
    </div>
  );
}
