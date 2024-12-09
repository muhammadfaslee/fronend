import React from "react";

const OTP = () => {
    return (
        <div className="bg-gray-100 flex items-center justify-center min-h-screen">
            <div className="bg-white shadow-lg rounded-lg p-8 content-center max-w-sm w-full h-4/6">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                    <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center shadow-lg">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-20 h-20"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                            />
                        </svg>
                    </div>
                </div>

                {/* Title */}
                <h2 className="text-center text-xl font-semibold text-red-500 mb-2">Check your mail</h2>
                <p className="text-center text-gray-600 mb-6">
                    We just sent an OTP to your registered email address
                </p>

                {/* Form */}
                <form>
                    <div className="mb-4">
                        <label
                            htmlFor="otp"
                            className="block text-center text-2xl text-gray-600 mb-1"
                        >
                            1 1 5 0
                        </label>
                        <p className="block text-center text-sm text-gray-400 mb-1">
                            00:30
                        </p>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-red-500 text-white py-2 rounded-lg shadow hover:bg-red-600 focus:outline-none transition duration-200"
                    >
                        Verify OTP
                    </button>
                </form>

                {/* Back to Login */}
                <div className="text-center mt-6">
                    <a href="login.html" className="text-sm text-gray-500 hover:text-red-500">
                        &larr; Return to the login screen
                    </a>
                </div>
            </div>
        </div>
    );
};

export default OTP;
