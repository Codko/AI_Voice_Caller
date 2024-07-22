// components/Layout.js
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import styles from '../styles/Layout.module.css'; // Ensure this path is correct

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Navbar />
      <Sidebar />
      <main className={styles.mainContent}>{children}</main>
    </div>
  );
};

export default Layout;
