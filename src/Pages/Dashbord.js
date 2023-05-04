import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../Context/AuthContext";
import jwt_decode from "jwt-decode";
import DashboadComponent from "../Componets/DashboadComponent";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../Assets/logo.png";

function Dashbord() {
  const { user, setUser } = useContext(AuthContext);
  const token = localStorage.getItem("token");
  const detail = jwt_decode(token);
  const navigate = useNavigate();

  const userdetail = () => {
    setUser(detail);
  };

  useEffect(() => {
    userdetail();
    console.log(user);
  }, [token]);

  const signout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const [menu, setMenu] = useState(false);
  console.log(menu);
  return (
    <div>
      <div className="">
        <div>
          <div className="flex justify-between mx-4 my-3 items-center">
            <div className="flex items-center">
              <img src={logo} className="w-20" alt="" srcset="" />
              <div>
                <h1 className="font-1">Caffe Master</h1>
              </div>
            </div>
            <div className="flex items-center">
              <div className="me-8">
                <h2 className="text-xl">{user.name}</h2>
              </div>
              <div className="relative">
                <img
                  src={user.picture}
                  alt=""
                  srcset=""
                  className="rounded-full w-12 cursor-pointer"
                  onClick={() => {
                    setMenu(!menu);
                  }}
                />
              </div>
              <div
                className={
                  !menu
                    ? "hidden"
                    : "absolute bg-black  right-2 top-20 rounded-lg  text-white py-3 mt-1"
                }
              >
                <ul>
                  <li className="py-3 px-12 hover:bg-purple-950 cursor-pointer">Home</li>
                  <li className="py-3 px-12 hover:bg-purple-950 cursor-pointer">Profile</li>
                  <li className="py-3 px-12 hover:bg-purple-950 cursor-pointer">Setting</li>
                  <li
                    className="py-3 px-12 hover:bg-purple-950 cursor-pointer"
                    onClick={signout}
                  >
                    Signout
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 10,
                stiffness: 90,
                restDelta: 0.001,
              },
            }}
          >
            <DashboadComponent />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Dashbord;
