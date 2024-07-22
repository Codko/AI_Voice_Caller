import { useSession } from 'next-auth/react';
import Layout from '../components/Layout';

export default function Calls() {
  const { data: session } = useSession();

  if (!session) {
    return <p>Please log in to manage calls.</p>;
  }

  return (
    <Layout>
      <h1>Call Management</h1>
      <form>
        <label>
          Phone Number:
          <input type="text" name="phone" />
        </label>
        <label>
          Message:
          <textarea name="message"></textarea>
        </label>
        <button type="submit">Make Call</button>
      </form>
    </Layout>
  );
}
