import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { IUser } from "../types/types";
import UserItem from "./UserItem";
import List from "./List";
import { useHistory } from "react-router";

const UsersPage: FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const history = useHistory();

    useEffect(() => {
        fetchUsers();
    }, []);

    async function fetchUsers() {
        try {
            const res = await axios.get<IUser[]>(
                "https://jsonplaceholder.typicode.com/users"
            );

            const { data } = res;
            setUsers(data);
        } catch (e) {
            alert(e);
        }
    }
    return (
        <div>
            <List
                items={users}
                renderItem={(user: IUser) => (
                    <UserItem
                        onClick={(user) => history.push(`/users/${user.id}`)}
                        user={user}
                        key={user.id}
                    />
                )}
            />
        </div>
    );
};

export default UsersPage;
