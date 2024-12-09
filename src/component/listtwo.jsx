import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const InteractiveTabletwo = () => {
  const [navbarContent, setNavbarContent] = useState("");

  // โหลดเนื้อหาของ navbar.html
  useEffect(() => {
    fetch("navbar.html")
      .then((response) => response.text())
      .then((data) => setNavbarContent(data))
      .catch((error) => console.error("Error loading navbar:", error));
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* ส่วนหัว */}
      <div
        id="navbar"
        dangerouslySetInnerHTML={{ __html: navbarContent }}
      ></div>
      {/* ปุ่มย้อนกลับ */}
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
      {/* เนื้อหาในส่วนหลัก */}

      {/* ส่วนเนื้อหา */}
      <main className="container mx-auto ">
        <div className="bg-white rounded-[50px] shadow-lg p-6">
          {/* หัวข้อเนื้อหา */}
          <div className="flex flex-row items-center justify-between w-1000 h-full min-w-screen-xl mb-2 p-2 px-10 mx-auto">
            <h1 className="text-xl font-bold text-orange-600">
              ประวัติการบันทึกเสียง
            </h1>

            {/* Card */}
            <div className="card h-1 bg-white  pl-6">
              <h2 className=" text-gray-500 font-bold ">ชุดที่1</h2>
            </div>
          </div>

          {/* ตาราง */}
          <table className="w-full table-auto border-collapse">
            <tbody>
              <tr className="border-b text-center">
                <td className="py-3 px-4 w-1/12">1</td>
                <td className="py-3 px-4 text-left truncate basic-1/2">
                  สวัดดีครับ
                </td>
                <td className="py-3 flex justify-end items-center ">
                  <p className="m-1 text-gray-500">namefile.wav</p>
                  <p className="mx-2 text-gray-500">00:10 น. 19/11/24 </p>
                  <button className="h-10 w-10 rounded-[60%] m-1 flex justify-center items-center text-white font-medium shadow-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="red"
                      class="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
                      />
                    </svg>
                  </button>
                  <button className="h-10 w-10 rounded-[60%] m-1 flex justify-center items-center text-white font-medium shadow-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="red"
                      class="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                      />
                    </svg>
                  </button>
                  <button className="h-10 w-10 bg-red-500 rounded-[60%] m-1 flex justify-center items-center text-white font-medium shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
              <tr className="border-b text-center">
                <td className="py-3 px-4 w-1/12">2</td>
                <td className="py-3 px-4 text-left truncate basic-1/2">
                  ช่วยหน่อยได้ไหม
                </td>
                <td className="py-3 flex justify-end items-center ">
                  <p className="m-1 text-gray-500">namefile.wav</p>
                  <p className="mx-2 text-gray-500">00:10 น. 19/11/24 </p>
                  <button className="h-10 w-10 rounded-[60%] m-1 flex justify-center items-center text-white font-medium shadow-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="red"
                      class="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
                      />
                    </svg>
                  </button>
                  <button className="h-10 w-10 rounded-[60%] m-1 flex justify-center items-center text-white font-medium shadow-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="red"
                      class="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                      />
                    </svg>
                  </button>
                  <button className="h-10 w-10 bg-red-500 rounded-[60%] m-1 flex justify-center items-center text-white font-medium shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex justify-between items-center">
            <Link to="#">
              <div className="card h-1 bg-gray-100 rounded-[50px] shadow-md p-6 mt-5 flex flex-row items-center justify-between">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <h2 className="text-gray-600 mx-2">ย้อนกลับ</h2>
              </div>
            </Link>
            <div class="flex  justify-center space-x-3 mt-5 ">
              <button class="w-3 h-3 bg-gray-600 rounded-full"></button>
              <button class="w-3 h-3 bg-gray-300 rounded-full"></button>
              <button class="w-3 h-3 bg-gray-300 rounded-full"></button>
            </div>

            <Link to="#">
              <div className="card h-1 bg-gray-100 rounded-[50px] shadow-md p-6 mt-5 flex flex-row items-center justify-between">
                <h2 className="text-gray-600 mx-2">ถัดไป</h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default InteractiveTabletwo;
