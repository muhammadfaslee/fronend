import React, { useState } from "react";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleLogin = async () => {
        try {
            const url = `http://127.0.0.1:8000/user/login/`;

            const payload = {
                email, // ใช้ค่า email จาก state
                password, // ใช้ค่า password จาก state
            };

            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json", // ระบุว่าเราส่งข้อมูลในรูปแบบ JSON
                    credentials: "include"
                },
                body: JSON.stringify(payload), // แปลง payload เป็น JSON string
            });

            if (response.ok) {
                const data = await response.json();
                setMessage(data.message);
            } else if (response.status === 401) {
                setMessage("ชื่อหรือรหัสผ่านไม่ถูกต้อง");
            } else {
                setMessage("โปรดกรอกชื่อหรือรหัสผ่าน");
            }
        } catch (error) {
            console.error(error);
            setMessage("ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์");
        }
    };

    return (
        <div className="bg-gray-100 flex items-center justify-center min-h-screen">
            <div className="login-container bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold text-red-500">Login</h1>
                <p className="mb-6 text-gray-500">Welcome to Call Voice Recording</p>
                <div className="form-group mb-4">
                    <label htmlFor="email" className="block text-gray-700 mb-2">
                        Username or Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group mb-6">
                    <label htmlFor="password" className="block text-gray-700 mb-2">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="invitation mb-4">
                    <p className="text-gray-600">
                        You have been invited by: <strong>name@example.com</strong>
                    </p>
                </div>
                <div className="links mb-6">
                    <a href="#" className="text-sm text-blue-500 hover:underline">
                        Forgot login or password?
                    </a>
                </div>
                <div className="button-group mb-6 flex gap-4">
                    <button
                        onClick={handleLogin}
                        className="w-1/2 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition duration-200"
                    >
                        Login
                    </button>
                    <a
                        href="register.html"
                        className="w-1/2 text-center text-black py-2 rounded-lg hover:bg-gray-200 transition duration-200"
                    >
                        Register
                    </a>
                </div>
                <div className="social-login flex flex-col gap-2">
                    <div className="flex justify-center">
                        <button
                            className="flex items-center justify-center w-full py-2 px-8 bg-gray-100 text-black rounded-lg text-center hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
                            aria-label="Sign in with Facebook"
                            onClick={async () => {
                                try {
                                    const response = await fetch('http://127.0.0.1:8000/user/protected/', {
                                        method: 'GET',
                                        credentials: 'include', // ใช้เพื่อให้ส่งคุกกี้ไปพร้อมกับคำขอ
                                    });

                                    if (response.ok) {
                                        const data = await response.json();
                                        alert(data.message); // แสดงข้อความจาก API
                                    } else if (response.status === 401) {
                                        alert('การเข้าถึงถูกปฏิเสธ คุณยังไม่ได้เข้าสู่ระบบ');
                                    } else {
                                        alert('เกิดข้อผิดพลาดในการเรียก API');
                                    }
                                } catch (error) {
                                    console.error('Error:', error);
                                    alert('ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์');
                                }
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
                                <path
                                    fill="#FFC107"
                                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                                />
                                <path
                                    fill="#FF3D00"
                                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                                />
                                <path
                                    fill="#4CAF50"
                                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                                />
                                <path
                                    fill="#1976D2"
                                    d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                                />
                            </svg>
                            <span className="pl-8">Sign in with Google</span>
                        </button>
                    </div>
                    <div class="flex justify-center">
                        <button
                            class="flex items-center justify-center space-x-4 w-full py-2 px-4 bg-gray-100 text-black rounded-lg text-center 
                               hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
                            aria-label="Sign in with Facebook">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 48 48"
                                aria-hidden="true">
                                <defs>
                                    <linearGradient id="facebookGradient" x1="9.993" x2="40.615" y1="9.993" y2="40.615">
                                        <stop offset="0" stop-color="#007ad9"></stop>
                                    </linearGradient>
                                </defs>
                                <circle cx="24" cy="24" r="20" fill="url(#facebookGradient)"></circle>
                                <path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 
                                   c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 
                                   C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z">
                                </path>
                            </svg>
                            <span>Sign in with Facebook</span>
                        </button>
                    </div>
                    <div id="message" className="text-center text-gray-700 mt-4">
                        {message && <span>{message}</span>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
