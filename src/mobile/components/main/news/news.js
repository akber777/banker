import React, {useLayoutEffect, useState} from "react";

// reactstrap
import {Container} from "react-bootstrap";

// react router dom
import {NavLink} from "react-router-dom";

// css
import "./css/_news.scss";

// jquery
import $ from "jquery";

//axios
import axios from 'axios';

//query
import {useMutation, useQuery} from "react-query";

//baseUrl
import {baseUrl} from "../../../../web/components/api/api";


const News = () => {


    const [newsMostRead, setNewsMostRead] = useState([])

    const [latestNews, setLastestNews] = useState([])

    let [pageMost, setPageMost] = useState(1)

    let [pageLast, setPageLast] = useState(1)


    const [path, setPath] = useState('most-read-7')

    const newsMost = useQuery(['mostNewsMobile'], async () => {

        const res = axios.get(baseUrl + 'news/most-read-7')

        return res;

    }, {
        refetchOnWindowFocus: false,
        onSuccess: function (succ) {
            setNewsMostRead(oldNews => [...oldNews, ...succ.data.data])
        }
    })


    const newsLatest = useQuery(['latestNewsMobile'], async () => {

        const res = axios.get(baseUrl + 'news/latest')

        return res;

    }, {
        refetchOnWindowFocus: false,
        onSuccess: function (succ) {
            setLastestNews(oldNews => [...oldNews, ...succ.data.data])
        }
    })

    const mutationMost = useMutation(data => axios.get(baseUrl + 'news/most-read-7', {
        headers: {
            "Content-Type": "application/json",
            page: pageMost,
            number: 20,
        }
    }), {
        onSuccess: function (succ) {
            setNewsMostRead(oldnews => [...oldnews, ...succ.data.data])
        }
    })


    const mutationLast = useMutation(data => axios.get(baseUrl + 'news/latest', {
        headers: {
            "Content-Type": "application/json",
            page: pageLast,
            number: 20,
        }
    }), {
        onSuccess: function (succ) {
            setLastestNews(oldnews => [...oldnews, ...succ.data.data])
        }
    })

    useLayoutEffect(() => {
        $(".newsMobile__items button:first").addClass("active");
        $(".newsMobile__items button").on("click", function () {
            $(".newsMobile__items button").removeClass("active");
            $(this).addClass("active");
        });

    }, []);

    return (
        <div className="newsMobile">

            <div className="newsMobile__items">
                <div className="newsMobile__buttons">
                    <button
                        onClick={() => {

                            setPath('most-read-7')
                        }}
                    >Xəbərlər
                    </button>
                    <button onClick={() => {
                        setPath('latest')
                    }}>Son xəbərlər
                    </button>
                </div>
                <Container>
                    {

                        newsMostRead.length !== 0 && path === 'most-read-7' && (
                            newsMostRead.map((item, index) => (
                                <div className="newsMobile__newsSelf">
                                    <NavLink to={"/" + item.slug}>
                                        <h4>
                                            {
                                                item.title
                                            }
                                        </h4>
                                        <p>
                                            <span>
                                                {
                                                    item.post_date
                                                }
                                            </span>
                                            <span>
                                          <svg
                                              width="20"
                                              height="25"
                                              viewBox="0 0 20 25"
                                              fill="none"
                                              xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M10.1551 0.261127C9.98766 0.0939192 9.76072 0 9.52411 0C9.28749 0 9.06055 0.0939192 8.89314 0.261127L5.02397 4.1303C4.86625 4.29956 4.78038 4.52343 4.78447 4.75475C4.78855 4.98607 4.88226 5.20677 5.04585 5.37036C5.20944 5.53395 5.43014 5.62766 5.66146 5.63174C5.89278 5.63582 6.11665 5.54996 6.28591 5.39224L8.63122 3.04693V15.7735C8.63122 16.0103 8.7253 16.2374 8.89274 16.4049C9.06019 16.5723 9.2873 16.6664 9.52411 16.6664C9.76092 16.6664 9.98802 16.5723 10.1555 16.4049C10.3229 16.2374 10.417 16.0103 10.417 15.7735V3.04693L12.7623 5.39224C12.844 5.47997 12.9426 5.55033 13.0522 5.59913C13.1617 5.64793 13.2799 5.67417 13.3998 5.67629C13.5197 5.6784 13.6388 5.65635 13.75 5.61144C13.8611 5.56653 13.9621 5.49969 14.0469 5.41491C14.1317 5.33012 14.1985 5.22912 14.2435 5.11794C14.2884 5.00676 14.3104 4.88768 14.3083 4.76779C14.3062 4.6479 14.2799 4.52967 14.2311 4.42014C14.1823 4.31061 14.112 4.21204 14.0243 4.1303L10.1551 0.261127ZM1.78577 10.4162C1.78577 10.3373 1.81713 10.2616 1.87294 10.2058C1.92876 10.1499 2.00446 10.1186 2.0834 10.1186H5.05968C5.29649 10.1186 5.5236 10.0245 5.69105 9.85706C5.8585 9.68961 5.95257 9.4625 5.95257 9.22569C5.95257 8.98889 5.8585 8.76178 5.69105 8.59433C5.5236 8.42688 5.29649 8.33281 5.05968 8.33281H2.0834C1.53085 8.33281 1.00093 8.55231 0.610214 8.94302C0.2195 9.33374 0 9.86366 0 10.4162V22.9166C0 24.0666 0.933363 25 2.0834 25H16.9648C17.5174 25 18.0473 24.7805 18.438 24.3898C18.8287 23.9991 19.0482 23.4692 19.0482 22.9166V10.4162C19.0482 9.86366 18.8287 9.33374 18.438 8.94302C18.0473 8.55231 17.5174 8.33281 16.9648 8.33281H13.9885C13.7517 8.33281 13.5246 8.42688 13.3572 8.59433C13.1897 8.76178 13.0956 8.98889 13.0956 9.22569C13.0956 9.4625 13.1897 9.68961 13.3572 9.85706C13.5246 10.0245 13.7517 10.1186 13.9885 10.1186H16.9648C17.0438 10.1186 17.1195 10.1499 17.1753 10.2058C17.2311 10.2616 17.2624 10.3373 17.2624 10.4162V22.9166C17.2624 22.9955 17.2311 23.0712 17.1753 23.1271C17.1195 23.1829 17.0438 23.2142 16.9648 23.2142H2.0834C2.00446 23.2142 1.92876 23.1829 1.87294 23.1271C1.81713 23.0712 1.78577 22.9955 1.78577 22.9166V10.4162Z"
                                                fill="#D2D2D2"
                                            />
                                          </svg>
                                        </span>
                                        </p>
                                    </NavLink>
                                </div>
                            )))

                    }{
                    latestNews.length !== 0 && path === 'latest' && (
                        latestNews.map((item, index) => (
                            <div className="newsMobile__newsSelf">
                                <NavLink to={"/" + item.slug}>
                                    <h4>
                                        {
                                            item.title
                                        }
                                    </h4>
                                    <p>
                                            <span>
                                                {
                                                    item.post_date
                                                }
                                            </span>
                                        <span>
                                          <svg
                                              width="20"
                                              height="25"
                                              viewBox="0 0 20 25"
                                              fill="none"
                                              xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M10.1551 0.261127C9.98766 0.0939192 9.76072 0 9.52411 0C9.28749 0 9.06055 0.0939192 8.89314 0.261127L5.02397 4.1303C4.86625 4.29956 4.78038 4.52343 4.78447 4.75475C4.78855 4.98607 4.88226 5.20677 5.04585 5.37036C5.20944 5.53395 5.43014 5.62766 5.66146 5.63174C5.89278 5.63582 6.11665 5.54996 6.28591 5.39224L8.63122 3.04693V15.7735C8.63122 16.0103 8.7253 16.2374 8.89274 16.4049C9.06019 16.5723 9.2873 16.6664 9.52411 16.6664C9.76092 16.6664 9.98802 16.5723 10.1555 16.4049C10.3229 16.2374 10.417 16.0103 10.417 15.7735V3.04693L12.7623 5.39224C12.844 5.47997 12.9426 5.55033 13.0522 5.59913C13.1617 5.64793 13.2799 5.67417 13.3998 5.67629C13.5197 5.6784 13.6388 5.65635 13.75 5.61144C13.8611 5.56653 13.9621 5.49969 14.0469 5.41491C14.1317 5.33012 14.1985 5.22912 14.2435 5.11794C14.2884 5.00676 14.3104 4.88768 14.3083 4.76779C14.3062 4.6479 14.2799 4.52967 14.2311 4.42014C14.1823 4.31061 14.112 4.21204 14.0243 4.1303L10.1551 0.261127ZM1.78577 10.4162C1.78577 10.3373 1.81713 10.2616 1.87294 10.2058C1.92876 10.1499 2.00446 10.1186 2.0834 10.1186H5.05968C5.29649 10.1186 5.5236 10.0245 5.69105 9.85706C5.8585 9.68961 5.95257 9.4625 5.95257 9.22569C5.95257 8.98889 5.8585 8.76178 5.69105 8.59433C5.5236 8.42688 5.29649 8.33281 5.05968 8.33281H2.0834C1.53085 8.33281 1.00093 8.55231 0.610214 8.94302C0.2195 9.33374 0 9.86366 0 10.4162V22.9166C0 24.0666 0.933363 25 2.0834 25H16.9648C17.5174 25 18.0473 24.7805 18.438 24.3898C18.8287 23.9991 19.0482 23.4692 19.0482 22.9166V10.4162C19.0482 9.86366 18.8287 9.33374 18.438 8.94302C18.0473 8.55231 17.5174 8.33281 16.9648 8.33281H13.9885C13.7517 8.33281 13.5246 8.42688 13.3572 8.59433C13.1897 8.76178 13.0956 8.98889 13.0956 9.22569C13.0956 9.4625 13.1897 9.68961 13.3572 9.85706C13.5246 10.0245 13.7517 10.1186 13.9885 10.1186H16.9648C17.0438 10.1186 17.1195 10.1499 17.1753 10.2058C17.2311 10.2616 17.2624 10.3373 17.2624 10.4162V22.9166C17.2624 22.9955 17.2311 23.0712 17.1753 23.1271C17.1195 23.1829 17.0438 23.2142 16.9648 23.2142H2.0834C2.00446 23.2142 1.92876 23.1829 1.87294 23.1271C1.81713 23.0712 1.78577 22.9955 1.78577 22.9166V10.4162Z"
                                                fill="#D2D2D2"
                                            />
                                          </svg>
                                        </span>
                                    </p>
                                </NavLink>
                            </div>
                        )))
                }
                    <div className="itemsBox">
                        <div className="showMore"
                             onClick={() => {
                                 if (path === 'most-read-7') {
                                     setPageMost(pageMost = pageMost + 1)
                                     mutationMost.mutate()
                                 } else if (path === 'latest') {
                                     setPageLast(pageLast = pageLast + 1)
                                     mutationLast.mutate()
                                 }
                             }}
                        >

                            {
                                mutationMost.isLoading === true || mutationLast.isLoading === true ?
                                    <div className="loader-1 center">
                                        <span></span>
                                    </div>
                                    :
                                    'Daha çox'
                            }

                        </div>
                    </div>
                </Container>
            </div>
            <div className="mobileHome__banner">
                <img
                    src={"https://banker.az/wp-content/uploads/2020/09/investaz.az_.gif"}
                    alt=""
                />
            </div>
        </div>
    );
};

export default News;
