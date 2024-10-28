'use client';
import { useAppSelector } from '@/redux/hooks';
import { Todo } from '@/redux/todoSlice';
import { useState } from 'react';
import Line from './Line';
import TodoListFooter from './TodoListFooter';
import TodoListItem from './TodoListItem';

const TodoList = () => {
  const todoList = useAppSelector((state) => state.todo);

  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  const all = [...todoList].sort((a, b) => b.sequence - a.sequence);

  const todoContainer = {
    all,
    active: all.filter((todo) => !todo.completed),
    completed: all.filter((todo) => todo.completed),
  };

  return (
    <div>
      <div className="flex flex-col just bg-white dark:bg-secondDark rounded rounded-bl-none rounded-br-none mt-6 shadow-slate-400">
        {todoContainer[filter].map((todo: Todo, i: number) => (
          <div key={todo.id}>
            <TodoListItem
              id={todo.id}
              value={todo.value}
              completed={todo.completed}
            />
            {i < todoList.length - 1 && <Line />}
          </div>
        ))}
      </div>
      <TodoListFooter
        left={todoContainer.active.length}
        setFilter={setFilter}
        activeFilter={filter}
      />

      {/* DND Hint */}
      <p className="dark:text-[hsl(233,14%,35%)] text-center my-10">
        Drag and drop to reorder list
      </p>
    </div>
  );
};

export default TodoList;
