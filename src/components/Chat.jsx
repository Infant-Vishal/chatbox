import React from "react";
import { GoSearch } from "react-icons/go";
import { IoMdClose, IoMdMic, IoMdSend } from "react-icons/io";
import Maria from "../assets/images/profilePics/Maria.png";
import "../styles/chat.css";

const Chat = () => {
  return (
    <div className="chat-main-container">
      <div className="chat-header-container">
        <div className="flex justify-between items-center">
          <div className="flex">
            <div className="chat-header-profile-pic-container">
              <img src={Maria} alt="profile-pic" className="profile-img" />
            </div>
            <div>
              <h3 className="profile-name text-[24px]">Maria Luisa</h3>
              <div className="flex items-center">
                <div className="chat-online-indicator"></div>
                <div>Online</div>
              </div>
            </div>
          </div>
          <div>
            <GoSearch color="#417DD9" size="30px" />
          </div>
        </div>
      </div>

      <div className="chat-body-container">
        <div className="receive-container">
          <div className="chat-body-profile-pic-container">
            <img src={Maria} alt="profile-pic" className="profile-img" />
          </div>
          <div className="msg-container">
            <p className="chat-message">
              Hello, how are you? Let's go on vacation, I have exciting vacation
              plans!
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <p className="time-text">08:12</p>
          </div>
        </div>

        <div className="send-container">
          <div className="flex flex-col justify-center me-[30px]">
            <p className="time-text">08:30</p>
          </div>
          <div className="msg-container send-msg-container">
            <p className="chat-message">
              I'm good, let's go on vacation, what's the plan?
            </p>
          </div>
        </div>

        {/* additional for ui */}
        <div className="receive-container">
          <div className="chat-body-profile-pic-container">
            <img src={Maria} alt="profile-pic" className="profile-img" />
          </div>
          <div className="msg-container">
            <p className="chat-message">What do you think??</p>
          </div>
          <div className="flex flex-col justify-center">
            <p className="time-text">08:12</p>
          </div>
        </div>

        <div className="send-container">
          <div className="flex flex-col justify-center me-[30px]">
            <p className="time-text">08:30</p>
          </div>
          <div className="msg-container send-msg-container">
            <p className="chat-message">Wow! Awesome! 😍😍</p>
          </div>
        </div>
        <div className="receive-container">
          <div className="chat-body-profile-pic-container">
            <img src={Maria} alt="profile-pic" className="profile-img" />
          </div>
          <div className="msg-container">
            <p className="chat-message">What do you think??</p>
          </div>
          <div className="flex flex-col justify-center">
            <p className="time-text">08:12</p>
          </div>
        </div>

        <div className="send-container">
          <div className="flex flex-col justify-center me-[30px]">
            <p className="time-text">08:30</p>
          </div>
          <div className="msg-container send-msg-container">
            <p className="chat-message">Wow! Awesome! 😍😍</p>
          </div>
        </div>
        <div className="receive-container">
          <div className="chat-body-profile-pic-container">
            <img src={Maria} alt="profile-pic" className="profile-img" />
          </div>
          <div className="msg-container">
            <p className="chat-message">What do you think??</p>
          </div>
          <div className="flex flex-col justify-center">
            <p className="time-text">08:12</p>
          </div>
        </div>

        <div className="send-container">
          <div className="flex flex-col justify-center me-[30px]">
            <p className="time-text">08:30</p>
          </div>
          <div className="msg-container send-msg-container">
            <p className="chat-message">Wow! Awesome! 😍😍</p>
          </div>
        </div>
        <div className="receive-container">
          <div className="chat-body-profile-pic-container">
            <img src={Maria} alt="profile-pic" className="profile-img" />
          </div>
          <div className="msg-container">
            <p className="chat-message">What do you think??</p>
          </div>
          <div className="flex flex-col justify-center">
            <p className="time-text">08:12</p>
          </div>
        </div>

        <div className="send-container">
          <div className="flex flex-col justify-center me-[30px]">
            <p className="time-text">08:30</p>
          </div>
          <div className="msg-container send-msg-container">
            <p className="chat-message">Wow! Awesome! 😍😍</p>
          </div>
        </div>
        <div className="receive-container">
          <div className="chat-body-profile-pic-container">
            <img src={Maria} alt="profile-pic" className="profile-img" />
          </div>
          <div className="msg-container">
            <p className="chat-message">What do you think??</p>
          </div>
          <div className="flex flex-col justify-center">
            <p className="time-text">08:12</p>
          </div>
        </div>

        <div className="send-container">
          <div className="flex flex-col justify-center me-[30px]">
            <p className="time-text">08:30</p>
          </div>
          <div className="msg-container send-msg-container">
            <p className="chat-message">Wow! Awesome! 😍😍</p>
          </div>
        </div>
        <div className="receive-container">
          <div className="chat-body-profile-pic-container">
            <img src={Maria} alt="profile-pic" className="profile-img" />
          </div>
          <div className="msg-container">
            <p className="chat-message">What do you think??</p>
          </div>
          <div className="flex flex-col justify-center">
            <p className="time-text">08:12</p>
          </div>
        </div>

        <div className="send-container">
          <div className="flex flex-col justify-center me-[30px]">
            <p className="time-text">08:30</p>
          </div>
          <div className="msg-container send-msg-container">
            <p className="chat-message">Wow! Awesome! 😍😍</p>
          </div>
        </div>
        <div className="receive-container">
          <div className="chat-body-profile-pic-container">
            <img src={Maria} alt="profile-pic" className="profile-img" />
          </div>
          <div className="msg-container">
            <p className="chat-message">What do you think??</p>
          </div>
          <div className="flex flex-col justify-center">
            <p className="time-text">08:12</p>
          </div>
        </div>

        <div className="send-container">
          <div className="flex flex-col justify-center me-[30px]">
            <p className="time-text">08:30</p>
          </div>
          <div className="msg-container send-msg-container">
            <p className="chat-message">Wow! Awesome! 😍😍</p>
          </div>
        </div>
      </div>

      {/* Message container*/}
      <div className="chat-message-container">
        <div className="chat-button-icon-container border-[1px] border-[#EEF0F7]">
          <IoMdClose size={20} color="#343434" />
        </div>
        <div className="chat-button-icon-container bg-[#F6F6F9]">
          <IoMdMic size={20} color="#989FC9" />
        </div>
        <input
          type="text"
          className="message-input"
          placeholder="Type your message..."
        />
        <div className="chat-button-icon-container bg-[#417DD9]">
          <IoMdSend size={20} color="#FFFFFF" className="ml-1" />
        </div>
      </div>
    </div>
  );
};

export default Chat;
