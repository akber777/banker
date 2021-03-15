import React from "react";

// css

import "./css/_slider.scss";

// tools

// sider
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";

import { NavLink } from "react-router-dom";

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

// tools

import datetimeDifference from "datetime-difference";

// proptypes
import PropTypes from "prop-types";

const Slides = ({ ...props }) => {
  return (
    <div className="slider">
      {
        console.log(props)
      }
      {props.slides === true ? (
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={125}
          totalSlides={props.dataSlider.data.length}
          isPlaying={2000}
          infinite={true}
        >
          <Slider>
            {props.dataSlider.data.map((item) => (
              <Slide index={item.id} key={item.id}>
                <div className="slider__box">
                  <NavLink to={item.url}>
                    <div className="gradientNews"></div>
                    <img
                      src={item.img !== null && item.img && item.img.slider}
                      alt=""
                    />
                    <div className="slider__info">
                      <h4>{item.title}</h4>
                      <div className="slider__info--item">
                        <p>
                          <FontAwesomeIcon icon={faClock} />
                          {item.created_at}
                        </p>
                        {/* <p>
                          <FontAwesomeIcon icon={faEye} />
                          333
                        </p> */}
                        {/* <p>14:35</p> */}
                      </div>
                    </div>
                  </NavLink>
                </div>
              </Slide>
            ))}
          </Slider>
          <div className="slider__buttonBox">
            <ButtonBack>
              <FontAwesomeIcon icon={faArrowLeft} />
            </ButtonBack>
            <ButtonNext>
              <FontAwesomeIcon icon={faArrowRight} />
            </ButtonNext>
          </div>
        </CarouselProvider>
      ) : (
        <>
          {props.news !== undefined ? (
            props.news.map(
              (item, index) =>
                index < 2 && (
                  <div className="slider__box" key={index}>
                    <NavLink to={item.news.data.slug}>
                      <div className="gradientNews"></div>
                      <img
                        src={
                          item.news.data.img !== null &&
                          item.news.data.img &&
                          item.news.data.img.slider
                        }
                        alt=""
                      />
                      <div className="slider__info">
                        <h4>{item.news.data.title}</h4>
                        <div className="slider__info--item">
                          <p>
                            <FontAwesomeIcon icon={faClock} />
                            {item.news.data.post_date}
                          </p>
                          {/* <p>
                            <FontAwesomeIcon icon={faEye} />
                            {item.news.data.viewcount.data.count}
                          </p> */}
                          {/* <p>{item.news.data.post_date.split(" ")[1]}</p> */}
                        </div>
                      </div>
                    </NavLink>
                  </div>
                )
            )
          ) : (
            <>
              <div
                className="placeholder wave waveSliderTop"
                style={{ height: "394px" }}
              >
                <div className="square" style={{ height: "394px" }}></div>
              </div>
              <div
                className="placeholder wave waveSliderTop"
                style={{ height: "394px", marginTop: "15px" }}
              >
                <div className="square" style={{ height: "394px" }}></div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

Slides.propTypes = {
  dataSlider: PropTypes.object,
  slides: PropTypes.bool.isRequired,
  news: PropTypes.object,
};

export default Slides;
