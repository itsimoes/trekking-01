import React from "react";
import "./style.scss";

//images
import GalleryPic1 from "../../assets/gallery_pic_1.png"
import GalleryPic2 from "../../assets/gallery_pic_2.png"
import GalleryPic3 from "../../assets/gallery_pic_3.png"
import GalleryPic4 from "../../assets/gallery_pic_4.png"
import GalleryPic5 from "../../assets/gallery_pic_5.png"
import GalleryPic6 from "../../assets/gallery_pic_6.png"
import GalleryPic7 from "../../assets/gallery_pic_7.png"
import GalleryPic8 from "../../assets/gallery_pic_8.png"
import GalleryPic9 from "../../assets/gallery_pic_9.png"

const Gallery = () => {
  return (
  <div id="gallery" className="wrapper gallery_wrapper">
    <div className="container gallery_container">
        <h3>Galeria</h3>
        <div className="gallery_photos_container">
            <img src={GalleryPic1} alt="" />
            <img src={GalleryPic2} alt="" />
            <img src={GalleryPic3} alt="" />
            <img src={GalleryPic4} alt="" />
            <img src={GalleryPic5} alt="" />
            <img src={GalleryPic6} alt="" />
            <img src={GalleryPic7} alt="" />
            <img src={GalleryPic8} alt="" />
            <img src={GalleryPic9} alt="" />
        </div>
        <a className="gallery_button">MAIS FOTOS</a>
    </div>
  </div>
    );
};

export default Gallery;
