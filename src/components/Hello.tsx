// type HelloType = {
//     name: string;
//     age: number;
// };

const Hello = ({ name, age }: { name: string; age: number }) => {
    return (
        <div>
            Hello, my name is {name}, Im {age} years old
        </div>
    );
};

export default Hello;
