import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Navigator from "./components/Navigator";
import User from "./pages/User/index";
import Edit from "./pages/Edit/index";

ReactDOM.render(
    <React.StrictMode>
        <div className="App">
            <Navigator />
            {/* <User /> */}
            <Edit/>
        </div>
    </React.StrictMode>,
    document.getElementById("root")
);
