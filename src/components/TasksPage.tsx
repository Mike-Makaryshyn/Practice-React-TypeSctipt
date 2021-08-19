import React, { FC, useState } from "react";
import { ITodo } from "../types/types";
import List from "./List";
import TasksItem from "./TasksItem";
import Card, { CardVariant } from "./Card";
import axios from "axios";
import EventsExample from "./EventsExample";
import { useHistory } from "react-router";

const TasksPage: FC = () => {
    const [tasks, setTasks] = useState<ITodo[]>([]);
    const [clicked, setClicked] = useState(false);
    const history = useHistory();

    async function fetchTasks() {
        if (!clicked) {
            try {
                const res = await axios.get<ITodo[]>(
                    "https://jsonplaceholder.typicode.com/todos?_limit=10"
                );

                const { data } = res;

                setTasks(data);
                setClicked(true);
            } catch (e) {
                alert(e);
            }
        }
    }

    const removeTasks = () => {
        if (clicked) {
            setTasks([]);
            setClicked(false);
        }
    };
    return (
        <div>
            <EventsExample />
            <Card variant={CardVariant.primary} height="50" width="100%">
                {!clicked ? (
                    <button style={{ fontSize: "20px", fontWeight: "bold", }} onClick={fetchTasks}>
                        Click me to get tasks
                    </button>
                ) : (
                    <button
                        style={{ background: "#D66567", fontSize: "20px", fontWeight: "bold", }}
                        onClick={removeTasks}
                    >
                        Click me to remove tasks
                    </button>
                )}
            </Card>
            <List
                items={tasks}
                renderItem={(task: ITodo) => (
                    <TasksItem
                     task={task}
                      key={task.id} 
                      onClick={()=>history.push(`/todos/${task.id}`)}
                      />
                )}
            />
        </div>
    );
};

export default TasksPage;
