import { createWithEmailAndPassword } from "../../utils/firebase.utils";
import { useState } from "react";
import "./sign-up.styles.scss";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="sign-up-container">
      <h1>Sign Up</h1>
      <p>email</p>
      <input
        value={email}
        type="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <p>password</p>
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
      />
      <button onClick={() => createWithEmailAndPassword(email, password)}>
        CreateAccount
      </button>
    </div>
  );
}
