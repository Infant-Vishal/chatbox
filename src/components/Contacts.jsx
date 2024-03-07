import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Maria from "../assets/images/profilePics/Maria.png";
import { GoSearch } from "react-icons/go";
import GoodMorning from "../assets/images/iconImages/GoodMorning.png";
import SaveAdd from "../assets/images/iconImages/save-add.png";
import "../styles/contacts.css";
import SegmentedControl from "./SegmentedControl";
import { alterCurrentChat } from "../features/slices/chatBoxSlice";
import { getAllChatByContact } from "../utils/getAllChatByContact";
import { format } from "date-fns";

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);
  const chats = useSelector((state) => state.chats);
  const unReadContacts = contacts?.filter((contact) => contact.unreadCount > 0);

  const [contactData, setContactData] = useState(contacts);
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const allContactsChats = getAllChatByContact(chats);

  const favContacts = contactData?.filter(
    (contact) => contact.isFavorite === true
  );
  const normalContacts = contactData?.filter(
    (contact) => contact.isFavorite === false
  );

  const handleTabSelect = (tab) => {
    setActiveTab(tab);
  };

  const handleChangeChat = (e, item) => {
    e.preventDefault();
    dispatch(alterCurrentChat(item));
  };

  useEffect(() => {
    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setActiveTab("all");
    setContactData(filteredContacts);
  }, [searchQuery, contacts]);

  useEffect(() => {
    activeTab === "all"
      ? setContactData(contacts)
      : setContactData(unReadContacts);
  }, [activeTab, contacts]);

  return (
    <div className="contact-main-container">
      <div className="flex flex-row mb-5">
        <div className="contact-header-img-container">
          <img src={Maria} alt="contactImg" className="profile-img" />
          <div className="indicator online"></div>
        </div>

        <div>
          <h2 className="profile-name text-[24px]">Maria Luisa</h2>
          <div className="flex flex-row">
            <p className="preview-text">Good Morning</p>
            <img src={GoodMorning} alt="wishIcon" className="wishes-icon" />
          </div>
        </div>
      </div>

      <div className="flex flex-row mb-5">
        <div className="search-input-container">
          <input
            type="text"
            className="search-input"
            placeholder="People, groups..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <GoSearch className="search-icon" />
        </div>
        <div className="save-container">
          <img src={SaveAdd} alt="save-add" />
        </div>
      </div>

      <div className="mb-5">
        <SegmentedControl activeTab={activeTab} onSelect={handleTabSelect} />
      </div>
      {activeTab === "all" && contactData.length === 0 ? (
        <div className="preview-text text-center">No contact is available</div>
      ) : activeTab === "unread" && contactData.length === 0 ? (
        <div className="preview-text text-center">
          No unread contact is available
        </div>
      ) : (
        <div>
          {favContacts?.length > 0 && (
            <div className="mb-5">
              <h3 className="preview-text mb-4">FAVORITES</h3>

              {favContacts?.map((item) => {
                const latestMsg =
                  allContactsChats[item.name][
                    allContactsChats[item.name].length - 1
                  ];

                return (
                  <div
                    key={item.id}
                    className="contact-box"
                    onClick={(e) => handleChangeChat(e, item)}
                  >
                    <div className="flex flex-row justify-between">
                      <div className="flex flex-row">
                        <div className="contact-profile-img-container">
                          <img
                            src={item.profilePic}
                            alt="contactImg"
                            className="profile-img"
                          />
                        </div>

                        <div>
                          <h2 className="profile-name mb-1">{item.name}</h2>
                          <div className="flex flex-row">
                            <p className="preview-text text-[14px]">
                              {latestMsg?.message?.length > 27
                                ? `${latestMsg?.message?.substring(0, 27)}...`
                                : latestMsg?.message}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <p className="preview-text text-[12px] mt-1">
                          {format(latestMsg.time, "HH:mm")}
                        </p>
                        {item?.unreadCount > 0 && (
                          <div className="flex justify-end">
                            <div className="unread-count-container">
                              <p className="unread-count">{item.unreadCount}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {normalContacts.length > 0 && (
            <div className="mb-5">
              <h3 className="preview-text mb-4">CHATS</h3>
              {normalContacts?.map((contact) => {
                const latestMsg =
                  allContactsChats[contact.name][
                    allContactsChats[contact.name].length - 1
                  ];
                return (
                  <div
                    key={contact.id}
                    className="contact-box"
                    onClick={(e) => handleChangeChat(e, contact)}
                  >
                    <div className="flex flex-row justify-between">
                      <div className="flex flex-row">
                        <div className="contact-profile-img-container">
                          <img
                            src={contact.profilePic}
                            alt="contactImg"
                            className="profile-img"
                          />
                        </div>

                        <div>
                          <h2 className="profile-name mb-1">{contact.name}</h2>
                          <div className="flex flex-row">
                            <p className="preview-text text-[14px]">
                              {latestMsg?.message?.length > 27
                                ? `${latestMsg?.message?.substring(0, 27)}...`
                                : latestMsg?.message}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <p className="preview-text text-[12px] mt-1">
                          {format(latestMsg.time, "HH:mm")}
                        </p>
                        {contact?.unreadCount > 0 && (
                          <div className="flex justify-end">
                            <div className="unread-count-container">
                              <p className="unread-count">
                                {contact.unreadCount}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Contacts;
