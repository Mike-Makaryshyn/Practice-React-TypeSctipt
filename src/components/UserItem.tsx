import React, { FC } from "react";

import { IUser } from "../types/types";

interface UserItemProps {
    user: IUser;
    onClick: (user: IUser) => void;
}

const UserItem: FC<UserItemProps> = ({ user, onClick }) => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
            }}
        >
            <div
                style={{
                    width: "100%",
                    border: "1px solid teal",
                    margin: "10px 0px",
                    padding: "10px",
                }}
            >
                User #{user.id} - {user.name} with email - {user.email} lives in{" "}
                {user.address.city} on {user.address.street} street and zipcode
                is {user.address.zipcode}
            </div>
            <button onClick={() => onClick(user)}>Details</button>
        </div>
    );
};

export default UserItem;
