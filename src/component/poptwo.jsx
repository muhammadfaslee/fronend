import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../style/popup.css";

const AgreementModal = ({ onAgree, onCancel }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [agreement, setAgreement] = useState("");

  useEffect(() => {
    setIsModalOpen(true);

    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        handleModalClose();
      }
    };

    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  const handleAgree = () => {
    if (agreement === "agree") {
      localStorage.setItem("userAgreed", "true");

      if (onAgree) {
        onAgree();
      }

      setIsModalOpen(false);
    } else {
      // Optional: Show error or prevent submission
      alert("กรุณายอมรับข้อตกลง");
    }
  };

  const handleModalClose = () => {
    if (onCancel) {
      onCancel();
    }

    setIsModalOpen(false);
  };

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div
        className="bg-white rounded-2xl shadow-xl w-full max-w-md p-10 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleModalClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Invitation Header */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-gray-600">
            คุณได้รับเชิญจาก: <strong>name@example.com</strong>
          </span>
          <div className="flex items-center justify-between ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
            />
          </svg>
          </div>
        </div>

        {/* Terms and Conditions */}
        <div className=" card bg-red-100 rounded-2xl p-5 mb-5 mx-3 shadow-md max-h-72 overflow-y-auto">
          <h5 className="text-xl text-red-500 text-center font-bold mb-3">
            Call Voice Record
          </h5>

          <div className="text-gray-700 text-sm space-y-2">
            <h6 className="font-semibold">
              1. ข้อตกลงการใช้งาน (Terms of Use)
            </h6>
            <ul className="list-disc pl-5">
              <li>
                การยอมรับข้อตกลง ผู้ใช้ต้องยอมรับเงื่อนไขก่อนใช้งานเว็บไซต์
              </li>
              <li>
                การเก็บข้อมูลเสียง เราบันทึกเสียงของผู้ใช้เพื่อปรับปรุงบริการ
              </li>
              <li>ข้อห้ามการใช้งาน ห้ามกระทำผิดกฎหมายหรือทำลายระบบ</li>
              <li>
                การเปลี่ยนแปลงข้อตกลง อาจมีการเปลี่ยนแปลงโดยไม่แจ้งล่วงหน้า
              </li>
            </ul>

            <h6 className="font-semibold mt-3">
              2. นโยบายความเป็นส่วนตัว (Privacy Policy)
            </h6>
            <ul className="list-disc pl-5">
              <li>
                การเก็บข้อมูล เราเก็บข้อมูลส่วนบุคคล เช่น ชื่อ อีเมล
                และเบอร์โทรอย่างปลอดภัย
              </li>
            </ul>
          </div>
        </div>

        {/* Radio Button Agreement */}
        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio"
              name="agreement"
              value="agree"
              checked={agreement === "agree"}
              onChange={() => setAgreement("agree")}
            />
            <span className="ml-2 text-gray-700">
              ฉันได้อ่านและยอมรับข้อตกลงการใช้งาน
            </span>
          </label>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between space-x-4">
          <button
            onClick={handleModalClose}
            className="flex-1 bg-red-400 text-white py-2 rounded-full hover:bg-red-500 transition"
          >
            ยกเลิก
          </button>
          <button
            onClick={handleAgree}
            className="flex-1 bg-green-400 text-white py-2 rounded-full hover:bg-green-500 transition"
          >
            ยอมรับ
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgreementModal;
