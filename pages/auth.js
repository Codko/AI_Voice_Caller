import { signIn, signOut, useSession } from 'next-auth/react';

export default function Auth() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        <p>Welcome, {session.user.name}!</p>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => signIn('github')}>Sign in with GitHub</button>
    </div>
  );
}
