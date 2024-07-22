import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav>
      <h1>AI Voice Caller</h1>
      {session && (
        <button onClick={() => signOut()}>Sign out</button>
      )}
    </nav>
  );
};

export default Navbar;
