import { useState } from "react";

// Very simple login / signup page that stores users in localStorage.
// This is only for learning purposes (NOT secure for real apps).
// When a user successfully logs in or signs up, we call `onLogin(user)`.
export default function AuthPage({ onLogin }) {
  const [mode, setMode] = useState("login"); // "login" or "signup"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const loadUsers = () => {
    const saved = localStorage.getItem("travelUsers");
    return saved ? JSON.parse(saved) : [];
  };

  const saveUsers = (users) => {
    localStorage.setItem("travelUsers", JSON.stringify(users));
  };

  const handleSignup = (e) => {
    e.preventDefault();
    setError("");

    const users = loadUsers();
    const existing = users.find((u) => u.email === email);
    if (existing) {
      setError("This email is already registered. Please log in instead.");
      return;
    }

    const newUser = { email, password, name: name || email.split("@")[0] };
    saveUsers([...users, newUser]);
    onLogin(newUser);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    const users = loadUsers();
    const user = users.find((u) => u.email === email && u.password === password);

    if (!user) {
      setError("Invalid email or password. Please try again.");
      return;
    }

    onLogin(user);
  };

  const onSubmit = mode === "login" ? handleLogin : handleSignup;

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1 className="auth-title">Travel Bucket List</h1>
        <p className="auth-subtitle">
          Save places you want to visit, track what you&apos;ve seen, and plan with a budget.
        </p>

        <div className="auth-toggle">
          <button
            type="button"
            className={mode === "login" ? "auth-toggle-btn active" : "auth-toggle-btn"}
            onClick={() => setMode("login")}
          >
            Log in
          </button>
          <button
            type="button"
            className={mode === "signup" ? "auth-toggle-btn active" : "auth-toggle-btn"}
            onClick={() => setMode("signup")}
          >
            Sign up
          </button>
        </div>

        <form className="auth-form" onSubmit={onSubmit}>
          {mode === "signup" && (
            <div className="auth-field">
              <label>Full name (optional)</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jane Traveller"
              />
            </div>
          )}

          <div className="auth-field">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@example.com"
            />
          </div>

          <div className="auth-field">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="At least 4 characters"
              minLength={4}
            />
          </div>

          {error && <p className="auth-error">{error}</p>}

          <button type="submit" className="auth-submit">
            {mode === "login" ? "Log in" : "Create account"}
          </button>
        </form>
      </div>
    </div>
  );
}

