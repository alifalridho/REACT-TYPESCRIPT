import React from "react";

const User = ({
    name,
    age,
    status,
    isLoggedin,
}: {
    name: string;
    age: number;
    status: string | any;
    isLoggedin: boolean;
}) => {
    return (
        <div>
            {isLoggedin
                ? `Hallo, my name is ${name}, I'm ${age} years old, and I'm ${status} now`
                : "Welcome Guest"}
        </div>
    );
};

export default User;
