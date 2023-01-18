import {configureStore} from '@reduxjs/toolkit';
import {tasksSlice} from './taskSlice';

export const store = configureStore({
  reducer: {
    task: tasksSlice.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
