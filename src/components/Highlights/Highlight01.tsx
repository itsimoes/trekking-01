import React from "react";
import "./style.scss"

import Highlight01Detail from "../../assets/highlight01_detail.png";

const Highlight01 = () => {
  return (
    <div className="wrapper highlights_wrapper">
        <img src={Highlight01Detail} alt="" className="highlight01_detail"/>
      <div className="container highlight01_container">
        <h2>1000+ Rotas. 1 milhão de Hikers. Momentos Inesquecíveis.</h2>
        <div className="highlight01_card">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, nihil
            quia, cumque repellat accusamus tempore obcaecati illum aperiam a
            nesciunt sint ratione quod voluptas alias ab.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Highlight01;
