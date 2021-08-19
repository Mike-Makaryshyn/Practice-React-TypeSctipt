import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { IUser } from "../types/types";
import { useParams, useHistory } from "react-router-dom";

interface UserItemPageParams {
    id: string;
}

const UserItemPage: FC = () => {
    const [user, setUser] = useState<IUser | null>(null);
    const params = useParams<UserItemPageParams>();
    const history = useHistory();

    useEffect(() => {
        fetchUser();
    }, []);


    async function fetchUser() {
        try {
            const res = await axios.get<IUser>(
                `https://jsonplaceholder.typicode.com/users/${params.id}`
            );

            const { data } = res;
            setUser(data);
        } catch (e) {
            alert(e);
        }
    }
    return (
        <div>
            <button onClick={() => history.push('/users')}>Back</button>
            <h2>Страница пользователя - {user?.name}</h2>
            <div>Email: {user?.email}</div>
            <div>
                <div> City/Street: {user?.address.city} {user?.address.street}</div>
                <div>Zipcode: {user?.address.zipcode}</div>
            </div>
        </div>
    );
};

export default UserItemPage;
