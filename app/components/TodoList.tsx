'use client';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { Todo, updateList } from '@/redux/todoSlice';
import { TodoFilters } from '@/types/todo';
import { AnimatePresence, Reorder } from 'framer-motion';
import { useState } from 'react';
import Line from './Line';
import TodoListFooter from './TodoListFooter';
import TodoListItem from './TodoListItem';

const TodoList = () => {
  const todoList = useAppSelector((state) => state.todo);
  const dispatch = useAppDispatch();

  const [filter, setFilter] = useState<TodoFilters>(TodoFilters.all);

  const all = [...todoList];

  const todoContainer = {
    all,
    active: all.filter((todo) => !todo.completed),
    completed: all.filter((todo) => todo.completed),
  };

  return (
    <div>
      <Reorder.Group
        axis="y"
        values={todoList}
        onReorder={(value) => dispatch(updateList(value))}
      >
        <div className="flex flex-col just bg-white dark:bg-secondDark rounded rounded-bl-none rounded-br-none mt-6 shadow-slate-400 relative">
          <AnimatePresence mode="popLayout">
            {todoContainer[filter].map((todo: Todo, i: number) => (
              <div key={todo.id}>
                <TodoListItem todo={todo} />
                {i < todoList.length - 1 && <Line />}
              </div>
            ))}
          </AnimatePresence>
        </div>
      </Reorder.Group>

      <TodoListFooter
        left={todoContainer.active.length}
        setFilter={setFilter}
        activeFilter={filter}
      />

      {/* DND Hint */}
      <p className="text-[hsl(234,11%,52%)] text-center my-10">
        Drag and drop to reorder list
      </p>
    </div>
  );
};

export default TodoList;
