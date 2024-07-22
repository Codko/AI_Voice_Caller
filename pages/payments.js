import { useSession } from 'next-auth/react';
import Layout from '../components/Layout';

export default function Payments() {
  const { data: session } = useSession();

  if (!session) {
    return <p>Please log in to manage payments.</p>;
  }

  return (
    <Layout>
      <h1>Payments</h1>
      <p>Manage your payments and subscriptions here.</p>
    </Layout>
  );
}
