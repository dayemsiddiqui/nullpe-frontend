import React from "react";
import {Box, Button, Card, CardActions, CardContent, Divider, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
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
        padding: '10px'
    }
});

interface SearchItemProps {
    id: string
    title: string
}

export const SearchItem: React.FC<SearchItemProps> = ({ id, title }) => {
    const classes = useStyles();
    return (
        <Box className={classes.container}>
            <Card variant="outlined">
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {new Date().toDateString()}, Dayem Siddiqui
                    </Typography>
                    <Link to={`/discussion/${id}`}>
                        <Typography variant="h5" component="h2">
                            { title }
                        </Typography>
                    </Link>
                    <Typography className={classes.pos} color="textSecondary">
                        24 Votes
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
