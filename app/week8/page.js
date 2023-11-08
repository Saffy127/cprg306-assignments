"use client";
import { useUserAuth } from './_utils/auth-context';

export default function LandingPage() {
  const { user, gitHubSignIn } = useUserAuth();

  const signInWithGithub = () => {
    gitHubSignIn()
      .then((result) => {
        // The result already contains the user, no need to set it again.
      }).catch((error) => {
        // Handle Errors here.
        console.error(error);
      });
  };

  return (
    <div>
      {!user ? (
        <button onClick={signInWithGithub}>Sign in with GitHub Please</button>
      ) : (
        <div>Welcome, {user.displayName}!</div>
      )}
    </div>
  );
}
