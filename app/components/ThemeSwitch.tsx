'use client';
import MoonIcon from '@/assets/images/icon-moon.svg';
import SunIcon from '@/assets/images/icon-sun.svg';
import Image from 'next/image';
import { useEffect, useState } from 'react';

// local storage > browser theme
const ThemeSwitch: React.FC = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme'));

  const getBrowserTheme = () =>
    window.matchMedia('(prefers-color-scheme: dark)').matches;

  const changeTheme = (theme: string) => {
    setTheme(theme);
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  };

  useEffect(() => {
    const browserTheme = getBrowserTheme() ? 'dark' : 'light';
    if (!theme) {
      changeTheme(browserTheme);
      document.documentElement.setAttribute('data-theme', browserTheme);
      return;
    }
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    changeTheme(newTheme);
  };

  return (
    <div onClick={switchTheme} className="pointer">
      {theme === 'dark' ? (
        <Image src={SunIcon} alt="Light Theme Icon" height={20} width={20} />
      ) : (
        <Image src={MoonIcon} alt="Dark Theme Icon" height={20} width={20} />
      )}
    </div>
  );
};
export default ThemeSwitch;
