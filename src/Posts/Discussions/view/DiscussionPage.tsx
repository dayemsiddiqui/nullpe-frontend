import React from "react";
import {Box} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {ThreadQuestion} from "./ThreadQuestion";
import {ThreadAnswer} from "./ThreadAnswer";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        searchContainer: {
            padding: theme.spacing(3)
        }
    })
)

export const DiscussionPage: React.FC<any> = () => {
    const classes = useStyles()
    return (
        <Box className={classes.searchContainer}>
            <ThreadQuestion />
            <ThreadAnswer />
            <ThreadAnswer />
            <ThreadAnswer />
            <ThreadAnswer />
        </Box>
    )
}
