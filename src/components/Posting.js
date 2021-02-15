import React from "react";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import {Button, makeStyles} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
    element: {
        margin: theme.spacing(1),
        width: "90%"
    },



}))


const Posting = () => {

    const classes = useStyles();
    return (
        <div width="100%">
            <h2>AddPost</h2>
            {/*<InputLabel htmlFor="standard-adornment-title">Title</InputLabel>*/}
            {/*<Input id="standard-adornment-title" label="Standard" placeholder="Title"></Input>*/}

            <FormControl className={classes.element}>
                <InputLabel htmlFor="standard-adornment-password">Title</InputLabel>
                <Input id="standard-adornment-password" className={classes.element}/>
                {/*<label> Contents</label>*/}
                {/*<TextareaAutosize rowsMin={20} placeholder="Contents" className={classes.element}>*/}

                {/*</TextareaAutosize>*/}
                {/* eslint-disable-next-line react/jsx-no-undef */}
                <TextField
                    className={classes.element}
                    id="outlined-textarea"
                    label="content"
                    placeholder="Placeholder"
                    multiline
                    variant="outlined"
                    rowsMin={30}
                />
                <Button color="primary" className={classes.element}>SAVE
                </Button>
            </FormControl>


        </div>
    )
}
export default Posting
