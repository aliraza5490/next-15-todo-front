import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Todo {
  id: string;
  value: string;
  completed: boolean;
  sequence: number;
}

const initialState: Todo[] = [
  {
    id: '1',
    value: 'Learn Angular',
    completed: false,
    sequence: 1,
  },
  {
    id: '2',
    value: 'Learn React',
    completed: false,
    sequence: 2,
  },
  {
    id: '3',
    value: 'Learn Vue',
    completed: true,
    sequence: 3,
  },
];

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (
      state,
      action: PayloadAction<{ value: string; completed: boolean }>,
    ) => {
      state.push({
        id: state.length + 1 + '',
        value: action.payload.value,
        completed: action.payload.completed,
        sequence: state.length + 1,
      });
      return state;
    },
    removeTodo: (state, action) => {
      state = state.filter((todo) => todo.id !== action.payload);
      return state;
    },
    clearCompleted: (state) => {
      state = state.filter((todo) => !todo.completed);
      return state;
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        state[state.indexOf(todo)].completed = !todo.completed;
      }
      return state;
    },
  },
});

export const { addTodo, removeTodo, clearCompleted, toggleTodo } =
  todoSlice.actions;

const todoReducer = todoSlice.reducer;

export default todoReducer;
