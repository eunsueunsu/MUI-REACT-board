import React from "react";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";


const Posting = () => {

    return (
        <div>
            <h2>AddPost</h2>
            {/*<InputLabel htmlFor="standard-adornment-title">Title</InputLabel>*/}
            {/*<Input id="standard-adornment-title" label="Standard" placeholder="Title"></Input>*/}
            <FormControl>
                <InputLabel htmlFor="standard-adornment-password">Title</InputLabel>
                <Input id="standard-adornment-password"/>
            </FormControl>
        </div>
    )
}
export default Posting
