import React from "react";
import Switch from "@material-ui/core/Switch";

function Switches(props) {
    const [check, setCheck] = React.useState({
        isChecked: false,
    });

    const handleChange = (event) => {
        setCheck({ [event.target.name]: event.target.checked });
        props.passState(check.isChecked);
    };

    return (
        <div>
            <Switch
                checked={check.isChecked}
                color="primary"
                onChange={handleChange}
                name="isChecked"
                inputProps={{ "aria-label": "secondary checkbox" }}
            />
        </div>
    );
}

export default Switches;
