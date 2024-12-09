import React from "react";
import { Link } from "react-router-dom";

function Trophy() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* ปุ่มย้อนกลับ */}
      <div className="ml-12 ">
        <Link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="gray"
            className="size-14"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </Link>
      </div>
      {/* Main Content */}
      <main className="container mx-auto px-20 space-y-5">
        {/* Announcement Card */}
        <div className="card bg-white w-1000 h-full min-w-screen-xl mb-5 p-5 shadow-2xl rounded-[50px] px-5 mx-auto">
          <div className="flex flex-row items-center justify-between w-1000 h-full min-w-screen-xl mb-2 p-2 px-10">
            {/* Title */}
            <h1 className="text-2xl font-bold text-orange-600">ประกาศรางวัล</h1>

            {/* Link to Rules */}
            <div className="card h-1 bg-gray-100 rounded-[30px] shadow-md p-6 flex flex-row items-center">
              <Link to="/rules" className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="block text-gray-500"
                  width="20"
                  height="20"
                  style={{ color: "red" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0Zm-9-3.75h.008v.008H12V8.25Z"
                  />
                </svg>
                <h2 className="ml-4 text-red-500 font-bold">
                  {" "}
                  ดูรายละเอียดกฏกติกา
                </h2>
              </Link>
            </div>
          </div>
          <hr />
          <br />

          {/* Reward Sections */}
          <div className="flex flex-between">
            {/* Top Referrer Reward */}
            <div className="card bg-red-100 w-5/6 h-full rounded-[20px] shadow-xl min-w-screen-xl m-1 p-5 mx-3">
              <h2 className="text-xl font-semibold">
                รางวัลสำหรับผู้ที่แนะนำมากที่สุด
              </h2>
              <div className="space-y-4 mt-4">
                <ol className="list-decimal pl-6 text-base text-gray-700">
                  <p>รอผลประกาศ</p>
                </ol>
              </div>
            </div>

            {/* Company Selection Reward */}
            <div className="bg-red-100 w-5/6 h-full rounded-[20px] shadow-xl min-w-screen-xl m-1 p-5 mx-3">
              <h2 className="text-xl font-semibold">
                รางวัลสำหรับผู้ได้รับเลือกจากบริษัท CALL VOICE COMMUNICATIONS
              </h2>
              <div className="space-y-4 mt-4">
                <ol className="list-decimal pl-6 text-base text-gray-700">
                  <p>รอผลประกาศ</p>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Trophy;
