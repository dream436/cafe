import React, { useEffect, useState } from "react";
import tableimage from "../Assets/dinetable.png";
import { motion } from "framer-motion";

function Tables() {
  const [tables, setTable] = useState([]);

  const dintables = [
    {
      tb_number: 1,
      
    },
    {
      tb_number: 2,
    },
  ];

  useEffect(() => {
    setTable(dintables);
  }, []);

  console.log(tables);

  return (
    <div>
      <div className="mt-12 mx-14">
        <motion.div animate={{ x: [1000, 80, 0] }} className="flex">
          <div className="flex">
            {tables.map((table) => {
              return (
                <>
                  <div className="mx-3">
                    <motion.div
                      whileHover={{ scale: [null, 1, 1.1] }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col justify-center items-center w-52 h-40 rounded-md bg-slate-50 cursor-pointer"
                    >
                      <div>
                        <span>T{table.tb_number}</span>
                      </div>
                      <div>
                        <img
                          src={tableimage}
                          className="w-28"
                          alt=""
                          srcset=""
                        />
                      </div>
                    </motion.div>
                  </div>
                </>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Tables;
