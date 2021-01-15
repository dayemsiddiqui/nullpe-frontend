import React from "react";
import {Box} from "@material-ui/core";
import {SearchItem} from "./SearchItem";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {v4} from 'uuid'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        searchContainer: {
            padding: theme.spacing(3)
        }
    })
)

export const SearchList: React.FC<any> = () => {
    const classes = useStyles()
    const searchResults = [
        {
            title: "Translations on POEditor not syncing to frontend?",
            id: v4()
        },
        {
            title: "How to delete stale pods from kubernetes cluster?",
            id: v4()
        },
        {
            title: "CircleCI failing because of dependabot error?",
            id: v4()
        },
    ]
    return (
        <Box className={classes.searchContainer}>
            {
                searchResults.map(result => <SearchItem id={result.id} title={result.title}/>)
            }

        </Box>
    )
}
