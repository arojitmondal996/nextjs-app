import Image from "next/image";
import LoginButton from "./components/LoginButton";
import UserInfo from "./components/UserInfo";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import LogoutButton from "./components/LogoutButton";
// import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions)
  return (
    <div className="flex gap-5 justify-center mt-10">
      Hey Developer
      {
        session?.user ? (<LogoutButton />) : (<LoginButton />)
      }
      <p className="font-bold text-xl">FROM CLIENT COMPONENT</p>
      <UserInfo />
      {JSON.stringify(session)}
    </div>
  );
}
