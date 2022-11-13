import Link from "next/link";
import React from "react";
import { BiSearch } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Navbar() {
  return (
    <nav className="flex px-60 h-20 border-b-2">
      {[
        ["Home", "/", "home"],
        ["About", "/about", "about"],
        ["Login", "/login", "login"],
      ].map(([title, url, key]) => (
        <Link key={key} href={url}>
          <a className="text-lg h-8 font-semibold ml-6 my-auto hover:border-b-4 border-emerald-900 ">
            {title}
          </a>
        </Link>
      ))}
      <form
        action="/send-data-here"
        method="post"
        className="flex ml-auto relative"
      >
        <input
          type="text"
          placeholder="Search"
          id="first"
          name="first"
          className="border-2 shadow-none outline-none ml-auto border-gray-400 my-auto h-11 p-2 focus:border-green-800"
        />
        <BiSearch className="fill-gray-600 absolute top-7 right-2" size={24} />
      </form>
      <div className="flex ml-8">
        <a className="my-auto ml-4">
          <AiOutlineUser className="fill-gray-600" size={32} />
        </a>
        <a className="my-auto ml-4">
          <AiOutlineShoppingCart className="fill-gray-600" size={32} />
        </a>
      </div>
    </nav>
  );
}
