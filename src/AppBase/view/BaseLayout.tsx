import React from "react";
import {AppHeader} from "./AppHeader";
import {Box} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        containerPadding: {
            padding: theme.spacing(3),
            backgroundColor: theme.palette.grey.A100,
        }
    }),
);

export const BaseLayout: React.FC<any> = ({children}) => {
    const classes = useStyles({})
    return (
        <>
            <AppHeader/>
            <Box height="100%" className={classes.containerPadding}>
                {children}
            </Box>
        </>
    )
}
