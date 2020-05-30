import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import "../../tailwind.generated.css";

class SearchBox extends Component {
    constructor(props) {
        super(props);

        this.handleFormSubmit = (e) => {
            e.preventDefault();
        };

        this.gottaChange = (e) => {
            this.props.search(e.target.value);
        };
    }

    render() {
        return (
            <form
                onSubmit={this.handleFormSubmit}
                className="mt-16 mb-8 px-32 md:px-16 sm:px-8"
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
