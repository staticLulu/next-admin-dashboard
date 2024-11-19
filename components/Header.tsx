import Link from "next/link";
import Image from "next/image";
import DarkModeSwitcher from "./DarkModeSwitcher";
import DropdownUser from "./DropdownUser";
import SearchForm from "./SearchForm";

interface HeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (isOpen: boolean) => void;
  title: string;
}

// Hamburger Button Component
const HamburgerToggle = ({
  sidebarOpen,
  setSidebarOpen,
}: Pick<HeaderProps, "sidebarOpen" | "setSidebarOpen">) => (
  <button
    aria-controls="sidebar"
    onClick={(e) => {
      e.stopPropagation();
      setSidebarOpen(!sidebarOpen);
    }}
    className="
      z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm 
      dark:border-dark-3 dark:bg-dark-2 lg:hidden
    "
  >
    <span className="relative block h-5.5 w-5.5 cursor-pointer">
      <span className="du-block absolute right-0 h-full w-full">
        {["0", "150", "200"].map((delay, index) => (
          <span
            key={index}
            className={`
              relative 
              left-0 
              top-0 
              my-1 
              block 
              h-0.5 
              w-0 
              rounded-sm 
              bg-dark 
              delay-${delay} 
              duration-200 
              ease-in-out 
              dark:bg-white 
              ${
                !sidebarOpen && "!w-full delay-" + (300 + index * 100)
              }`}
          ></span>
        ))}
      </span>
      <span className="absolute right-0 h-full w-full rotate-45">
        <span
          className={`
            absolute 
            left-2.5 
            top-0 
            block 
            h-full 
            w-0.5 
            rounded-sm 
            bg-dark 
            delay-300 
            duration-200 
            ease-in-out 
            dark:bg-white 
            ${
              !sidebarOpen && "!h-0 !delay-[0]"
            }`}
        ></span>
        <span
          className={`
            absolute 
            left-0 
            top-2.5 
            block 
            h-0.5 
            w-full 
            rounded-sm 
            bg-dark 
            delay-400 
            duration-200 
            ease-in-out 
            dark:bg-white 
            ${
              !sidebarOpen && "!h-0 !delay-200"
            }`}
        ></span>
      </span>
    </span>
  </button>
);

// Logo Component
const Logo = () => (
  <Link className="block flex-shrink-0 lg:hidden" href="/">
    <Image
      width={32}
      height={32}
      src={"/images/logo/logo-icon.svg"}
      alt="Logo"
    />
  </Link>
);

// Main Header Component
const Header = ({ sidebarOpen, setSidebarOpen, title }: HeaderProps) => {
  return (
    <header 
      className="
        sticky 
        top-0 
        z-999 
        flex 
        w-full 
        border-b 
        border-stroke 
        bg-white
        dark:bg-slate-800 
      "
    >
      <div 
        className="
          flex 
          flex-grow 
          items-center 
          justify-between 
          px-4 
          py-5 
          shadow-2 
          md:px-5 
          2xl:px-10
        "
      >
        {/* Left Section */}
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          <HamburgerToggle
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
          <Logo />
        </div>

        {/* Center Section */}
        <h1 className="font-semibold text-slate-700 dark:text-slate-50 text-3xl hidden xl:block">
          {title}
        </h1>

        {/* Right Section */}
        <div
          className="
            flex 
            items-center 
            justify-normal 
            gap-2 
            2xsm:gap-4 
            lg:w-full 
            lg:justify-between 
            xl:w-auto 
            xl:justify-normal
          "
        >
          <ul className="flex items-center gap-2 2xsm:gap-4">
            <SearchForm />
            <DarkModeSwitcher />
          </ul>
          <DropdownUser />
        </div>
      </div>
    </header>
  );
};

export default Header;
