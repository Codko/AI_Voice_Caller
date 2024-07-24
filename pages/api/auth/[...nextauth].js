// pages/api/auth/[...nextauth].js
import NextAuth from 'next-auth';

export default NextAuth({
  providers: [
    // No providers if you want to disable authentication
  ],
  pages: {
    signIn: '/auth', // Optional: Custom sign-in page
  },
  callbacks: {
    async session({ session, token }) {
      // Modify session handling if needed
      return session;
    },
  },
});
