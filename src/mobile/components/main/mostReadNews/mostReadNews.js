import React, {useLayoutEffect, useState} from "react";

// css
import "./css/_most.scss";

// proptypes
import PropTypes from "prop-types";

// reactstrap
import {Container, Label, Input} from "reactstrap";

// react router dom

import {NavLink} from "react-router-dom";
import {useMutation, useQuery} from "react-query";
import axios from "axios";
import {baseUrl} from "../../../../web/components/api/api";
import $ from "jquery";


const MostReadNews = () => {


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

        const res = axios.get(baseUrl + 'news/most-read-24')

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


    const mutationLast = useMutation(data => axios.get(baseUrl + 'news/most-read-24', {
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
        <div className="mostReadNews">
            <div className="mostReadNews__title">
                <h1>Ən çox oxunanlar</h1>
                <div className="mostReadNews__radioBox">
                    <Label check>
                        <Input type="radio" name="radio1" defaultChecked={true} onClick={() => {
                            setPath('most-read-7')
                        }}/> Həftəlik
                    </Label>
                    <Label check>
                        <Input type="radio" name="radio1" onClick={() => {
                            setPath('most-read-24')
                        }}/> Aylıq
                    </Label>
                </div>
            </div>
            <Container>
                <div className="mostReadNews__newsBox">
                    {/*<div className="mostReadNews__newsBox--img">*/}
                    {/*  <div className="layout"></div>*/}
                    {/*  <svg*/}
                    {/*    width="23"*/}
                    {/*    height="30"*/}
                    {/*    viewBox="0 0 23 30"*/}
                    {/*    fill="none"*/}
                    {/*    xmlns="http://www.w3.org/2000/svg"*/}
                    {/*  >*/}
                    {/*    <path*/}
                    {/*      fill-rule="evenodd"*/}
                    {/*      clip-rule="evenodd"*/}
                    {/*      d="M12.1861 0.313353C11.9852 0.112703 11.7129 0 11.4289 0C11.145 0 10.8727 0.112703 10.6718 0.313353L6.02876 4.95636C5.8395 5.15947 5.73646 5.42812 5.74136 5.7057C5.74626 5.98328 5.85871 6.24812 6.05502 6.44443C6.25133 6.64074 6.51617 6.75319 6.79375 6.75809C7.07133 6.76299 7.33998 6.65995 7.54309 6.47069L10.3575 3.65631V18.9282C10.3575 19.2124 10.4704 19.4849 10.6713 19.6859C10.8722 19.8868 11.1448 19.9997 11.4289 19.9997C11.7131 19.9997 11.9856 19.8868 12.1866 19.6859C12.3875 19.4849 12.5004 19.2124 12.5004 18.9282V3.65631L15.3148 6.47069C15.4129 6.57596 15.5311 6.66039 15.6626 6.71896C15.794 6.77752 15.9359 6.80901 16.0798 6.81154C16.2236 6.81408 16.3665 6.78762 16.4999 6.73373C16.6334 6.67984 16.7546 6.59963 16.8563 6.49789C16.958 6.39614 17.0383 6.27495 17.0921 6.14153C17.146 6.00812 17.1725 5.86521 17.17 5.72135C17.1674 5.57748 17.1359 5.4356 17.0774 5.30417C17.0188 5.17274 16.9344 5.05445 16.8291 4.95636L12.1861 0.313353ZM2.14292 12.4994C2.14292 12.4047 2.18055 12.3139 2.24753 12.2469C2.31451 12.1799 2.40536 12.1423 2.50008 12.1423H6.07162C6.35579 12.1423 6.62832 12.0294 6.82926 11.8285C7.0302 11.6275 7.14308 11.355 7.14308 11.0708C7.14308 10.7867 7.0302 10.5141 6.82926 10.3132C6.62832 10.1123 6.35579 9.99937 6.07162 9.99937H2.50008C1.83702 9.99937 1.20111 10.2628 0.732256 10.7316C0.263401 11.2005 0 11.8364 0 12.4994V27.4999C0 28.88 1.12004 30 2.50008 30H20.3578C21.0208 30 21.6567 29.7366 22.1256 29.2677C22.5945 28.7989 22.8579 28.163 22.8579 27.4999V12.4994C22.8579 11.8364 22.5945 11.2005 22.1256 10.7316C21.6567 10.2628 21.0208 9.99937 20.3578 9.99937H16.7862C16.5021 9.99937 16.2295 10.1123 16.0286 10.3132C15.8277 10.5141 15.7148 10.7867 15.7148 11.0708C15.7148 11.355 15.8277 11.6275 16.0286 11.8285C16.2295 12.0294 16.5021 12.1423 16.7862 12.1423H20.3578C20.4525 12.1423 20.5433 12.1799 20.6103 12.2469C20.6773 12.3139 20.7149 12.4047 20.7149 12.4994V27.4999C20.7149 27.5946 20.6773 27.6855 20.6103 27.7525C20.5433 27.8194 20.4525 27.8571 20.3578 27.8571H2.50008C2.40536 27.8571 2.31451 27.8194 2.24753 27.7525C2.18055 27.6855 2.14292 27.5946 2.14292 27.4999V12.4994Z"*/}
                    {/*      fill="white"*/}
                    {/*    />*/}
                    {/*  </svg>*/}
                    {/*  <img*/}
                    {/*    src={"https://cdn.wallpapersafari.com/97/93/SYRrb1.jpg"}*/}
                    {/*    alt=""*/}
                    {/*  />*/}
                    {/*</div>*/}
                    <div className="mostReadNews__newsBox--info">
                        {

                            newsMostRead.length !== 0 && path === 'most-read-7' && (
                                newsMostRead.map((item, index) => (
                                    <div className="newsMobile__newsSelf">
                                        <NavLink to={"/"+item.slug}>
                                            <span>{index + 1}</span>
                                            <div>
                                                <h4>
                                                    {
                                                        item.title
                                                    }
                                                </h4>
                                                <p>
                                                    <span>{item.post_date}</span>
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
                                            </div>
                                        </NavLink>
                                    </div>
                                )))

                        }{
                        latestNews.length !== 0 && path === 'most-read-24' && (
                            latestNews.map((item, index) => (
                                <div className="newsMobile__newsSelf" key={index}>
                                    <NavLink to={"/"+item.slug}>
                                        <span>{index + 1}</span>
                                        <div>
                                            <h4>
                                                {
                                                    item.title
                                                }
                                            </h4>
                                            <p>
                                                <span>{item.post_date}</span>
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
                                        </div>
                                    </NavLink>
                                </div>
                            )))
                    }

                    </div>
                    <div className="itemsBox">
                        <div className="showMore"
                             onClick={() => {
                                 if (path === 'most-read-7') {
                                     setPageMost(pageMost = pageMost + 1)
                                     mutationMost.mutate()
                                 } else if (path === 'most-read-24') {
                                     setPageLast(pageLast = pageLast + 1)
                                     mutationLast.mutate()
                                 }
                             }}
                        >{
                            mutationMost.isLoading === true || mutationLast.isLoading === true ?
                                <div className="loader-1 center">
                                    <span></span>
                                </div>
                                :
                                'Daha çox'
                        }
                        </div>
                    </div>
                </div>
            </Container>
            <div className="mobileHome__banner">
                <img
                    src={"https://banker.az/wp-content/uploads/2020/09/investaz.az_.gif"}
                    alt=""
                />
            </div>
        </div>
    );
};

MostReadNews.propTypes = {
    mostRead: PropTypes.object,
};

export default MostReadNews;
