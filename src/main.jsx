import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./index.css"; // ตรวจสอบว่าไฟล์นี้มีการตั้งค่า Tailwind CSS
import Home from "./component/home";
import CallVoiceRecord from "./component/record";
import Use from "./component/use";
import Trophy from "./component/trophy";
import AudioSettings from "./component/sound";
import Rules from "./component/rules";
import Header from "./component/navbar";
import ProfilePage from "./component/profile";
import InteractiveTable from "./component/list";
import InteractiveTableone from "./component/listone";
import InteractiveTabletwo from "./component/listtwo";
import ForgetPassword from "./component/forget";
import OTP from "./component/otp";
import Board from "./component/board";

function App() {
  const location = useLocation();
  // หน้าที่ไม่ต้องการแสดง Navbar
  const hideHeaderPaths = [ "/profile", "/forget", "/otp"];
  
  return (
    <>
      {/* แสดง Header เฉพาะถ้าหน้านั้นไม่อยู่ใน `hideHeaderPaths` */}
      {!hideHeaderPaths.includes(location.pathname) && <Header />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/record" element={<CallVoiceRecord />} />
        <Route path="/use" element={<Use />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/sound" element={<AudioSettings />} />
        <Route path="/trophy" element={<Trophy />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/list" element={<InteractiveTable />} />
        <Route path="/listone" element={<InteractiveTableone />} />
        <Route path="/listtwo" element={<InteractiveTabletwo />} />
        <Route path="/forget" element={<ForgetPassword />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/board" element={<Board />} />
      </Routes>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);