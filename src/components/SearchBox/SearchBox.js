import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import ThemeContext from "../../context/ThemeContext/ThemeContext";
import "../../tailwind.generated.css";

//////////////////// This is where the Search Takes Place

class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            val: "",
        };

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.textChangeHandler = this.textChangeHandler.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        if (props.active === null) {
            return { val: "" };
        }
        if (props.active !== null) {
            return { val: props.active };
        }
    }

    handleFormSubmit(e) {
        e.preventDefault();
        this.props.isPressed();
    }

    textChangeHandler(e) {
        this.setState({ val: e.target.value });
        this.props.search(e.target.value);
    }

    render() {
        const darkTheme = createMuiTheme({
            palette: {
                type: "dark",
            },
        });

        const lightTheme = createMuiTheme({
            palette: {
                type: "light",
            },
        });

        let theme;

        if (this.context.theme === "light") {
            theme = lightTheme;
        } else {
            theme = darkTheme;
        }

        return (
            <ThemeProvider theme={theme}>
                <form
                    onSubmit={this.handleFormSubmit}
                    className="w-3/4 sm:mx-auto sm:w-full"
                    autoComplete="off"
                >
                    <TextField
                        id="outlined-full-width"
                        label="Search for Food"
                        placeholder="Let's see what you eat!"
                        value={this.state.val}
                        onChange={(e) => this.textChangeHandler(e)}
                        helperText="Whatever that makes your jaw drop!"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                    />
                </form>
            </ThemeProvider>
        );
    }
}

SearchBox.contextType = ThemeContext;

export default SearchBox;
