import React from "react";
import { Link } from "react-router-dom";

function Board() {
  return (
    <div className="bg-gray-100 min-h-screen">
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

      {/* Main Content */}
      <main className="mx-auto px-20 space-y-5 ">
        <div className="bg-white w-[90%] h-[70%] shadow-lg rounded-[50px] px-8 mx-auto my-auto">
          <div className="flex justify-between items-center">
            {/* Title */}
            <h1 className="text-2xl font-bold text-orange-600">
              อันดับการเชิญ
            </h1>
            {/* Navigation Links */}
            <div className="flex flex-col justify-center items-center  p-3">
              <Link
                to="/trophy"
                className="w-8 h-8 flex justify-center items-center rounded-full shadow-lg border-2 border-red-500 text-red-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"
                  />
                </svg>
              </Link>

              <Link
                to="/use"
                className="text-red-500 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="currentColor"
                  className="w-10 h-10  "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0Zm-9-3.75h.008v.008H12V8.25Z"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Card Section */}
          <div className="flex justify-between  mx-32 ">
            <div className="bg-base-100 shadow-xl rounded-[10%] m-8 p-4 w-60">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                  className="rounded-lg"
                />
              </figure>
              <div className="mt-4 text-center">
                <h2 className="text-lg font-bold">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
              </div>
            </div>
            <div className="bg-yellow-200 shadow-xl rounded-[10%] p-4 w-60">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                  className="rounded-lg"
                />
              </figure>
              <div className="mt-4 text-center">
                <h2 className="text-lg font-bold">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
              </div>
            </div>
            <div className="bg-base-100 shadow-xl rounded-[10%] m-8 p-4 w-60">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                  className="rounded-lg"
                />
              </figure>
              <div className="mt-4 text-center">
                <h2 className="text-lg font-bold">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
              </div>
            </div>
          </div>

          {/* Ranking Table */}
          <div className="flex flex-col justify-between mx-20 p-4">
            <div className="text-center shadow-xl rounded-xl bg-base-100 p-3 m-3 flex justify-between items-center">
              <span className="w-full text-left">1. สโรชา แขนงาม</span>
              <span className="w-full text-center">จำนวนการเชิญ</span>
              <span className="w-full text-right">45</span>
            </div>
            <div className="text-center shadow-xl rounded-xl bg-base-100 p-3 m-3 flex justify-between items-center">
              <span className="w-full text-left">2. คณาธิป อ่อนนุ่ม</span>
              <span className="w-full text-center">จำนวนการเชิญ</span>
              <span className="w-full text-right">23</span>
            </div>
            <div className="text-center shadow-xl rounded-xl bg-gray-300 p-3 m-3 flex justify-between items-center">
              <span className="w-full text-left">24. กชชิภา ใจดี</span>
              <span className="w-full text-center">จำนวนการเชิญ</span>
              <span className="w-full text-right">25</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Board;
