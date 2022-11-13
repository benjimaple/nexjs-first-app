import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { BsStar } from "react-icons/bs";

export default function Home() {
  const expansionRef = React.createRef<HTMLDivElement>();

  const [dropdownState, setDropdownState] = useState(false);
  const [dropdownDisplay, setDropdownDisplay] = useState("Select Option");

  const [expanded, toggleExpansion] = useState(false);

  function toggleDropdown(): void {
    setDropdownState((state) => !state);
  }

  function selectOption(value: number): void {
    setDropdownDisplay("selected option");
    toggleDropdown();
  }

  function expand(): void {
    console.log(expansionRef);
    if (expansionRef.current.style.maxHeight) {
      expansionRef.current.style.maxHeight = null;
    } else {
      // toggleExpansion((state) => !state);
      expansionRef.current.style.maxHeight =
        expansionRef.current.scrollHeight.toString() + "px";
    }
  }

  return (
    <div className="px-60 mt-8">
      <span className="font-bold text-3xl">All Categories</span>
      <ul className="flex mt-5">
        <li className="flex flex-1 justify-center h-10 mx-auto border-b-2 border-emerald-800">
          <a className="font-bold text-xl h-6 ">Men</a>
        </li>
        <li className="flex flex-1 justify-center h-10 text-gray-400 mx-auto border-b border-gray-200">
          <a className="font-bold text-xl ">Women</a>
        </li>
        <li className="flex flex-1 justify-center h-10 text-gray-400 mx-auto border-b border-gray-200">
          <a className="font-bold text-xl ">Kids</a>
        </li>
      </ul>
      <div className="flex justify-between w-full my-8">
        <div>
          <p className="font-semibold mb-2">Results</p>
          <p>100 Items</p>
        </div>
        <div>
          <p className="font-semibold mb-2">SORT BY</p>
          <div>
            <div
              onClick={toggleDropdown}
              className="flex justify-between border border-gray-300 p-2 min-w-40 cursor-pointer"
            >
              <span className="my-auto">{dropdownDisplay}</span>
              <div className="my-auto">
                <BsChevronDown />
              </div>
            </div>
            <div
              className={`flex flex-col border border-gray-400 border-t-0 ${
                dropdownState ? "flex" : "hidden"
              }`}
            >
              <button
                onClick={() => selectOption(1)}
                className="text-left p-2 hover:bg-gray-100 hover:text-emerald-700"
              >
                Option 1
              </button>
              <button
                onClick={() => selectOption(1)}
                className="text-left p-2 hover:bg-gray-100 hover:text-emerald-700"
              >
                Option 2
              </button>
              <button
                onClick={() => selectOption(1)}
                className="text-left p-2 hover:bg-gray-100 hover:text-emerald-700"
              >
                Option 3
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* main content */}
      <div className="flex flex-row">
        <div className="pr-5">
          <div className="text-2xl font-semibold mb-6">WOMEN</div>
          <div className="w-80 ">
            {/* side accordion */}
            <div
              onClick={() => expand()}
              className="flex justify-between items-center cursor-pointer"
            >
              <button className="text-lg">OUTWEAR</button>
              <BsChevronDown />
            </div>
            <div
              className="overflow-hidden max-h-0 transition-all duration-150 ease-in-out"
              ref={expansionRef}
            >
              <ul className="pl-4 pt-2 pb-2">
                <li>
                  <a className="py-1">ffe</a>
                </li>
                <li className="py-1">test</li>
                <li className="py-1">test</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-1">
          <div className="flex flex-row">
            <div className="flex w-3/12 mr-4 flex-col">
              <img src="/tshirt.jpg" className="h-80" />
              <div>
                <div className="font-semibold mt-8">This is the item name</div>
                <div className="font-semibold my-4">100.00$</div>
                <div className="flex">
                  <BsStar className="mr-1" />
                  <BsStar className="mr-1" />
                  <BsStar className="mr-1" />
                  <BsStar />
                </div>
              </div>
            </div>

            <div className="flex w-3/12 mr-4 flex-col">
              <img src="/tshirt.jpg" className="h-80" />
              <div>
                <div className="font-semibold mt-8">This is the item name</div>
                <div className="font-semibold my-4">100.00$</div>
                <div className="flex">
                  <BsStar className="mr-1" />
                  <BsStar className="mr-1" />
                  <BsStar className="mr-1" />
                  <BsStar />
                </div>
              </div>
            </div>
            <div className="flex w-3/12 mr-4 flex-col">
              <img src="/tshirt.jpg" className="h-80" />
              <div>
                <div className="font-semibold mt-8">This is the item name</div>
                <div className="font-semibold my-4">100.00$</div>
                <div className="flex">
                  <BsStar className="mr-1" />
                  <BsStar className="mr-1" />
                  <BsStar className="mr-1" />
                  <BsStar />
                </div>
              </div>
            </div>
            <div className="flex w-3/12 mr-4 flex-col">
              <img src="/tshirt.jpg" className="h-80" />
              <div>
                <div className="font-semibold mt-8">This is the item name</div>
                <div className="font-semibold my-4">100.00$</div>
                <div className="flex">
                  <BsStar className="mr-1" />
                  <BsStar className="mr-1" />
                  <BsStar className="mr-1" />
                  <BsStar />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
