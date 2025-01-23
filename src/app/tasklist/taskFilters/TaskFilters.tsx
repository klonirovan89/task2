import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setFilter, Filter } from '../../tasksSlice';
import {Button} from "../../../components/button/Button";

import s from './TaskFilters.module.scss';

export const TaskFilters = () => {
    const dispatch = useDispatch();

    const currentFilter = useSelector((state: RootState) => state.tasks.filter);
    const filters:Filter[] = ['all', 'active', 'completed'];

    const handleFilterChange = (filter: Filter) => {
        dispatch(setFilter(filter));
    };

    return (
        <div className={s.filters}>
            {filters.map((filter) => (
               <Button key={filter} id={filter} isActive={currentFilter === filter} label={filter} onClick={() => handleFilterChange(filter)}/>
            ))}
        </div>
    );
};
