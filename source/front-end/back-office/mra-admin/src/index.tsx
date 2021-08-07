import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import configureStore from "./store";
import { Provider } from "react-redux";
import AxiosInterceptor from "./utils/http-interceptor";
import { CognitoService } from "./services";

const store = configureStore({});

AxiosInterceptor.setup(store);
CognitoService.initialize();

const renderApplication = () => {
  const rootHtml = document.getElementById("root");
  const application = (
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );

  ReactDOM.render(application, rootHtml);
};

renderApplication();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
