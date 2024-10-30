import React from "react";

export default function Footer({ withdrawAmount, depositAmount }) {
  console.log(withdrawAmount, depositAmount);
  return (
    <div className="flex justify-between items-center mt-12 text-gray-700 ">
      <div className="flex gap-5">
        <div>
          <span className="text-[12px] mr-1">IN</span>{" "}
          <span className="text-[22px] text-[#66c873]">
            {depositAmount.toLocaleString()}
          </span>
        </div>
        <div>
          <span className="text-[12px] mr-1">OUT</span>{" "}
          <span className="text-[22px] text-[#f5465d]">
            {withdrawAmount.toLocaleString()}
          </span>
        </div>
      </div>

      <div className="text-gray-500 text-sm">
        You will be logged out in <span className="font-semibold">04:15</span>
      </div>
    </div>
  );
}
