import React from "react";
import Button from "@mui/material/Button"
const ButtonComponent = (props) => {
    return (
        <Button variant="contained">{props.Button}</Button>
    );
}

ButtonComponent.defaultProps = {
    Button: "Button Here"
}

export default ButtonComponent; 