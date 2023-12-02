import "./App.css";

import { Route, Routes } from "react-router-dom";
import { Amplify } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import config from "./amplifyconfiguration.json";

import SiteNav from "./components/common/SiteNav";
import SiteFooter from "./components/common/SiteFooter";
import HomePage from "./components/home/HomePage";
import LogInPage from "./components/auth/LoginPage";

Amplify.configure(config);

function App({ signOut, user }) {
  return (
    <div>
      {/* //   <h1>Hello {user.preferred_username}</h1>
    //   <button onClick={signOut}>Sign out</button> */}
      <SiteNav logOut={signOut} />
      <Routes>
        <Route path="*" element={<HomePage />} />
        <Route path="/" exact={true} element={<HomePage />} />
        <Route path="/login" element={<LogInPage />} />
      </Routes>
      <SiteFooter />
    </div>
  );
}

export default withAuthenticator(App);
