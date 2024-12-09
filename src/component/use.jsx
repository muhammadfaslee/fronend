import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Use = () => {
  const [navbarContent, setNavbarContent] = useState("");

  useEffect(() => {
    // โหลดเนื้อหาของ navbar.html
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
      <main className="container mx-auto px-20 space-y-5">
        {/* การ์ดสำหรับวิธีการใช้งาน */}
        <div className="card bg-white w-full h-full min-w-screen-xl mb-5 p-5 shadow-2xl rounded-[50px] px-5 mx-auto">
          <div className="flex flex-row items-center justify-between w-1000 h-full min-w-screen-xl mb-2 p-2 px-10 mx-5">
            {/* หัวข้อหลักด้านซ้าย */}
            <h1 className="text-2xl font-bold text-orange-600">
              วิธีการใช้งาน
            </h1>
            {/* การ์ดเล็กสำหรับกฏกติกา */}
            <div className="card h-1 bg-gray-100 rounded-[30px] shadow-md p-6 flex flex-row items-center">
              <Link to="/rules" className="flex items-center">
                {/* ไอคอน */}
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
                    d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                  />
                </svg>
                {/* ข้อความกฏกติกา */}
                <h2 className="ml-4 text-red-500 font-bold">
                  {" "}
                  ดูรายละเอียดกฏกติกา
                </h2>
              </Link>
            </div>
          </div>

          {/* การ์ดย่อยสำหรับขั้นตอนการใช้งาน */}
          <div className="card bg-red-100 w-5/6 h-full shadow-xl min-w-screen-xl mb-5 p-5 shadow-2xl rounded-[50px] px-5 mx-auto">
            <h2 className="text-xl font-semibold">ขั้นตอนการใช้งาน</h2>
            <div className="space-y-4 mt-4">
              {/* รายการขั้นตอน */}
              <ol className="list-decimal pl-6 text-base text-gray-700">
                <li>
                  <strong>การเริ่มต้นอัดเสียง</strong>
                  <ul className="list-inside">
                    <li>
                      - กดปุ่มที่มีสัญลักษณ์ไมโครโฟนเพื่อเริ่มการอัดเสียง.
                    </li>
                    <li>- ระบบจะเริ่มบันทึกเสียงทันทีเมื่อกดปุ่ม</li>
                    <li>
                      - สามารถพูดหรือส่งเสียงตามที่ต้องการ
                      โดยระบบจะจัดเก็บเสียงทั้งหมด
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>การหยุดพักการอัดเสียง</strong>
                  <ul className="list-inside">
                    <li>
                      - หากต้องการหยุดชั่วคราวระหว่างการอัดเสียง ให้กดปุ่ม
                      หยุดพัก (ปุ่มที่มีเครื่องหมาย "||")
                    </li>
                    <li>
                      - การบันทึกเสียงจะหยุดชั่วคราว
                      แต่ข้อมูลก่อนหน้าจะยังคงถูกเก็บไว้
                    </li>
                    <li>
                      - หากต้องการเริ่มอัดเสียงต่อจากจุดเดิม ให้กดปุ่ม เริ่มต่อ
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>การฟังเสียง</strong>
                  <ul className="list-inside">
                    <li>
                      - กดปุ่ม **ฟังเสียง** (ปุ่มที่มีสัญลักษณ์หูฟัง)
                      เพื่อฟังเสียงที่ได้อัดไว้.
                    </li>
                    <li>
                      -
                      ใช้ฟังก์ชันนี้เพื่อตรวจสอบคุณภาพเสียงว่าถูกต้องหรือไม่ก่อนการบันทึกไฟล์.
                    </li>
                    <li>- หากต้องการอัดใหม่ สามารถย้อนกลับไปยังขั้นตอนที่ 1</li>
                  </ul>
                </li>
                <li>
                  <strong>การอัปโหลดเสียง</strong>
                  <ul className="list-inside">
                    <li>
                      - เมื่ออัดเสียงเสร็จสมบูรณ์แล้ว ให้กดปุ่ม **อัปโหลดเสียง**
                      (ปุ่มที่มีสัญลักษณ์ลูกศรชี้ขึ้น)
                    </li>
                    <li>
                      -
                      ระบบจะทำการบันทึกไฟล์เสียงไปยังพื้นที่จัดเก็บข้อมูลที่กำหนดไว้
                    </li>
                    <li>- คุณสามารถดาวน์โหลดไฟล์เสียงในรูปแบบที่ต้องการได้ </li>
                  </ul>
                </li>
                <li>
                  <strong>ข้อมูลเพิ่มเติม</strong>
                  <ul className="list-inside">
                    <li>
                      - ไฟล์เสียงที่อัปโหลดจะถูกเก็บไว้ในพื้นที่จัดเก็บของผู้ใช้
                    </li>
                    <li>
                      - หากพบปัญหาการใช้งาน เช่น เสียงเบาหรือขาดหาย
                      ตรวจสอบอุปกรณ์ไมโครโฟนและการตั้งค่าระบบ
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>คำแนะนำ</strong>
                  <ul className="list-inside">
                    <li>
                      -
                      พยายามอัดเสียงในพื้นที่ที่ไม่มีเสียงรบกวนเพื่อคุณภาพเสียงที่ดีที่สุด
                    </li>
                    <li>
                      -
                      ใช้หูฟังในการตรวจสอบเสียงเพื่อให้ได้ยินรายละเอียดเสียงอย่างชัดเจน
                    </li>
                    <li>
                      -
                      จัดเก็บไฟล์เสียงในโฟลเดอร์ที่มีชื่อสื่อความหมายเพื่อการค้นหาที่ง่ายขึ้น
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
            {/* ข้อความเพิ่มเติม */}
            <p className="mt-4 text-gray-600 text-center">
              หากต้องการรายละเอียดเพิ่มเติมเกี่ยวกับระบบ
              สามารถติดต่อฝ่ายสนับสนุนหรือศึกษาคู่มือเพิ่มเติมผ่านเว็บไซต์ของเรา!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Use;
