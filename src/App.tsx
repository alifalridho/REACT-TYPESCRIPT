import React from "react";
import "./App.css";
import Greet from "./components/Greet";
import Hello from "./components/Hello";

function App() {
    return (
        <div className="App">
            <Greet name={"Alif"} />
            <Hello age={25} name="Alif" />
        </div>
    );
}

export default App;
