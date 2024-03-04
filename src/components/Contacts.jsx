import React, { useState } from "react";
import Maria from "../assets/images/profilePics/Maria.png";
import { GoSearch } from "react-icons/go";
import GoodMorning from "../assets/images/iconImages/GoodMorning.png";
import SaveAdd from "../assets/images/iconImages/save-add.png";
import "../styles/contacts.css";
import SegmentedControl from "./SegmentedControl";

const Contacts = () => {
  const [activeTab, setActiveTab] = useState("all");

  const handleTabSelect = (tab) => {
    setActiveTab(tab);
  };

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
        {/* {activeTab === "all" ? <div>All </div> : <div>Unread</div>} */}
      </div>

      <div className="mb-5">
        <h3 className="preview-text mb-4">FAVORITES</h3>

        <div className="contact-box">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row">
              <div className="contact-profile-img-container">
                <img src={Maria} alt="contactImg" className="profile-img" />
              </div>

              <div>
                <h2 className="profile-name mb-1">Maria Luisa</h2>
                <div className="flex flex-row">
                  <p className="preview-text text-[14px]">Typing...</p>
                </div>
              </div>
            </div>
            <div>
              <p className="preview-text text-[12px] mt-1">9:13 AM</p>
              <div className="flex justify-end">
                <div className="unread-count-container">
                  <p className="unread-count">8</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-5">
        <h3 className="preview-text mb-4">CHATS</h3>
        <div className="contact-box">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row">
              <div className="contact-profile-img-container">
                <img src={Maria} alt="contactImg" className="profile-img" />
              </div>

              <div>
                <h2 className="profile-name mb-1">Maria Luisa</h2>
                <div className="flex flex-row">
                  <p className="preview-text text-[14px]">Typing...</p>
                </div>
              </div>
            </div>
            <div>
              <p className="preview-text text-[12px] mt-1">9:13 AM</p>
              <div className="flex justify-end">
                <div className="unread-count-container">
                  <p className="unread-count">18</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-box">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row">
              <div className="contact-profile-img-container">
                <img src={Maria} alt="contactImg" className="profile-img" />
              </div>

              <div>
                <h2 className="profile-name mb-1">Maria Luisa</h2>
                <div className="flex flex-row">
                  <p className="preview-text text-[14px]">Typing...</p>
                </div>
              </div>
            </div>
            <div>
              <p className="preview-text text-[12px] mt-1">9:13 AM</p>
              <div className="flex justify-end">
                <div className="unread-count-container">
                  <p className="unread-count">18</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-box">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row">
              <div className="contact-profile-img-container">
                <img src={Maria} alt="contactImg" className="profile-img" />
              </div>

              <div>
                <h2 className="profile-name mb-1">Maria Luisa</h2>
                <div className="flex flex-row">
                  <p className="preview-text text-[14px]">Typing...</p>
                </div>
              </div>
            </div>
            <div>
              <p className="preview-text text-[12px] mt-1">9:13 AM</p>
              <div className="flex justify-end">
                <div className="unread-count-container">
                  <p className="unread-count">18</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-box">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row">
              <div className="contact-profile-img-container">
                <img src={Maria} alt="contactImg" className="profile-img" />
              </div>

              <div>
                <h2 className="profile-name mb-1">Maria Luisa</h2>
                <div className="flex flex-row">
                  <p className="preview-text text-[14px]">Typing...</p>
                </div>
              </div>
            </div>
            <div>
              <p className="preview-text text-[12px] mt-1">9:13 AM</p>
              <div className="flex justify-end">
                <div className="unread-count-container">
                  <p className="unread-count">18</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-box">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row">
              <div className="contact-profile-img-container">
                <img src={Maria} alt="contactImg" className="profile-img" />
              </div>

              <div>
                <h2 className="profile-name mb-1">Maria Luisa</h2>
                <div className="flex flex-row">
                  <p className="preview-text text-[14px]">Typing...</p>
                </div>
              </div>
            </div>
            <div>
              <p className="preview-text text-[12px] mt-1">9:13 AM</p>
              <div className="flex justify-end">
                <div className="unread-count-container">
                  <p className="unread-count">18</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-box">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row">
              <div className="contact-profile-img-container">
                <img src={Maria} alt="contactImg" className="profile-img" />
              </div>

              <div>
                <h2 className="profile-name mb-1">Maria Luisa</h2>
                <div className="flex flex-row">
                  <p className="preview-text text-[14px]">Typing...</p>
                </div>
              </div>
            </div>
            <div>
              <p className="preview-text text-[12px] mt-1">9:13 AM</p>
              <div className="flex justify-end">
                <div className="unread-count-container">
                  <p className="unread-count">18</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-box">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row">
              <div className="contact-profile-img-container">
                <img src={Maria} alt="contactImg" className="profile-img" />
              </div>

              <div>
                <h2 className="profile-name mb-1">Maria Luisa</h2>
                <div className="flex flex-row">
                  <p className="preview-text text-[14px]">Typing...</p>
                </div>
              </div>
            </div>
            <div>
              <p className="preview-text text-[12px] mt-1">9:13 AM</p>
              <div className="flex justify-end">
                <div className="unread-count-container">
                  <p className="unread-count">18</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-box">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row">
              <div className="contact-profile-img-container">
                <img src={Maria} alt="contactImg" className="profile-img" />
              </div>

              <div>
                <h2 className="profile-name mb-1">Maria Luisa</h2>
                <div className="flex flex-row">
                  <p className="preview-text text-[14px]">Typing...</p>
                </div>
              </div>
            </div>
            <div>
              <p className="preview-text text-[12px] mt-1">9:13 AM</p>
              <div className="flex justify-end">
                <div className="unread-count-container">
                  <p className="unread-count">18</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-box">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row">
              <div className="contact-profile-img-container">
                <img src={Maria} alt="contactImg" className="profile-img" />
              </div>

              <div>
                <h2 className="profile-name mb-1">Maria Luisa</h2>
                <div className="flex flex-row">
                  <p className="preview-text text-[14px]">Typing...</p>
                </div>
              </div>
            </div>
            <div>
              <p className="preview-text text-[12px] mt-1">9:13 AM</p>
              <div className="flex justify-end">
                <div className="unread-count-container">
                  <p className="unread-count">18</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-box">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row">
              <div className="contact-profile-img-container">
                <img src={Maria} alt="contactImg" className="profile-img" />
              </div>

              <div>
                <h2 className="profile-name mb-1">Maria Luisa</h2>
                <div className="flex flex-row">
                  <p className="preview-text text-[14px]">Typing...</p>
                </div>
              </div>
            </div>
            <div>
              <p className="preview-text text-[12px] mt-1">9:13 AM</p>
              <div className="flex justify-end">
                <div className="unread-count-container">
                  <p className="unread-count">18</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
