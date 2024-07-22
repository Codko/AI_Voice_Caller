import { useSession } from 'next-auth/react';
import Layout from '../components/Layout';

export default function Schedule() {
  const { data: session } = useSession();

  if (!session) {
    return <p>Please log in to schedule appointments.</p>;
  }

  return (
    <Layout>
      <h1>Appointment Scheduling</h1>
      <form>
        <label>
          Date:
          <input type="date" name="date" />
        </label>
        <label>
          Time:
          <input type="time" name="time" />
        </label>
        <label>
          Description:
          <textarea name="description"></textarea>
        </label>
        <button type="submit">Schedule Appointment</button>
      </form>
    </Layout>
  );
}
