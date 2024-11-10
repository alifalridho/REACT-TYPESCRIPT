type personName = {
    firstName: string;
    lastName: string;
};

const Person = ({ name }: { name: personName }) => {
    return (
        <div>
            my name is {name.firstName} {name.lastName}
        </div>
    );
};

export default Person;
