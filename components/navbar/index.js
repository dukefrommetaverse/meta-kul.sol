import { Disclosure, Menu, Transition } from "@headlessui/react";
import { SearchIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import navStyles from "./Navbar.module.css";
import homeStyles from "../../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

const navigation = [
  { name: "Explore", href: "/explore", margin: "px-4" },
  { name: "Sell", href: "/sell", margin: "px-4" },
  { name: "Profile", href: "/profile", margin: "px-4" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Disclosure as="nav" className={`bg-white ${navStyles.nav}`}>
      {({ open }) => (
        <>
          <div className=" ">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <Link href="/">
                    <a>
                      <Image
                        className={`hidden lg:block h-8 w-auto ${navStyles.nav___logo}`}
                        src="/images/logo.svg"
                        alt="Workflow"
                        height="100%"
                        width="100%"
                      />
                    </a>
                  </Link>
                </div>
              </div>
              <div
                className={`mt-1 relative rounded-md shadow-sm ${navStyles.searchbox}`}
              >
                <label htmlFor="search">
                  <SearchIcon className={`${navStyles.searchIcon} w-3 h-3`} />
                  <input
                    type="text"
                    name="search"
                    id="search"
                    className={`shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight ${navStyles.input}`}
                    placeholder="Search item here"
                  />
                </label>
              </div>
              <div></div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto  sm:pr-0 ">
                {/* Links for large devices */}
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={`${navStyles.links} ${item.margin}`}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                    <div>
                      <a
                        href="/create"
                        className={`${navStyles.createbtn} py-2 px-7 rounded-lg text-white`}
                      >
                        Create
                      </a>
                      <a
                        href="/connect"
                        className={`${navStyles.connectbtn} py-2 px-6 rounded-lg ml-5`}
                      >
                        Connect
                      </a>
                    </div>
                  </div>
                </div>

                {/* Profile dropdown */}
                <Menu as="div" className={`ml-3 relative  ${navStyles.menu}`}>
                  <Link href="/">
                    <a>
                      <Image
                        className="visible md:hidden h-8 w-auto"
                        src="/images/logo.svg"
                        alt="Workflow"
                        layout="fill"
                      />
                    </a>
                  </Link>
                </Menu>
              </div>
            </div>
          </div>

          {/* inside the menu for small devices */}

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <div className={`mt-1 relative rounded-md shadow-sm `}>
                <label htmlFor="search">
                  <SearchIcon className={`${navStyles.searchIcon} w-3 h-3`} />
                  <input
                    type="text"
                    name="search"
                    id="search"
                    className={`shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight ${navStyles.input}`}
                    placeholder="Search item here"
                  />
                </label>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
