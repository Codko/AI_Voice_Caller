// pages/_app.js
import '../styles/globals.css'; // Import your global styles
import { SessionProvider } from 'next-auth/react'; // Import SessionProvider
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}

export default MyApp;
