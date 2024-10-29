'use client';
import { useAppDispatch } from '@/redux/hooks';
import { clearCompleted } from '@/redux/todoSlice';
import { TodoFilters } from '@/types/todo';
import cn from '@/utils/cn';
import { FC, MouseEventHandler, ReactNode } from 'react';
import Line from './Line';

const TodoListFooter: FC<{
  setFilter: (filter: TodoFilters) => void;
  activeFilter: TodoFilters;
  left: number;
}> = ({ setFilter, left, activeFilter }) => {
  const dispatch = useAppDispatch();

  const filterList = Object.entries(TodoFilters).map(([filter]) => (
    <Filter
      isActive={activeFilter === filter}
      key={filter}
      onClick={() => setFilter(filter as TodoFilters)}
    >
      {filter.charAt(0).toUpperCase() + filter.slice(1)}
    </Filter>
  ));

  return (
    <>
      <Line />
      <div className="flex justify-between items-center p-4 bg-[#f7f7f7] dark:bg-secondDark rounded rounded-tl-none rounded-tr-none drop-shadow-2xl">
        <div className="text-[hsl(234,11%,52%)] text-xs">{left} items left</div>
        <div className="space-x-2 hidden md:flex text-center gap-2">
          {filterList}
        </div>
        <button
          onClick={() => dispatch(clearCompleted())}
          className="text-[hsl(234,11%,52%)] text-xs"
        >
          Clear Completed
        </button>
      </div>
      <div className=" bg-[#f7f7f7] dark:bg-secondDark rounded mt-4 flex p-4 gap-4 items-center justify-center md:hidden text-center">
        {filterList}
      </div>
    </>
  );
};

const Filter: FC<{
  children?: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
  isActive: boolean;
}> = ({ children, onClick, isActive }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'text-[hsl(234,11%,52%)] text-sm',
        isActive && 'text-[hsl(220,98%,61%)]',
      )}
    >
      {children}
    </button>
  );
};

export default TodoListFooter;
