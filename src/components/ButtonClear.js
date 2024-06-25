import React from "react";
import "../stylesheets/ButtonClear.css";

const ButtonClear = (props) => (
    <div className="buttonClear" onClick={props.manageClear}>
        {props.children}
    </div>
);

export default ButtonClear
