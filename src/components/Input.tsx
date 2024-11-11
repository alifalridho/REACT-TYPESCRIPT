import React from "react";

const Input = ({
    handleChange,
    text,
}: {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    text: string;
}) => {
    return (
        <div>
            <input type="text" onChange={handleChange} />
            <p>{text}</p>
        </div>
    );
};

export default Input;
