import CredentialsProvider from "next-auth/providers/credentials";
//import { env } from "process";
import GoogleProvider from "next-auth/providers/google";
import { signIn } from "next-auth/react";


export const auth_config = {
    providers: [
      CredentialsProvider({
        name: "Email",
        credentials: {
          username: { label: "email", type: "text", placeholder: "" },
          password: { label: "password", type: "password", placeholder: "" },
        },
        async authorize(credentials:any)
        {
          console.log(credentials)
  
          return {
              id:"id1",
              name:"user1",
              email:"email1"
          }
        }
      }),
      GoogleProvider(
        {
        clientId: process.env.GOOGLE_CLIENT_ID || "",
        clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
      })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
      session: ({session,token}:any) =>
      {//server comp wont show id only use like Appbar and useRouter
        session.user.id = token.sub;
        console.log(session);
        return session;   
      }
    },
    page:
    {
      signIn:"/signin"
    }
  }
