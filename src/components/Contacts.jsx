import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Maria from "../assets/images/profilePics/Maria.png";
import { GoSearch } from "react-icons/go";
import GoodMorning from "../assets/images/iconImages/GoodMorning.png";
import SaveAdd from "../assets/images/iconImages/save-add.png";
import "../styles/contacts.css";
import SegmentedControl from "./SegmentedControl";

const Contacts = () => {
  const contacts = useSelector((state) => state.contacts);
  const unReadContacts = contacts?.filter((contact) => contact.unreadCount > 0);

  const [contactData, setContactData] = useState(contacts);
  const [activeTab, setActiveTab] = useState("all");

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
    console.log("------------", item);
  };

  useEffect(() => {
    activeTab === "all"
      ? setContactData(contacts)
      : setContactData(unReadContacts);
  }, [activeTab]);

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
            placeholder="People, groups, messeages..."
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
                              Typing...
                            </p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <p className="preview-text text-[12px] mt-1">9:13 AM</p>
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
                return (
                  <div key={contact.id} className="contact-box">
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
                              Typing...
                            </p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <p className="preview-text text-[12px] mt-1">9:13 AM</p>
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
