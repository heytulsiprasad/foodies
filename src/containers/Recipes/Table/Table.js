import React, { useContext } from "react";
import Table from "@material-ui/core/Table";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import ThemeContext from "../../../context/ThemeContext/ThemeContext";

function createData(item, amount) {
    return { item, amount };
}

function SimpleTable(props) {
    const context = useContext(ThemeContext);

    const rows = [];

    props.ingredients.forEach((i) => {
        rows.push(createData(i[0], i[1]));
    });

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

    if (context.theme === "light") {
        theme = lightTheme;
    } else {
        theme = darkTheme;
    }

    return (
        <ThemeProvider theme={theme}>
            <TableContainer component={Paper}>
                <Table size="small" aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Ingredients</TableCell>
                            <TableCell align="right">Amount</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell component="th" scope="row">
                                    {row.item}
                                </TableCell>
                                <TableCell align="right">
                                    {row.amount}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </ThemeProvider>
    );
}

export default SimpleTable;
