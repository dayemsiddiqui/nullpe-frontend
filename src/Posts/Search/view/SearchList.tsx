import React from "react";
import {Box} from "@material-ui/core";
import {SearchItem} from "./SearchItem";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        searchContainer: {
            padding: theme.spacing(3)
        }
    })
)

export const SearchList: React.FC<any> = () => {
    const classes = useStyles()
    return (
        <Box className={classes.searchContainer}>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
        </Box>
    )
}
