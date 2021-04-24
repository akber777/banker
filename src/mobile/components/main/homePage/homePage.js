import React from "react";

// css

import "./css/_home.scss";

// tools

// reactstrap

import {Container} from "reactstrap";

// sider
import Carousel from "react-multi-carousel";

// react router dom
import {NavLink} from "react-router-dom";

// news
import News from "../news/news";

// slider
import Slider from "../../slider/slider";
import CategorySlider from "../../slider/categorySlider";
import MostReadNews from "../mostReadNews/mostReadNews";
import {useQuery} from "react-query";
import axios from "axios";
import {baseUrl} from "../../../../web/components/api/api";

const HomePage = () => {

    let {data, isLoading} = useQuery(
        ["blogHome"],
        async () => {
            const res = await axios.get(baseUrl + "news/blog");

            return res.data.data;
        },
        {
            refetchOnWindowFocus: true,
        }
    );


    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: {max: 4000, min: 3000},
            items: 1,
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 1,
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 1,
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1,
        },
    };

    const CustomDots = ({onMove, index, onClick, active}) => (
        <>
            <li className={active ? "active" : "inactive"} onClick={() => onClick()}>
                <span></span>
            </li>
        </>
    );


    let homeSliderTop = useQuery(
        ["homeSliderTop"],
        async () => {
            const res = await axios.get(baseUrl + "news/home/slider");

            return res.data;
        },
        {
            refetchOnWindowFocus: false,
        }
    );

    let opinionMobile = useQuery(
        ["opinonMobile"],
        async () => {
            const res = await axios.get(baseUrl + "news/opinion");

            return res.data.data;
        },
        {
            refetchOnWindowFocus: false,
        }
    );

    return (
        <main className="mobileHome">
            <div className="mobileHome__slider">
                <Carousel
                    responsive={responsive}
                    additionalTransfrom={0}
                    arrows={true}
                    autoPlaySpeed={3000}
                    centerMode={false}
                    showDots={false}
                    infinite={true}
                    className={"sliderPartners__self"}
                    renderDotsOutside
                    customDot={<CustomDots/>}
                    focusOnSelect={true}
                >
                    {
                        homeSliderTop.isLoading === false && homeSliderTop.data !== undefined && homeSliderTop.data.data.map((item, index) => (
                            <div className="mobileHome__slider--items" key={index}>
                                <div className={'mobileHome__category'}>
                                    Xarici xəbərlər
                                </div>
                                <NavLink className={"mobileHome__slider--after"} to={item.url}>
                                    <img
                                        src={item.img !== undefined && item.img !== null ? item.img.slider : ''}
                                        alt=""
                                    />
                                    <div className="newsMobile__wrapper">
                                        <h4>
                                            {
                                                item.title
                                            }
                                        </h4>
                                        <div className="newsMobile__alert">
                                            <p>{item.created_at}</p>
                                            {/* <span>
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 0.957397C5.56091 0.957397 2.44216 3.00568 0.140841 6.33263C-0.0469469 6.6052 -0.0469469 6.98599 0.140841 7.25856C2.44216 10.5895 5.56091 12.6378 9 12.6378C12.4391 12.6378 15.5578 10.5895 17.8592 7.26257C18.0469 6.99 18.0469 6.60921 17.8592 6.33664C15.5578 3.00568 12.4391 0.957397 9 0.957397ZM9.2467 10.9102C6.96379 11.0665 5.07855 9.01824 5.22215 6.52904C5.33998 4.47675 6.86806 2.81327 8.7533 2.68501C11.0362 2.52868 12.9214 4.57696 12.7778 7.06616C12.6563 9.11444 11.1283 10.7779 9.2467 10.9102ZM9.13256 9.01022C7.90273 9.0944 6.88647 7.9921 6.96747 6.6533C7.03007 5.54699 7.85486 4.65312 8.87113 4.58097C10.101 4.49679 11.1172 5.5991 11.0362 6.93789C10.9699 8.04821 10.1451 8.94208 9.13256 9.01022Z" fill="#B4B4B4" />
                                </svg>
                                332
                            </span> */}
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                        ))
                    }

                </Carousel>
            </div>
            <News/>
            <div className="mobileHome__banner">
                <img
                    src={"https://banker.az/wp-content/uploads/2020/09/investaz.az_.gif"}
                    alt=""
                />
            </div>
            <Slider
                meqale={isLoading === false && data}

            />
            {/*<CategorySlider/>*/}
            <Slider
                photo={isLoading === false && opinionMobile.data}
            />
            <MostReadNews
                mostRead={{
                    data: 25,
                }}
            />
        </main>
    );
};

export default HomePage;
