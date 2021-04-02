import React, { useLayoutEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

// css
import "./css/_newsList.scss";
import "../homePage/css/_home.scss";

import News from "../news/newsPage";

// tools

import { NavLink, useLocation, Link } from "react-router-dom";

// switch
import Switch from "react-switch";

// query

import { useQuery, useMutation } from "react-query";

// axios

import axios from "axios";

// api

import { baseUrl } from "../../../api/api";

// include
import { newsListCategory } from "../../../api/include";

// recoil
import { useRecoilState } from "recoil";

//atom
import { apiValue, newsList, newsTitle } from "../../../atoms/atoms";

// query func

import { requiredNew } from "../../../queries/queries";

import {
  detectItemNews,
  detectItemListEnd,
  detectItemList,
  startAos
} from "../../../helper/helper";

// react splide
import { Splide, SplideSlide } from "@splidejs/react-splide";




const NewsAll = () => {
  let { pathname } = useLocation();

  let [page, setPage] = useState(2);

  let [news, setNews] = useState([]);

  let [newsLastItem, setNewsLastItem] = useRecoilState(newsList);

  let [newsTitleState, setNewsTitleState] = useRecoilState(newsTitle);

  let [relatedCategoryState, setRelatedCategory] = useState([]);

  let splitPath = pathname.split("/")[pathname.split("/").length - 1];

  let [startRequest, setStartRequest] = useState(true);

  let [index, setIndex] = useState(0);

  let relatedCategory = useQuery(
    ["relatedCategoryAllList", ""],
    async () => {
      const res = await axios.get(baseUrl + "news" + "/category", {
        headers: {
          "Content-Type": "application/json",
          page: page,
          number: 21,
        },
      });

      return (await res).data;
    },
    {
      refetchOnWindowFocus: true,
      onSuccess: function (succ) {
        if (succ.data !== undefined) {
          setRelatedCategory(succ.data);
        }
      },
    }
  );

  let { data, isLoading } = useQuery(
    ["newsAllList"],
    async () => {
      const res = await axios.get(baseUrl + `news/category?include=news`);

      return (await res).data;
    },
    {
      refetchOnWindowFocus: true,
      onSuccess: function (succ) {
        if (succ) {
          // setNews((oldNews) => [...oldNews, succ.data.news.data]);

          succ.data.map((item) => {
            setNews((oldNews) => [...oldNews, item.news.data]);
          });
        }
      },
    }
  );

  let scrollNews = useQuery(
    ["scrollNews", splitPath, page],
    async () => {
      const res = await axios.get(
        baseUrl +
          `news/category${
            splitPath !== "xeber-lenti" ? "/" + splitPath : ""
          }?include=news`,
        {
          headers: {
            "Content-Type": "application/json",
            page: page,
            number: 21,
          },
        }
      );

      return (await res).data;
    },
    {
      refetchOnWindowFocus: true,
      onSuccess: function (succ) {
        if (succ && splitPath !== "xeber-lenti") {
          if (
            news[index] !== undefined &&
            news[index].includes(...succ.data.news.data) === false
          ) {
            news[index].push(...succ.data.news.data);
          }
        }
      },
    }
  );

  useLayoutEffect(() => {
    setPage(2);
    window.scroll({
      top: 400,
    });

    startAos()
  }, [pathname]);

  window.onscroll = function () {
    if (
      scrollNews.isLoading === false &&
      splitPath !== "xeber-lenti" &&
      scrollNews.data.data.news.data.length !== 0
    ) {
      if (
        window.pageYOffset + window.innerHeight >=
        document.body.clientHeight -
          document.querySelector(".footer").clientHeight -
          50
      ) {
        setPage((page = page + 1));
      }
    }
  };

  // required news

  let [checked, setChecked] = useState(false);

  let [apiVal, setApiVal] = useRecoilState(apiValue);

  // scrollData
  let [pageRequ, setPageRequ] = useState(1);
  let [dataRequLatest, setDataRequLatest] = useState([]);
  let [dataRequImportant, setDataRequImportant] = useState([]);

  // required news
  let requiredNews = useQuery(["requiredNews", apiVal, pageRequ], requiredNew, {
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: true,
    onSuccess: function (succ) {
      if (
        dataRequLatest.includes(...succ.data) === false &&
        succ.data.length !== 0 &&
        apiVal === "/latest"
      ) {
        setDataRequLatest((oldArray) => [...oldArray, ...succ.data]);
      }

      if (
        dataRequImportant.includes(...succ.data) === false &&
        succ.data.length !== 0 &&
        apiVal === "/important"
      ) {
        setDataRequImportant((oldArray) => [...oldArray, ...succ.data]);
      }
    },
  });
  // required news

  let mutation = useMutation((data) => data);

  let onOf = (checked) => {
    setChecked(checked);

    if (checked === true) {
      mutation.mutate(setApiVal("/important"));
    } else {
      mutation.mutate(setApiVal("/latest"));
    }
  };

  return (
    <main className="newsList">
      <div className="home__leftBanner">
        <img src={require("../../../images/left.jpg").default} alt="" />
      </div>
      <div className="home__rightBanner">
        <img src={require("../../../images/left.jpg").default} alt="" />
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
        <div className="home__bannerTop">
          <img src={require("../../../images/pasha.jpg").default} alt="" />
        </div>
      </Container>
      <div className="newsList__content">
        <Container>
          <div className="newsList__content--title">
            {isLoading === false && setNewsTitleState(data.data.name)}
            <h1>Xəbər Lenti</h1>
          </div>
          <div className="newsList__slider">
            <Splide
              options={{
                rewind: true,
                gap: "1rem",
                perPage: 9,
                arrows: false,
                fixedWidth: "auto",
                pagination: false,
              }}
            >
              {relatedCategory.isLoading === false
                ? relatedCategory.data.data.map((subitem, index) => (
                    <SplideSlide>
                      <div className="newsList__slider--item" key={subitem.id}>
                        <NavLink
                          to={"/xeber-lenti/" + subitem.slug}
                          onClick={() => {
                            setIndex(index);
                          }}
                        >
                          <span>{subitem.name}</span>
                        </NavLink>
                      </div>
                    </SplideSlide>
                  ))
                : relatedCategoryState.map((item) => (
                    <SplideSlide>
                      <div className="newsList__slider--item" key={item.id}>
                        <NavLink
                          to={"/xeber-lenti/" + item.slug}
                          onClick={() => {
                            setIndex(index);
                          }}
                        >
                          <span>{item.name}</span>
                        </NavLink>
                      </div>
                    </SplideSlide>
                  ))}
            </Splide>
          </div>
          <div className="newsList__flexBox">
            <div className="newsList__left">
              {/* {newsLastItem.length === 0 &&
                isLoading !== false &&
                news.length === 0 && <Row>{detectItemList(21)}</Row>} */}
              <Row>
                {news.length !== 0 &&
                  news[index].map((item, index) => (
                    <Col
                      md="6"
                      lg="4"
                      className="mb-4"
                      key={index}
                      data-aos="zoom-in-up"
                    >
                      <NavLink to={"/" + item.slug}>
                        <div className="newsList__flex">
                          <div className="newsList__flex--img">
                            <img
                              src={item.img !== null && item.img.cover}
                              alt=""
                            />
                          </div>
                          <div className="newsList__wrapper">
                            <div className="newsList__flex--info">
                              <p>{item.title}</p>
                            </div>
                            <div className="newsList__flex--bottom">
                              <p>{item.post_date.split(" ")[0]}</p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </Col>
                  ))}
              </Row>
              {scrollNews.isLoading === true && splitPath !== "xeber-lenti" && (
                <Row>{detectItemListEnd(3)}</Row>
              )}
            </div>
            <div className="newsList__right">
              <div className="news__title">
                <h1>{"Xeberler"}</h1>
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
              <div
                className={`newsDetailed ${
                  requiredNews.isLoading === true ? "overNews" : ""
                }`}
              >
                {requiredNews.isLoading === true &&
                  dataRequLatest.length === 0 &&
                  detectItemNews(15)}
                {requiredNews.isLoading === false &&
                dataRequLatest.length === 0 ? (
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
                      apiVal === "/latest" ? dataRequLatest : dataRequImportant
                    }
                    icon={true}
                  />
                )}
              </div>
              <div
                style={{ marginBottom: 15 }}
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
              {/* <div className='newsDetail__raitings'>
                                <div className='newsDetail__raitings--title'>
                                    <h4>{isLoading === false && (data.data.name)}</h4>
                                </div>
                                <div className='newsDetail__raitings--info'>
                                    <img src={require('../../../images/fc.png').default} alt='' />
                                </div>
                                <div className='newsDetail__raitings--content'>
                                    <p>
                                        <span>Reytinq </span>
                                        <span>2-ci yer</span>
                                    </p>
                                    <p>
                                        <span>Müştəri reytinqi </span>
                                        <span>24-ci yer</span>
                                    </p>
                                    <p>
                                        <span>Rəylər </span>
                                        <span>6767</span>
                                    </p>
                                </div>
                            </div> */}
              <div className="newsDetail__bannerRight">
                <img
                  src={require("../../../images/ziraat.jpg").default}
                  alt=""
                />
              </div>
              <div className="newsDetail__bannerRight">
                <img
                  src={require("../../../images/masin.jpg").default}
                  alt=""
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </main>
  );
};

export default NewsAll;
