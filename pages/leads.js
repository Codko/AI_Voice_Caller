import { useSession } from 'next-auth/react';
import Layout from '../components/Layout';

export default function Leads() {
  const { data: session } = useSession();

  if (!session) {
    return <p>Please log in to manage leads.</p>;
  }

  return (
    <Layout>
      <h1>Lead Management</h1>
      <form>
        <label>
          Lead Name:
          <input type="text" name="leadName" />
        </label>
        <label>
          Lead Details:
          <textarea name="leadDetails"></textarea>
        </label>
        <button type="submit">Add Lead</button>
      </form>
    </Layout>
  );
}
