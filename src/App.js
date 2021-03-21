
import './App.css';
import {BrowserRouter,Route,Link,Switch} from "react-router-dom";
import {Grid} from "@material-ui/core";
import CustomAppBar from "./components/CustomAppBar";

import {MuiThemeProvider, createMuiTheme} from "@material-ui/core";
import CustomTable from "./components/CustomTable";
import AddPost from "./components/AddPost";
import Posting from "./components/Posting";
import {Component} from "react";
import ContentDetail from "./components/ContentDetail";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#e4405f',
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

function App(){
        return (
            <MuiThemeProvider theme={theme}>
                <BrowserRouter>
                <div>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <CustomAppBar></CustomAppBar>
                        </Grid>

                        {/*<Grid item xs={12} style={{padding: 30}}>*/}

                        {/*    <h1>Basic Board Sample</h1>*/}
                        {/*    <CustomTable></CustomTable>*/}

                        {/*</Grid>*/}
                        {/*<Grid item xs={12} style={{padding: 30}}>*/}

                        {/*    /!*<h1>search API</h1>*!/*/}
                        {/*    <Posting></Posting>*/}
                        {/*</Grid>*/}
                        {/*<Grid item xs={12}>*/}
                        {/*    <h1>Footer</h1>*/}
                        {/*</Grid>*/}
                    </Grid>
                </div>
                    <Grid padding={4}>
                    <Switch>
                        <Route exact path="/" component={CustomTable}/>
                        <Route path="/posting" component={Posting}/>
                        <Route path="/detail" component={ContentDetail}/>

                    </Switch>
                    </Grid>
                </BrowserRouter>
            </MuiThemeProvider>

        )
}

//
// function CustomTable({match}){
//     return <Grid item xs={12} style={{padding: 30}}>
//         <h1>Basic Board Sample</h1>
//         <CustomTable></CustomTable>
//
//     </Grid>
// }

// function App() {
//
// }

export default App;
