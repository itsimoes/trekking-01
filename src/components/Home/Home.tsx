import React from "react";
import "./style.scss";
const Home = () => {
  return (
    <div className="wrapper home_wrapper">
      <div className="container home_container">
        <div className="home_quote">
          <span>* * * * *</span>
          <p>
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            vitae ab magnam amet iste adipisci ipsa nemo."
          </p>
          <span>-FERNANDO NASCIMENTO-</span>
        </div>
        <div className="home_card_wrapper">
          <div className="home_card">
            <h2>MAIS HIKING</h2>
            <h3>Menos Stress</h3>
          </div>
          <a className="home_button">
            Saiba Mais
        </a>
        </div>
        
      </div>
    </div>
  );
};

export default Home;
