import logo from './logo.svg';
import './App.css';
import {Grid} from "@material-ui/core";
import CustomAppBar from "./components/CustomAppBar";

import {MuiThemeProvider,createMuiTheme} from "@material-ui/core";

const theme = createMuiTheme({
    palette:{
        primary:{
            main: '#b2dfdb',
        },
        secondary:{
            main: '#ffcdd2',
        }
    },
    typography:{
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
                <Grid item xs={6}>
                    <h1>게시판 자리</h1>

                </Grid>
                <Grid item xs={6}>
                    <h1>검색 API 자리</h1>

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
