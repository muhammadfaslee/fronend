import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const InteractiveTable = () => {
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
              เลือกข้อความที่คุณต้องการบันทึก
            </h1>

            {/* Card */}
            <div className="card h-1 bg-white rounded-[30px] shadow-md p-6 flex flex-row items-center">
              <a href="How_to_use.html" className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="text-gray-500 w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
                <h2 className="ml-4 text-gray-500 font-bold">หน้าหลัก</h2>
              </a>
            </div>
          </div>

          {/* ตาราง */}
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-100 text-center">
                <th className="py-3 px-4 w-1/6">ลำดับ</th>
                <th className="py-3 px-4 w-2/6">ข้อความ</th>
                <th className="py-3 px-4 w-1/6">เลือก</th>
                <th className="py-3 px-4 w-1/6">จำนวน</th>
                <th className="py-3 px-4 w-1/6">สถานะ</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b text-center">
                <td className="py-3 px-4">1</td>
                <td className="py-3 px-4 truncate">
                  ชุดที่ 1 จำนวน 50 ประโยค (01 - 50)
                </td>
                <td className="py-3 px-4">
                  <div className="flex justify-center items-center">
                    <Link
                      to="/record"
                      className="h-10 w-24 bg-red-500 rounded-full flex justify-center items-center text-white font-medium shadow-md"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="text-white w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
                        />
                      </svg>
                      <h2 className="text-white mx-3">เลือก</h2>
                    </Link>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <span className="text-green-500 font-bold">50/50</span>
                </td>
                <td className="py-3 px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="inline-block w-8 h-8 text-green-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </td>
              </tr>
              <tr className="border-b text-center">
                <td className="py-3 px-4">2</td>
                <td className="py-3 px-4 truncate">
                  ชุดที่ 2 จำนวน 50 ประโยค (51 - 100)
                </td>
                <td className="py-3 px-4">
                  <div className="flex justify-center items-center">
                    <Link
                      to="/use"
                      className="h-10 w-24 bg-red-500 rounded-full flex justify-center items-center text-white font-medium shadow-md"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="text-white w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
                        />
                      </svg>
                      <h2 className="text-white mx-3">เลือก</h2>
                    </Link>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <span className="text-red-500 font-bold">37/50</span>
                </td>
                <td className="py-3 px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="inline-block w-8 h-8 text-red-500"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
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

                <h2 className="text-gray-600 mx-2">ถัดไป</h2>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default InteractiveTable;