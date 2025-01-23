import s from "./Input.module.scss";

type InputProps = {
    placeholder: string;
    value?: string | number;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({placeholder, onChange, value}: InputProps) => {
    return (
        <div className={s.input}>
            <input
                type="text"
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                />
        </div>
    );
};
