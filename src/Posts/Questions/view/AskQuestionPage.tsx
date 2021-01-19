import React, {useState} from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './quill.css';
import {Box, Button, TextField} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            padding: theme.spacing(3),
            backgroundColor: theme.palette.background.default,
        },
        padding: {
            paddingBottom: theme.spacing(3)
        },
        description: {
            minHeight: theme.spacing(19),
            paddingBottom: theme.spacing(3)
        }
    })
)

export const AskQuestionPage: React.FC<any> = () => {
    const classes = useStyles()
    const [value, setValue] = useState('');
    const modules = {
        toolbar: [
            [{'header': [1, 2, false]}],
            ['code-block'],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
            ['link', 'image'],
            ['clean']
        ],
    }

    // @ts-ignore
    const LinkToSearch = (props) => <Link to="/" {...props}/>

    return (
        <Box className={classes.container}>
            <TextField className={classes.padding} fullWidth id="outlined-basic" label="Question Title"
                       variant="outlined"/>
            <ReactQuill
                className={classes.description}
                theme="snow"
                value={value}
                onChange={setValue}
                modules={modules}/>
            <Button component={LinkToSearch} variant="contained" color="primary">Post Question</Button>
        </Box>
    );
}
