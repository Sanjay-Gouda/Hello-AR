import React from "react";
import icon from "../../../assets/dashboard.png";

import { IoMdLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="h-screen w-full justify-between flex flex-col gap-4 border-r-2 cursor-pointer"
        style={{ padding: "2rem 0" }}
      >
        <div>
          <h1 className="text-primary font-bold text-[36px]">Logo</h1>

          <div
            className="w-full flex p-3 relative"
            style={{ backgroundColor: "#E6F7FF" }}
          >
            <div className="flex gap-2">
              <div className="w-[24px] h-[24px]">
                <img src={icon} className="h-full w-full object-contain" />
              </div>
              <p className="text-[14px] text-secondry">Songs</p>
            </div>
            <div
              className=" w-1 h-full absolute top-0 right-0"
              style={{ backgroundColor: "#1890FF" }}
            ></div>
          </div>
        </div>
        <div
          className="flex justify-start items-start gap-2 p-4"
          onClick={() => navigate("/")}
        >
          <IoMdLogOut size="25" />
          <p>Logout</p>
        </div>
      </div>
    </>
  );
};
