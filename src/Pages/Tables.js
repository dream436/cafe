import React, { useEffect, useState } from "react";
import tableimage from "../Assets/pngegg.png";
import { motion } from "framer-motion";
import label from "../Assets/label.png";
import plusimage from "../Assets/plus.png";

function Tables() {
  const [tables, setTable] = useState([]);

  var dintables = [
    {
      tb_number: 1,
    },
    {
      tb_number: 2,
    },
    {
      tb_number: 3,
    },
    {
      tb_number: 4,
    },
    {
      tb_number: 5,
    },
    {
      tb_number: 6,
    },
    {
      tb_number: 7,
    },
    {
      tb_number: 8,
    },
    {
      tb_number: 9,
    }
  ];

  useEffect(() => {
    setTable(dintables); // eslint-disable-next-line
  }, []);


  return (
    <div>
      <div className="mt-12 mx-14 ">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            delay: 0.2,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="flex"
        >
          <div className="flex flex-wrap pt-12">
            {tables.map((table) => {
              return (
                <>
                  <div className="mx-2">
                    <div className="flex flex-col justify-center items-center w-44 h-56 rounded-md  cursor-pointer">
                      <motion.div
                        whileHover={{ scale: [null, 1, 1.2] }}
                        transition={{ duration: 0.3 }}
                        className="relative"
                      >
                        <img
                          src={tableimage}
                          className="w-32"
                          alt=""
                          srcset=""
                        />
                      </motion.div>
                      <div
                        className="relative font-1"
                        style={{ top: "-170px" }}
                      >
                        <div className="flex items-center justify-center">
                          <div className="relative">
                            <img src={label} className="w-8" alt="" srcset="" />
                          </div>
                          <div className="absolute top-5">
                            <span>{table.tb_number}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}

            <div
              className="bg-white h-44 border-dashed border relative bottom-6 cursor-pointer rounded-lg flex justify-center items-end"
              
            >
              <div className=" w-44 h-full flex flex-col justify-center items-center">
                <div class="cla">
                  <img src={plusimage} alt="" className="w-12" srcset="" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
export default Tables;
