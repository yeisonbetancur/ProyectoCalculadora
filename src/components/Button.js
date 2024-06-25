import React from "react";
import "../stylesheets/Button.css";
const Operator = (valor) => {
  return isNaN(valor) && (valor != ".") && (valor != "=");
};
function Button(props) {
  return (<div
    className=
    {`buttonContainer ${Operator(props.children)?"operator":""}`.trimEnd()}
    onClick = {() => props.manageClick(props.children)}>
    {props.children}
    </div>
    );
}

export default Button;