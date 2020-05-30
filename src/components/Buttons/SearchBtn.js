import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            margin: theme.spacing(1),
        },
    },
}));

function ContainedButtons() {
    const classes = useStyles();

    return (
        <div className={[classes.root, "mt-3 ml-2 sm:mx-auto"].join(" ")}>
            <Button variant="contained" className="w-32 h-12 sm:w-48" color="primary">
                <SearchIcon /> Search
            </Button>
        </div>
    );
}

export default ContainedButtons;
