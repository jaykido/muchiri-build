"use client";
import { ClerkLoaded, SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import Form from "next/form";
import { PackageIcon, TrolleyIcon } from "@sanity/icons";
const Header = () => {
  const { user } = useUser();
  console.log(user);
  const createClerkPasskey = async () => {
    try {
      const response = await user?.createPasskey();
      console.log(response);
    } catch (err) {
      console.log("Error:", JSON.stringify(err, null, 2));
    }
  };
  return (
    <header className="flex flex-wrap justify-between items-center px-4 py-2">
      {/* top row */}
      <div className="flex w-full flex-wrap justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-blue-500 hover:opacity-50 cursor-pointer mx-auto sm:mx-0"
        >
          Muchiri
        </Link>

        <Form
          action="/search"
          className="w-full sm:w-auto sm:flex-1 sm:mx-4 mt-2 sm:mt-0"
        >
          <input
            type="text"
            name="query"
            placeholder="search for art"
            className="
          bg-gray-100
          text-gray-800
            px-4
            py-2
            rounded
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
            focus:ring-opacity-50
            border
            w-full
            max-w-4xl
          "
          />
        </Form>
        <div className=" flex items-center space-x-4 mt-4 sm:mt-0 flex-1 sm:flex-none">
          <Link
            href="/basket"
            className="flex-1 relative flex justify-center sm:justify-start sm:  items-center space-x-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            <TrolleyIcon className="w-6 h-6" />
            <span>My basket</span>
          </Link>

          <ClerkLoaded>
            {user && (
              <Link
                href="orders"
                className=" flex-1 relative flex justify-center sm:justify-start sm:flex-none items-center space-x-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2"
              >
                <PackageIcon className="w-6 h-6" />
                <span>My orders</span>
              </Link>
            )}

            {user ? (
              <div className="flex items-center space-x-2">
                <UserButton />
                <div className="hidden sm:block text-xs">
                  <p className="text-gray-400">Welcome Back</p>
                  <p className="font-bold">{user.fullName}</p>
                </div>
              </div>
            ) : (
              <SignInButton>
                <button className="bg-black hover:bg-blue-700 hover:text-white text-white font-bold py-2 px-4 rounded border-blue-300 border">
                  Sign In
                </button>
              </SignInButton>
            )}

            {user?.passkeys.length === 0 && (
              <button
                onClick={createClerkPasskey}
                className="bg-white hover:bg-blue-700 hover:text-white animate-pulse text-blue-500 font-bold py-2 px-4 rounded border-blue-300 border"
              >
                Create passkey
              </button>
            )}
          </ClerkLoaded>
        </div>
      </div>
      {/* top row */}
    </header>
  );
};

export default Header;