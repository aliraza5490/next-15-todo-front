'use client';
import IconCheck from '@/assets/images/icon-check.svg';
import Image from 'next/image';
import { FC } from 'react';

const Checkbox: FC<{
  id: string;
  value?: boolean;
  onChange?: (value: boolean) => void;
}> = ({ id, value, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('Checkbox value:', e.target.checked);
    if (onChange) onChange(!value);
  };

  return (
    <label htmlFor={id} className="pointer">
      {/* By default it should be un-checked */}
      <input
        className="hidden"
        id={id}
        type="checkbox"
        checked={value}
        onChange={handleChange}
      />
      {value ? (
        <div className="w-[23px] h-[23px] rounded-full flex items-center justify-center from-[hsl(192,100%,67%)] to-[hsl(280,87%,65%)] bg-gradient-to-br ">
          <Image src={IconCheck} alt="Checked Item" height={10} width={10} />
        </div>
      ) : (
        <div className="w-[23px] h-[23px] rounded-full flex items-center justify-center from-[hsl(192,100%,67%)] to-[hsl(280,87%,65%)] hover:bg-gradient-to-br bg-[#2f3247]">
          <div className="w-[21px] h-[21px] rounded-full bg-white dark:bg-secondDark"></div>
        </div>
      )}
    </label>
  );
};

export default Checkbox;
