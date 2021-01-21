import logo from './logo.svg';
import './App.css';
import {Grid} from "@material-ui/core";
import CustomAppBar from "./components/CustomAppBar";

import {MuiThemeProvider, createMuiTheme} from "@material-ui/core";
import CustomTable from "./components/CustomTable";
import AddPost from "./components/AddPost";
import Posting from "./components/Posting";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#b2dfdb',
        },
        secondary: {
            main: '#ffcdd2',
        }
    },
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
    control: {
        padding: createMuiTheme().spacing(3)
    }
})

function App() {
    return (
        <MuiThemeProvider theme={theme}>
            <div>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <CustomAppBar></CustomAppBar>
                    </Grid>

                    <Grid item xs={12} style={{padding: 30}}>

                        <h1>Basic Board Sample</h1>
                        <CustomTable></CustomTable>

                    </Grid>
                    <Grid item xs={12} style={{padding: 30}}>

                        {/*<h1>search API</h1>*/}
                        <Posting></Posting>
                    </Grid>
                    <Grid item xs={12}>
                        <h1>Footer</h1>
                    </Grid>
                </Grid>
            </div>
        </MuiThemeProvider>
    );
}

export default App;
