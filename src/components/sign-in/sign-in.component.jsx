import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils.js";

import "./sign-in.component.jsx";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>SignIn Page!</h1>
      <button onClick={logGoogleUser}>Sign in with google Popup</button>
    </div>
  );
};

export default SignIn;
