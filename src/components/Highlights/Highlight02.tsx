import React from "react";
import "./style.scss";

import Highlight02Detail from "../../assets/highlight01_detail.png";

const Highlight02 = () => {
  return (
    <div className="wrapper highlights_wrapper">
      <div className="container highlight02_container">
        <div className="highlight02_text_container">
          <h2>
            NOSSA <span>JORNADA</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
            eligendi. Cum, quod magnam hic quae aliquam alias omnis? Expedita
            eveniet obcaecati qui voluptas illo debitis tempore libero cum,
            culpa commodi.
          </p>
          <div className="highlight02_text_bottom_card">
            <h4>Hiking</h4>
            <h4>Diversão</h4>
            <h4>Saúde</h4>
          </div>
        </div>
      </div>
      <img src={Highlight02Detail} alt="" className="highlight02_detail" />
    </div>
  );
};

export default Highlight02;
