import React from "react";

const PhtoListItem = ({ photo }) => {
  return (
    <div>
      <img className="h-20 w-20" src={photo.url} alt="random photo" />
    </div>
  );
};

export default PhtoListItem;
