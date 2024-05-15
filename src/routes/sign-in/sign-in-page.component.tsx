import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import "./sign-in-page.component.styles.scss";

function SignInPage() {
  return (
    <div className="sign-in">
      <SignIn />
      <SignUp />
    </div>
  );
}
export default SignInPage;
