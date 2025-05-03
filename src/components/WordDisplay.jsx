import React from "react";

const WordDisplay = ({ cuvant, litereGhicite }) => {
  return (
    <div className="word">
      {cuvant.split("").map((litera, index) => (
        <span key={index} className="litera">
          {litereGhicite.includes(litera) ? litera : "_"}
        </span>
      ))}
      </div>
  );
};
  export default WordDisplay;