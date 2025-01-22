import { useDispatch } from 'react-redux';
import {useState} from "react";
import { addTask } from '../../tasksSlice';

export const TaskInput = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const handleAddTask = () => {
        if (input.trim()) {
            dispatch(addTask(input));
            setInput('');
        }
    };

    return (
        <div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter a task"
            />
            <button onClick={handleAddTask}>Add Task</button>
        </div>
    );
};
