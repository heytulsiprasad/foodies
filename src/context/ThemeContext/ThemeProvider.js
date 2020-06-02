import React from "react";
import ThemeContext from "./ThemeContext";

class ThemeProvider extends React.Component {
    constructor(props) {
        super(props);

        this.updateTheme = this.updateTheme.bind(this);

        this.state = {
            theme: "light",
            updateTheme: this.updateTheme,
        };
    }

    updateTheme(val) {
        this.setState({ theme: val });
    }

    render() {
        return (
            <ThemeContext.Provider value={this.state}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}

export default ThemeProvider;
