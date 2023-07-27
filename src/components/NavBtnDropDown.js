import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  HeartIcon,
  HomeIcon,
  PaperAirplaneIcon,
  PlusCircleIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBtnDropDown({ session, setModal, router }) {
  return (
    <Menu as="div" className="relative inline-block text-left md:hidden">
      <div>
        <Menu.Button className="inline-flex w-full justify-center">
          <Bars3Icon className="h-6" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-max origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none py-2 px-5">
          <div className="py-1">
            <Menu.Item>
              <HomeIcon
                onClick={() => router.push("/")}
                className="navDrpDwnBtn"
              />
            </Menu.Item>
            {session && (
              <>
                <Menu.Item className="mt-2">
                  <div className="relative w-max navDrpDwnBtn ">
                    <PaperAirplaneIcon className="navDrpDwnBtn -rotate-45" />
                    <div className="absolute -top-1 -right-3 text-sm h-5 w-5 bg-red-500 rounded-full flex items-center justify-center text-white">
                      3
                    </div>
                  </div>
                </Menu.Item>
                <Menu.Item className="mt-2">
                  <PlusCircleIcon
                    onClick={() => setModal(true)}
                    className="navDrpDwnBtn"
                  />
                </Menu.Item>
                <Menu.Item className="mt-2">
                  <UserGroupIcon className="navDrpDwnBtn" />
                </Menu.Item>
                <Menu.Item className="mt-2">
                  <HeartIcon className="navDrpDwnBtn" />
                </Menu.Item>
              </>
            )}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
