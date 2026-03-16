import { useState } from "react";

function LoginPage({ onLogin, goToSignup }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onLogin();
  }

  return (
    <div className="auth-container">
      <h2>Login</h2>

      <form className="auth-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>

      <p>
        Don’t have an account?{" "}
        <span className="link" onClick={goToSignup}>
          Sign up
        </span>
      </p>
    </div>
  );
}

export default LoginPage;
