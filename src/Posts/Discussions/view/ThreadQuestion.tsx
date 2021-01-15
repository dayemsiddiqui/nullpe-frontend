import React from "react";
import {Box, Button, Card, CardActions, CardContent, createStyles, Divider, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => createStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    voteCount: {
        marginRight: '80%'
    },
    container: {
        padding: '10px',
        background: theme.palette.primary.light
    }
}));

export const ThreadQuestion: React.FC<any> = () => {
    const classes = useStyles();
    return (
        <Box className={classes.container}>
            <Card variant="outlined">
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {new Date().toDateString()}, Dayem Siddiqui
                    </Typography>
                    <Typography variant="h5" component="h2">
                        Translations on POEditor not syncing to frontend?
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        24 Votes
                    </Typography>
                    <Typography variant="body2" component="p">
                        Hi I added the translations on the POEditor however even after 30 minutes the translations are
                        not
                        showing up on the frontend.
                    </Typography>
                </CardContent>
                <Divider/>
                <CardActions>
                    <Button size="small">Upvote</Button>
                    <Button size="small">Downvote</Button>

                </CardActions>
            </Card>
        </Box>
    )
}
