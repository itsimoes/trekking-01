import React from "react";
import "./style.scss";
// import Popover from '@mui/material/Popover';

const Experience = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "experience_card_expanded" : undefined;
  return (
    <div className="wrapper experience_wrapper">
      <div className="container experience_container">
        <h3>Choose Your Level</h3>
        <div className="experience_cards_wrapper">
          <div className="experience_card">
            <h4>Iniciante</h4>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              fugiat recusandae libero consectetur alias fugit consequatur
              provident.
            </p>
            <a className="experience_button" >
              Saiba Mais
            </a>
          </div>
          <div className="experience_card">
            <h4>Intermediário</h4>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              fugiat recusandae libero consectetur alias fugit consequatur
              provident.
            </p>
            <a className="experience_button">Saiba Mais</a>
          </div>
          <div className="experience_card">
            <h4>Experiente</h4>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              fugiat recusandae libero consectetur alias fugit consequatur
              provident.
            </p>
            <a className="experience_button">Saiba Mais</a>
          </div>
          {/* <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <div id="experience_card_expanded">
            <h4>Iniciante</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
              necessitatibus. Iste ducimus qui possimus omnis dolore,
              consequatur quia praesentium maiores corrupti repellendus ea quae
              eveniet vitae odio. Adipisci, nostrum culpa! Lorem ipsum, dolor
              sit amet consectetur adipisicing elit. Ipsa enim dolores in
              accusantium perferendis perspiciatis similique eligendi molestias,
              nulla dolorum beatae quaerat hic minus itaque amet adipisci. Nam,
              fuga dolorem?
            </p>
            </div>
          </Popover> */}
        </div>
      </div>
    </div>
  );
};

export default Experience;
