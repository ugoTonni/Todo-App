import React from "react";
import download from "../images1/to-do-list-apps.png";

export const Home = () => {
  return <>
  <div style={{
      backgroundImage: `url(${download})`,
      width: '100%',
      height: '120vh',
      // margin: '0',
      // padding: '0',
      // backgroundRepeat: 'no-repeat'
    }} 
      className="bg-cover bg-center bg-origin-border"
    >
      <div className="text-center py-4 font-light text-3xl">
        CLick on Main Todo to Start
      </div>
    </div>

  </>};
