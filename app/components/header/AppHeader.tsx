import React from "react";

function AppHeader() {
  return (
    <div className="bg-white w-full w-screen">
      {/* Using the image from the public folder */}
      <img
        className="w-24 ml-3"
        src="/images/logo.jpg"
        alt="Board Infinity ogo"
      />
    </div>
  );
}

export default AppHeader;
