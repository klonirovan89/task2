import {Checkbox} from "../../../components/checkbox/Checkbox";
import {clsx} from "clsx";
import {TaskDataType} from "../../tasksSlice";

import s from "./Task.module.scss";

type TodoProps = {
    task: TaskDataType;
    onChange: (id: number) => void;
};

export const Task = ({task, onChange}: TodoProps) => {
    return (
        <div className={s.task}>
            <Checkbox isChecked={task.completed} onChange={() => onChange(task.id)}/>
            <button onClick={() => onChange(task.id)}>
                <p className={clsx(s.text, task.completed && s.done)}>{task.text}</p>
            </button>
        </div>
    );
};
