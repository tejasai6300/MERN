import { useEffect, useState } from "react";
import TravelBucketListApp from "./pages/TravelBucketListApp";
import AuthPage from "./Auth/AuthPage";
import "./App.css";

// Root React component used by Vite.
// It now also decides whether to show:
// - the login/signup screen, or
// - the main travel bucket list app (when a user is logged in).
export default function App() {
  const [currentUser, setCurrentUser] = useState(null);

  // Try to restore the logged-in user when the app loads.
  useEffect(() => {
    const saved = localStorage.getItem("travelCurrentUser");
    if (saved) {
      setCurrentUser(JSON.parse(saved));
    }
  }, []);

  const handleLogin = (user) => {
    setCurrentUser(user);
    localStorage.setItem("travelCurrentUser", JSON.stringify(user));
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("travelCurrentUser");
  };

  // If no user is logged in, show login/signup page.
  if (!currentUser) {
    return <AuthPage onLogin={handleLogin} />;
  }

  // Otherwise show the main app, passing in the user and logout action.
  return (
    <TravelBucketListApp currentUser={currentUser} onLogout={handleLogout} />
  );
}
