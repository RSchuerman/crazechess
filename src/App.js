import "./App.css";

import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";

import { Amplify } from "aws-amplify";
import { getCurrentUser } from "@aws-amplify/auth";
import "@aws-amplify/ui-react/styles.css";
// import config from "./amplifyconfiguration.json";
import awsExports from "./aws-exports";

import SiteNav from "./components/common/SiteNav";
import SiteFooter from "./components/common/SiteFooter";
import HomePage from "./components/home/HomePage";
import LoginPage from "./components/auth/LoginPage";
import GamePage from "./components/play/GamePage";
import ValidatePage from "./components/auth/ValidatePage";

Amplify.configure(awsExports);

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  async function ionViewCanEnter() {
    try {
      await getCurrentUser();
      setIsAuthenticated(true);
    } catch {
      setIsAuthenticated(false);
    }
  }
  useEffect(() => {
    ionViewCanEnter();
  });

  function updateAuthStatus(authStatus) {
    setIsAuthenticated(authStatus);
  }
  return (
    <div>
      <SiteNav
        isAuthenticated={isAuthenticated}
        updateAuthStatus={updateAuthStatus}
      />
      <Routes>
        <Route
          path="*"
          element={<HomePage isAuthenticated={isAuthenticated} />}
        />
        <Route
          path="/"
          exact={true}
          element={<HomePage isAuthenticated={isAuthenticated} />}
        />
        <Route
          path="/login"
          element={<LoginPage updateAuthStatus={updateAuthStatus} />}
        />
        <Route path="/validate" element={<ValidatePage />} />
        <Route
          path="/play"
          element={<GamePage isAuthenticated={isAuthenticated} />}
        />
      </Routes>
      <SiteFooter />
    </div>
  );
}

export default App;
