'use client';
import CrossIcon from '@/assets/images/icon-cross.svg';
import { useAppDispatch } from '@/redux/hooks';
import { removeTodo, toggleTodo } from '@/redux/todoSlice';
import cn from '@/utils/cn';
import Image from 'next/image';
import { FC, useState } from 'react';
import Checkbox from './Checkbox';

interface TodoListItemProps {
  id: string;
  value: string;
  completed: boolean;
}

const TodoListItem: FC<TodoListItemProps> = ({ id, value, completed }) => {
  const [checked, setChecked] = useState(completed);
  const dispatch = useAppDispatch();

  const handleChange = () => {
    setChecked(!checked);
    dispatch(toggleTodo(id));
  };

  return (
    <div className="todo-item flex items-center justify-center p-4 md:p-4 gap-4">
      <Checkbox id={id + '-checkbox'} value={checked} onChange={handleChange} />
      <p
        className={cn(
          'w-full outline-none dark:text-[hsl(236,9%,61%)] m-0 p-0 text-sm pointer first-line:leading-3',
          checked && 'line-through dark:text-[hsl(233,14%,35%)]',
        )}
        onClick={handleChange}
      >
        {value}
      </p>
      <button
        className="md:opacity-0 pointer"
        onClick={() => dispatch(removeTodo(id))}
      >
        <Image src={CrossIcon} alt="delete" />
      </button>
    </div>
  );
};

export default TodoListItem;
