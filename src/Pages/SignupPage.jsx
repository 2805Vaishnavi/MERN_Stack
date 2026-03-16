import { useState } from "react";

function SignupPage({ onSignup, goToLogin }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSignup();
  }

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>

      <form className="auth-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

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

        <button type="submit">Create Account</button>
      </form>

      <p>
        Already have an account?{" "}
        <span className="link" onClick={goToLogin}>
          Login
        </span>
      </p>
    </div>
  );
}

export default SignupPage;
