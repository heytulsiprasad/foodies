import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "../../../tailwind.generated.css";

const useStyles = makeStyles({
    root: {
        maxWidth: 450,
    },
    media: {
        height: 140,
    },
});

function MediaCard() {
    const classes = useStyles();

    return (
        <div className="mx-auto h-auto w-4/5 md:w-3/5">
            <Card className={[classes.root, "border-0"].join(' ')}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="https://spoonacular.com/recipeImages/564720-312x231.jpg"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        <p>Know More</p>
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}

export default MediaCard;
