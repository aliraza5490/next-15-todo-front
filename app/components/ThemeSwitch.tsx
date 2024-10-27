'use client';
import MoonIcon from '@/app/assets/images/icon-moon.svg';
import SunIcon from '@/app/assets/images/icon-sun.svg';
import Image from 'next/image';
import { useEffect, useState } from 'react';

// local storage > browser theme
const ThemeSwitch: React.FC = () => {
  const [theme, setTheme] = useState('');

  const getBrowserTheme = () =>
    window.matchMedia('(prefers-color-scheme: dark)').matches;

  const changeTheme = (theme: string) => {
    setTheme(theme);
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  };

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme');
    const browserTheme = getBrowserTheme() ? 'dark' : 'light';
    if (currentTheme) {
      changeTheme(currentTheme);
    } else if (browserTheme) {
      changeTheme(browserTheme);
    }
  }, []);

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    changeTheme(newTheme);
  };

  return (
    <div onClick={switchTheme} className="cursor-pointer">
      {theme === 'dark' ? (
        <Image src={SunIcon} alt="Light Theme Icon" />
      ) : (
        <Image src={MoonIcon} alt="Dark Theme Icon" />
      )}
    </div>
  );
};
export default ThemeSwitch;
