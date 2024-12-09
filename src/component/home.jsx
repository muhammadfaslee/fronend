import React, { useEffect, useState , useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import LoginModal from "./pop";
import RegisterModal from "./popregister";
import AgreementModal from "./poptwo";

const Home = () => {
  const [navbar, setNavbar] = useState("");
  const location = useLocation();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isAgreementModalOpen, setIsAgreementModalOpen] =  useState(false);

  useEffect(() => {
    // โหลดเนื้อหาของ navbar.html
    fetch("navbar.html")
      .then((response) => response.text())
      .then((data) => {
        setNavbar(data);
        console.log("Navbar loaded successfully.");
      })
      .catch((error) => console.error("Error loading navbar:", error));
    setIsLoginModalOpen(false);
  }, [location]);

  useEffect(() =>{
    setIsLoginModalOpen(false)
    console.log(isRegisterModalOpen)
  },[isRegisterModalOpen])

  const toggleModal = () => {
    setIsLoginModalOpen(!isLoginModalOpen); 
  };

  const toggleRegisterModal = () => {
    setIsRegisterModalOpen(!isRegisterModalOpen);
  };

  const toggleAqreementModal = () => {
    setIsAgreementModalOpen(!isAgreementModalOpen);
  };
  

  useEffect(() => {
    const handleOutsideClick = (event) => {
      // ถ้าคลิกนอก modal ให้ปิด
      const modal = document.querySelector("#loginModal");
      if (isLoginModalOpen && modal && !modal.contains(event.target)) {
          setIsLoginModalOpen(false);
      }
    };

    // เพิ่ม event listener
    document.addEventListener("mousedown", handleOutsideClick);

    // ลบ event listener เมื่อ component ถูก unmount
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isLoginModalOpen]);

  
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* ส่วนหัว */}
      <div
        id="navbar"
        dangerouslySetInnerHTML={{ __html: navbar }}
        onClick={() => setIsLoginModalOpen(false)}
      ></div>

      {/* เนื้อหาหลัก */}
      <main className="container mx-auto space-y-5 py-8 px-auto h-screen " >
        <div  className="flex flex-col justify-center align-center bg-white w-[90%] h-[70%] shadow-lg rounded-[50px] px-20 mx-auto my-auto ">
          <h1 className="text-center text-3xl font-bold text-orange-600 mb-20 my-2">
            Welcome to CallVoice Record
          </h1>
          {/* ข้อความต้อนรับ */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 text-center">
            {/* บันทึกเสียง */}
            <div onClick={toggleModal} className="cursor-pointer">
              <div className="bg-gray-100 rounded-[40px] shadow-md p-6 h-5/6 transform hover:scale-105 focus:scale-105 transition-transform duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  style={{ display: "block", color: "#838383", margin: "auto" }}
                  width="90"
                  height="90"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
                  />
                </svg>
              </div>
              <h2 className="mt-4 text-lg font-bold">บันทึกเสียง</h2>
            </div>

            {/* ตั้งค่าเสียง */}

            <div onClick={toggleModal} className="cursor-pointer">
              <div className="bg-gray-100 rounded-[40px] shadow-md p-6 h-5/6 transform hover:scale-105 focus:scale-105 transition-transform duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  style={{ display: "block", color: "#838383", margin: "auto" }}
                  width="90"
                  height="90"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
                  />
                </svg>
              </div>
              <h2 className="mt-4 text-lg font-bold">ตั้งค่าเสียง</h2>
            </div>

            {/* วิธีการใช้งาน */}
            <Link to="/use" onClick={() => setIsLoginModalOpen(false)}>
              <div className="bg-gray-100 rounded-[40px] shadow-md p-6 h-5/6 transform hover:scale-105 focus:scale-105 transition-transform duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  style={{ display: "block", color: "#838383", margin: "auto" }}
                  width="90"
                  height="90"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                  />
                </svg>
              </div>
              <h2 className="mt-4 text-lg font-bold">วิธีการใช้งาน</h2>
            </Link>
            {/* ประกาศผล */}
            <Link to="/board" onClick={() => setIsLoginModalOpen(false)}>
              <div className="bg-gray-100 rounded-[40px] shadow-md p-6 h-5/6 transform hover:scale-105 focus:scale-105 transition-transform duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                  strokeWidth="1.5"
                  width="90"
                  height="90"
                  stroke="currentColor"
                  fill="gray"
                  style={{ display: "block", color: "#838383", margin: "auto" }}
                >
                  <path 
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M353.8 54.1L330.2 6.3c-3.9-8.3-16.1-8.6-20.4 0L286.2 54.1l-52.3 7.5c-9.3 1.4-13.3 12.9-6.4 19.8l38 37-9 52.1c-1.4 9.3 8.2 16.5 16.8 12.2l46.9-24.8 46.6 24.4c8.6 4.3 18.3-2.9 16.8-12.2l-9-52.1 38-36.6c6.8-6.8 2.9-18.3-6.4-19.8l-52.3-7.5zM256 256c-17.7 0-32 14.3-32 32l0 192c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-192c0-17.7-14.3-32-32-32l-128 0zM32 320c-17.7 0-32 14.3-32 32L0 480c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32L32 320zm416 96l0 64c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-128 0c-17.7 0-32 14.3-32 32z" />
                </svg>
              </div>
              <h2 className="mt-4 text-lg font-bold">ประกาศผล</h2>
            </Link>
          </div>
        </div>
      </main>
      {isLoginModalOpen && <LoginModal register={toggleRegisterModal} login={toggleModal}/>}
      {isRegisterModalOpen && <RegisterModal isOpen={toggleRegisterModal} aqree={toggleAqreementModal} /> }
      {isAgreementModalOpen && <AgreementModal /> }
    </div>
  );
};

export default Home;
