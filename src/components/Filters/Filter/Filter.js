import React, { Component } from "react";
import "../../../tailwind.generated.css";
import Typography from "@material-ui/core/Typography/Typography";
import Slider from "@material-ui/core/Slider/Slider";
import Toggle from "../Switch/Switch";

class Filter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: null,
            isOn: false,
        };

        this.handleSliderChange = this.handleSliderChange.bind(this);
        this.handleSwitch = this.handleSwitch.bind(this);
    }

    handleSliderChange(e, val) {
        this.setState({ value: val }, () => {
            this.props.updateHandler(this.state.value, this.state.isOn);
        });
    }

    handleSwitch(check) {
        this.state.value === null
            ? this.setState({ value: 0, isOn: !check }, () =>
                  this.props.updateHandler(this.state.value, this.state.isOn)
              )
            : this.setState({ isOn: !check }, () =>
                  this.props.updateHandler(this.state.value, this.state.isOn)
              );
    }

    render() {
        return (
            <div>
                <div className="container flex flex-row justify-between">
                    <Typography
                        className="self-center"
                        id="discrete-slider-custom"
                        gutterBottom
                    >
                        {this.props.nutrient}
                    </Typography>
                    <Toggle passState={(check) => this.handleSwitch(check)} />
                </div>
                <Slider
                    defaultValue={0}
                    onChange={(e, val) => this.handleSliderChange(e, val)}
                    aria-labelledby="discrete-slider-custom"
                    disabled={!this.state.isOn}
                    step={1}
                    valueLabelDisplay="auto"
                />
            </div>
        );
    }
}

export default Filter;
