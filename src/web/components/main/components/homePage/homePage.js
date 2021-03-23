import React, { useLayoutEffect, useState } from "react";

// import css
import "./css/_home.scss";

// reactstrap
import { Container } from "reactstrap";

// import components

import News from "../news/newsPage";

import Slides from "../slider/slider";

import NewsPart from "../newsPart/newsPart";

// import SliderPartners from '../sliderPartners/sliderPartners';

// import MultiSlider from '../multiSlider/multiSlider';

import Blog from "../blog/blog";

// tools

// query
import { useMutation, useQuery } from "react-query";

// axios
import axios from "axios";

// api

import { baseUrl } from "../../../api/api";

// recoil

import { useRecoilState } from "recoil";

// atoms
import { apiLatest } from "../../../atoms/atoms";

// query func

import { requiredNew, homeBlog } from "../../../queries/queries";

// tools
import Switch from "react-switch";
import Author from "../author/author";
import { detectItemNews } from "../../../helper/helper";

// router dom
import { Link, useLocation } from "react-router-dom";
import { data } from "jquery";

const HomePage = (...props) => {
  // home page first slider

  const { pathname } = useLocation();

  let homeSliderTop = useQuery(
    ["homeSliderTop"],
    async () => {
      const res = await axios.get(baseUrl + "news/home/slider");

      return res.data;
    },
    {
      refetchOnWindowFocus: false,
      refetchIntervalInBackground: true,
    }
  );

  // homepage most read news and two images news

  let [pageMost, setPageMost] = useState(1);
  let [dataMost, setDataMost] = useState([]);

  let mostRead = useQuery(
    ["mostRead", pageMost],
    async () => {
      const res = await axios.get(baseUrl + "news/most-read-7", {
        headers: {
          "Content-Type": "application/json",
          page: pageMost,
          number: 20,
        },
      });

      return res.data;
    },
    {
      refetchOnWindowFocus: false,
      refetchIntervalInBackground: true,
      onSuccess: function (succ) {
        if (
          dataMost.includes(...succ.data) === false &&
          succ.data.length !== 0
        ) {
          setDataMost((oldArray) => [...oldArray, ...succ.data]);
        }
      },
    }
  );

  let [apiLate, setApiVal] = useRecoilState(apiLatest);

  // scrollData
  let [pageRequ, setPageRequ] = useState(1);
  let [dataRequLatest, setDataRequLatest] = useState([]);
  let [dataRequImportant, setDataRequImportant] = useState([]);

  // required news
  let requiredNews = useQuery(
    ["requiredNews", apiLate, pageRequ],
    requiredNew,
    {
      refetchOnWindowFocus: false,
      refetchIntervalInBackground: true,
      onSuccess: function (succ) {
        if (
          dataRequLatest.includes(...succ.data) === false &&
          succ.data.length !== 0 &&
          apiLate === "/latest"
        ) {
          setDataRequLatest((oldArray) => [...oldArray, ...succ.data]);
        }

        if (
          dataRequImportant.includes(...succ.data) === false &&
          succ.data.length !== 0 &&
          apiLate === "/important"
        ) {
          setDataRequImportant((oldArray) => [...oldArray, ...succ.data]);
        }
      },
    }
  );

  useLayoutEffect(() => {
    setApiVal("/latest");
  }, []);

  let onOf = (checked) => {
    setChecked(checked);

    if (checked === true) {
      mutation.mutate(setApiVal("/important"));
      setPageRequ(1);
    } else {
      mutation.mutate(setApiVal("/latest"));
      setPageRequ(1);
    }
  };

  let mutation = useMutation((data) => data);

  // 13 news

  let [checked, setChecked] = useState(false);

  // required news
  let blogHome = useQuery(["blogHome", ""], homeBlog, {
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: true,
  });

  window.onbeforeunload = function () {
    window.scrollTo({
      top: 248,
    });
  };

  return (
    <main className="home">
      <div className="home__leftBanner">
        <img
          src={
            "https://banker.az/wp-content/uploads/2020/12/Banker.az-151-X-751.jpg"
          }
          alt=""
        />
      </div>
      <div className="home__rightBanner">
        <img
          src={
            "https://banker.az/wp-content/uploads/2020/12/Banker.az-151-X-751.jpg"
          }
          alt=""
        />
      </div>
      <Container>
        <div className="home__currency">
          <p>
            USD
            <span style={{ color: "#202020" }}>1.7000</span>
            <img src={require("../../../images/natural.png").default} alt="" />
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
            <img src={require("../../../images/natural.png").default} alt="" />
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
            <img src={require("../../../images/natural.png").default} alt="" />
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
        <div className="home__bannerTop" style={{ backgroundColor: "#d1d2e2" }}>
          <iframe
            id="rv-h5-b6deb72736"
            name="rv-h5-b6deb72736"
            src="https://ads.adviad.com/www/images/e4e6180feb387eda3685ed63327df9ac/index.html?clickTag=https://ads2.adviad.com/www/delivery/ck.php?oaparams=2__bannerid=3037__zoneid=958__cb=b6deb72736__campaignid=1700__p1=1616538068__p2=8e3686f21f4274a605a69d4805bf__p3=634886914.bba5e399d158bad1b00631aa6a2c8329f05d941d__oadest=https%3A%2F%2Fibar.az%2Faz%2Fyazfurseti%3Futm_source%3Dbanker.az%26utm_medium%3Dbanner%2520news%26utm_campaign%3DYaz%2520furseti%26utm_content%3DAdviad%26utm_source%3Dbanker.az%26utm_medium%3Diab_banner%26utm_campaign%3DABB_Banker.az_desk_2186x185"
            marginwidth="0"
            marginheight="0"
            scrolling="no"
            frameborder="0"
            width="970"
            height="90"
          ></iframe>
        </div>
        <div className="home__sectionOne">
          <div className="home__leftBox">
            <div className="home__leftBoxWrapper">
              <div className="home__leftBoxSlider">
                {homeSliderTop.isLoading === true && (
                  <div className="placeholder wave waveSliderTop">
                    <div className="square" style={{ height: "440px" }}></div>
                  </div>
                )}
                {homeSliderTop.isLoading === false && (
                  <Slides dataSlider={homeSliderTop.data} slides={true} />
                )}
              </div>
              <div
                className="home__leftBoxBanner"
                style={{ backgroundColor: "#ececec" }}
              >
                <img
                  src={require("../../../images/turanBank.jpg").default}
                  alt=""
                />
              </div>
            </div>
            <div
              className="home__bannerBottom"
              style={{ backgroundColor: "#ececec" }}
            >
              <img src={require("../../../images/pasha.jpg").default} alt="" />
            </div>
          </div>
          <div
            className={`flex ${
              requiredNews.isLoading === true &&
              dataRequImportant.length === 0 &&
              dataRequLatest.length === 0
                ? "overNewsFlex"
                : ""
            }`}
          >
            <div className="news__title">
              <h1>{"Xeberler"}</h1>
              <div className="flexSwitch">
                <span>Vacib</span>
                <Switch
                  onChange={onOf}
                  checked={checked}
                  onColor="#B4B4B4"
                  onHandleColor="#fff"
                  handleDiameter={12}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  height={18}
                  width={35}
                  className="react-switch"
                />
              </div>
            </div>
            {requiredNews.isLoading === true &&
              dataRequLatest.length === 0 &&
              detectItemNews(15)}
            {requiredNews.isLoading === false && dataRequLatest.length === 0 ? (
              <News
                title={"data"}
                switch={true}
                requNews={requiredNews.data.data}
                icon={true}
              />
            ) : (
              <News
                title={"data"}
                switch={true}
                requNews={
                  apiLate === "/latest" ? dataRequLatest : dataRequImportant
                }
                icon={true}
              />
            )}
            <div
              className="moreNewsBtn"
              onClick={() => {
                if (requiredNews.isLoading === false) {
                  setPageRequ((pageRequ = pageRequ + 1));
                }
              }}
            >
              <Link to={pathname}>
                {requiredNews.isLoading === false ? (
                  "Daha Çox Xəbər"
                ) : (
                  <div class="loader-1 center">
                    <span></span>
                  </div>
                )}
              </Link>
            </div>
          </div>
        </div>
        <div className="home__population popularNews">
          <div className="home__populationWrapper">
            <div>
              <div
                className={`home__populationLeft ${
                  mostRead.isLoading === true ? "overNewsFlex popularFlex" : ""
                }`}
              >
                <h4>{"Populyar"}</h4>
                {mostRead.isLoading === true &&
                  dataMost.length === 0 &&
                  detectItemNews(15)}
                {mostRead.isLoading === false && dataMost.length === 0 ? (
                  <News
                    title={"Populyar"}
                    switch={false}
                    popularData={mostRead.data.data}
                    icon={true}
                  />
                ) : (
                  <News
                    title={"Populyar"}
                    switch={false}
                    popularData={dataMost}
                    icon={true}
                  />
                )}
              </div>
              <div
                style={{ marginTop: 25 }}
                className="moreNewsBtn"
                onClick={() => {
                  if (mostRead.isLoading === false) {
                    setPageMost((pageMost = pageMost + 1));
                  }
                }}
              >
                <Link to={pathname}>
                  {mostRead.isLoading === false ? (
                    "Daha Çox Xəbər"
                  ) : (
                    <div class="loader-1 center">
                      <span></span>
                    </div>
                  )}
                </Link>
              </div>
            </div>
            <div className="home__populationRight">
              {mostRead.isLoading === false && dataMost.length === 0 ? (
                <Slides slides={false} news={mostRead.data.data} />
              ) : (
                <Slides slides={false} news={dataMost} />
              )}
            </div>
          </div>
          <div className="home__populationBanner">
            <div style={{ backgroundColor: "#0874b2" }}>
              <img
                src={"https://banker.az/wp-content/uploads/2021/01/banker.jpg"}
                alt=""
              />
            </div>
            <div style={{ backgroundColor: "rgb(81 19 19)" }}>
              <img
                src={
                  "https://banker.az/wp-content/uploads/2021/02/Azerbaycan_internet_Bankaciligi_Mobil_Banner_500x500.png"
                }
                alt=""
              />
            </div>
          </div>
        </div>
        {/* <div className='home__bannerBottom'>
                    <img src={require('../../../images/topBanner.jpg').default} alt='' />
                </div> */}
        <div
          className="home__bannerBottom"
          style={{ backgroundColor: "#11316c" }}
        >
          <img
            src={
              "https://banker.az/wp-content/uploads/2021/02/12-il-Kampaniya-banker.az_.jpg"
            }
            alt=""
          />
        </div>
        <NewsPart />
        {/* <div className='home__bannerBottom'>
                    <img src={require('../../../images/topBanner.jpg').default} alt='' />
                </div> */}
        {/* <SliderPartners sliderData={[
                    {
                        "userId": 1,
                        "id": 1,
                        "title": "delectus aut autem",
                        "completed": false
                    },
                    {
                        "userId": 2,
                        "id": 2,
                        "title": "delectus aut autem2",
                        "completed": true
                    },
                    {
                        "userId": 2,
                        "id": 2,
                        "title": "delectus aut autem2",
                        "completed": true
                    },
                    {
                        "userId": 2,
                        "id": 2,
                        "title": "delectus aut autem2",
                        "completed": true
                    },
                    {
                        "userId": 2,
                        "id": 2,
                        "title": "delectus aut autem2",
                        "completed": true
                    },
                    {
                        "userId": 2,
                        "id": 2,
                        "title": "delectus aut autem2",
                        "completed": true
                    },
                ]} /> */}
        {/* <div className='home__bannerBottom'>
                    <img src={require('../../../images/topBanner.jpg').default} alt='' />
                </div> */}
        {/* <MultiSlider
                    sliderType={'month'}
                /> */}
        <div
          className="home__bannerBottom"
          style={{ backgroundColor: "#11316c" }}
        >
          <img
            src={
              "https://banker.az/wp-content/uploads/2021/02/12-il-Kampaniya-banker.az_.jpg"
            }
            alt=""
          />
        </div>
        <Blog blogData={blogHome.data} />
        <div
          className="home__bannerBottom"
          style={{ backgroundColor: "#11316c" }}
        >
          <img
            src={
              "https://banker.az/wp-content/uploads/2021/02/12-il-Kampaniya-banker.az_.jpg"
            }
            alt=""
          />
        </div>
        <Author />
        <div
          className="home__bannerBottom"
          style={{ backgroundColor: "#11316c", marginBottom: "50px" }}
        >
          <img
            src={
              "https://banker.az/wp-content/uploads/2021/02/12-il-Kampaniya-banker.az_.jpg"
            }
            alt=""
          />
        </div>
        {/* <div className='home__bannerBottom'>
                    <img src={require('../../../images/topBanner.jpg').default} alt='' />
                </div> */}
        {/* <MultiSlider
                    sliderType={'question'}
                /> */}
        {/* <MultiSlider
                    sliderType={'partners'}
                /> */}
      </Container>
    </main>
  );
};

export default HomePage;
