import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { format, isSameDay } from "date-fns";
import { GoSearch } from "react-icons/go";
import { IoMdClose, IoMdMic, IoMdSend } from "react-icons/io";
import { addChatObj } from "../features/slices/chatBoxSlice";
import { getAllChatByContact } from "../utils/getAllChatByContact";
import "../styles/chat.css";

const Chat = () => {
  const dispatch = useDispatch();
  const currentContact = useSelector((state) => state?.currentContact);
  const chats = useSelector((state) => state?.chats);
  const [message, setMessage] = useState("");

  const allContactsChats = getAllChatByContact(chats);
  const currentChat = allContactsChats[currentContact?.name];

  const handleSendMessage = (e) => {
    if (message !== "") {
      let sendObj = {
        contactName: currentContact?.name,
        status: "sent",
        time: new Date(),
        message,
      };
      dispatch(addChatObj(sendObj));
      setMessage((prevMessage) => "");
    }
  };

  return (
    <div className="chat-main-container">
      <div className="chat-header-container">
        <div className="flex justify-between items-center">
          <div className="flex">
            <div className="chat-header-profile-pic-container">
              <img
                src={currentContact?.profilePic}
                alt="profile-pic"
                className="profile-img"
              />
            </div>
            <div>
              <h3 className="profile-name text-[24px]">
                {currentContact?.name}
              </h3>

              {currentContact?.isOnline === true ? (
                <div className="flex items-center">
                  <div className="chat-online-indicator"></div>
                  <div>Online</div>
                </div>
              ) : (
                <div>Offine</div>
              )}
            </div>
          </div>
          <div>
            <GoSearch color="#417DD9" size="30px" />
          </div>
        </div>
      </div>

      <div className="chat-body-container">
        {currentChat?.map((item, index) => {
          const prevMessage = currentChat[index - 1];
          const isSameDate = prevMessage
            ? isSameDay(new Date(prevMessage.time), new Date(item.time))
            : false;
          return (
            <React.Fragment key={item.id}>
              {isSameDate ? null : (
                <div className="time-text text-center mb-3">
                  {format(new Date(item.time), "MMM dd, yyyy")}
                </div>
              )}
              {item.status === "sent" ? (
                <div className="send-container" key={item.id}>
                  <div className="flex flex-col justify-center me-[30px]">
                    <p className="time-text">{format(item.time, "HH:mm")}</p>
                  </div>
                  <div className="msg-container send-msg-container">
                    <p className="chat-message">{item.message}</p>
                  </div>
                </div>
              ) : item.status === "received" ? (
                <div className="receive-container" key={item.id}>
                  <div className="chat-body-profile-pic-container">
                    <img
                      src={currentContact?.profilePic}
                      alt="profile-pic"
                      className="profile-img"
                    />
                  </div>
                  <div className="msg-container">
                    <p className="chat-message">{item.message}</p>
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="time-text">{format(item.time, "HH:mm")}</p>
                  </div>
                </div>
              ) : (
                <div key={item.id}></div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      <div className="chat-message-container">
        <div className="chat-button-icon-container border-[1px] border-[#EEF0F7]">
          <IoMdClose size={20} color="#343434" />
        </div>
        <div className="chat-button-icon-container bg-[#F6F6F9]">
          <IoMdMic size={20} color="#989FC9" />
        </div>
        <input
          type="text"
          value={message}
          className="message-input"
          placeholder="Type your message..."
          onChange={(e) => setMessage(e.target.value)}
        />
        <div
          className="chat-button-icon-container bg-[#417DD9]"
          onClick={handleSendMessage}
        >
          <IoMdSend size={20} color="#FFFFFF" className="ml-1" />
        </div>
      </div>
    </div>
  );
};

export default Chat;
