import NextAuth from 'next-auth';
// import GitHub from 'next-auth/providers/github';
import { PrismaAdapter } from '@auth/prisma-adapter';
// import { PrismaClient } from './app/generated/prisma/client';
import { prisma } from './lib/prisma'
// const prisma = new PrismaClient();
import authConfig from './auth.config';

export const { auth, handlers, signIn, signOut } = NextAuth({
  session: {
    strategy: 'jwt',
  },
  adapter: PrismaAdapter(prisma),
  // providers: [GitHub],
  // callbacks: {
  //   async jwt({token, user}){
  //     if(user){
  //       token.id = user.id;
  //       token.name = user.name;
  //     }

  //     return token;
  //   },
  //   async session({ session, token }){
  //     if(session){
  //       session.user.id = token.id as string;
  //       session.user.name = token.name as string ;  
  //     }

  //     return session;
  //   }
  // }
  ...authConfig
});
