import React from "react";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import {TextFields} from "@material-ui/icons";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import {Button} from "@material-ui/core";


const Posting = () => {

    return (
        <div>
            <h2>AddPost</h2>
            {/*<InputLabel htmlFor="standard-adornment-title">Title</InputLabel>*/}
            {/*<Input id="standard-adornment-title" label="Standard" placeholder="Title"></Input>*/}
            <FormControl>
                <InputLabel htmlFor="standard-adornment-password">Title</InputLabel>
                <Input id="standard-adornment-password"/>

                <label> Contents</label>
                <TextareaAutosize aria-label="minimum height" rowsMin={20} placeholder="Contents">

                </TextareaAutosize>
                <Button color="primary">SAVE
                </Button>
            </FormControl>


        </div>
    )
}
export default Posting
