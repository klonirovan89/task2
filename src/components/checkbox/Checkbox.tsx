import s from './Checkbox.module.scss';

type CheckboxProps = {
    isChecked: boolean;
    onChange: () => void;
}

export const Checkbox = ({isChecked, onChange}: CheckboxProps) => {
    return (
        <div className={s.checkbox}>
            <input type="checkbox" onChange={onChange} checked={isChecked}/>
        </div>
    );
};
