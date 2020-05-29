import React from "react";
import Switch from "@material-ui/core/Switch";

export default function Switches(props) {
    const [state, setState] = React.useState({
        isChecked: true,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
        props.changed();
    };

    return (
        <div>
            <Switch
                checked={state.isChecked}
                color="primary"
                onChange={handleChange}
                name="isChecked"
                inputProps={{ "aria-label": "secondary checkbox" }}
            />
        </div>
    );
}
