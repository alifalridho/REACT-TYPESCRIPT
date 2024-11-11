import React from "react";

const Button = ({
    handdleClick,
}: {
    handdleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
    return <button onClick={handdleClick}>Button</button>;
};

export default Button;
