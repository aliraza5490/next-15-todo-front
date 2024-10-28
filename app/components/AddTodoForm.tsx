'use client';
import { useAppDispatch } from '@/redux/hooks';
import { addTodo } from '@/redux/todoSlice';
import { FC, useState } from 'react';
import Checkbox from './Checkbox';
import TodoInput from './TodoInput';

const AddTodoForm: FC = () => {
  const [todo, setTodo] = useState('');
  const [checked, setChecked] = useState(false);
  const dispatch = useAppDispatch();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && todo) {
      console.log('New Task:', todo);
      dispatch(addTodo({ value: todo, completed: checked }));
      setTodo('');
    }
  };

  return (
    <div className="flex items-center justify-between rounded p-3 md:p-4 gap-4 bg-white dark:bg-secondDark ">
      <Checkbox id="add-checkbox" value={checked} onChange={setChecked} />
      <TodoInput
        placeholder="Create a new task..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default AddTodoForm;
