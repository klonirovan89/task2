import {clsx} from "clsx";
import s from "./Button.module.scss";

type ButtonProps = {
    id: string;
    isActive: boolean;
    label: string;
    onClick: (id: string) => void;
}

export const Button = ({id,isActive, label, onClick}: ButtonProps) => {

    return (
        <div>
            <button className={clsx(s.button, isActive && s.active)} id={id} onClick={() => onClick(id)}>
                <span>{label}</span>
            </button>
        </div>
    );
};
