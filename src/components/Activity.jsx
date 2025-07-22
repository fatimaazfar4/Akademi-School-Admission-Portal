export default function Activity({ Act, i }) {
  console.log(Act.Files.length);

  return (
    <div className="">
      <div className="flex -mt-1 gap-7 items-center">
        <svg
          className=""
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="2"
            y="2"
            width="12"
            height="12"
            rx="6"
            fill="white"
            stroke="#4D44B5"
            strokeWidth="4"
          />
        </svg>

        <p className="text-sm text-[#A098AE]">{Act.Date}</p>
      </div>

      <div className="flex gap-10 ">
        {/* For Line Btw don't touch */}

        {i ? (
          ""
        ) : (
          <div className=" ml-1.5 -mt-1 border-l border-[#A098AE]  "></div>
        )}

        <div className={` ${i ? "ml-10 " : ""}  my-3`}>
          <p className=" text-[#363B64] mb-4 text-[16px] ">
            <span
              className={` font-bold ${
                Act.Person === "[REMINDER]" ? "text-red-500" : "text-[#303972]"
              }   `}
            >
              {Act.Person}
            </span>
            {Act.Event}
            <span style={{ color: Act.Color }} className={` font-bold  `}>
              {Act.For}
            </span>
          </p>

          {Act.Files.length > 0 ? (
            <div className="flex flex-wrap gap-4 m-4">
              {Act.Files.map((Files) => {
                return (
                  <div className="w-[250px] rounded-xl h-[150px] bg-[#C1BBEB] "></div>
                );
              })}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
