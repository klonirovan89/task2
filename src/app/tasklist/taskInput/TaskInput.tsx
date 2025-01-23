import {useDispatch} from 'react-redux';
import {useState} from "react";
import {addTask} from '../../tasksSlice';
import {Input} from "../../../components/input/Input";

import s from "./TaskInput.module.scss"
import {Button} from "../../../components/button/Button";

export const TaskInput = () => {
    const [input, setInput] = useState('');

    const dispatch = useDispatch();

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    }

    const handleAddTask = () => {
        if (input.trim()) {
            dispatch(addTask(input));
            setInput('');
        }
    };

    return (
        <div className={s.wrapper}>
            <Input placeholder={"Enter a task"} value={input} onChange={handleInput}/>
            <Button id={'add'} disabled={input.trim() === ''} label={"Add Task"} onClick={handleAddTask}/>
        </div>
    );
};
