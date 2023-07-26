import { modalState } from "@/atoms/modalAtom";
import {
  MagnifyingGlassIcon,
  HomeIcon,
  Bars3Icon,
  PaperAirplaneIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import ProfileDropDown from "./ProfileDropDown";
import NavBtnDropDown from "./NavBtnDropDown";

const Header = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [modal, setModal] = useRecoilState(modalState);

  return (
    <div className="shadow-sm bg-white sticky top-0 z-20 px-4 w-full">
      <div className="flex justify-between max-w-6xl  lg:mx-auto items-center">
        {/* Left */}
        <div
          onClick={() => router.push("/")}
          className="relative hidden lg:inline-grid cursor-pointer items-center "
        >
          <img
            className="h-10 object-contain"
            src={"https://links.papareact.com/ocw"}
            alt="Brand logo"
          />
        </div>
        <div
          onClick={() => router.push("/")}
          className="relative w-10 h-10 lg:hidden cursor-pointer"
        >
          <img src={"https://links.papareact.com/jjm"} alt="Brand logo" />
        </div>

        {/* Middle - Search field */}
        <div className="max-w-xs">
          <div className="mt-1 relative p-3 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              name="search"
              className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon onClick={() => router.push("/")} className="navBtn" />
          {/* <Bars3Icon className="h-6 md:hidden cursor-pointer" /> */}
          <NavBtnDropDown setModal={setModal} router={router} />
          {session ? (
            <>
              <div className="relative navBtn">
                <PaperAirplaneIcon className="navBtn -rotate-45" />
                <div className="absolute -top-1 -right-3 text-sm h-5 w-5 bg-red-500 rounded-full flex items-center justify-center text-white">
                  3
                </div>
              </div>
              <PlusCircleIcon
                onClick={() => setModal(true)}
                className="navBtn"
              />
              <UserGroupIcon className="navBtn" />
              <HeartIcon className="navBtn" />

              <ProfileDropDown signOut={signOut} avatar={session.user.image} />
            </>
          ) : (
            <button className="text-blue-500 font-semibold" onClick={signIn}>
              Sign In
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default Header;
