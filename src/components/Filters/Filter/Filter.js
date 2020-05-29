import React, { useState } from "react";
import "../../../tailwind.generated.css";
import Typography from "@material-ui/core/Typography/Typography";
import Slider from "@material-ui/core/Slider/Slider";

const Filter = (props) => {
    const [value, setValue] = useState(0);

    const handleChange = (e, val) => {
        setValue(val);
        props.handler(val);
    };

    return (
        <div className="">
            <Typography id="discrete-slider-custom" gutterBottom>
                {props.nutrient}
            </Typography>
            <Slider
                defaultValue={50}
                onChange={(e, val) => handleChange(e, val)}
                aria-labelledby="discrete-slider-custom"
                step={1}
                valueLabelDisplay="auto"
            />
        </div>
    );
};

export default Filter;
