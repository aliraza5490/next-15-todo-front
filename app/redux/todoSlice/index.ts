import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Todo {
  id: number;
  value: string;
  completed: boolean;
}

const initialState: Todo[] = [];

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (
      state,
      action: PayloadAction<{ value: string; completed: boolean }>,
    ) => {
      state.push({
        id: state.length + 1,
        value: action.payload.value,
        completed: action.payload.completed,
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
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        state[state.indexOf(todo)].completed = !todo.completed;
      }
      return state;
    },
    updateList: (state, action: PayloadAction<Todo[]>) => {
      return action.payload;
    },
  },
});

export const { addTodo, removeTodo, clearCompleted, toggleTodo, updateList } =
  todoSlice.actions;

const todoReducer = todoSlice.reducer;

export default todoReducer;
