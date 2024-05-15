import {
  signInWithGooglePopUp,
  signInWithPassword,
} from "../../utils/firebase.utils";
import { useState } from "react";
import "./sign-in.styles.scss";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="sign-in-container">
      <h1>Sign In</h1>
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
      <div>
        <button onClick={() => signInWithPassword(email, password)}>
          Sign In
        </button>
        <button onClick={() => signInWithGooglePopUp()}>
          Sign In With Google
        </button>
      </div>
    </div>
  );
}
