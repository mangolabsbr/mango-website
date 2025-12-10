import Link from "next/link";
import { Shape1 } from "../shapes";
import SideNav from "../side-nav";
import Image from "next/image";

const Header = () => {
  return (
    <header className="py-4">
      <div className="flex justify-between relative page-layout">
        <Link
          className="font-medium font-serif text-3xl text-orange-900 hover:underline flex"
          href="/"
        >
          <Image
            src="/logo-transparent.png"
            alt="Mango Labs"
            width={60}
            height={60}
            className="-mt-4"
          />
          Mango Labs
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-6 items-center">
            <li>
              <Link
                className="hover:underline text-lg font-medium font-serif text-orange-900 bg-orange-50"
                href="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <Shape1 className="absolute top-[-78px] left-[-49px] text-[#fde7ac] -z-10 h-auto w-[350px]" />
      </div>
      <SideNav className="md:hidden absolute top-4 right-6" />
    </header>
  );
};

export default Header;
