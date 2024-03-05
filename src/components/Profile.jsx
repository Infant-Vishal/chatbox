import React from "react";
import { IoIosMore } from "react-icons/io";
import { IoCall, IoSettingsOutline  } from "react-icons/io5";
import { BiSolidMessageDetail } from "react-icons/bi";
import { CiFileOn } from "react-icons/ci";
import { MdOutlineFileDownload } from "react-icons/md";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import Maria from "../assets/images/profilePics/Maria.png";
import Sunset from "../assets/images/sentImages/Sunset.png";
import "../styles/profile.css";

const Profile = () => {
  return (
    <div className="profile-main-container">
      <div className="profile-header">
        <div className="flex flex-col items-center">
          <div className="profile-header-img">
            <img src={Maria} alt="profile-pic" className="profile-img" />
          </div>
          <h3 className="profile-header-name">Robert Luis</h3>
          <div className="flex items-center">
            <div className="profile-online-indicator"></div>
            <p className="profile-online-text text-[14px]">Online Now</p>
          </div>
        </div>

        <div className="header-options-container">
          <div className="header-indv-option-container ">
            <IoCall color="#417DD9" size={20} />
            <p className="profile-online-text text-[12px] mt-2">Call</p>
          </div>

          <div className="header-indv-option-container ">
            <BiSolidMessageDetail color="#417DD9" size={24} />
            <p className="profile-online-text text-[12px] mt-2">Message</p>
          </div>

          <div className="header-indv-option-container">
            <IoIosMore color="#417DD9" size={20} />
            <p className="profile-online-text text-[12px] mt-2">More</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="p-8">
        <div className="mb-6">
          <h4 className="profile-side-headings">Attachments</h4>
          <div className="flex justify-between items-center mb-4">
            <h5 className="attachement-text">Source file</h5>
            <p className="view-all-text">View all</p>
          </div>
          <div>
            <div className="flex mb-3">
              <CiFileOn color="#757575" size={18} />
              <span className="attachement-text ml-3">Poco phone.png</span>
            </div>

            <div className="flex mb-3">
              <MdOutlineFileDownload color="#757575" size={18} />
              <span className="attachement-text ml-3">Play date.mp3</span>
            </div>

            <div className="flex mb-3">
              <CiFileOn color="#757575" size={18} />
              <span className="attachement-text ml-3">Final file.pdf</span>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="profile-side-headings">Picture & Videos</h3>
          <div className="grid grid-cols-3 gap-y-3">
            <img src={Sunset} className="shared-item-preview" />

            <img src={Sunset} className="shared-item-preview" />
            <img src={Sunset} className="shared-item-preview" />
            <img src={Sunset} className="shared-item-preview" />
            <img src={Sunset} className="shared-item-preview" />
            <img src={Sunset} className="shared-item-preview" />
            <img src={Sunset} className="shared-item-preview" />
          </div>
        </div>
        <hr />
        <div className="my-8">
          <div className="flex mb-6 items-center">
            <AiOutlineQuestionCircle color="#757575" size={20} />
            <span className="footer-text">Help</span>
          </div>

          <div className="flex mb-3 items-center">
            <IoSettingsOutline color="#757575" size={20} />
            <span className="footer-text">Settings</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
