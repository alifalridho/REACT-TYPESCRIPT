import React from "react";
import "./App.css";
import Greet from "./components/Greet";
import Hello from "./components/Hello";
import User from "./components/User";

function App() {
    return (
        <div className="App">
            <Greet name={"Alif"} />
            <Hello age={25} name="Alif" />
            <User name="Efraim" age={24} status={"taken"} />
        </div>
    );
}

export default App;
