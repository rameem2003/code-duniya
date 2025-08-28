"use client";
import React, { useEffect, useState } from "react";
import Container from "../layout/Container";
// react icons
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaTasks, FaUser } from "react-icons/fa";
import { TbLogout2, TbUsersGroup } from "react-icons/tb";
import { CiMenuFries } from "react-icons/ci";
import {
  MdLaptopMac,
  MdOutlineArrowRightAlt,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { BsBuildings, BsCalendar2Date } from "react-icons/bs";
import { AiOutlineFire } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import useAuth from "@/hooks/useAuth";
import { Button } from "../ui/button";

const Navber = () => {
  const { getUser, user, logout } = useAuth();
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);
  const [isProductHover, setIsProductHover] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [isMegaMenuCollapse, setIsMegaMenuCollapse] = useState(false);
  const [megaMenuSubItemsOpen, setMegaMenuSubItemsOpen] = useState("");

  useEffect(() => {
    getUser();
  }, [user]);
  return (
    <nav className=" bg-cd-primary p-4 fixed top-0 left-0 w-full z-[10000000000]">
      <Container>
        <div className="flex items-center justify-between w-full z-[100000] relative ">
          {/* logo */}
          <Link href={"/"} className="flex items-center gap-[10px]">
            <img src="/logo.png" alt="logo" />
          </Link>

          {/* nav links */}
          <ul className="items-center gap-[20px] text-[1rem] text-[#424242] md:flex hidden">
            <li className=" font-cd-bangla text-lg md:text-xl 2xl:text-[24px] font-semibold text-white">
              <Link href="/">হোম</Link>
            </li>
            <li className=" font-cd-bangla text-lg md:text-xl 2xl:text-[24px] font-semibold text-white">
              <Link href="/about">আমাদের সম্পর্কে</Link>
            </li>
            {/* product megamenu */}
            <li
              className=" font-cd-bangla text-lg md:text-xl 2xl:text-[24px] font-semibold text-white"
              onMouseEnter={() => setIsProductHover(true)}
              onMouseLeave={() => setIsProductHover(false)}
            >
              <Link href="/our-courses">কোর্সসমুহ</Link>
              {/* mega menu */}
              <div
                className={`hidden ${
                  isProductHover
                    ? "translate-y-0 opacity-100 z-30"
                    : "translate-y-[20px] opacity-0 z-[-1]"
                } bg-white rounded-md w-full absolute top-[40px] dark:bg-slate-800 left-0 p-[30px] transition-all duration-300 boxShadow flex flex-wrap gap-[30px]`}
              >
                <div className="grid grid-cols-2 gap-[30px]">
                  <div className="flex flex-col gap-[20px]">
                    <h3 className="text-[1.2rem] dark:text-[#abc2d3] text-gray-500 font-[500]">
                      More Products
                    </h3>

                    <div className="flex float-start gap-[10px] group">
                      <img
                        src="https://i.ibb.co/LQBDJGD/icon-logo-container.png"
                        alt="image"
                        className="w-[30px] h-[30px]"
                      />

                      <div>
                        <h1 className="text-[1rem] dark:text-[#abc2d3] text-gray-600 font-[500]">
                          Demo App
                        </h1>
                        <p className="text-[0.9rem] dark:text-slate-400 text-gray-400 font-[300]">
                          Lorem ipsum dolor sit amet, consect adipiscing elit
                        </p>

                        <button className="text-[#FF5E5E] mt-2 flex items-center gap-[4px] text-[0.9rem]">
                          Call to action
                          <MdOutlineArrowRightAlt className="text-[1.4rem] group-hover:ml-[5px] transition-all duration-300" />
                        </button>
                      </div>
                    </div>
                    <div className="flex float-start gap-[10px] group">
                      <img
                        src="https://i.ibb.co/Y8cRWRj/icon-logo-container-1.png"
                        alt="image"
                        className="w-[30px] h-[30px]"
                      />

                      <div>
                        <h1 className="text-[1rem] dark:text-[#abc2d3] text-gray-600 font-[500]">
                          CRM
                        </h1>
                        <p className="text-[0.9rem] dark:text-slate-400 text-gray-400 font-[300]">
                          Lorem ipsum dolor sit amet, consect adipiscing elit
                        </p>

                        <button className="text-[#FE9239] mt-2 flex items-center gap-[4px] text-[0.9rem]">
                          Call to action
                          <MdOutlineArrowRightAlt className="text-[1.4rem] group-hover:ml-[5px] transition-all duration-300" />
                        </button>
                      </div>
                    </div>
                    <div className="flex float-start gap-[10px] group">
                      <img
                        src="https://i.ibb.co/6bGWgp6/icon-logo-container-2.png"
                        alt="image"
                        className="w-[30px] h-[30px]"
                      />

                      <div>
                        <h1 className="text-[1rem] text-gray-600 font-[500] dark:text-[#abc2d3]">
                          CMS
                        </h1>
                        <p className="text-[0.9rem] dark:text-slate-400 text-gray-400 font-[300]">
                          Lorem ipsum dolor sit amet, consect adipiscing elit
                        </p>

                        <button className="text-[#8B5CF6] mt-2 flex items-center gap-[4px] text-[0.9rem]">
                          Call to action
                          <MdOutlineArrowRightAlt className="text-[1.4rem] group-hover:ml-[5px] transition-all duration-300" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[20px]">
                    <h3 className="text-[1.2rem] dark:text-[#abc2d3] text-gray-500 font-[500]">
                      Ecosystem
                    </h3>

                    <div className="flex float-start gap-[10px]">
                      <BsBuildings className="text-[1.4rem] dark:text-[#abc2d3] text-gray-600" />

                      <div>
                        <h1 className="text-[1rem] dark:text-[#abc2d3] text-gray-600 font-[500]">
                          Directory
                        </h1>
                        <p className="text-[0.9rem] dark:text-slate-400 text-gray-400 font-[300]">
                          Lorem ipsum dolor sit amet, consect adipiscing elit
                        </p>
                      </div>
                    </div>
                    <div className="flex float-start gap-[10px]">
                      <BsCalendar2Date className="text-[1.4rem] dark:text-[#abc2d3] text-gray-600" />

                      <div>
                        <h1 className="text-[1rem] dark:text-[#abc2d3] text-gray-600 font-[500] ">
                          Bookings
                        </h1>
                        <p className="text-[0.9rem] dark:text-slate-400 text-gray-400 font-[300]">
                          Lorem ipsum dolor sit amet, consect adipiscing elit
                        </p>
                      </div>
                    </div>
                    <div className="flex float-start gap-[10px]">
                      <TbUsersGroup className="text-[1.4rem] dark:text-[#abc2d3] text-gray-600" />

                      <div>
                        <h1 className="text-[1rem] dark:text-[#abc2d3] text-gray-600 font-[500]">
                          User feedback
                        </h1>
                        <p className="text-[0.9rem] dark:text-slate-400 text-gray-400 font-[300]">
                          Lorem ipsum dolor sit amet, consect adipiscing elit
                        </p>
                      </div>
                    </div>
                    <div className="flex float-start gap-[10px]">
                      <FaTasks className="text-[1.4rem] dark:text-[#abc2d3] text-gray-600" />

                      <div>
                        <h1 className="text-[1rem] dark:text-[#abc2d3] text-gray-600 font-[500]">
                          Task Manager
                        </h1>
                        <p className="text-[0.9rem] dark:text-slate-400 text-gray-400 font-[300]">
                          Lorem ipsum dolor sit amet, consect adipiscing elit
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-[20px] dark:bg-slate-900 bg-gray-50 rounded-md p-[20px] w-full">
                  <div className="flex float-start gap-[10px] group">
                    <img
                      src="https://i.ibb.co/VTqw5rY/img-container.png"
                      alt="image"
                      className="w-[100px]"
                    />

                    <div>
                      <div className="mb-2 flex items-center gap-[5px]">
                        <h1 className="text-[1rem] dark:text-[#abc2d3] text-gray-600 font-[500]">
                          Check the new app
                        </h1>
                        <p className="py-[3px] px-[8px] text-[0.6rem] text-gray-500 border dark:border-slate-700 dark:text-[#abc2d3] border-gray-300 rounded-full text-center">
                          Featured
                        </p>
                      </div>
                      <p className="text-[0.9rem] dark:text-slate-400 text-gray-400 font-[300]">
                        Lorem ipsum dolor sit amet, consect adipiscing elit
                      </p>

                      <button className="text-[#FF5E5E] mt-2 flex items-center gap-[4px] text-[0.9rem]">
                        Call to action
                        <MdOutlineArrowRightAlt className="text-[1.4rem] group-hover:ml-[5px] transition-all duration-300" />
                      </button>
                    </div>
                  </div>
                  <div className="flex float-start gap-[10px] group">
                    <img
                      src="https://i.ibb.co/V2b5xnK/img-container-1.png"
                      alt="image"
                      className="w-[100px]"
                    />

                    <div>
                      <h1 className="text-[1rem] dark:text-[#abc2d3] text-gray-600 font-[500]">
                        Check our newsletter
                      </h1>
                      <p className="text-[0.9rem] dark:text-slate-400 text-gray-400 font-[300]">
                        Lorem ipsum dolor sit amet, consect adipiscing elit
                      </p>

                      <button className="text-[#FF5E5E] mt-2 flex items-center gap-[4px] text-[0.9rem]">
                        Call to action
                        <MdOutlineArrowRightAlt className="text-[1.4rem] group-hover:ml-[5px] transition-all duration-300" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className=" font-cd-bangla text-lg md:text-xl 2xl:text-[24px] font-semibold text-white">
              <Link href="/success-story">সফলতার গল্প</Link>
            </li>
            <li className=" font-cd-bangla text-lg md:text-xl 2xl:text-[24px] font-semibold text-white">
              <Link href="/contact">যোগাযোগ</Link>
            </li>
          </ul>

          {/* user account */}

          <div className="flex items-center gap-[15px]">
            {user ? (
              <div
                className="flex items-center gap-[10px] cursor-pointer relative"
                onClick={() => setAccountMenuOpen(!accountMenuOpen)}
              >
                <div className="relative">
                  <img
                    src={user.avatar}
                    alt="avatar"
                    className="w-[35px] h-[35px] rounded-full object-cover"
                  />
                  <div className="w-[10px] h-[10px] rounded-full bg-green-500 absolute bottom-[0px] right-0 border-2 border-white"></div>
                </div>

                <div
                  className={`${
                    accountMenuOpen
                      ? "translate-y-0 opacity-100 z-[1]"
                      : "translate-y-[10px] opacity-0 z-[-1]"
                  } bg-white w-max rounded-md absolute dark:bg-slate-800 top-[45px] right-0 p-[10px] flex flex-col transition-all duration-300 gap-[5px]`}
                >
                  <p className="flex items-center gap-[5px] rounded-md p-[8px] pr-[45px] py-[3px] text-[1rem] dark:text-[#abc2d3] dark:hover:bg-slate-900/50 text-gray-600 hover:bg-gray-50">
                    <FiUser />
                    {user.name}
                  </p>
                  <p className="flex items-center gap-[5px] rounded-md p-[8px] pr-[45px] py-[3px] text-[1rem] dark:text-[#abc2d3] dark:hover:bg-slate-900/50 text-gray-600 hover:bg-gray-50">
                    <IoSettingsOutline />
                    Settings
                  </p>
                  <p className="flex items-center gap-[5px] rounded-md p-[8px] pr-[45px] py-[3px] text-[1rem] dark:text-[#abc2d3] dark:hover:bg-slate-900/50 text-gray-600 hover:bg-gray-50">
                    <FiUser />
                    View Profile
                  </p>

                  <div className="mt-3 border-t dark:border-slate-700 border-gray-200 pt-[5px]">
                    <Button
                      onClick={() => logout()}
                      variant="secondary"
                      className="flex w-full cursor-pointer items-center gap-[5px] rounded-md p-[8px] pr-[45px] py-[3px] text-[1rem] dark:text-red-500 dark:hover:bg-red-500/20 text-red-500 hover:bg-red-50"
                    >
                      <TbLogout2 />
                      Logout
                    </Button>
                  </div>
                </div>

                <IoIosArrowUp
                  className={`${
                    accountMenuOpen ? "rotate-0" : "rotate-[180deg]"
                  } transition-all duration-300 text-white sm:block hidden`}
                />
              </div>
            ) : (
              <Link href="/login">
                <FaUser className="text-[1.8rem] text-white cursor-pointer" />
              </Link>
            )}

            <CiMenuFries
              onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
              className="text-[1.8rem] text-white cursor-pointer md:hidden flex"
            />
          </div>

          {/* mobile sidebar */}
          <aside
            className={` ${
              mobileSidebarOpen ? " right-0 " : "right-[-150%] "
            } md:hidden bg-slate-600 p-4 text-center absolute  top-[65px]  sm:w-[300px] w-full rounded-md  transition-all duration-300 z-[100]`}
          >
            <ul className="items-start gap-[20px] text-[1rem] text-gray-600 flex flex-col">
              <li
                onClick={() => setIsMegaMenuCollapse(!isMegaMenuCollapse)}
                className=" font-cd-bangla text-[24px] font-semibold text-white"
              >
                কোর্স সমুহ
                <IoIosArrowDown
                  className={`${
                    isMegaMenuCollapse ? "rotate-0" : "rotate-[180deg]"
                  } text-gray-600 group-hover:text-[#3B9DF8] dark:text-[#abc2d3] transition-all duration-300`}
                />
              </li>

              {/* product mega menu */}
              <div
                onClick={() => setMegaMenuSubItemsOpen("more_product")}
                className={`${
                  isMegaMenuCollapse ? "hidden" : "block"
                } group font-[500] ml-6`}
              >
                <h4 className=" font-cd-bangla text-base font-semibold text-white">
                  More Products
                </h4>

                <ul
                  className={`${
                    megaMenuSubItemsOpen === "more_product" ? "flex" : "hidden"
                  } pl-6 mt-3 font-[400] items-start flex-col gap-[10px] text-gray-600`}
                >
                  <li className=" font-cd-bangla text-sm font-semibold text-white">
                    Demo App
                  </li>
                  <li className=" font-cd-bangla text-sm font-semibold text-white">
                    CRM
                  </li>
                  <li className=" font-cd-bangla text-sm font-semibold text-white">
                    CMS
                  </li>
                </ul>
              </div>

              <li className=" font-cd-bangla text-[24px] font-semibold text-white">
                যোগাযোগ
              </li>
              <li className=" font-cd-bangla text-[24px] font-semibold text-white">
                ক্যারিয়ার গাইডলাইন
              </li>
            </ul>
          </aside>
        </div>
      </Container>
    </nav>
  );
};

export default Navber;
