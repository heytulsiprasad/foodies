import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import "../../tailwind.generated.css";

class SearchBox extends Component {
    constructor(props) {
        super(props);

        this.handleFormSubmit = (e) => {
            e.preventDefault();
            this.props.search(e.target.value);
        };

        this.gottaChange = (e) => {
            this.props.search(e.target.value);
        };
    }

    render() {
        return (
            <form
                onSubmit={this.handleFormSubmit}
                className="w-3/4 sm:mx-auto sm:w-full"
                autoComplete="off"
            >
                <TextField
                    id="outlined-full-width"
                    label="Search Your Food"
                    placeholder="Let's see what you eat!"
                    onChange={(e) => this.gottaChange(e)}
                    helperText="Whatever that makes your jaw drop!"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                />
            </form>
        );
    }
}

export default SearchBox;
