import type { NextAuthConfig } from "next-auth";
import { URL } from "url";

export const authConfig = {
  //redirect the user the custom login page instead of Default NextAuth.js page
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({auth, request: {nextUrl}}){
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      if(isOnDashboard) {
        if(isLoggedIn) return true;
        return false //redirect user to the login page
      } else if(isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }
      return true;
    },
  },
  providers: [], //add providers with empty array for now
} satisfies NextAuthConfig;