import React, { useState } from "react";
import { motion } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";
import { MdSpaceDashboard, MdEmail } from "react-icons/md";
import { GiKnifeFork } from "react-icons/gi";
import { FaHamburger } from "react-icons/fa";
import { TbHistory } from "react-icons/tb";
import { IoMdNotifications } from "react-icons/io";
import { HiOutlineLogout } from "react-icons/hi";
import { AiFillSetting } from "react-icons/ai";

function Sidebar2({ children }) {
  const [isClose, SetIsClose] = useState(true);
  const routes = [
    {
      path: "/",
      name: "Dashborad",
      icone: <MdSpaceDashboard />,
    },
    {
      path: "/table",
      name: "Table",
      icone: <GiKnifeFork />,
    },
    {
      path: "/order_history",
      name: "History",
      icone: <TbHistory />,
    },
    {
      path: "/email",
      name: "Email",
      icone: <MdEmail />,
    },
    {
      path: "/notifiction",
      name: "Notification",
      icone: <IoMdNotifications />,
    },
    {
      path: "/setting",
      name: "Setting",
      icone: <AiFillSetting />,
    },
    {
      path : "/signout",
      name: "Signout",
      icone: <HiOutlineLogout />,
    },
  ];

  console.log(routes)

  

  let { pathname } = useLocation();
  return (
    <div className="main-conatiner">
      {pathname === "/login" ? (
        " "
      ) : (
        <motion.div
          animate={isClose ? { width: "200px" } : { width: "40px" }}
          className="sidebar overflow-hidden"
        >
          <div className="text-white">
            <div className="flex flex-col justify-between h-screen py-12 navlink">
              <div
                className="flex items-center cursor-pointer"
                onClick={() => {
                  SetIsClose(!isClose);
                }}
              >
                <div className="px-2 text-xl">
                  <FaHamburger />
                </div>
                <div className=" px-2">
                  <h1 className="font-1 " style={{fontSize : "18px"}}>Caffe_Master</h1>
                </div>
              </div>
              {routes.map((route) => {
                return (
                  <NavLink
                    to={route.path}
                    key={route.key}
                    className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? `${isClose? "expend bg-slate-50" : "active bg-slate-50"} ` : ""  }
                  >
                    <div className="flex items-center py-2 ">
                      {" "}
                      <div className="icon px-2 text-xl">{route.icone}</div>
                      <div className="name px-2 text-lg">{route.name}</div>
                    </div>
                  </NavLink>
                );
              })}
            </div>
          </div>
        </motion.div>
      )}
      <main className={"main_content bg-slate-50"}>{children}</main>
    </div>
  );
}

export default Sidebar2;
