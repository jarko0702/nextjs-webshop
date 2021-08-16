import { SearchIcon } from "@heroicons/react/solid";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();
  return (
    <div className="flex justify-between bg-blue-500 p-3 pl-5 lg:pl-7 shadow-md text-white">
      <p
        onClick={() => router.push("/")}
        className="font-semibold text-lg cursor-pointer"
      >
        Webshop
      </p>
      <div className="flex px-3 border-blue-300 border-2 rounded-full">
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent border-none text-white placeholder-white placeholder-small focus:border-none"
        />
        <SearchIcon className="hidden md:inline h-5 cursor-pointer hover:scale-95 transform duration-100 ease-out" />
      </div>
      <div className="flex items-center">
        <button className="pr-3 hover:scale-95 transform duration-100 ease-out">
          Account
        </button>
        <ShoppingCartIcon
          onClick={() => router.push("/checkout")}
          className="h-5 cursor-pointer hover:scale-95 transform duration-100 ease-out"
        />
      </div>
    </div>
  );
}

export default Header;
