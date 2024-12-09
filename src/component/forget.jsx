import React from "react";

const ForgetPassword = () => {
    return (
        <div className="bg-gray-100 flex items-center justify-center min-h-screen">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full ">
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
                                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                            />
                        </svg>
                    </div>
                </div>

                {/* Title */}
                <h2 className="text-center text-xl font-semibold text-red-500 mb-2">
                    Forget your password?
                </h2>
                <p className="text-center text-gray-600 mb-6">
                    Enter your email to reset it!
                </p>

                {/* Form */}
                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm text-gray-600 mb-1">
                            E-mail
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-red-500 text-white py-2 rounded-lg shadow hover:bg-red-600 focus:outline-none transition duration-200"
                    >
                        Confirm
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

export default ForgetPassword;
