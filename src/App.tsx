import React from "react";
import "./App.css";
import Greet from "./components/Greet";
import Hello from "./components/Hello";
import User from "./components/User";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Parent from "./components/Parent";
import Child from "./components/Child";
import Button from "./components/Button";
import Input from "./components/Input";
import { useState } from "react";

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
    const [input, setInput] = useState("");
    return (
        <div className="App">
            <Greet name={"Alif"} />
            <Hello age={25} name="Alif" />
            <User name="Efraim" age={24} status={"taken"} isLoggedin={true} />
            <Person name={personName} />
            <PersonList names={personList} />
            <Status status="success" />
            <Parent>
                <Child />
            </Parent>
            <Button
                handdleClick={(event) => {
                    console.log("Event:", event);
                }}
            />
            <Input
                handleChange={(event) => {
                    setInput(event.target.value);
                }}
                text={input}
            />
        </div>
    );
}

export default App;
