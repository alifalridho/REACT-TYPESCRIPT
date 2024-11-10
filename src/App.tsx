import React from "react";
import "./App.css";
import Greet from "./components/Greet";
import Hello from "./components/Hello";
import User from "./components/User";
import Person from "./components/Person";
import PersonList from "./components/PersonList";

function App() {
    const personName = {
        firstName: "Bruce",
        lastName: "Wayne",
    };
    const personList = [
        { first: "Bruce", last: "Wayne" },
        { first: "Clark", last: "Kane" },
        { first: "Joker", last: "Junior" },
    ];
    return (
        <div className="App">
            <Greet name={"Alif"} />
            <Hello age={25} name="Alif" />
            <User name="Efraim" age={24} status={"taken"} isLoggedin={true} />
            <Person name={personName} />
            <PersonList names={personList} />
        </div>
    );
}

export default App;
