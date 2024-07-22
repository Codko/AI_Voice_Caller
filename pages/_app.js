// pages/_app.js
import '../styles/globals.css'; // Ensure this path is correct
import { SessionProvider } from 'next-auth/react';
import Layout from '../components/Layout'; // Assuming you have a Layout component

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}

export default MyApp;
