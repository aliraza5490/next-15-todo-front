'use client';
import { useAppSelector } from '@/redux/hooks';
import TodoListItem from './TodoListItem';

const TodoList = () => {
  const todoList = useAppSelector((state) => state.todo);

  return (
    <div>
      <div className="flex flex-col just bg-white dark:bg-secondDark rounded mt-6 drop-shadow-2xl shadow-slate-400">
        {[...todoList]
          .sort((a, b) => b.sequence - a.sequence)
          .map((todo, i) => (
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

      {/* DND Hint */}
      <p className="dark:text-[hsl(233,14%,35%)] text-center my-10">
        Drag and drop to reorder list
      </p>
    </div>
  );
};

const Line = () => {
  return (
    <div className="h-[.5px] w-full bg-[hsl(236,33%,92%)] dark:bg-[hsl(237,14%,26%)]"></div>
  );
};

export default TodoList;
