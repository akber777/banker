import React, {useLayoutEffect, useState} from "react";
import {Container, Row, Col} from "react-bootstrap";

// css
import "./css/_newsList.scss";
import "../homePage/css/_home.scss";

import News from "../news/newsPage";

// tools

// sider
import Carousel from "react-multi-carousel";

import {NavLink, useLocation, Link} from "react-router-dom";

// switch
import Switch from "react-switch";

// query

import {useQuery, useMutation} from "react-query";

// axios

import axios from "axios";

// api

import {baseUrl} from "../../../api/api";

// include
import {newsListCategory} from "../../../api/include";

// recoil
import {useRecoilState} from "recoil";

//atom
import {apiValue, newsList, newsTitle} from "../../../atoms/atoms";

// query func

import {requiredNew} from "../../../queries/queries";

import {
    detectItemNews,
    detectItemListEnd,
    detectItemList,
    startAos
} from "../../../helper/helper";

// react splide
import {Splide, SplideSlide} from "@splidejs/react-splide";

const NewsList = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: {max: 4000, min: 3000},
            items: 9,
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 6,
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 5,
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1,
        },
    };

    let {pathname} = useLocation();

    let [page, setPage] = useState(1);

    let [news, setNews] = useState([]);

    let [newsLastItem, setNewsLastItem] = useRecoilState(newsList);

    let [newsTitleState, setNewsTitleState] = useRecoilState(newsTitle);

    let [relatedCategoryState, setRelatedCategory] = useState([]);

    let {data, isLoading} = useQuery(
        ["newsList", pathname, page],
        async () => {
            const res = await axios.get(
                baseUrl + "news" + pathname + `?include=${newsListCategory.toString()}`,
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
                if (page <= 1) {
                    setNewsLastItem(succ.data.news.data);
                }
            },
        }
    );

    let relatedCategory = useQuery(
        ["relatedCategory", pathname],
        async () => {
            const res = await axios.get(baseUrl + "news" + "/related" + pathname, {
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

    useLayoutEffect(() => {
        setPage(1);
        setNews([]);
        startAos()
    }, [pathname]);

    useLayoutEffect(() => {
        window.scrollTo({
            top: 0,
        });

        setNewsLastItem([]);
        setNewsTitleState([])
    }, []);

    window.onscroll = function () {
        if (isLoading === false) {
            if (
                window.pageYOffset + window.innerHeight >=
                document.body.clientHeight -
                document.querySelector(".footer").clientHeight -
                50
            ) {
                if (data.data.news.data.length !== 0) {
                    setPage((page = page + 1));
                    if (isLoading === false) {
                        if (news.includes(...data.data.news.data) === false) {
                            setNews((oldArray) => [...oldArray, ...data.data.news.data]);
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
                <img src={require("../../../images/left.jpg").default} alt=""/>
            </div>
            <div className="home__rightBanner">
                <img src={require("../../../images/left.jpg").default} alt=""/>
            </div>
            <Container>
                <div className="home__currency">
                    <p>
                        USD
                        <span style={{color: "#202020"}}>1.7000</span>
                        <img src={require("../../../images/natural.png").default} alt=""/>
                    </p>
                    <p>
                        EUR
                        <span style={{color: "#2CA900"}}>2.0272</span>
                        <img src={require("../../../images/up.png").default} alt=""/>
                    </p>
                    <p>
                        RUB
                        <span style={{color: "#A40031"}}>0.0225</span>
                        <img src={require("../../../images/down.png").default} alt=""/>
                    </p>
                    <p>
                        USD
                        <span style={{color: "#202020"}}>1.7000</span>
                        <img src={require("../../../images/natural.png").default} alt=""/>
                    </p>
                    <p>
                        EUR
                        <span style={{color: "#2CA900"}}>2.0272</span>
                        <img src={require("../../../images/up.png").default} alt=""/>
                    </p>
                    <p>
                        RUB
                        <span style={{color: "#A40031"}}>0.0225</span>
                        <img src={require("../../../images/down.png").default} alt=""/>
                    </p>
                    <p>
                        USD
                        <span style={{color: "#202020"}}>1.7000</span>
                        <img src={require("../../../images/natural.png").default} alt=""/>
                    </p>
                    <p>
                        EUR
                        <span style={{color: "#2CA900"}}>2.0272</span>
                        <img src={require("../../../images/up.png").default} alt=""/>
                    </p>
                    <p>
                        EUR
                        <span style={{color: "#2CA900"}}>2.0272</span>
                        <img src={require("../../../images/up.png").default} alt=""/>
                    </p>
                </div>
                <div className="home__bannerTop">
                    <img src={require("../../../images/pasha.jpg").default} alt=""/>
                </div>
            </Container>
            <div className="newsList__content">
                <Container>
                    <div className="newsList__content--title">
                        {isLoading === false && setNewsTitleState(data.data.name)}
                        <h1>{isLoading === false ? data.data.name : newsTitleState}</h1>
                    </div>
                    <div className="newsList__slider">
                        {/* {isLoading === true && (
              <div className="flexLine">
                <div className="placeholder wave" style={{ height: "auto" }}>
                  <div className="line"></div>
                  <div className="line"></div>
                  <div className="line"></div>
                  <div className="line"></div>
                  <div className="line"></div>
                  <div className="line"></div>
                  <div className="line"></div>
                </div>
              </div>
            )} */}
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
                                ? relatedCategory.data.data.map((subitem) => (
                                    <SplideSlide>
                                        <div className="newsList__slider--item" key={subitem.id}>
                                            <NavLink to={"/category/" + subitem.slug}>
                                                <span>{subitem.name}</span>
                                            </NavLink>
                                        </div>
                                    </SplideSlide>
                                ))
                                : relatedCategoryState.map((item) => (
                                    <SplideSlide>
                                        <div className="newsList__slider--item" key={item.id}>
                                            <NavLink to={"/category/" + item.slug}>
                                                <span>{item.name}</span>
                                            </NavLink>
                                        </div>
                                    </SplideSlide>
                                ))}
                        </Splide>
                    </div>
                    <div className="newsList__flexBox">
                        <div className="newsList__left">
                            {newsLastItem.length === 0 && isLoading !== false && (
                                <Row>{detectItemList(21)}</Row>
                            )}
                            <Row>
                                {isLoading === false && news.length === 0
                                    ? data.data.news.data.map((item, index) => (
                                        <Col md="6" lg="4" className="mb-4" key={index} data-aos="zoom-in-up">
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
                                                            <p>{item.post_date}</p>
                                                            {/* {item.viewcount.data.length !== 0 && (
                                  <p>
                                    <svg
                                      width="18"
                                      height="13"
                                      viewBox="0 0 18 13"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M9 0.387695C5.56091 0.387695 2.44216 2.43598 0.140841 5.76293C-0.0469469 6.0355 -0.0469469 6.41629 0.140841 6.68886C2.44216 10.0198 5.56091 12.0681 9 12.0681C12.4391 12.0681 15.5578 10.0198 17.8592 6.69287C18.0469 6.4203 18.0469 6.0395 17.8592 5.76693C15.5578 2.43598 12.4391 0.387695 9 0.387695ZM9.2467 10.3405C6.96379 10.4968 5.07855 8.44854 5.22215 5.95934C5.33998 3.90705 6.86806 2.24357 8.7533 2.1153C11.0362 1.95898 12.9214 4.00726 12.7778 6.49646C12.6563 8.54474 11.1283 10.2082 9.2467 10.3405ZM9.13256 8.44052C7.90273 8.5247 6.88647 7.42239 6.96747 6.0836C7.03007 4.97728 7.85486 4.08342 8.87113 4.01127C10.101 3.92709 11.1172 5.02939 11.0362 6.36819C10.9699 7.47851 10.1451 8.37238 9.13256 8.44052Z"
                                        fill="#B4B4B4"
                                      />
                                    </svg>
                                    <span>{item.viewcount.data.count}</span>
                                  </p>
                                )} */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </NavLink>
                                        </Col>
                                    ))
                                    : news.map((item, index) => (
                                        <Col md="6" lg="4" className="mb-4" key={index} data-aos="zoom-in-up">
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
                                {isLoading === true &&
                                newsLastItem.map((item, index) => (
                                    <Col md="6" lg="4" className="mb-4" key={index} data-aos="zoom-in-up">
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
                            {isLoading === true && <Row>{detectItemListEnd(3)}</Row>}
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
                                style={{marginBottom: 15}}
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

export default NewsList;
