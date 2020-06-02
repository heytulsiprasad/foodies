import React, { useState, useEffect, useContext } from "react";
import {
    makeStyles,
    createMuiTheme,
    ThemeProvider,
} from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import ThemeContext from "../../../context/ThemeContext/ThemeContext";

function SimpleSelect(props) {
    const context = useContext(ThemeContext);

    const useStyles = makeStyles((theme) => ({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    }));

    const lightTheme = createMuiTheme({
        palette: {
            type: "light",
        },
    });

    const darkTheme = createMuiTheme({
        palette: {
            type: "dark",
        },
    });

    let theme;

    if (context.theme === "light") {
        theme = lightTheme;
    } else {
        theme = darkTheme;
    }

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
        <div className={[props.spacing, "text-copy-primary"].join(" ")}>
            <h1 className="pl-3 text-base font-light">
                Search for {props.category}
            </h1>
            <ThemeProvider theme={theme}>
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
                        <MenuItem className="bg-background-tertiary" value="">
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
            </ThemeProvider>
        </div>
    );
}

export default SimpleSelect;
