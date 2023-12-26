import React from "react";
import "./style.scss";

const Videos = () => {
  return (
    <div className="wrapper videos_wrapper">
      <div className="container videos_container">
        <div className="videos_content_container">
          <div className="videos_video_card">
            <h3>LOREM IPSUM</h3>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/L-WauCNabfI?si=rk3tGRau5KhqEJUi"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              earum dolore fugit deserunt sequi nisi quidem.
            </p>
          </div>
          <div className="videos_video_title_container">
            <h2 className="videos_title">NOSSA</h2>
            <span>JORNADA</span>
          </div>
        </div>
          <a className="videos_button">MAIS VIDEOS</a>
      </div>
    </div>
  );
};

export default Videos;
