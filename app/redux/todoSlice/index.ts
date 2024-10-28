import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = [
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
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

const todoReducer = todoSlice.reducer;

export default todoReducer;
