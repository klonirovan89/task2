import {TaskList} from "./tasklist/TaskList";

import s from './App.module.scss';

const App = () => {
    return (
        <div className={s.app}>
            <h1>ToDo Lists</h1>
            <TaskList/>
        </div>
    );
};

export default App;