import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ModalProvider } from "./context/Modal";
import App from "./App";
import "./index.css";
import "./components/LandingFormPage/LandingFormPage.css";

import configureStore from "./store";
import { restoreCSRF, csrfFetch } from "./store/csrf";
import * as sessionActions from "./store/session";
import * as spotActions from "./store/spots";

const store = configureStore();

if (process.env.NODE_ENV !== "production") {
  restoreCSRF();

  window.csrfFetch = csrfFetch;
  window.store = store;
  window.sessionActions = sessionActions;
  window.spotActions = spotActions;
}

function Root() {
  return (
    <Provider store={store}>
      <ModalProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ModalProvider>
    </Provider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
