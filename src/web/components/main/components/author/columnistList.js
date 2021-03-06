import React, { useLayoutEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

// css
// -----------
import "../homePage/css/_home.scss";
import "../blog/css/_blog.scss";
import "../news/css/_newsList.scss";
import "../news/css/_newsDetail.scss";

import News from "../news/newsPage";

// tools

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";

// reaact router dom
import { NavLink, useLocation, Link } from "react-router-dom";

// switch
import Switch from "react-switch";

// helper

import { detectItemList, detectItemListEnd, startAos,detectItemNews } from "../../../helper/helper";

// query

import { useQuery, useMutation } from "react-query";

// axios

import axios from "axios";

// api

import { baseUrl } from "../../../api/api";

import { columnist } from "../../../api/include";

// recoil
import { useRecoilState } from "recoil";

//atom
import { apiValue, pageRequired, numberRequired } from "../../../atoms/atoms";

// query func

import { requiredNew } from "../../../queries/queries";


const ColumnList = () => {
  let { pathname } = useLocation();

  let [page, setPage] = useState(1);

  let [opinion, setOpinion] = useState([]);

  let { data, isLoading } = useQuery(
    ["opinion", pathname],
    async () => {
      const res = await axios.get(
        baseUrl + "news" + pathname + `?include=${columnist.toString()}`,
        {
          headers: {
            "Content-Type": "application/json",
            page: page,
            number: 21,
          },
        }
      );

      return res.data;
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  useLayoutEffect(() => {
    setOpinion([]);
    startAos()
    setPage(1);
  }, [pathname]);

  window.onscroll = function () {
    startAos()
    if (isLoading === false) {
      if (
        window.pageYOffset + window.innerHeight >=
        document.body.clientHeight -
          document.querySelector(".footer").clientHeight -
          200
      ) {
        if (data.data.opinions.data.length !== 0) {
          setPage((page = page + 1));
          if (isLoading === false) {
            if (opinion.includes(...data.data.opinions.data) === false) {
              setOpinion((oldArray) => [
                ...oldArray,
                ...data.data.opinions.data,
              ]);
            }
          }
        }
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

  useLayoutEffect(() => {
    setApiVal("/latest");
  }, []);

  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
    });
    startAos()
  }, [pathname]);

  let mutation = useMutation((data) => data);

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
            {isLoading === true && (
              <div className="placeholder wave" style={{ height: `${"20px"}` }}>
                <div className="line" style={{ width: `${20 + "%"}` }}></div>
              </div>
            )}
            {isLoading === false && data !== undefined && (
              <h1>{data.data.name}</h1>
            )}
          </div>
          <div className="newsList__flexBox">
            <div className="newsList__left blog__left">
              {isLoading === true && <Row>{detectItemList(21)}</Row>}
              <Row>
                {isLoading === false && opinion.length === 0
                  ? data.data.opinions.data.map((item) => (
                      <Col md="6" lg="4" key={item.id} data-aos="zoom-in-up">
                        <NavLink to={"/opinion/" + item.slug}>
                          <div className="blog__imgBox">
                            <img
                              src={
                                item.img !== null &&
                                item.img !== undefined &&
                                item.img.cover
                              }
                              alt=""
                            />
                          </div>
                          <div className="blog__content">
                            <div className="blog__content--title">
                              <div>
                                <p>{item.post_date}</p>
                                {/* <p>
                                  <FontAwesomeIcon icon={faEye} />
                                  {item.viewcount.data.count}
                                </p> */}
                              </div>
                              <div>
                                <FontAwesomeIcon icon={faShare} />
                              </div>
                            </div>
                            <div className="blog__content--titleMiddle">
                              <h4>{item.title}</h4>
                            </div>
                            <div className="blog__content--text">
                              <p>{item.description}</p>
                              <div className="blogLayer"></div>
                            </div>
                            <div className="blog__content--link">
                              <span>
                                {item.columnist.data !== null &&
                                  item.columnist.data !== undefined &&
                                  item.columnist.data.name}
                              </span>
                            </div>
                          </div>
                        </NavLink>
                      </Col>
                    ))
                  : opinion.map((item) => (
                      <Col md="6" lg="4" key={item.id} data-aos="zoom-in-up">
                        <NavLink to={"/opinion/" + item.slug}>
                          <div className="blog__imgBox">
                            <img
                              src={
                                item.img !== null &&
                                item.img !== undefined &&
                                item.img.cover
                              }
                              alt=""
                            />
                          </div>
                          <div className="blog__content">
                            <div className="blog__content--title">
                              <div>
                                <p>{item.post_date}</p>
                                <p>
                                  <FontAwesomeIcon icon={faEye} />
                                  {item.viewcount.data.count}
                                </p>
                              </div>
                              <div>
                                <FontAwesomeIcon icon={faShare} />
                              </div>
                            </div>
                            <div className="blog__content--titleMiddle">
                              <h4>{item.title}</h4>
                            </div>
                            <div className="blog__content--text">
                              <p>{item.description}</p>
                              <div className="blogLayer"></div>
                            </div>
                            <div className="blog__content--link">
                              <span>
                                {item.columnist.data !== null &&
                                  item.columnist.data !== undefined &&
                                  item.columnist.data.name}
                              </span>
                            </div>
                          </div>
                        </NavLink>
                      </Col>
                    ))}
              </Row>
              {isLoading === true && <Row>{detectItemListEnd(3)}</Row>}
            </div>
            <div className="newsList__right">
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
              <div className="newsDetail__raitings">
                <div className="newsDetail__raitings--title">
                  <h4>Bölmə tərəfdaşı</h4>
                </div>
                <div className="newsDetail__raitings--info">
                  <img src={require("../../../images/fc.png").default} alt="" />
                </div>
                <div className="newsDetail__raitings--content">
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
              </div>
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

export default ColumnList;
