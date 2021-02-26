import React from "react";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import {Button, makeStyles} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({


    mainDiv: {
        textAlign: "center"
    },
    element: {
        margin: theme.spacing(1),
        width: "90%",
        maxWidth: "500px",
        textAlign: "center"
    },
    btnPrimary: {
        width: "50%",
        textAlign: "center"
    }
}))


const Posting = () => {

    const classes = useStyles();
    return (
        <div className={classes.mainDiv}>
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
                    // placeholder="Placeholder"
                    multiline
                    variant="outlined"
                    rows={30}
                />
                <Button color="primary" className={`classes.element ${classes.btnPrimary}`}>SAVE
                </Button>
            </FormControl>
        </div>
    )
}
export default Posting
