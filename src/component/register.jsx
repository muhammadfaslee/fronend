import React, { useState } from 'react';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: ''
  });

  const [responseMessage, setResponseMessage] = useState('');
  const [messageClass, setMessageClass] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { fullname, email, phoneNumber, password, confirmPassword } = formData;

    // ตรวจสอบว่ากรอกครบทุกช่อง
    if (!fullname || !email || !phoneNumber || !password || !confirmPassword) {
      setResponseMessage('กรุณากรอกข้อมูลให้ครบทุกช่อง');
      setMessageClass('text-red-500');
      return;
    }

    // ตรวจสอบรหัสผ่านว่าตรงกันหรือไม่
    if (password !== confirmPassword) {
      setResponseMessage('Passwords do not match');
      setMessageClass('text-red-500');
      return;
    }

    try {
      // ส่งข้อมูลไปยัง API
      const response = await fetch('http://127.0.0.1:8000/user/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name_lastname: fullname,
          phone_number: phoneNumber,
          email: email,
          password: password
        })
      });

      if (response.ok) {
        const data = await response.json();
        setResponseMessage(data.message);
        setMessageClass('text-green-500');
      } else {
        const error = await response.json();
        setResponseMessage(error.detail || 'เกิดข้อผิดพลาด');
        setMessageClass('text-red-500');
      }
    } catch (error) {
      console.error(error);
      setResponseMessage('ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้');
      setMessageClass('text-red-500');
    }
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="login-container bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-red-500">Register</h1>
        <p className="mb-6 text-gray-500">Welcome to Call Voice Recording</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group mb-4">
            <label htmlFor="fullname" className="block text-gray-700 mb-2">Name Lastname</label>
            <input
              type="text"
              id="fullname"
              placeholder="Name Lastname"
              value={formData.fullname}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">Username or Email</label>
            <input
              type="email"
              id="email"
              placeholder="Username or Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="phoneNumber" className="block text-gray-700 mb-2">Number</label>
            <input
              type="text"
              id="phoneNumber"
              placeholder="Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="confirmPassword" className="block text-gray-700 mb-2">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div className="invitation mb-4">
            <p style={{ margin: 0 }}>You have been invited by: <strong>name@example.com</strong></p>
          </div>

          <div className="form-group mb-4">
            <span id="responseMessage" className={messageClass}>{responseMessage}</span>
          </div>

          <div className="button-group mb-6 flex gap-4">
            <button type="submit" className="w-1/2 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition duration-200">Register</button>
            <a href="login.html" className="w-1/2 text-center text-black py-2 rounded-lg hover:bg-gray-200 transition duration-200">Login</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
