import { SearchIcon } from "@heroicons/react/solid";
import { ShoppingCartIcon, UserCircleIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/shoppingCartSlice";
import { signIn, useSession } from "next-auth/client";
import Image from "next/image";
import { db } from "../firebase";

function Header() {
  const router = useRouter();
  const items = useSelector(selectItems);
  const [session, loading] = useSession();

  const handleSearch = (e) => {
    e.preventDefault();
  };

  const handleUser = () => {
    if (session == null || undefined) {
      signIn();
    } else {
      router.push("/profile");
    }
  };

  // const photoURL = db.get

  return (
    <div className="z-40 mb-5 sticky flex justify-between bg-blue-500 p-3  shadow-md text-white">
      <p
        onClick={() => router.push("/")}
        className="font-semibold text-lg cursor-pointer ml-1 md:ml-4 lg:ml-6"
      >
        Webshop
      </p>
      <form
        onSubmit={handleSearch}
        className="flex items-center px-3 border-blue-300 border-2 rounded-full"
      >
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none text-white placeholder-white placeholder-small"
        />
        <SearchIcon
          onClick={handleSearch}
          className="hidden md:inline h-5 cursor-pointer hover:scale-95 transform duration-100 ease-out"
        />
      </form>
      <div className="flex items-center">
        {session ? (
          <div
            onClick={handleUser}
            className="relatve h-7 w-7 mr-1 md:mr-4 lg:mr-6 cursor-pointer hover:scale-95 transform duration-100 ease-out"
          >
            <Image
              className="roundend-full"
              src={session.user.image}
              layout="fill"
              objectFit="fill"
            />
          </div>
        ) : (
          <UserCircleIcon
            onClick={handleUser}
            className="mr-1 md:mr-4 lg:mr-6 h-7 cursor-pointer hover:scale-95 transform duration-100 ease-out"
          />
        )}

        <div className="relative flex cursor-pointer hover:scale-95 transform duration-100 ease-out">
          <ShoppingCartIcon
            onClick={() => router.push("/checkout")}
            className="h-7  "
          />
          {items.length !== 0 ? (
            <p className="hidden md:inline absolute z-50 right-5 bottom-4 rounded-full bg-red-600 p-1 px-2 text-xs">
              {items.length}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Header;
