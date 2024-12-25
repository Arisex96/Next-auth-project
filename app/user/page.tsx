import { getServerSession } from "next-auth"
import { auth_config } from "../lib/auth_config";


export default async function()
{
  console.log("user page");
  const session = await getServerSession(auth_config);
  console.log(session?.user);

  return <>
  user components {JSON.stringify(session?.user)}
  </>
}
