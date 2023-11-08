// page.js
import { useContext } from 'react';
import { authContext } from '../_utils/auth-context';
import { signInWithPopup, GithubAuthProvider } from "firebase/auth";

export default function LandingPage() {
  const { user, setUser } = useContext(authContext);
  const provider = new GithubAuthProvider();

  const signInWithGithub = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a GitHub Access Token.
        const token = result.credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        setUser(user);
      }).catch((error) => {
        // Handle Errors here.
        console.error(error);
      });
  };

  return (
    <div>
      {!user ? (
        <button onClick={signInWithGithub}>Sign in with GitHub Pwease</button>
      ) : (
        <div>Welcome, {user.displayName}!</div>
      )}
    </div>
  );
}
