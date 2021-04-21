import React, {useLayoutEffect, useState} from 'react';

//css
import './css/_newsPage.scss';

//react router dom

import {NavLink, useLocation} from "react-router-dom";

// query
import {useQuery, useMutation} from "react-query";
//axios
import axios from "axios";
//baseurl
import {baseUrl} from "../../../../web/components/api/api";

//listcategory
import {newsListCategory} from "../../../../web/components/api/include";

//startaos
import {startAos} from "../../../../web/components/helper/helper";

//recoil
import {useRecoilState} from "recoil";

//atoms
import {newsList, newsTitle} from "../../../../web/components/atoms/atoms";

//splide
import {Splide, SplideSlide} from "@splidejs/react-splide";

//jquery
import $ from 'jquery';


const NewsList = () => {
    const {pathname} = useLocation()

    let [page, setPage] = useState(1);
    let [relatedCategoryState, setRelatedCategory] = useState([]);
    let [news, setNews] = useState([]);
    let [newsLastItem, setNewsLastItem] = useRecoilState(newsList);
    let [newsTitleState, setNewsTitleState] = useRecoilState(newsTitle);


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


    window.onscroll = function () {
        if (isLoading === false) {
            if (data.data.news.data.length !== 0) {
                setPage((page = page + 1));
                if (isLoading === false) {
                    if (news.includes(...data.data.news.data) === false) {
                        setNews((oldArray) => [...oldArray, ...data.data.news.data]);
                    }
                }
            }
        }
    };


    useLayoutEffect(() => {
        setPage(1);
        setNews([]);
        startAos()

        if (relatedCategory.isLoading === true) {
            $('body').css({
                overflow: 'hidden'
            })
        } else {
            $('body').css({
                overflow: 'unset'
            })
        }

    }, [pathname, relatedCategory.data]);

    useLayoutEffect(() => {
        window.scrollTo({
            top: 0,
        });
        setNewsLastItem([]);

    }, []);

    return (
        <>
            <div className={'newsPage myPad'}>
                {
                    relatedCategory.isLoading === true && (
                        <div className="loadableCom loadingMobile">
                            <div className="loader">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    )
                }{}

                <div className={'newsPage__listTitle'}>
                    {isLoading === false && setNewsTitleState(data.data.name)}
                    <h1>{isLoading === false ? data.data.name : newsTitleState}</h1>
                </div>
                <div className="newsPage__listSlider">
                    <Splide
                        options={{
                            gap: "1rem",
                            perPage: 1,
                            arrows: false,
                            autoWidth: "auto",
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

                <div className={'newsPage__listContainer'}>

                    {
                        isLoading === false && news.length === 0 ? data.data.news.data.map((item, index) => (
                                <div className={'newsPage__listContent'} key={index} data-aos={index > 2 ? 'zoom-in-up' : ''}>
                                    <NavLink to={"/" + item.slug}>
                                        <div className={'newsPage__listContent--items'}>
                                            <img src={item.img !== null && item.img.cover} alt={''}/>
                                            <div className={'newsPage__listContent--info'}>
                                                <h4>{item.title}</h4>
                                                <p>{item.post_date}</p>
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>
                            )) :
                            news.map((item, index) => (
                                <div className={'newsPage__listContent'} key={index}
                                     data-aos={index > 2 ? 'zoom-in-up' : ''}>
                                    <NavLink to={"/" + item.slug}>
                                        <div className={'newsPage__listContent--items'}>
                                            <img src={item.img !== null && item.img.cover} alt={''}/>
                                            <div className={'newsPage__listContent--info'}>
                                                <h4>{item.title}</h4>
                                                <p>{item.post_date}</p>
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>
                            ))
                    }
                    {isLoading === true &&
                    newsLastItem.map((item, index) => (
                        <div className={'newsPage__listContent'} key={index}>
                            <NavLink to={"/" + item.slug}>
                                <div className={'newsPage__listContent--items'}>
                                    <img src={item.img !== null && item.img.cover} alt={''}/>
                                    <div className={'newsPage__listContent--info'}>
                                        <h4>{item.title}</h4>
                                        <p>12 dekabr 2020, 16:45</p>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )

}


export default NewsList
