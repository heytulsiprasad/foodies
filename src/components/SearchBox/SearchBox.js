import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import "../../tailwind.generated.css";

class SearchBox extends Component {
    render() {
        return (
            <form className="my-16 px-32 md:px-16 sm:px-8" autoComplete="off">
                <TextField
                    id="outlined-full-width"
                    label="Search Your Food"
                    placeholder="Let's see what you eat!"
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
