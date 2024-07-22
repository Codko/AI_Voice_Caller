import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside>
      <ul>
        <li><Link href="/">Dashboard</Link></li>
        <li><Link href="/calls">Call Management</Link></li>
        <li><Link href="/schedule">Appointment Scheduling</Link></li>
        <li><Link href="/leads">Lead Management</Link></li>
        <li><Link href="/profile">User Profile</Link></li>
        <li><Link href="/payments">Payments</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
