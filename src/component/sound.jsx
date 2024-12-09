import React, { useState } from "react";
import { Link } from "react-router-dom";


const AudioSettings = () => {
  const [microphoneLevel, setMicrophoneLevel] = useState(50);
  const [speakerLevel, setSpeakerLevel] = useState(50);

  const testNotification = (type) => {
    const notification = document.createElement("div");
    notification.className =
      "fixed top-4 right-4 bg-white shadow-lg rounded-lg p-4 animate-fade-in";
    notification.innerHTML = `
      <div class="flex items-center space-x-2">
        <i class="fas fa-${type === "microphone" ? "microphone" : "volume-up"} text-orange-500"></i>
        <span>กำลังทดสอบ${type === "microphone" ? "ไมโครโฟน" : "ลำโพง"}...</span>
      </div>
    `;
    document.body.appendChild(notification);
    setTimeout(() => {
      notification.remove();
    }, 2000);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div id="navbar"></div>

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
      <main className="container mx-auto ">
        <div className="card bg-white w-[90%] min-w-screen-xl mb-32 p-10 shadow-lg rounded-[50px] mx-auto">
          <div className="flex items-center space-x-3 mb-8">
            <h1 className="text-2xl font-bold text-orange-600">การตั้งค่าเสียง</h1>
          </div>

          {/* Microphone Section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <i className="fas fa-microphone text-lg text-gray-600"></i>
                <label className="text-gray-700 font-medium">ไมโครโฟน</label>
              </div>
              <div className="flex items-center space-x-4">
                <select className="flex-1 max-w-xs bg-gray-50 border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all">
                  <option>Microphone Array</option>
                  <option>External Microphone</option>
                </select>
                <button
                  onClick={() => testNotification("microphone")}
                  className="bg-orange-50 text-orange-600 px-6 py-3 rounded-xl shadow-md hover:bg-orange-100 transition-all duration-300 flex items-center space-x-2"
                >
                  <i className="fas fa-play"></i>
                  <span>ทดสอบ</span>
                </button>
              </div>
              <div className="space-y-2">
                <label className="block text-gray-600 text-sm">ปรับระดับเสียง</label>
                <input
                  type="range"
                  className="w-full max-w-md accent-orange-500"
                  min="0"
                  max="100"
                  value={microphoneLevel}
                  onChange={(e) => setMicrophoneLevel(e.target.value)}
                />
                <div className="w-full max-w-md h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-green-400 via-yellow-400 to-red-500 transition-all duration-300"
                    style={{ width: `${microphoneLevel}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Speaker Section */}
            <div className="space-y-4 pt-4 border-t border-gray-100">
              <div className="flex items-center space-x-3">
                <i className="fas fa-volume-up text-lg text-gray-600"></i>
                <label className="text-gray-700 font-medium">เสียง</label>
              </div>
              <div className="flex items-center space-x-4">
                <select className="flex-1 max-w-xs bg-gray-50 border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all">
                  <option>Speakers</option>
                  <option>Headphones</option>
                </select>
                <button
                  onClick={() => testNotification("speaker")}
                  className="bg-orange-50 text-orange-600 px-6 py-3 rounded-xl shadow-md hover:bg-orange-100 transition-all duration-300 flex items-center space-x-2"
                >
                  <i className="fas fa-music"></i>
                  <span>ทดสอบ</span>
                </button>
              </div>
              <div className="space-y-2">
                <label className="block text-gray-600 text-sm">ปรับระดับเสียง</label>
                <input
                  type="range"
                  className="w-full max-w-md accent-orange-500"
                  min="0"
                  max="100"
                  value={speakerLevel}
                  onChange={(e) => setSpeakerLevel(e.target.value)}
                />
                <div className="w-full max-w-md h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-green-400 via-yellow-400 to-red-500 transition-all duration-300"
                    style={{ width: `${speakerLevel}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AudioSettings;
