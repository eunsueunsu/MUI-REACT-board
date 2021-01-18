import logo from './logo.svg';
import './App.css';
import {Grid} from "@material-ui/core";
import CustomAppBar from "./components/CustomAppBar";


function App() {
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12}>

                   <CustomAppBar></CustomAppBar>
                </Grid>
                <Grid item xs={6}>
                    <h1>TEST</h1>

                </Grid>
                <Grid item xs={6}>
                    <h1>TEST</h1>

                </Grid>
                <Grid item xs={12}>
                    <h1>TEST</h1>

                </Grid>
            </Grid>
        </div>
    );
}

export default App;
