import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

function SimpleSelect(props) {
    const classes = useStyles();
    const [value, setValue] = useState("");

    // This turns off the other filter when using a filter
    useEffect(() => {
        if (props.active === null) {
            setValue("");
        }
    }, [props.active]);

    const handleChange = (event) => {
        setValue(event.target.value);
        props.chosenCategory(props.category, event.target.value);
    };

    return (
        <div className={props.spacing}>
            <h1 className="pl-3 text-base font-light">
                Search for {props.category}
            </h1>
            <FormControl
                variant="filled"
                className={[classes.formControl, "w-64"].join(" ")}
            >
                <InputLabel id="demo-simple-select-filled-label">
                    {props.category}
                </InputLabel>
                <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={value}
                    onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {props.items.map((item, index) => {
                        return (
                            <MenuItem key={index} value={item}>
                                {item}
                            </MenuItem>
                        );
                    })}
                </Select>
            </FormControl>
        </div>
    );
}

export default SimpleSelect;
