import React, { useState } from "react";
import { useSelector } from "react-redux";
import { IoIosMore } from "react-icons/io";
import { IoCall, IoSettingsOutline } from "react-icons/io5";
import { BiSolidMessageDetail } from "react-icons/bi";
import { CiFileOn } from "react-icons/ci";
import { MdOutlineFileDownload } from "react-icons/md";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import Sunset from "../assets/images/sentImages/Sunset.png";
import AirBalloon from "../assets/images/sentImages/AirBalloon.png";
import Airport from "../assets/images/sentImages/Airport.png";
import HeartIsland from "../assets/images/sentImages/HeartIsland.png";
import HillTop from "../assets/images/sentImages/HillTop.png";
import Island from "../assets/images/sentImages/Island.png";
import WomanChurch from "../assets/images/sentImages/WomanChurch.png";
import "../styles/profile.css";

const Profile = () => {
  const currentContact = useSelector((state) => state?.currentContact);
  const [showAllAttachements, setShowAllAttachements] = useState(false);
  const [showAllImages, setShowAllImages] = useState(false);

  const attachements = [
    {
      icon: <CiFileOn color="#757575" size={18} />,
      name: "Poco phone.png",
    },
    {
      icon: <MdOutlineFileDownload color="#757575" size={18} />,
      name: "Play date.mp3",
    },
    {
      icon: <CiFileOn color="#757575" size={18} />,
      name: "Final file.pdf",
    },
    {
      icon: <MdOutlineFileDownload color="#757575" size={18} />,
      name: "Play date.mp3",
    },
    {
      icon: <CiFileOn color="#757575" size={18} />,
      name: "Final file.pdf",
    },
  ];
  const images = [
    Sunset,
    AirBalloon,
    Airport,
    HeartIsland,
    HillTop,
    Island,
    WomanChurch,
  ];

  const handleViewAttachemnt = () => {
    setShowAllAttachements(!showAllAttachements);
  };

  const toggleImages = () => {
    setShowAllImages(!showAllImages);
  };

  const attachementsToShow = showAllAttachements ? attachements.length : 3;
  const imagesToShow = showAllImages ? images.length : 3;

  return (
    <div className="profile-main-container">
      <div className="profile-header">
        <div className="flex flex-col items-center">
          <div className="profile-header-img">
            <img
              src={currentContact?.profilePic}
              alt="profile-pic"
              className="profile-img"
            />
          </div>
          <h3 className="profile-header-name">{currentContact?.name}</h3>
          {currentContact?.isOnline === true ? (
            <div className="flex items-center">
              <div className="profile-online-indicator"></div>
              <p className="profile-online-text text-[14px]">Online Now</p>
            </div>
          ) : (
            <div className="flex items-center">
              <p className="profile-online-text text-[14px]">Offline</p>
            </div>
          )}
        </div>

        <div className="header-options-container">
          <div className="header-indv-option-container">
            <IoCall color="#417DD9" size={20} />
            <p className="profile-online-text text-[12px] mt-2">Call</p>
          </div>

          <div className="header-indv-option-container">
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
            <p className="view-all-text" onClick={handleViewAttachemnt}>
              {showAllAttachements ? "Show less" : "View all"}
            </p>
          </div>
          <div>
            {attachements.slice(0, attachementsToShow)?.map((attachement) => (
              <div className="flex mb-3">
                {attachement.icon}
                <span className="attachement-text ml-3">
                  {attachement.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h3 className="profile-side-headings">Picture & Videos</h3>
          <div className="grid grid-cols-3 gap-y-3">
            {images.slice(0, imagesToShow).map((image, index) => (
              <div key={index} className="img-wrapper">
                <img
                  src={image}
                  className="shared-item-preview"
                  alt="shared-img"
                />

                {index === 2 && imagesToShow === 3 && (
                  <div
                    className="extend-img-wrap"
                    onClick={
                      index === imagesToShow - 1 ? toggleImages : undefined
                    }
                  >
                    +4
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <hr />
        <div className="my-8">
          <div className="flex mb-6 items-center cursor-pointer">
            <AiOutlineQuestionCircle color="#757575" size={20} />
            <span className="footer-text">Help</span>
          </div>

          <div className="flex mb-3 items-center cursor-pointer">
            <IoSettingsOutline color="#757575" size={20} />
            <span className="footer-text">Settings</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
