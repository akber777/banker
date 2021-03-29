import React, { useLayoutEffect } from "react";

// css
import "../homePage/css/_home.scss";
import "../news/css/_newsDetail.scss";

// tools

// fontawesome
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";

// queries
import { staticPage } from "../../../queries/queries";

// react query
import { useQuery } from "react-query";

// renderHTML
import renderHTML from "react-render-html";

const StaticPage = () => {
  useLayoutEffect(() => {
    document.querySelector(".minus") !== null &&
      (document.querySelector(".minus").onclick = () => {
        document.querySelectorAll(".newsDetail__self p").forEach((element) => {
          let style = getComputedStyle(element).fontSize;

          let splitFont = style.split("px")[0];

          if (splitFont > 13) {
            splitFont--;
            document.querySelector(".showFont").innerHTML = splitFont;
            element.style.fontSize = splitFont + "px";
          }
        });
      });

    document.querySelector(".plus") !== null &&
      (document.querySelector(".plus").onclick = () => {
        document.querySelectorAll(".newsDetail__self p").forEach((element) => {
          let style = getComputedStyle(element).fontSize;

          let splitFont = style.split("px")[0];

          if (splitFont < 25) {
            splitFont++;
            document.querySelector(".showFont").innerHTML = splitFont;
            element.style.fontSize = splitFont + "px";
          }
        });
      });

    window.onscroll = function () {
      if (this.scrollY > 240) {
        document.querySelector(".fixed").classList.add("noFixed");
        document
          .querySelector(".home__leftBanner")
          .classList.add("fixedBannerLeft");
        document
          .querySelector(".home__rightBanner")
          .classList.add("fixedBannerRight");
      } else {
        document.querySelector(".fixed").classList.remove("noFixed");
        document
          .querySelector(".home__leftBanner")
          .classList.remove("fixedBannerLeft");
        document
          .querySelector(".home__rightBanner")
          .classList.remove("fixedBannerRight");
      }
    };

    window.scrollTo({
      top: 248,
    });
  }, []);

  let { pathname } = useLocation();

  let { data, isLoading } = useQuery(["staticPages", pathname], staticPage);

  return (
    <main className="newsDetail" style={{ minHeight: 500 }}>
      <div className="home__leftBanner">
        <img src={require("../../../images/left.jpg").default} alt="" />
      </div>
      <div className="home__rightBanner">
        <img src={require("../../../images/left.jpg").default} alt="" />
      </div>
      <div className="newsDetail__content">
        <Container>
          <div className="home__currency">
            <p>
              USD
              <span style={{ color: "#202020" }}>1.7000</span>
              <img
                src={require("../../../images/natural.png").default}
                alt=""
              />
            </p>
            <p>
              EUR
              <span style={{ color: "#2CA900" }}>2.0272</span>
              <img src={require("../../../images/up.png").default} alt="" />
            </p>
            <p>
              RUB
              <span style={{ color: "#A40031" }}>0.0225</span>
              <img src={require("../../../images/down.png").default} alt="" />
            </p>
            <p>
              USD
              <span style={{ color: "#202020" }}>1.7000</span>
              <img
                src={require("../../../images/natural.png").default}
                alt=""
              />
            </p>
            <p>
              EUR
              <span style={{ color: "#2CA900" }}>2.0272</span>
              <img src={require("../../../images/up.png").default} alt="" />
            </p>
            <p>
              RUB
              <span style={{ color: "#A40031" }}>0.0225</span>
              <img src={require("../../../images/down.png").default} alt="" />
            </p>
            <p>
              USD
              <span style={{ color: "#202020" }}>1.7000</span>
              <img
                src={require("../../../images/natural.png").default}
                alt=""
              />
            </p>
            <p>
              EUR
              <span style={{ color: "#2CA900" }}>2.0272</span>
              <img src={require("../../../images/up.png").default} alt="" />
            </p>
            <p>
              EUR
              <span style={{ color: "#2CA900" }}>2.0272</span>
              <img src={require("../../../images/up.png").default} alt="" />
            </p>
          </div>
          <div className="home__bannerTop">
            <img src={require("../../../images/pasha.jpg").default} alt="" />
          </div>
          <div className="newsDetail__flexBox">
            <div className="newsDetail__contentBox">
              <div className="newsDetail__left">
                <div className="newsDetail__title">
                  <h1>{isLoading === false && data.viewBag.title}</h1>
                </div>
                <div className="newsDetail__newsBox">
                  <div className="newsDetail__tools">
                    <div className="newsDetail__tools--right">
                      <p>Mətn ölçüsü</p>
                      <div className="newsDetail__btnAll">
                        <button className="minus">-</button>
                        <span className="showFont">18</span>
                        <button className="plus">+</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="newsDetail__self">
                  {isLoading === false && renderHTML(data.markup)}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </main>
  );
};

export default StaticPage;
