import React from "react";
import "./style.scss";

const RouteMap = () => {
  return (
    <div className="wrapper routemap_wrapper">
      <div className="container routemap_container">
        <h3>Rotas de Hiking</h3>
        <div className="routemap_map_card">Mapa aqui...</div>
        <input type="text" className="searchbar" placeholder="Digite sua rota"/>
        {/* <div className="searchbar">Search</div> */}
        <div className="routemap_text_card">
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

export default RouteMap;
