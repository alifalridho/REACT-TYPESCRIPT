import React from "react";

const User = ({
    name,
    age,
    status,
}: {
    name: string;
    age: number;
    status: string | any;
}) => {
    return (
        <div>
            Hallo, my name is {name}, I'm {age} years old, and I'm {status} now
        </div>
    );
};

export default User;
