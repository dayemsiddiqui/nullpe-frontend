import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }),
);

export const AppHeader: React.FC<any> = () => {
    const classes = useStyles()
    // @ts-ignore
    const AskQuestionLink = (props) => <Link to="/ask" {...props} />

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        NullPointerException - Engineering Q&A Platform
                    </Typography>
                    <Button
                        color="inherit"
                        component={AskQuestionLink}
                    >
                        Ask a question
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}
