import {createSlice} from '@reduxjs/toolkit';
import {PayloadAction} from '@reduxjs/toolkit/dist/createAction';

export interface Task {
  name: string;
  completed: boolean;
}

const initialState: Task[] = [];

export const tasksSlice = createSlice({
  name: 'Tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      state.push({completed: false, name: action.payload});
    },
    deleteTask: (state, action: PayloadAction<Task>) => {
      state = state.filter(({name}) => name !== action.payload.name);
      return state;
    },
    toggleComplete: (state, action: PayloadAction<Task>) => {
      state = state.map(task => {
        if (action.payload.name === task.name) {
          task.completed = !task.completed;
        }
        return task;
      });
    },
  },
});

export const {addTask, toggleComplete, deleteTask} = tasksSlice.actions;
export default tasksSlice.reducer;
