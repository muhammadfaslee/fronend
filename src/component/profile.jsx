import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    name: "ฟัสลี เจะเฮาะ",
    email: "name@example.com",
    phone: "(+66) 61-669-1002",
    address: "117/12 กรุงเทพมหานคร 10600",
    image: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
  });

  const [editing, setEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfile((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleEdit = () => setEditing(!editing);
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="bg-white w-64 shadow-md py-6 px-8">
        <div className="flex items-center mb-6">
          <span className="text-xl font-bold ml-2 text-red-500">CallVoice Record</span>
        </div>
        <nav>
          <ul className="space-y-4">
            <li>
              <Link to="/" className="flex items-center text-gray-700 hover:text-red-500">
                <i className="fas fa-home mr-4"></i> หน้าหลัก
              </Link>
            </li>
            <li>
              <a href="#" className="flex items-center text-gray-700 hover:text-red-500">
                <i className="fas fa-history mr-4"></i> ประวัติบันทึกเสียง
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center text-gray-700 hover:text-red-500">
                <i className="fas fa-user-circle mr-4"></i> โปรไฟล์
              </a>
            </li>
            <li>
              <Link to="/login" className="flex items-center text-gray-700 hover:text-red-500">
                <i className="fas fa-sign-out-alt mr-4"></i> ออกจากระบบ
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

     {/* Main Content */}
     <main className="flex-1 bg-gray-50 p-6">
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-red-500 mb-4">โปรไฟล์</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* รูปโปรไฟล์ */}
            <div className="flex flex-col items-center">
              <div
                className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-200"
                style={{ position: "relative" }}
              >
                <img
                  src={profile.image}
                  alt="Profile"
                  className="object-cover w-full h-full"
                />
                <label
                  htmlFor="fileInput"
                  className="absolute bottom-1 right-1 bg-gray-100 border rounded-full p-2 hover:bg-gray-200 cursor-pointer"
                >
                  <i className="fas fa-camera text-gray-500"></i>
                </label>
                <input
                  id="fileInput"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </div>
              <button
                onClick={toggleEdit}
                className="mt-4 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              >
                {editing ? "ยกเลิก" : "แก้ไขโปรไฟล์"}
              </button>
            </div>

            {/* ข้อมูลโปรไฟล์ */}
            <div>
              {editing ? (
                <form className="space-y-4">
                  <div>
                    <label className="block font-bold">ชื่อ-สกุล:</label>
                    <input
                      type="text"
                      name="name"
                      value={profile.name}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-lg p-2"
                    />
                  </div>
                  <div>
                    <label className="block font-bold">อีเมล:</label>
                    <input
                      type="email"
                      name="email"
                      value={profile.email}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-lg p-2"
                    />
                  </div>
                  <div>
                    <label className="block font-bold">เบอร์โทร:</label>
                    <input
                      type="text"
                      name="phone"
                      value={profile.phone}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-lg p-2"
                    />
                  </div>
                  <div>
                    <label className="block font-bold">ที่อยู่:</label>
                    <textarea
                      name="address"
                      value={profile.address}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-lg p-2"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={toggleEdit}
                    className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                  >
                    บันทึก
                  </button>
                </form>
              ) : (
                <ul className="space-y-4">
                  <li>
                    <span className="font-bold">ชื่อ-สกุล: </span>{profile.name}
                  </li>
                  <li>
                    <span className="font-bold">อีเมล: </span>{profile.email}
                  </li>
                  <li>
                    <span className="font-bold">เบอร์โทร: </span>{profile.phone}
                  </li>
                  <li>
                    <span className="font-bold">ที่อยู่: </span>{profile.address}
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;