import {createSlice} from '@reduxjs/toolkit';
import {PayloadAction} from '@reduxjs/toolkit/dist/createAction';

export interface TaskType {
  task: string;
  completed: boolean;
}

const initialState: TaskType[] = [];

export const tasksSlice = createSlice({
  name: 'Tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      state.push({completed: false, task: action.payload});
    },
    deleteTask: (state, action: PayloadAction<TaskType>) => {
      state = state.filter(({task}) => task !== action.payload.task);
      console.log(state);
      return state;
    },
    changeCompletedState: (state, action: PayloadAction<TaskType>) => {
      state = state.map(task => {
        if (action.payload.task === task.task) {
          task.completed = !task.completed;
        }
        return task;
      });
    },
  },
});

export const {addTask, changeCompletedState, deleteTask} = tasksSlice.actions;
export default tasksSlice.reducer;
