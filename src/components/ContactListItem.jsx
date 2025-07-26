import React from "react";

export default function ContactListItem({ Color, Title, Chat, Recent, Date }) {
  return (
    <div className="flex justify-between w-full h-[80px] border-b-2 my-7  border-[#C1BBEB]">
      <div className="flex items-center  gap-x-4  " >
        <div
          className=" w-[55px] h-[55px] rounded-full   "
          style={{ backgroundColor: Color }}
        ></div>

        <div className=" font-bold text-[#303972]  ">
          <h1>{Title}</h1>

          <p className="text-[#A098AE] text-sm  font-light">{Chat}</p>
        </div>
      </div>

      <div className="  flex flex-col items-end gap-2  ">
        <p className="text-[#A098AE]">{Date}</p>

        {
          Recent > 0 ? <div className="rounded-full w-[25px] h-[25px] bg-[#FB7D5B] text-white flex items-center justify-center ">
          <p>{Recent}</p>
        </div> : null 
        }
        
      </div>
    </div>
  );
}
