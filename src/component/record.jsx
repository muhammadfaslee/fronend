import React, { useState, useEffect, useRef } from "react";
import "../style/record_voice.css";
import { Link } from "react-router-dom";
import "../index.css";

const CallVoiceRecord = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioChunks, setAudioChunks] = useState([]);
  const [audioBlob, setAudioBlob] = useState(null);
  const [audioUrl, setAudioUrl] = useState("");
  const [audio, setAudio] = useState(null);
  const [timer, setTimer] = useState("00:00.00 น.");
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState("00:00");

  const mediaRecorderRef = useRef(null);
  const timerIntervalRef = useRef(null);
  const progressIntervalRef = useRef(null);
  const startTimeRef = useRef(null);

  // Utility Functions
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 100);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const updateTimer = () => {
    if (!startTimeRef.current) return;
    const now = new Date();
    const diff = now - startTimeRef.current;
    const minutes = Math.floor(diff / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);
    const milliseconds = Math.floor((diff % 1000) / 10);

    setTimer(
      `${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}.${milliseconds.toString().padStart(2, "0")} น.`
    );
  };

  // Recording Functions
  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mediaRecorder = new MediaRecorder(stream);

    mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        setAudioChunks((prev) => [...prev, event.data]);
      }
    };

    mediaRecorder.onstop = () => {
      const newAudioBlob = new Blob(audioChunks, { type: "audio/webm" });
      const newAudioUrl = URL.createObjectURL(newAudioBlob);
      const newAudio = new Audio(newAudioUrl);

      setAudioBlob(newAudioBlob);
      setAudioUrl(newAudioUrl);
      setAudio(newAudio);

      // รอเสียงโหลดจนเสร็จ
      newAudio.onloadedmetadata = () => {
        setProgress(0);
        setDuration(formatTime(newAudio.duration));
      };
    };

    mediaRecorder.start();
    setAudioChunks([]);
    mediaRecorderRef.current = mediaRecorder;

    startTimeRef.current = new Date();
    timerIntervalRef.current = setInterval(updateTimer, 10);
    setIsRecording(true);
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
    }

    clearInterval(timerIntervalRef.current); // ล้าง Timer
    setTimer("00:00.00 น.");
    setIsRecording(false);
  };

  const handleRecordClick = () => {
    isRecording ? stopRecording() : startRecording();
  };

  // Playback Functions
  const handlePlayClick = () => {
    if (!audio) {
      alert("ไม่มีเสียงที่บันทึกไว้");
      return;
    }
  
    if (audio.paused) {
      audio.play();
      progressIntervalRef.current = setInterval(() => {
        setProgress(audio.currentTime);
      }, 100);
      audio.onended = () => {
        clearInterval(progressIntervalRef.current);
        setProgress(0);
      };
    } else {
      audio.pause();
      clearInterval(progressIntervalRef.current);
    }
  };  

  const handleProgressChange = (e) => {
    if (audio) {
      audio.currentTime = e.target.value;
      setProgress(e.target.value);
    }
  };

  const handleReset = () => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
    clearInterval(timerIntervalRef.current);
    clearInterval(progressIntervalRef.current);
  
    setAudio(null);
    setAudioChunks([]);
    setAudioBlob(null);
    setAudioUrl("");
    setTimer("00:00.00 น.");
    setProgress(0);
    setDuration("00:00");
    mediaRecorderRef.current = null;
    setIsRecording(false);
  };  

  return (
    <div className="bg-gray-100 min-h-screen">
      <header id="navbar"></header>

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

      <main className="container mx-auto font-prompt">
        <div className="card bg-white w-[90%] min-w-screen-xl mb-32 p-10 shadow-2xl rounded-[50px] mx-auto">
          <div className="flex justify-center  items-center space-x-6">
            <h1 className="text-4xl font-bold text-transparent bg-gradient-to-r from-[#EB4335] to-[#FF7C30] bg-clip-text py-3">
              Record
            </h1>
            <div className="flex-grow h-[50px] rounded-[50px] bg-[#F1F5F9] shadow-inner px-2 py-3">
              <div className="inline-text flex items-center space-x-10 justify-between px-4">
                <h1 className="text-[18px] text-gray-400 mr-6">1/50</h1>
                <p className="text-center text-[20px]"> สวัสดีครับ</p>
                <div className="status-done bg-[#b9ffe1] rounded-[50px] p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokelinecap="round"
                      strokelinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div class="flex justify-center space-x-2">
              <div className="flex items-center justify-center w-12 h-12 bg-white-500 shadow-lg rounded-full border-2 border-[#FF7C30] text-[#FF7C30]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="5"
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              </div>
              <div className="flex items-center justify-center w-12 h-12 text-transparent bg-gradient-to-r from-[#EB4335] to-[#FF7C30] bg-clip-text] text-white rounded-full shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="5"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              <Link to="/listone">
              <div className="items-center w-50 h-12 border-2 border-[#FF7C30] text-red-500 rounded-[50px] shadow-lg px-5 py-2 font-prompt">
                <h1 className="text-lg font-bold text-transparent bg-gradient-to-r from-[#EB4335] to-[#FF7C30] bg-clip-text flex-shrink-0">
                  ดูสคริปทั้งหมด
                </h1>
              </div>
              </Link>
            </div>
          </div>
          <div className="record-container mt-6">
            <div className="control-button" onClick={handleReset}>
              {/* <button onClick={handleReset}> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
              {/* </button> */}
            </div>
            <button onClick={handleRecordClick}> 
            <div className="record-button" >
              {isRecording ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="red"
                  class="size-16"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 0 1 9 14.437V9.564Z"
                  />
                </svg>
              ) : (
                <svg
                  className="mic-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                  <line x1="12" y1="19" x2="12" y2="23"></line>
                  <line x1="8" y1="23" x2="16" y2="23"></line>
                </svg>
              )}
            </div>
            </button>
            <div className="control-button" onClick={handlePlayClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 7.5V18M15 7.5V18M3 16.811V8.69c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811Z"
                />
              </svg>
            </div>
          </div>
          {/* lControl Labels*/}
          <div className="control-labels">
            <span>รีเซต</span>
            <span>อัดเสียง</span>
            <span>ฟังเสียง</span>
          </div>
          <div className="timer">{timer}</div>
          <div className="text-center">
            <div className="audio-player">
              <div>
                {" "}
                <span>{formatTime(progress)}</span>
              </div>
              <input
                type="range"
                value={progress}
                min="0"
                max={audio?.duration || 0}
                step="0.01"
                onChange={handleProgressChange}
              />
            </div>
            <div>
              {" "}
              <span>{duration}</span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <Link to="">
              <div className="flex justify-between  items-center h-12 border-2 border-[#FF7C30] text-red-500 rounded-[50px] shadow-md px-3 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                  />
                </svg>
                <p>ตัวอย่างเสียง</p>
              </div>
            </Link>
            <Link to="/listtwo">
              <div className="flex justify-between  items-center h-12 border-2 border-[#FF7C30] text-red-500 rounded-[50px] shadow-md px-3 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
                  />
                </svg>
                <p>ประวัติการบันทึกเสียง</p>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CallVoiceRecord;