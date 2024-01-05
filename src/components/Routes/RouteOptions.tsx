import React from "react";
import "./style.scss";

import Route1img from "../../assets/routeOptions_route1_img.png"
import Route2img from "../../assets/routeOptions_route2_img.png"
import Route3img from "../../assets/routeOptions_route3_img.png"

const RouteOptions = () => {
  return (
    <div id="routes" className="wrapper routeOptions_wrapper">
      <div className="container routeOptions_container">
        <h2>É hora de</h2>
        <span>HIKING</span>
        <div className="routeOptions_cards_container">
          <div className="routeOptions_card">
            <div className="route_card_title">ROTA 1</div>
            <img src={Route1img} alt="" className="route_card_img" />
            <div className="route_promo">20% OFF</div>
          </div>
          <div className="routeOptions_card">
            <div className="route_card_title">ROTA 2</div>
            <img src={Route2img} alt="" className="route_card_img" />
            <div className="route_promo">20% OFF</div>
          </div>
          <div className="routeOptions_card">
            <div className="route_card_title">ROTA 3</div>
            <img src={Route3img} alt="" className="route_card_img" />
            <div className="route_promo">20% OFF</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouteOptions;
