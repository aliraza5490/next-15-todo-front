import todoData from '@/data/todo.json';
import TodoListItem from './TodoListItem';

const TodoList = () => {
  return (
    <div>
      <div className="flex flex-col just bg-white dark:bg-secondDark rounded mt-6">
        {todoData.map((todo, i) => (
          <div key={todo.id}>
            <TodoListItem
              id={todo.id}
              value={todo.title}
              completed={todo.completed}
            />
            {i < todoData.length - 1 && <Line />}
          </div>
        ))}
      </div>

      {/* DND Hint */}
      <p className="dark:text-[hsl(233,14%,35%)] text-center mt-10">
        Drag and drop to reorder list
      </p>
    </div>
  );
};

const Line = () => {
  return <div className="h-[.5px] w-full bg-[hsl(237,14%,26%)]"></div>;
};

export default TodoList;
