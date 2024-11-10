import React from "react";
import "./App.css";
import Greet from "./components/Greet";
import Hello from "./components/Hello";
import User from "./components/User";
import Person from "./components/Person";

function App() {
    const personName = {
        firstName: "Bruce",
        lastName: "Wayne",
    };
    return (
        <div className="App">
            <Greet name={"Alif"} />
            <Hello age={25} name="Alif" />
            <User name="Efraim" age={24} status={"taken"} isLoggedin={true} />
            <Person name={personName} />
        </div>
    );
}

export default App;
