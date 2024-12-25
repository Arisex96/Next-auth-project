import { auth_config } from "@/app/lib/auth_config";
import NextAuth from "next-auth";

const authOptions = NextAuth(auth_config);


const GET = authOptions;
const POST = authOptions;

export { GET, POST};

