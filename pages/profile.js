import { useSession } from 'next-auth/react';
import Layout from '../components/Layout';

export default function Profile() {
  const { data: session } = useSession();

  if (!session) {
    return <p>Please log in to view your profile.</p>;
  }

  return (
    <Layout>
      <h1>User Profile</h1>
      <p>Name: {session.user.name}</p>
      <p>Email: {session.user.email}</p>
    </Layout>
  );
}
