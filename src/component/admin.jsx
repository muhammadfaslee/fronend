import React from "react";
import { Link } from "react-router-dom";

const AdminPage = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="bg-gray-100 w-64 shadow-md py-6 px-8">
        <div className="flex items-center mb-6">
          <span className="text-red-500 text-2xl font-bold">Admin </span>
        </div>
        <nav>
          <ul className="space-y-4">
            <li>
              <Link
                to="/admin"
                className="flex items-center text-gray-700 hover:text-blue-500"
              >
                <i className="fas fa-tachometer-alt mr-4"></i> แดชบอร์ด
              </Link>
            </li>
            <li>
              <Link
                to="/admin/records"
                className="flex items-center text-gray-700 hover:text-blue-500"
              >
                <i class="fa-solid fa-music mr-4"></i>สคริปเสียง
              </Link>
            </li>
            <li>
              <Link
                to="/admin/records"
                className="flex items-center text-gray-700 hover:text-blue-500"
              >
                <i className="fas fa-folder-open mr-4"></i> ข้อมูลบันทึกเสียง
              </Link>
            </li>
            <li>
              <Link
                to="/admin/users"
                className="flex items-center text-gray-700 hover:text-blue-500"
              >
                <i className="fas fa-users mr-4"></i> จัดการข้อมูลผู้ใช้
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="flex items-center text-gray-700 hover:text-blue-500"
              >
                <i className="fas fa-sign-out-alt mr-4"></i> ออกจากระบบ
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-50 p-6">
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-blue-500 mb-4">แดชบอร์ด</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* การ์ดข้อมูล */}
            <div className="bg-blue-100 rounded-lg shadow p-4 text-center">
              <h3 className="text-lg font-bold text-blue-600">จำนวนผู้ใช้</h3>
              <p className="text-3xl font-bold">120</p>
            </div>
            <div className="bg-green-100 rounded-lg shadow p-4 text-center">
              <h3 className="text-lg font-bold text-green-600">
                จำนวนบันทึกเสียง
              </h3>
              <p className="text-3xl font-bold">350</p>
            </div>
            <div className="bg-red-100 rounded-lg shadow p-4 text-center">
              <h3 className="text-lg font-bold text-red-600">คำร้องเรียน</h3>
              <p className="text-3xl font-bold">15</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8 mt-6">
          <h2 className="text-xl font-bold text-blue-500 mb-4">จัดการล่าสุด</h2>
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">#</th>
                <th className="px-4 py-2">ชื่อผู้ใช้</th>
                <th className="px-4 py-2">สถานะ</th>
                <th className="px-4 py-2">การกระทำ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2 text-center">1</td>
                <td className="border px-4 py-2">ฟัสลี เจะเฮาะ</td>
                <td className="border px-4 py-2 text-green-500">ใช้งานได้</td>
                <td className="border px-4 py-2 text-center">
                  <button className="text-red-500 hover:text-red-700">
                    ลบ
                  </button>
                  <button className="ml-4 text-blue-500 hover:text-blue-700">
                    แก้ไข
                  </button>
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2 text-center">2</td>
                <td className="border px-4 py-2">John Doe</td>
                <td className="border px-4 py-2 text-red-500">ระงับ</td>
                <td className="border px-4 py-2 text-center">
                  <button className="text-green-500 hover:text-green-700">
                    เปิดใช้งาน
                  </button>
                  <button className="ml-4 text-blue-500 hover:text-blue-700">
                    แก้ไข
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default AdminPage;
