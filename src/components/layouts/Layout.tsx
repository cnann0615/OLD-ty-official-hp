// 共通のレイアウトを実装///////////////////////////////////
import { useState } from "react";
import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* Header */}
      <div className="bg-stone-900 text-white">
        <header className="p-5 bg-stone-800">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold text-red-500">Athlete Name</h1>
            <div className="hidden md:flex space-x-4">
              <Link href="/" className="hover:underline text-red-500">
                Top
              </Link>
              <Link href="/profile" className="hover:underline text-red-500">
                Profile
              </Link>
              <Link href="/blog" className="hover:underline text-red-500">
                Blog
              </Link>
              <Link href="/contact" className="hover:underline text-red-500">
                Contact
              </Link>
            </div>
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              <Image src="/menu-icon.svg" alt="Menu" width={30} height={30} />
            </button>
            {isOpen && (
              <div className="absolute top-16 right-5 bg-gray-900 rounded shadow-lg py-2 w-40">
                <Link
                  href="/"
                  className="block px-4 py-2 hover:bg-gray-800 text-red-500"
                >
                  Top
                </Link>
                <Link
                  href="/profile"
                  className="block px-4 py-2 hover:bg-gray-800 text-red-500"
                >
                  Profile
                </Link>
                <Link
                  href="/blog"
                  className="block px-4 py-2 hover:bg-gray-800 text-red-500"
                >
                  Blog
                </Link>
                <Link
                  href="/contact"
                  className="block px-4 py-2 hover:bg-gray-800 text-red-500"
                >
                  Contact
                </Link>
              </div>
            )}
          </div>
        </header>
        {children}
        {/* Footer */}
        <footer className="p-5 bg-stone-800">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-2">
                <Link href="/" className="block hover:underline text-red-500">
                  Top
                </Link>
                <Link
                  href="/profile"
                  className="block hover:underline text-red-500"
                >
                  Profile
                </Link>
                <Link
                  href="/blog"
                  className="block hover:underline text-red-500"
                >
                  Blog
                </Link>
                <Link
                  href="/contact"
                  className="block hover:underline text-red-500"
                >
                  Contact
                </Link>
              </div>
              <div className="space-y-2">
                <a
                  href="https://instagram.com"
                  className="block hover:underline text-red-500"
                >
                  Instagram
                </a>
                <a
                  href="https://twitter.com"
                  className="block hover:underline text-red-500"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Layout;
