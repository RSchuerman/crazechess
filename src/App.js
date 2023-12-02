import "./App.css";
import { reducer } from "./reducer/reducer";
import { useReducer } from "react";
import { initGameState } from "./constants";
import AppContext from "./contexts/Context";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import LogInPage from "./components/auth/LoginPage";

import { Amplify } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import config from "./amplifyconfiguration.json";
import SiteNav from "./components/common/SiteNav";
import SiteFooter from "./components/common/SiteFooter";
Amplify.configure(config);

function App({ signOut, user }) {
  const [appState, dispatch] = useReducer(reducer, initGameState);

  const providerState = {
    appState,
    dispatch,
  };

  return (
    <AppContext.Provider value={providerState}>
      {/* //   <h1>Hello {user.preferred_username}</h1>
    //   <button onClick={signOut}>Sign out</button> */}
      <SiteNav />
      <Routes>
        <Route path="*" element={<HomePage />} />
        <Route path="/" exact={true} element={<HomePage />} />
        <Route path="/login" element={<LogInPage />} />
      </Routes>
      <SiteFooter />
    </AppContext.Provider>
  );
}

export default withAuthenticator(App);
