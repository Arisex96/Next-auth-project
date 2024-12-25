import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { auth_config } from "@/app/lib/auth_config";

console.log(auth_config);
async function get_session() {
  const session = await getServerSession(auth_config);
  console.log(session);
  return session;
}

// Named export for the GET method
export async function GET() {
  const session = await get_session();

  console.log(session);

  return NextResponse.json({
    message: "ok",
    session, // Include session if needed in the response
  });
}
