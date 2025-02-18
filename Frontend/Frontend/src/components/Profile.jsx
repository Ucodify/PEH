import React from "react";
import LiveChat from "./LiveChat.jsx";
import Livechatdrawerbutton from "./Livechatdrawerbutton.jsx";

const DetailsPage = ({ item }) => {
  return (
    <>
      <div className="flex w-full flex-col pt-48">
        <div className="divider divider-start ms-14">
          <div className="">
            <div className="w-48 rounded">
              <img src="/bg.jpg" alt="Lawyer" width={200} className="h-64" />
              {/* <img src={item.image} alt="Lawyer" width={200} className="h-64" /> */}
            </div>
          </div>
        </div>
        <div className="divider me-60">
          <div>
            {/* <h4 className="text-3xl font-bold">{item.name}</h4>
            <h5 className="text-lg">{item.title}</h5>
            <h6 className="text-lg">{item.category}</h6> */}
            <div className="text-lg">Experience</div>
            <p>Rating</p>
          </div>
        </div>

        <div className="divider divider-end relative pe-36">
          <p className="absolute bottom-40 right-20">
            Address- City, State, Country, Zip Lcoation of office
          </p>{" "}
          <button className="btn btn-success p-2 text-center ">
            Set online meeting
          </button>
          <button className="btn btn-success p-2 text-center ">
            Make an appointment
          </button>
          <button className="btn btn-success p-2 text-center ">Hire Now</button>
        </div>
      </div>
      {/* Availability Bar */}
      <div className="flex">
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            {/* Page content here */}
            <label
              htmlFor="my-drawer-2"
              className="btnbtn-primary drawer-button lg:hidden"
            >
              Availability
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
              {/* Sidebar content here */}
              <li>
                <a>Select your available slot for meeting appointment</a>
              </li>
              <li>
                <a>11:00 AM-12:00 PM </a>
              </li>
              <li>
                <a>1:00 PM-2:00 PM</a>
              </li>
              <li>
                <a>3:00 PM-4:00 PM </a>
              </li>
              <li>
                <a>5:00 PM-6:00 PM</a>
              </li>
              <li>
                <a>7:00 AM-8:00 PM </a>
              </li>
              <li>
                <a>9:00 PM-10:00 PM</a>
              </li>
              <li>
                <a>11:00 PM-12:00 AM </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-start start-0">
          {" "}
          <div className="pe-96 ms-20 bg-dark relative left mt-20 justify-start">
            Brief Description of Lawyer
            <p>Qualification</p>
            <p>Journey</p>
            <p>Success Story</p>
            <p>Popular public cases</p>
            <p className="text-sm italic text-green-500">
              The development of the printing press by Johannes Gutenberg in the
              15th century revolutionized the distribution of knowledge, making
              books more affordable and accessible to a wider audience. This
              facilitated the spread of new ideas and helped to lay the
              groundwork for the Scientific Revolution.
            </p>
          </div>
        </div>
      </div>
      <LiveChat />
      {/* <Livechatdrawerbutton /> */}
    </>
  );
};

export default DetailsPage;
