import React from "react";
import { Link } from "react-router-dom";

const Rules = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <div id="navbar"></div>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        {/* Back Button */}
        <div className="flex justify-start ml-12">
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
        {/* Home Button */}
        {/* <div className="mr-16 py-4">
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="gray"
              className="size-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </Link>
        </div> */}
      </div>
      {/* Main Content */}
      <main className="container mx-auto px-20 space-y-6">
        {/* Card for Rules */}
        <div className="flex flex-col justify-center align-center bg-white w-full  h-full  mb-5 p-5 shadow-2xl rounded-[50px] px-5 mx-auto">
          <div className="flex flex-row w-full h-full min-w-screen-xl mb-2 p-2 px-10">
            <h1 className="text-2xl font-bold text-orange-600">
              กฏกติการางวัล
            </h1>
          </div>

          {/* Rule Details */}
          <div className="card bg-red-100 w-5/6 h-full  min-w-screen-xl mb-5 p-5 shadow-xl rounded-[50px] px-5 mx-auto">
            <h2 className="text-xl font-semibold">รายละเอียดกฏกติกา</h2>
            <div className="space-y-4 mt-4">
              <ol className="list-decimal pl-6 text-base text-gray-700">
                <li>
                  <strong>รางวัล iPhone 16 - 128G</strong>
                  <ul className="list-inside">
                    <li>- ผู้แนะนำที่มีผู้มาบันทึกมากที่สุด</li>
                  </ul>
                </li>
                <br />
                <li>
                  <strong>รางวัล iPhone 16 - 128G</strong>
                  <ul className="list-inside">
                    <li>
                      - ผู้ได้รับเลือกจากบริษัท CALL VOICE COMMUNICATIONS
                      และปฏิเสธข้อโต้แย้งใดๆ
                      การตัดสินของกรรมการถือเป็นที่สิ้นสุด
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Rules;
