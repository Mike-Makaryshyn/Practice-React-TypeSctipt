import React from "react";
import "./app.css";

import { BrowserRouter, NavLink, Route } from "react-router-dom";
import TasksPage from "./components/TasksPage";
import UsersPage from "./components/UsersPage";
import TaskItemPage from "./components/TaskItemPage";
import UserItemPage from "./components/UserItemPage";

function App() {
    return (
        <BrowserRouter>
            <div>
                <div className="nav-parent">
                    <NavLink className="nav" to="/users">Пользователи</NavLink>
                    <NavLink className="nav" to="/todos">Задачи</NavLink>
                </div>
                <Route path={'/todos'} exact>
                    <TasksPage />
                </Route>
                <Route path={'/users'} exact>
                    <UsersPage />
                </Route>
                <Route path={'/users/:id'} >
                    <UserItemPage />
                </Route>
                <Route path={'/todos/:id'} >
                    <TaskItemPage />
                </Route>
            </div>
        </BrowserRouter>
    );
}

export default App;
