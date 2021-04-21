import React, {useLayoutEffect, useState} from "react";

// css
import "./css/_blogMobile.scss";
import "../../../../web/components/main/components/blog/css/_blog.scss";
import "../../../../web/components/main/components/news/css/_newsList.scss";
import "../../../../web/components/main/components/news/css/_newsDetail.scss";


//tools

//reactstrap
import {Col, Row} from "react-bootstrap";
//navLink
import {NavLink, useLocation} from "react-router-dom";
//aos
import {startAos} from "../../../../web/components/helper/helper";
//useQuery
import {useQuery} from "react-query";
//axios
import axios from "axios";
//baseUrl
import {baseUrl} from "../../../../web/components/api/api";


const BlogList = () => {

    let {pathname} = useLocation();

    let [page, setPage] = useState(1);

    let [news, setNews] = useState([]);

    let {data, isLoading} = useQuery(
        ["blogListAll", pathname, page],
        async () => {
            const res = await axios.get(baseUrl + "news/blog", {
                headers: {
                    "Content-Type": "application/json",
                    page: page,
                    number: 21,
                },
            });

            return res.data;
        },
        {
            refetchOnWindowFocus: true,
        }
    );

    useLayoutEffect(() => {
        setPage(1);

        setNews([]);
    }, [pathname]);

    window.onscroll = function () {
        startAos()
        if (isLoading === false) {
            if (data.data.length !== 0) {
                setPage((page = page + 1));
                if (isLoading === false) {
                    if (news.includes(...data.data) === false) {
                        setNews((oldArray) => [...oldArray, ...data.data]);
                    }
                }
            }
        }
    };

    return (
        <div className="blogList myPad">
            <h1 className={'blogList__title'}>Məqalələr</h1>
            <Row>
                {news.length === 0 && isLoading === false
                    ? data.data.map((item, index) => (
                        <Col md="6" lg="4" className="mb-4" key={index} >
                            <NavLink to={"/blog/" + item.slug}>
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
                                            {/*{item.viewcount.data.length !== 0 && (*/}
                                            {/*  <p>*/}
                                            {/*    <svg*/}
                                            {/*      width="18"*/}
                                            {/*      height="13"*/}
                                            {/*      viewBox="0 0 18 13"*/}
                                            {/*      fill="none"*/}
                                            {/*      xmlns="http://www.w3.org/2000/svg"*/}
                                            {/*    >*/}
                                            {/*      <path*/}
                                            {/*        d="M9 0.387695C5.56091 0.387695 2.44216 2.43598 0.140841 5.76293C-0.0469469 6.0355 -0.0469469 6.41629 0.140841 6.68886C2.44216 10.0198 5.56091 12.0681 9 12.0681C12.4391 12.0681 15.5578 10.0198 17.8592 6.69287C18.0469 6.4203 18.0469 6.0395 17.8592 5.76693C15.5578 2.43598 12.4391 0.387695 9 0.387695ZM9.2467 10.3405C6.96379 10.4968 5.07855 8.44854 5.22215 5.95934C5.33998 3.90705 6.86806 2.24357 8.7533 2.1153C11.0362 1.95898 12.9214 4.00726 12.7778 6.49646C12.6563 8.54474 11.1283 10.2082 9.2467 10.3405ZM9.13256 8.44052C7.90273 8.5247 6.88647 7.42239 6.96747 6.0836C7.03007 4.97728 7.85486 4.08342 8.87113 4.01127C10.101 3.92709 11.1172 5.02939 11.0362 6.36819C10.9699 7.47851 10.1451 8.37238 9.13256 8.44052Z"*/}
                                            {/*        fill="#B4B4B4"*/}
                                            {/*      />*/}
                                            {/*    </svg>*/}
                                            {/*    <span>{item.viewcount.data.count}</span>*/}
                                            {/*  </p>*/}
                                            {/*)}*/}
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
                                            {item.viewcount.data.length !== 0 && (
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
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                        </Col>
                    ))}
            </Row>
        </div>
    );
};

export default BlogList;
