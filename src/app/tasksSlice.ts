import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TaskDataType = {
    id: number;
    text: string;
    completed: boolean;
};

export type Filter = 'all' | 'active' | 'completed';

export type TasksStateType = {
    tasks: TaskDataType[];
    filter: Filter;
}

const initialState: TasksStateType = {
    tasks: [],
    filter: 'all',
};

const loadState = (): TasksStateType => {
    const savedState = localStorage.getItem('tasksState');
    if (savedState) {
        return JSON.parse(savedState) as TasksStateType;
    }
    return initialState;
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: loadState(),
    reducers: {
        addTask: (state, action: PayloadAction<string>) => {
            const newTask: TaskDataType = {
                id: Date.now(),
                text: action.payload,
                completed: false,
            };
            return {
                ...state,
                tasks: [...state.tasks, newTask],
            };
        },
        toggleTaskCheckbox: (state, action: PayloadAction<number>) => {
                return {
                    ...state,
                    tasks: state.tasks.map((task) =>
                        task.id === action.payload
                            ? { ...task, completed: !task.completed }
                            : task
                    ),
                };
        },
        clearTasks: (state) => {
            return {
                ...state,
                tasks: state.tasks.filter((task) => !task.completed),
            };
        },
        setFilter: (state, action: PayloadAction<Filter>) => {
            return {
                ...state,
                filter: action.payload,
            };
        },
    },
});

export const { addTask, toggleTaskCheckbox, clearTasks, setFilter } = tasksSlice.actions;
export default tasksSlice.reducer;
