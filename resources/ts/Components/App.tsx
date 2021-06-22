import React from "react";
import { Box, CssBaseline } from "@material-ui/core";
import MyAppBar from "./MyAppBar";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

const App = () => {
    return (
        <Box>
            <CssBaseline />
            <Router>
                <MyAppBar />
                <Switch>
                    <Route path="/about">
                        <h1>About</h1>
                    </Route>
                    <Route path="/">
                        <h1>Hello World</h1>
                    </Route>
                </Switch>
            </Router>
        </Box>
    );
};

export default App;
