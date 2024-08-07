// 共通のレイアウトを実装///////////////////////////////////
import { useState } from "react";
import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* Header */}
      <div className="bg-[url('/images/bg/bg.jpeg')] text-white">
        <header className="p-5 text-black">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="white">
              <h1 className=" text-6xl font-bold font-style: italic hover:underline underline-offset-8 decoration-yellow-500 ">Tetsuya Yamada</h1>
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="hover:underline underline-offset-8 decoration-yellow-500  white text-3xl font-bold ">
                Top
              </Link>
              <Link href="/profile" className="hover:underline underline-offset-8 decoration-yellow-500  white text-3xl font-bold ">
                Profile
              </Link>
              <Link href="/blog" className="hover:underline underline-offset-8 decoration-yellow-500  white text-3xl font-bold ">
                Blog
              </Link>
              <Link href="/contact" className="hover:underline underline-offset-8 decoration-yellow-500  white text-3xl font-bold ">
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
                  className="block px-4 py-2 hover:bg-gray-800 white"
                >
                  Top
                </Link>
                <Link
                  href="/profile"
                  className="block px-4 py-2 hover:bg-gray-800 white"
                >
                  Profile
                </Link>
                <Link
                  href="/blog"
                  className="block px-4 py-2 hover:bg-gray-800 white"
                >
                  Blog
                </Link>
                <Link
                  href="/contact"
                  className="block px-4 py-2 hover:bg-gray-800 white"
                >
                  Contact
                </Link>
              </div>
            )}
          </div>
        </header>
        {children}
        {/* Footer */}
        <footer className=" px-36 py-6 bg-violet-900 text-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="space-y-2">
                <h3 className="text-xl underline decoration-yellow-500">Menu</h3>
                <li>
                  <Link href="/" className="inline hover:text-violet-300">
                    Top
                  </Link>
                </li>
                <li>
                  <Link href="/profile" className="inline hover:text-violet-300">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="inline hover:text-violet-300">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="inline hover:text-violet-300">
                    Contact
                  </Link>
                </li>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl underline decoration-yellow-500">Follow Me!!</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/hamiltonsrbbengals?igsh=MTI5ZXJiZXZtOXM1ZA=="
                    className="hover:text-violet-900"
                  >
                    <Image
                      src="/images/icon/instagram.png"
                      alt="Instagram Logo"
                      width={30}
                      height={30}
                    />
                  </a>
                  <a href="https://twitter.com" className="hover:text-violet-300">
                    <Image
                      src="/images/icon/x.png"
                      alt="Twitter Logo"
                      width={30}
                      height={30}
                    />
                  </a>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl underline decoration-yellow-500">Contact Info</h3>
                <p>Email: contact@example.com</p>
                <p>Phone: (123) 456-7890</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
