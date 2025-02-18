import React from "react";
import LiveChat from "./LiveChat.jsx";

const Livechatdrawerbutton = () => {
  return (
    <div>
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-4"
            className="drawer-button btn btn-emerald"
          >
            Live Chat
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          >
            <LiveChat />
          </label>
          <LiveChat />
        </div>
      </div>
    </div>
  );
};

export default Livechatdrawerbutton;
