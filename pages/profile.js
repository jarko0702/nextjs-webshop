import { signOut, useSession } from "next-auth/client";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Header from "../components/Header";

function Profile() {
  const router = useRouter();
  const [session, loading] = useSession();

  useEffect(() => {
    if (session === undefined) {
      router.replace("/");
    }
  }, []);

  return (
    <div>
      <Head>
        <title>Profile</title>
      </Head>
      <div>
        <Header />
        <div className="m-5">
          <p className="font-semibold text-lg">
            {session?.user.email || "No user logged in"}
          </p>
          <button
            onClick={() => signOut()}
            className="bg-blue-300 p-2 mt-3 rounded-lg text-white"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
