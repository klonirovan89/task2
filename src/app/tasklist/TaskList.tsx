import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../store';
import {clearTasks, toggleTaskCheckbox} from '../tasksSlice';
import {TaskInput} from "./taskInput/TaskInput";
import {Task} from "./task/Task";
import {TaskFilters} from "./taskFilters/TaskFilters";
import {Button} from "../../components/button/Button";

import s from './TaskList.module.scss';

export const TaskList = () => {

    const dispatch = useDispatch();

    const tasks = useSelector((state: RootState) => state.tasks.tasks);
    const filter = useSelector((state: RootState) => state.tasks.filter);

    const completedTasksCount = tasks.filter((task) => task.completed).length;

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
            <div className={s.tasks}>
                {filteredTasks.map((task) => (
                    <Task key={task.id} task={task} onChange={toggleCheckbox}/>
                ))}
            </div>
            <div className={s.container}>
                <TaskFilters/>
                <Button id={"clear"} disabled={completedTasksCount === 0} label={"Clear completed"}
                        onClick={onClearCompleted} className={"clear"}/>
            </div>
        </div>
    );
};
