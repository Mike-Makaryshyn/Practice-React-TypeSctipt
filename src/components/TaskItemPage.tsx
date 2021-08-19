import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { ITodo } from "../types/types";
import { useParams, useHistory } from "react-router-dom";

interface TaskItemPageParams {
    id: string;
}

const TaskItemPage: FC = () => {
    const [task, setTask] = useState<ITodo | null>(null);

    const params = useParams<TaskItemPageParams>();
    const history = useHistory();

    useEffect(() => {
        fetchTask();
    }, []);

    async function fetchTask() {
        try {
            const res = await axios.get<ITodo>(
                `https://jsonplaceholder.typicode.com/todos/${params.id}`
            );

            const { data } = res;

            setTask(data);
        } catch (e) {
            alert(e);
        }
    }

    return (
        <div>
            <button onClick={()=> history.push('/todos')}>back</button>
           task {task?.id} - {task?.title}. {task?.completed}
        </div>
    );
};

export default TaskItemPage;
