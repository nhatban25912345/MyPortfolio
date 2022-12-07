/* eslint-disable jsx-a11y/img-redundant-alt */
import Slider from "react-slick";
import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Project.module.scss";
import { dataDigitalBestSeller } from "./data";
import defaultImg from "../assets/images/default-img.png";

// // import slick-css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/style.css";
import "./css/unicons.css";

const cx = classNames.bind(styles);

function Project({ id }) {
  const [defaultImage, setDefaultImage] = useState({});

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
      linkDefault: defaultImg,
    }));
  };

  return (
    <div id={id} className={cx("wrapper")}>
      <h1 className={cx("title")}>Things I have code</h1>
      <Slider {...settings}>
        {dataDigitalBestSeller.map((item, index) => (
          <div className={cx("card")} key={index}>
            <div className={cx("card-top")}>
              <img
                src={
                  defaultImage[item.title] === item.title
                    ? defaultImage.linkDefault
                    : item.linkImg
                }
                alt={item.title}
                onError={handleErrorImage}
              />
              <h1>{item.title}</h1>
            </div>
            <div className={cx("card-bottom")}>
              <h3>{item.price}</h3>
              <span className={cx("category")}>{item.category}</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Project;
