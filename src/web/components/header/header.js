import React, { useLayoutEffect } from "react";

// css
import "./css/_header.scss";

// reactstrap
import { Container } from "reactstrap";

// fontawesome

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTelegramPlane } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

// react router
import { NavLink, useLocation } from "react-router-dom";

// query

import { useQuery } from "react-query";

// queries

import { headerMenu } from "../queries/queries";

// moment
import * as moment from "moment";
import "moment/locale/az";

// jquery

import $ from "jquery";

const Header = () => {
  let { data, isLoading } = useQuery(["headerMenu", ""], headerMenu, {
    refetchOnWindowFocus: false,
  });

  let date = moment();

  let myDate = date.format("LLLL");

  let { pathname } = useLocation();

  const checkedUrl = (type) => {
    if (type.type === "url") {
      return type.url;
    } else if (type.type === "header") {
      return pathname;
    } else if (type.type === "static-page") {
      return `/${type.reference}`;
    } else {
      return "";
    }
  };

  useLayoutEffect(() => {
    $(".closeSearch").on("click", function () {
      $(".header__searchBoxContent").addClass("noSearch");
    });

    $(".header__searchBox").on("click", function () {
      $(".header__searchBoxContent").removeClass("noSearch");
    });

    $(".header__webMenuClose").on("click", function () {
      $(".header__webMenu ").addClass("openWebmenu");
    });

    $(".header__navButtonImg").on("click", function () {
      $(".header__webMenu ").removeClass("openWebmenu");
    });
  }, [data]);

  return (
    <>
      <div className="header__webMenu openWebmenu">
        <div className="header__webMenuClose">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.8063 0.249146L8.99984 7.05564L2.19335 0.249146L0.249023 2.19347L7.05552 8.99997L0.249023 15.8065L2.19335 17.7508L8.99984 10.9443L15.8063 17.7508L17.7507 15.8065L10.9442 8.99997L17.7507 2.19347L15.8063 0.249146Z"
              fill="#D2D2D2"
            ></path>
          </svg>
        </div>
        <Container>
          <div className="webLogoBox">
            <NavLink to={"/"}>
              <img src={require("../images/logo.png").default} alt="" />
            </NavLink>
          </div>
          <div className="header__webBox">
            <div className="header__webMenuItem">
              <h4>Xeberler</h4>
              <NavLink to={""}>Bu maraqlıdır</NavLink>
              <NavLink to={""}>Ümumi iqtisadi məqalələr</NavLink>
              <NavLink to={""}>Biznes</NavLink>
              <NavLink to={""}>Menu1</NavLink>
              <NavLink to={""}>
                Əmək haqqının hesablanması üçün kalkulyator (2019)-YENİ
              </NavLink>
            </div>
            <div className="header__webMenuItem">
              <h4>Xeberler</h4>
              <NavLink to={""}>Bu maraqlıdır</NavLink>
              <NavLink to={""}>Ümumi iqtisadi məqalələr</NavLink>
              <NavLink to={""}>Biznes</NavLink>
              <NavLink to={""}>Menu1</NavLink>
              <NavLink to={""}>
                Əmək haqqının hesablanması üçün kalkulyator (2019)-YENİ
              </NavLink>
            </div>
            <div className="header__webMenuItem">
              <h4>Xeberler</h4>
              <NavLink to={""}>Bu maraqlıdır</NavLink>
              <NavLink to={""}>Ümumi iqtisadi məqalələr</NavLink>
              <NavLink to={""}>Biznes</NavLink>
              <NavLink to={""}>Menu1</NavLink>
              <NavLink to={""}>
                Əmək haqqının hesablanması üçün kalkulyator (2019)-YENİ
              </NavLink>
            </div>
            <div className="header__webMenuItem">
              <h4>Xeberler</h4>
              <NavLink to={""}>Bu maraqlıdır</NavLink>
              <NavLink to={""}>Ümumi iqtisadi məqalələr</NavLink>
              <NavLink to={""}>Biznes</NavLink>
              <NavLink to={""}>Menu1</NavLink>
              <NavLink to={""}>
                Əmək haqqının hesablanması üçün kalkulyator (2019)-YENİ
              </NavLink>
            </div>
          </div>
        </Container>
      </div>
      <div className="header__searchBoxContent noSearch">
        <div className="closeSearch">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.8063 0.249146L8.99984 7.05564L2.19335 0.249146L0.249023 2.19347L7.05552 8.99997L0.249023 15.8065L2.19335 17.7508L8.99984 10.9443L15.8063 17.7508L17.7507 15.8065L10.9442 8.99997L17.7507 2.19347L15.8063 0.249146Z"
              fill="#D2D2D2"
            ></path>
          </svg>
        </div>
        <div className="header__searchBoxInfo">
          <h4 className="header__searchBox--title">Axtarış</h4>
          <input type="search" />
          <div className="searchBtn">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.1493 16.27C9.9509 16.2696 11.7006 15.6665 13.1198 14.5567L17.5817 19.0186L19.0169 17.5834L14.555 13.1215C15.6654 11.7021 16.2689 9.95206 16.2693 8.14999C16.2693 3.67282 12.6265 0.0299892 8.1493 0.0299892C3.67213 0.0299892 0.0292969 3.67282 0.0292969 8.14999C0.0292969 12.6272 3.67213 16.27 8.1493 16.27ZM8.1493 2.05999C11.5079 2.05999 14.2393 4.79135 14.2393 8.14999C14.2393 11.5086 11.5079 14.24 8.1493 14.24C4.79066 14.24 2.0593 11.5086 2.0593 8.14999C2.0593 4.79135 4.79066 2.05999 8.1493 2.05999Z"
                fill="#014577"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <header className="header">
        <div className="header__topBanner">
          {pathname !== "/" ? (
            <>
              <div
                className="header__leftBanner50"
                style={{
                  backgroundColor: "rgb(0, 125, 140)",
                }}
              >
                <img
                  src={"https://banker.az/wp-content/uploads/2020/09/1.gif"}
                  alt=""
                />
              </div>
              <div
                className="header__leftBanner50"
                style={{
                  backgroundColor: "rgb(210 49 88)",
                }}
              >
                <img
                  src={
                    "https://ads.netant.az/www/images/f7438e76f421f513dd256a988d6c7a43.png"
                  }
                  alt=""
                />
              </div>
            </>
          ) : (
            <>
              <div
                className="header__leftBanner50"
                style={{
                  backgroundColor: "rgb(0, 125, 140)",
                }}
              >
                <img
                  src={"https://banker.az/wp-content/uploads/2020/09/1.gif"}
                  alt=""
                />
              </div>
              <div
                className="header__leftBanner50"
                style={{
                  backgroundColor: "rgb(210 49 88)",
                }}
              >
                <img
                  src={
                    "https://ads.netant.az/www/images/f7438e76f421f513dd256a988d6c7a43.png"
                  }
                  alt=""
                />
              </div>
            </>
          )}
        </div>
        <Container>
          <div className="header__nav">
            <div className="header__nav--info">
              <p>{myDate}</p>
            </div>
            <div className="header__logo">
              <NavLink to={"/"}>
                <img src={require("../images/logo.png").default} alt="" />
              </NavLink>
            </div>
            <div className="header__social">
              <div className="header__socialIn">
                <a
                  href="https://www.facebook.com/Bankeraz-121942871167786/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a
                  href="https://www.instagram.com/bankeraz/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faTelegramPlane} />
                </a>
                <a
                  href="https://twitter.com/BankerAz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a
                  href="https://twitter.com/BankerAz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCBccW20t3dmWzZ3bfbvJZBA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
                <a
                  href="https://www.linkedin.com/company/banker-az"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </div>
            </div>
          </div>
        </Container>
        <div
          className="header__topBanner"
          style={{
            backgroundColor:
              pathname !== "/" ? "rgb(0 125 140)" : "rgb(0 125 140)",
          }}
        >
          {
            <img
              src={"https://banker.az/wp-content/uploads/2020/09/1.gif"}
              alt=""
            />
          }
        </div>
        <div className="header__navBox">
          <Container>
            <nav className="header__navSelf">
              <div className="header__navSelf--left">
                <div className="header__navButtonImg">
                  <img src={require("../images/menu.png").default} alt="" />
                </div>
                <div className="header__navSelf--item">
                  {isLoading === false &&
                    data !== undefined &&
                    data.map((item, index) => (
                      <div className="subItem" key={index}>
                        <NavLink to={checkedUrl(item)}>{item.title}</NavLink>
                        {item.items !== null && item.items !== undefined && (
                          <div className="header__dropDown">
                            {item.items.map((subItem, index) => (
                              <NavLink to={checkedUrl(subItem)} key={index}>
                                {subItem.title}
                              </NavLink>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                </div>
              </div>
              <div className="header__searchBox">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.1493 16.27C9.9509 16.2696 11.7006 15.6665 13.1198 14.5567L17.5817 19.0186L19.0169 17.5834L14.555 13.1215C15.6654 11.7021 16.2689 9.95206 16.2693 8.14999C16.2693 3.67282 12.6265 0.0299892 8.1493 0.0299892C3.67213 0.0299892 0.0292969 3.67282 0.0292969 8.14999C0.0292969 12.6272 3.67213 16.27 8.1493 16.27ZM8.1493 2.05999C11.5079 2.05999 14.2393 4.79135 14.2393 8.14999C14.2393 11.5086 11.5079 14.24 8.1493 14.24C4.79066 14.24 2.0593 11.5086 2.0593 8.14999C2.0593 4.79135 4.79066 2.05999 8.1493 2.05999Z"
                    fill="#014577"
                  />
                </svg>
              </div>
            </nav>
          </Container>
        </div>
      </header>
      {/* fixed Menu */}
      <header className="header fixed">
        <div className="header__topBanner">
          <img src={require("../images/topBanner.jpg").default} alt="" />
        </div>
        <Container>
          <div className="header__nav">
            <div className="header__nav--info">
              <p>Çərşənbə, 25 Noyabr 2020 14:45</p>
            </div>
            <div className="header__logo">
              <img src={require("../images/logo.png").default} alt="" />
            </div>
            <div className="header__social">
              <div className="header__socialIn">
                <a
                  href="https://www.facebook.com/Bankeraz-121942871167786/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a
                  href="https://www.instagram.com/bankeraz/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faTelegramPlane} />
                </a>
                <a
                  href="https://twitter.com/BankerAz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a
                  href="https://twitter.com/BankerAz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCBccW20t3dmWzZ3bfbvJZBA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
                <a
                  href="https://www.linkedin.com/company/banker-az"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </div>
            </div>
          </div>
        </Container>
        <div className="header__topBanner">
          <img src={require("../images/topBanner.jpg").default} alt="" />
        </div>
        <div className="header__navBox">
          <Container>
            <nav className="header__navSelf">
              <div className="header__navSelf--left">
                <div className="header__navButtonImg">
                  <img src={require("../images/menu.png").default} alt="" />
                </div>
                <div className="header__navSelf--item">
                  {isLoading === false &&
                    data !== undefined &&
                    data.map((item, index) => (
                      <div className="subItem" key={index}>
                        <NavLink to={checkedUrl(item)}>{item.title}</NavLink>
                        {item.items !== null && item.items !== undefined && (
                          <div className="header__dropDown">
                            {item.items.map((subItem, index) => (
                              <NavLink to={checkedUrl(subItem)} key={index}>
                                {subItem.title}
                              </NavLink>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                </div>
              </div>
              <div className="header__searchBox">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.1493 16.27C9.9509 16.2696 11.7006 15.6665 13.1198 14.5567L17.5817 19.0186L19.0169 17.5834L14.555 13.1215C15.6654 11.7021 16.2689 9.95206 16.2693 8.14999C16.2693 3.67282 12.6265 0.0299892 8.1493 0.0299892C3.67213 0.0299892 0.0292969 3.67282 0.0292969 8.14999C0.0292969 12.6272 3.67213 16.27 8.1493 16.27ZM8.1493 2.05999C11.5079 2.05999 14.2393 4.79135 14.2393 8.14999C14.2393 11.5086 11.5079 14.24 8.1493 14.24C4.79066 14.24 2.0593 11.5086 2.0593 8.14999C2.0593 4.79135 4.79066 2.05999 8.1493 2.05999Z"
                    fill="#014577"
                  />
                </svg>
              </div>
            </nav>
          </Container>
        </div>
      </header>
    </>
  );
};

export default Header;
