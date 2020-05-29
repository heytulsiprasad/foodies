import React, { useState } from "react";
import "../../../tailwind.generated.css";
import Typography from "@material-ui/core/Typography/Typography";
import Slider from "@material-ui/core/Slider/Slider";
import Switch from "../Switch/Switch";

const Filter = (props) => {
    const [value, setValue] = useState(0);
    const [isOn, setIsOn] = useState(false);

    const handleChange = (e, val) => {
        setValue(val);
        props.handler(val);
    };

    const handleSwitch = () => {
        setIsOn(!isOn);
    }

    return (
        <div>
            <div className="container flex flex-row justify-between">
                <Typography className="self-center" id="discrete-slider-custom" gutterBottom>
                    {props.nutrient}
                </Typography>
                <Switch changed={handleSwitch} />
            </div>
            <Slider
                defaultValue={50}
                onChange={(e, val) => handleChange(e, val)}
                aria-labelledby="discrete-slider-custom"
                step={1}
                disabled={isOn}
                valueLabelDisplay="auto"
            />
        </div>
    );
};

export default Filter;
