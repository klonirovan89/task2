import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setFilter, Filter } from '../../tasksSlice';
import s from './TaskFilters.module.scss';

export const TaskFilters = () => {
    const dispatch = useDispatch();
    const currentFilter = useSelector((state: RootState) => state.tasks.filter);

    const handleFilterChange = (filter: Filter) => {
        dispatch(setFilter(filter));
    };

    return (
        <div className={s.filters}>
            <button
                onClick={() => handleFilterChange('all')}
                style={{ fontWeight: currentFilter === 'all' ? 'bold' : 'normal' }}
            >
                All
            </button>
            <button
                onClick={() => handleFilterChange('active')}
                style={{ fontWeight: currentFilter === 'active' ? 'bold' : 'normal' }}
            >
                Active
            </button>
            <button
                onClick={() => handleFilterChange('completed')}
                style={{ fontWeight: currentFilter === 'completed' ? 'bold' : 'normal' }}
            >
                Completed
            </button>
        </div>
    );
};
