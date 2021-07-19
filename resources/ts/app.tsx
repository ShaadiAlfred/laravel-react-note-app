import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import axios from "axios";

import App from "./Components/App";

axios.defaults.withCredentials = true;

render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById("app"));
