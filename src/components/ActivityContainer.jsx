import React from "react";
import Activity from "./Activity";

export default function ActivityContainer() {
  const Logs = [
    {
      Day: "Today",
      Activities: [
        {
          Date: "Monday, June 31 2020",
          Person: "Karen Hope",
          Type: "message",
          For: "History Lesson",
          Event: "  has created new task at ",
          Color: "#ff7050",
          Files: [],
        },

        {
          Date: "Monday, June 31 2020",
          Person: "[REMINDER]",
          Type: "[REMINDER]",
          For: "Science Homework",
          Event: " Due date of  task will be coming ",
          Color: "Red",
          Files: [],
        },

        {
          Date: "Monday, June 31 2020",
          Person: "Tony Soap",
          Type: "messahe",
          For: "Science Homework",
          Event: " commented at ",
          Color: "Red",
          Files: [],
        },

        {
          Date: "Monday, June 31 2020",
          Person: "Samantha William ",
          Type: "Files",
          For: "Art Class",
          Event: "add 4 files on  ",
          Color: "purple",
          Files: [1, 2, 3, 4],
        },

        {
          Date: "Monday, June 31 2020",
          Person: "You ",
          Type: "Done",
          For: "Biology Homework",
          Event: "have moved  task to ",
          Color: "Green",
          Files: [],
        },
      ],
    },

    {
      Day: "Yesterday",
      Activities: [
        {
          Date: "Sunday, June 30 2020",
          Person: "Nadila Adja ",
          Type: "message",
          For: "Programming Homework",
          Event: "mentioned you at  ",
          Color: "purple",
          Files: [],
        },

        {
          Date: "Monday, June 31 2020",
          Person: "Johnny Ahmad ",
          Type: "message",
          For: "Art Class  Homework",
          Event: "mentioned you at ",
          Color: "Yellow",
          Files: [],
        },
      ],
    },
  ];

  return (
    <div className=" bg-[#FFFFFF]  ">
      {Logs.map((log, index) => {
        return (
          <div key={index}>
            <h1 className=" text-[#303972] my-5">{log.Day}</h1>

            {log.Activities.map((act, index) => (
              <Activity
                key={index}
                Act={act}
                i={index === log.Activities.length - 1}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
}
