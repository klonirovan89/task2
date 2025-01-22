import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../store';
import {clearTasks, toggleTaskCheckbox} from '../tasksSlice';
import {TaskInput} from "./taskInput/TaskInput";
import {Task} from "./task/Task";
import {TaskFilters} from "./taskFilters/TaskFilters";

import s from './TaskList.module.scss';

export const TaskList = () => {
    const tasks = useSelector((state: RootState) => state.tasks.tasks);
    const filter = useSelector((state: RootState) => state.tasks.filter);
    const dispatch = useDispatch();

    const filteredTasks = tasks.filter((task) => {
        if (filter === 'active') return !task.completed;
        if (filter === 'completed') return task.completed;
        return true;
    });

    const onClearCompleted = () => {
        dispatch(clearTasks());
    };

    const toggleCheckbox = (id: number) => {
        dispatch(toggleTaskCheckbox(id));
    };

    return (
        <div className={s.tasklist}>
            <h2>Tasks</h2>
            <TaskInput/>
                {filteredTasks.map((task) => (
                        <Task task={task} onChange={() => toggleCheckbox(task.id)}/>
                ))}
            <div>
                <TaskFilters/>
                <button onClick={onClearCompleted}>Clear completed</button>
            </div>
        </div>
    );
};
