import { NextAuthConfig } from 'next-auth';
import GitHub from 'next-auth/providers/github';

export default {
  providers: [GitHub],
  callbacks: {
    async jwt({token, user}){
      if(user){
        token.id = user.id;
        token.name = user.name;
      }

      return token;
    },
    async session({ session, token }){
      if(session){
        session.user.id = token.id as string;
        session.user.name = token.name as string ;  
      }

      return session;
    }
  }
} satisfies NextAuthConfig;
