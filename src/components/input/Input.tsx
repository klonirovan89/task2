import s from "./Input.module.scss";
import {clsx} from "clsx";

type InputProps = {
    placeholder: string;
    name: string;
    value?: string | number;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({placeholder, name, onChange, value}: InputProps) => {

    return (
        <div>
            <input
                type="text"
                placeholder={placeholder}
                name={name}
                onChange={onChange}
                value={value}
                />
        </div>
    );
};
