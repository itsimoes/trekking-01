import React from "react";
import "./style.scss";
const Home = () => { 

  return (
    <div id="home" className="wrapper home_wrapper">
      <div className="container home_container">
        <div id="home_left_card" className="home_quote slide_in_left">
          <span>* * * * *</span>
          <p>
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            vitae ab magnam amet iste adipisci ipsa nemo."
          </p>
          <span>-FERNANDO NASCIMENTO-</span>
        </div>
        <div className="home_card_wrapper slide_in_right">
          <div className="home_card">
            <h2>MAIS HIKING</h2>
            <h3>Menos Stress</h3>
          </div>
          <a className="home_button">Saiba Mais</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
