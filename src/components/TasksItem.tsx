import React, { FC } from "react";
import { ITodo } from "../types/types";

interface TasksItemProps {
    task: ITodo;
    onClick: (task: ITodo)=> void;
}

const TasksItem: FC<TasksItemProps> = ({ task, onClick }) => {

    return (
        <div>
            <div
                style={{
                    border: "1px solid rebeccaourple",
                    margin: "10px 0px",
                    padding: "10px",
                    width: "100%",
                }}
            >
                Task # - {task.id}. {task.title} is {task.completed}
                {task.completed ? (
                    <span style={{ color: "teal" }}>completed</span>
                ) : (
                    <span style={{ color: "#D66567" }}>not completed</span>
                )}
            </div>
            <button onClick={() => onClick(task)}>
                Details
            </button>
        </div>
    );
};

export default TasksItem;
