import {clsx} from "clsx";
import s from "./Button.module.scss";

type ButtonProps = {
    id: string;
    isActive?: boolean;
    disabled?: boolean
    label: string;
    onClick: (id: string) => void;
    className?: string
}

export const Button = ({id, isActive, disabled, label, onClick, className}: ButtonProps) => {

    return (
        <div>
            <button className={clsx(s.button, className && s.clear, isActive && s.active, disabled && s.disabled)}
                    disabled={disabled} id={id} onClick={() => onClick(id)}>
                <span>{label}</span>
            </button>
        </div>
    );
};
