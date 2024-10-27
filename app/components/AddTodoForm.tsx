'use client';
import { FC, useState } from 'react';
import Checkbox from './Checkbox';
import TodoInput from './TodoInput';

const AddTodoForm: FC = () => {
  const [todo, setTodo] = useState('');
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex items-center justify-between rounded-md p-3 md:p-4 gap-4 bg-white dark:bg-secondDark ">
      <Checkbox id="add-checkbox" value={checked} onChange={setChecked} />
      <TodoInput
        placeholder="Create a new task..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
    </div>
  );
};

export default AddTodoForm;
