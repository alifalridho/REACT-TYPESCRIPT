import "./PersonList.css";

type PersonListProps = {
    names: { first: string; last: string }[];
};

const PersonList = ({ names }: PersonListProps) => {
    return (
        <div className="personlist-container">
            {names.map((name) => (
                <h2>
                    {name.first} {name.last}
                </h2>
            ))}
        </div>
    );
};

export default PersonList;
