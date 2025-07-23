import React from "react";

import ContactListItem from "./ContactListItem";

export default function ContactPageContainer() {
  const ChatData = [
    {
      name: "Groups",
      list: [
        {
          Color: "#4D44B5",

          ChatName: "Class History VII-A",
          RecentMessage: "Lorem ipsum dolor sit amet...",
          Date: "12:45 PM",
          unRead: 2,
        },

        {
          Color: "#FB7D5B",

          ChatName: "Class VII-A",
          RecentMessage: "Lorem ipsum dolor sit amet...",
          Date: "12:45 PM",
          unRead: 2,
        },

        {
          Color: "#FCC43E",

          ChatName: "All Student VII",
          RecentMessage: "Lorem ipsum dolor sit amet...",
          Date: "12:45 PM",
          unRead: 0,
        },
      ],
    },

    {
      name: "Chats",
      list: [
        {
          Color: "#C1BBEB",

          ChatName: "Samantha William",
          RecentMessage: "Lorem ipsum dolor sit amet...",
          Date: "12:45 PM",
          unRead: 2,
        },

        {
          Color: "#C1BBEB",

          ChatName: "Tony Soap",
          RecentMessage: "Lorem ipsum dolor sit amet...",
          Date: "12:45 PM",
          unRead: 2,
        },

        {
          Color: "#C1BBEB",

          ChatName: "Karen Hope",
          RecentMessage: "Lorem ipsum dolor sit amet...",
          Date: "12:45 PM",
          unRead: 0,
        },
      ],
    },
  ];

  return (
    <>
      <div className=" flex w-full h-[1100px] overflow-y-hidden  ">
        <div className="basis-1/3  h-full px-5 py-8    ">
          <h1 className="font-bold text-[#303972] text-2xl mb-5">Messages</h1>

          {/* search */}

          <div className=" flex items-center   gap-3 border-2 border-[#A098AE] my-5 p-4 px-5  rounded-l-full rounded-r-full">
            <div className="  ">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.414 24.586L22.337 19.509C23.386 17.928 24 16.035 24 14C24 8.486 19.514 4 14 4C8.486 4 4 8.486 4 14C4 19.514 8.486 24 14 24C16.035 24 17.928 23.386 19.509 22.337L24.586 27.414C25.366 28.195 26.634 28.195 27.414 27.414C28.195 26.633 28.195 25.367 27.414 24.586ZM7 14C7 10.14 10.14 7 14 7C17.86 7 21 10.14 21 14C21 17.86 17.86 21 14 21C10.14 21 7 17.86 7 14Z"
                  fill="#303972"
                />
              </svg>
            </div>

            <input
              className=" border-none focus:outline-none w-full text-[#A098AE] "
              placeholder="Search here..."
            />
          </div>

          {ChatData.map((chats, index) => {
            return (
              <div key={index}>
                <h1 className="text-xl text-[#A098AE] my-4 ">{chats.name}</h1>

                {chats.list.map((c, i) => (
                  <ContactListItem
                    key={i}
                    Color={c.Color}
                    Title={c.ChatName}
                    Chat={c.RecentMessage}
                    Recent={c.unRead}
                    Date={c.Date}
                  />
                ))}
              </div>
            );
          })}
        </div>

        {/* items */}

        <div className="basis-2/3 border-l-2 flex flex-col h-full">
          <div className=" h-[120px] w-full  flex items-center justify-between px-8 gap-x-5  border-b-2  ">
            {/*  */}

            <div className="flex items-center  px-8 gap-x-5">
              <div
                className=" w-[65px] h-[65px]  rounded-full   "
                style={{ backgroundColor: "blue" }}
              ></div>
              <div className=" font-bold text-[#303972] text-2xl  ">
                <h1>Name</h1>

                <p className="text-[#A098AE] text-[15px]   font-light">
                  Online
                </p>
              </div>
            </div>

            {/*  */}

            <div className="flex items-center gap-x-8">
              <svg
                width="32"
                height="18"
                viewBox="0 0 32 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.9997 1H3.99967C2.52691 1 1.33301 2.19391 1.33301 3.66667V14.3333C1.33301 15.8061 2.52691 17 3.99967 17H19.9997C21.4724 17 22.6663 15.8061 22.6663 14.3333V3.66667C22.6663 2.19391 21.4724 1 19.9997 1Z"
                  stroke="#A098AE"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M30.666 2.33325V15.6666L22.666 8.99992L30.666 2.33325Z"
                  stroke="#A098AE"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.0012 9.35986C11.6543 9.35986 11.3109 9.42818 10.9904 9.56091C10.67 9.69365 10.3788 9.88819 10.1335 10.1335C9.88829 10.3787 9.69374 10.6699 9.56101 10.9903C9.42828 11.3108 9.35996 11.6542 9.35996 12.0011C9.35996 12.3479 9.42828 12.6914 9.56101 13.0118C9.69374 13.3323 9.88829 13.6234 10.1335 13.8687C10.3788 14.1139 10.67 14.3085 10.9904 14.4412C11.3109 14.5739 11.6543 14.6423 12.0012 14.6423C12.7017 14.6421 13.3734 14.3637 13.8686 13.8682C14.3638 13.3728 14.6419 12.701 14.6418 12.0005C14.6416 11.3 14.3632 10.6282 13.8677 10.133C13.3723 9.63782 12.7004 9.3597 12 9.35986H12.0012ZM3.60116 9.35986C3.25431 9.35986 2.91086 9.42818 2.59042 9.56091C2.26997 9.69365 1.97881 9.88819 1.73355 10.1335C1.48829 10.3787 1.29374 10.6699 1.16101 10.9903C1.02828 11.3108 0.959961 11.6542 0.959961 12.0011C0.959961 12.3479 1.02828 12.6914 1.16101 13.0118C1.29374 13.3323 1.48829 13.6234 1.73355 13.8687C1.97881 14.1139 2.26997 14.3085 2.59042 14.4412C2.91086 14.5739 3.25431 14.6423 3.60116 14.6423C4.30165 14.6421 4.97339 14.3637 5.4686 13.8682C5.9638 13.3728 6.24192 12.701 6.24176 12.0005C6.2416 11.3 5.96318 10.6282 5.46775 10.133C4.97231 9.63782 4.30045 9.3597 3.59996 9.35986H3.60116ZM20.4012 9.35986C20.0543 9.35986 19.7109 9.42818 19.3904 9.56091C19.07 9.69365 18.7788 9.88819 18.5336 10.1335C18.2883 10.3787 18.0937 10.6699 17.961 10.9903C17.8283 11.3108 17.76 11.6542 17.76 12.0011C17.76 12.3479 17.8283 12.6914 17.961 13.0118C18.0937 13.3323 18.2883 13.6234 18.5336 13.8687C18.7788 14.1139 19.07 14.3085 19.3904 14.4412C19.7109 14.5739 20.0543 14.6423 20.4012 14.6423C21.1017 14.6421 21.7734 14.3637 22.2686 13.8682C22.7638 13.3728 23.0419 12.701 23.0418 12.0005C23.0416 11.3 22.7632 10.6282 22.2677 10.133C21.7723 9.63782 21.1005 9.3597 20.4 9.35986H20.4012Z"
                  fill="#A098AE"
                />
              </svg>  
            </div>
          </div>
          <div className="   flex-grow "></div>
          <div className="border-t-2 h-[120px]  "></div>
        </div>
      </div>
    </>
  );
}
