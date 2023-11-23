"use client";
import { useUserAuth } from '../_utils/auth-context'; // Updated import path

export default function LandingPage() {
  const { user, gitHubSignIn } = useUserAuth();

  const signInWithGithub = () => {
    gitHubSignIn()
      .then((result) => {
      }).catch((error) => {
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

