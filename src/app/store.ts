import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlice';
import { localStorageMiddleware } from './localStorageMiddleware';


export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(localStorageMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
