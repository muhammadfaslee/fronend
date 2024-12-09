import React, { useState, useEffect } from 'react';
import "../style/register.css";


const RegisterModal = ({isOpen,aqree}) => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInitialClick, setIsInitialClick] = useState(true);

  const handleRegister = async (event) => {
    event.preventDefault();

    if (!fullname || !email || !phoneNumber || !password || !confirmPassword) {
      setResponseMessage('Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      setResponseMessage('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('http://127.0.0.1:8000/user/register/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name_lastname: fullname,
          phone_number: phoneNumber,
          email: email,
          password: password,
        }),
      });

      // const response = {ok:true}
      if (response.ok) {
        const data = await response.json();
        setResponseMessage(data.message);
        await aqree()
        isOpen()
      } else {
        const error = await response.json();
        setResponseMessage(error.detail);
      }
    } catch (error) {
      setResponseMessage('Unable to connect to the server');
    }
  };

  useEffect(() => {
    // Open modal when document is clicked (Optional feature)
    const handleDocumentClick = () => {
      if (isInitialClick) {
        setIsModalOpen(true); // เปิด Modal ครั้งแรก
        setIsInitialClick(false); // ปิดการตรวจจับคลิกครั้งแรก
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [isInitialClick]);

  return (
    <div onClick={isOpen}> 
      {/* {isModalOpen && ( */}
        <div 
          style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 50,
            display: 'flex', justifyContent: 'center', alignItems: 'center'
          }}
          onClick={() => setIsModalOpen(false)}
        >
          <div
            style={{
              backgroundColor: 'white', padding: '20px', borderRadius: '8px', width: '400px', position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={isOpen}
              style={{
                position: 'absolute', top: '10px', right: '10px', background: 'none', border: 'none',
                cursor: 'pointer', fontSize: '20px', color: '#ccc'
              }}
            >
              ×
            </button>

            <h2 style={{ textAlign: 'center', color: '#e53935' }}>Register</h2>
            <p style={{ textAlign: 'center', color: '#555' }}>Create your account</p>

            <form onSubmit={handleRegister}>
              <div>
                <label htmlFor="fullname" style={{ display: 'block', marginBottom: '5px' }}>Full Name</label>
                <input
                  type="text"
                  id="fullname"
                  placeholder="Full Name"
                  style={{
                    width: '100%', padding: '10px', marginBottom: '15px', borderRadius: '4px', border: '1px solid #ddd'
                  }}
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  style={{
                    width: '100%', padding: '10px', marginBottom: '15px', borderRadius: '4px', border: '1px solid #ddd'
                  }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="phoneNumber" style={{ display: 'block', marginBottom: '5px' }}>Phone Number</label>
                <input
                  type="text"
                  id="phoneNumber"
                  placeholder="Phone Number"
                  style={{
                    width: '100%', padding: '10px', marginBottom: '15px', borderRadius: '4px', border: '1px solid #ddd'
                  }}
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  style={{
                    width: '100%', padding: '10px', marginBottom: '15px', borderRadius: '4px', border: '1px solid #ddd'
                  }}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="confirmPassword" style={{ display: 'block', marginBottom: '5px' }}>Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  style={{
                    width: '100%', padding: '10px', marginBottom: '15px', borderRadius: '4px', border: '1px solid #ddd'
                  }}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>

              {responseMessage && (
                <div>
                  <span style={{ fontSize: '14px', color: responseMessage.includes('Unable') ? 'red' : 'green' }}>
                    {responseMessage}
                  </span>
                </div>
              )}

              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                <button
                  type="submit"
                  style={{
                    width: '48%', padding: '10px', backgroundColor: '#e53935', color: 'white', border: 'none',
                    borderRadius: '4px', cursor: 'pointer'
                  }}
                >
                  Register
                </button>
                <button
                 onClick={()=> handleRegister}
                  style={{
                    width: '48%', textAlign: 'center', padding: '10px', backgroundColor: '#f0f0f0', color: '#333',
                    textDecoration: 'none', borderRadius: '4px', display: 'block', lineHeight: '24px'
                  }}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      {/* )} */}
    </div>
  );
};

export default RegisterModal;
