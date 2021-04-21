import React, {useLayoutEffect, useState} from 'react';

//css
import './css/_newsPage.scss';

//react router dom
import {NavLink, useLocation} from "react-router-dom";
import {useQuery} from "react-query";
import axios from "axios";
import {baseUrl} from "../../../../web/components/api/api";
import {startAos} from "../../../../web/components/helper/helper";
import {newsDetail} from "../../../../web/components/api/include";
import $ from "jquery";
import renderHTML from "react-render-html";

const NewsPage = () => {

    let {pathname} = useLocation();

    let pathDetail = pathname.split("/")[pathname.split("/").length - 1];

    let [pageSlug, setPageSlug] = useState(pathDetail);

    let detectOpinion = pathname.split('/')[1]


    let {data, isLoading} = useQuery(
        ["newsDetail", pathDetail],
        async () => {

            if (detectOpinion !== 'opinion') {
                const res = await axios.get(baseUrl + newsDetail.toString() + pathDetail);

                return res.data;
            } else {
                const res = await axios.get(baseUrl + 'news/opinion/' + pathDetail);

                return res.data;
            }

        },
        {
            refetchOnWindowFocus: false,
            refetchIntervalInBackground: true,
        }
    );

    let [nextNews, setNextNews] = useState([]);

    let newsNext = useQuery(
        ["newsNext", pageSlug],
        async () => {
            if (detectOpinion !== 'opinion') {
                const res = await axios.get(baseUrl + "news/next/" + pageSlug);
                return res.data;
            }
        },
        {
            refetchOnWindowFocus: false,
            refetchIntervalInBackground: true,
            onSuccess: function (succ) {
                if (succ !== undefined) {
                    if (nextNews.includes(succ.data) === false) {
                        setNextNews((oldArray) => [...oldArray, succ.data]);
                    }
                }
            },
        }
    );

    useLayoutEffect(() => {
        setNextNews([]);
        startAos();
    }, [pathDetail]);


    window.onscroll = function () {
        if (newsNext.data !== undefined && newsNext.isLoading === false) {
            setPageSlug(newsNext.data.data.slug);
        }
    };

    return (
        <>
            <div className={'newsPage myPad'}>
                <div className={'newsPage__banner'}>
                    <img src={require('../../images/bannerTop.png').default} alt={''}/>
                </div>
                <div className={'newsPage__loop'}>
                    <div className={'newsPage__title'}>
                        {
                            isLoading === false && data !== undefined && (
                                <h1>{data.data.title}</h1>
                            )
                        }
                        <div className={'newsPage__title--links'}>
                            {data !== undefined &&
                            data.data.categories !== null &&
                            data.data.categories !== undefined &&
                            data.data.categories.data.length !== 0 &&
                            data.data.categories.data.map((category) => (
                                <NavLink
                                    to={"/category/xeberler/" + category.slug}
                                    key={category.id}
                                >
                                    {category.name}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                    <div className={'newsPage__content'}>
                        <div className={'newsPage__imgBox'}>
                            {data !== undefined && (
                                <img src={data.data.img.detail} alt=""/>
                            )}
                        </div>
                        <div className={'newsPage__date'}>
                            {data !== undefined && (
                                <>
                                    <span>{data.data.post_date}</span>
                                    {/* <p>
                              <FontAwesomeIcon icon={faEye} />
                              {data.data.viewcount.data.count}
                            </p> */}
                                </>
                            )}
                        </div>
                        <div className={'newsPage__banner'}>
                            <img src={require('../../images/bannerTop.png').default} alt={''}/>
                        </div>
                        <div className={'newsPage__social'}>
                            <a href={'#'}>
                                <svg width="10" height="18" viewBox="0 0 10 18" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M6.06595 18V9.80271H8.83139L9.24245 6.59321H6.06595V4.54888C6.06595 3.62274 6.324 2.98864 7.6532 2.98864H9.33747V0.127189C8.51798 0.0393664 7.69426 -0.00303849 6.87008 0.000169193C4.4257 0.000169193 2.74743 1.4924 2.74743 4.23183V6.58721H0V9.79671H2.75343V18H6.06595Z"
                                        fill="#005A9D"/>
                                </svg>
                            </a>
                            <a href={'#'}>
                                <svg width="16" height="14" viewBox="0 0 16 14" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16 1.66303C15.4116 1.9364 14.7713 2.13314 14.1118 2.20977C14.7965 1.77162 15.3093 1.07942 15.5539 0.263026C14.9113 0.674719 14.2074 0.963406 13.4734 1.11628C13.1666 0.763021 12.7955 0.4816 12.3833 0.28955C11.9711 0.0975012 11.5266 -0.00105991 11.0775 8.5955e-06C9.26043 8.5955e-06 7.79906 1.5864 7.79906 3.53314C7.79906 3.80651 7.82983 4.07989 7.87982 4.34291C5.159 4.18965 2.73236 2.78965 1.1191 0.646162C0.825142 1.18693 0.671099 1.80266 0.672996 2.4293C0.672996 3.65533 1.25177 4.7364 2.13436 5.37219C1.61424 5.35013 1.1063 5.19616 0.651845 4.92279V4.96628C0.651845 6.68314 1.77863 8.10592 3.28038 8.43314C2.99841 8.51202 2.70834 8.55238 2.41702 8.55326C2.20358 8.55326 2.00168 8.53048 1.79786 8.49941C2.2132 9.89941 3.42267 10.9163 4.86288 10.9494C3.73609 11.9 2.32472 12.4592 0.792213 12.4592C0.517246 12.4592 0.26343 12.4488 0 12.4157C1.45367 13.4201 3.17846 14 5.03593 14C11.066 14 14.3656 8.61953 14.3656 3.94941C14.3656 3.79616 14.3656 3.64291 14.356 3.48965C14.9944 2.9864 15.5539 2.36302 16 1.66303Z"
                                        fill="#005A9D"/>
                                </svg>
                            </a>
                            <a href={'#'}>
                                <svg width="17" height="15" viewBox="0 0 17 15" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M15.3596 0.942666L1.32339 6.35529C0.365476 6.74004 0.371018 7.27442 1.14764 7.51271L4.75131 8.63687L13.0891 3.37625C13.4834 3.13637 13.8436 3.26542 13.5475 3.52825L6.79223 9.62488H6.79064L6.79223 9.62567L6.54364 13.3402C6.90781 13.3402 7.06852 13.1731 7.27277 12.976L9.02314 11.2739L12.664 13.9632C13.3353 14.3329 13.8175 14.1429 13.9845 13.3418L16.3746 2.07792C16.6192 1.09704 16.0001 0.652916 15.3596 0.942666Z"
                                        fill="#005A9D"/>
                                </svg>
                            </a>
                            <a href={'#'}>
                                <svg width="17" height="12" viewBox="0 0 17 12" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M6.08226 0.748095V11.3697H9.38013V6.11709C9.38013 4.73109 9.64088 3.38884 11.3594 3.38884C13.0543 3.38884 13.0753 4.97347 13.0753 6.20459V11.3706H16.3749V5.54572C16.3749 2.68447 15.7589 0.485596 12.4146 0.485596C10.809 0.485596 9.73276 1.36672 9.29263 2.2006H9.24801V0.748095H6.08226ZM0.708008 0.748095H4.01113V11.3697H0.708008V0.748095Z"
                                        fill="#005A9D"/>
                                </svg>
                            </a>
                        </div>
                        <div className={'newsPage__content--info'}>
                            {data !== undefined &&
                            data.data.length !== 0 &&
                            renderHTML(data.data.content)}
                        </div>
                        <div className={'newsPage__credit'}>
                            <NavLink to={'/'}>Kredit müraciəti et</NavLink>
                        </div>
                    </div>
                    <div className={'newsPage__banner mt-4'}>
                        <img src={require('../../images/bannerTop.png').default} alt={''}/>
                    </div>
                </div>
                {
                    nextNews.length !== 0 && (
                        nextNews.map((item, index) => (
                            <div className={'newsPage__loop'} key={index} data-aos="zoom-in-up">
                                <div className={'newsPage__title'}>
                                    {
                                        isLoading === false && data !== undefined && (
                                            <h1>{item !== undefined && item.title}</h1>
                                        )
                                    }
                                    <div className={'newsPage__title--links'}>
                                        {
                                            item !== undefined && item.categories !== undefined && item.categories.length !== 0 &&
                                            item.categories.data.map((category) => (
                                                <NavLink
                                                    to={"/category/xeberler/" + category.slug}
                                                    key={category.id}
                                                >
                                                    {category.name}
                                                </NavLink>
                                            ))}
                                    </div>
                                </div>
                                <div className={'newsPage__content'}>
                                    <div className={'newsPage__imgBox'}>
                                        {data !== undefined && (
                                            <img src={item !== undefined && item.img.detail} alt=""/>
                                        )}
                                    </div>
                                    <div className={'newsPage__date'}>
                                        {data !== undefined && (
                                            <>
                                                <span>{item !== undefined && item.post_date}</span>
                                                {/* <p>
                              <FontAwesomeIcon icon={faEye} />
                              {data.data.viewcount.data.count}
                            </p> */}
                                            </>
                                        )}
                                    </div>
                                    <div className={'newsPage__banner'}>
                                        <img src={require('../../images/bannerTop.png').default} alt={''}/>
                                    </div>
                                    <div className={'newsPage__social'}>
                                        <a href={'#'}>
                                            <svg width="10" height="18" viewBox="0 0 10 18" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M6.06595 18V9.80271H8.83139L9.24245 6.59321H6.06595V4.54888C6.06595 3.62274 6.324 2.98864 7.6532 2.98864H9.33747V0.127189C8.51798 0.0393664 7.69426 -0.00303849 6.87008 0.000169193C4.4257 0.000169193 2.74743 1.4924 2.74743 4.23183V6.58721H0V9.79671H2.75343V18H6.06595Z"
                                                    fill="#005A9D"/>
                                            </svg>
                                        </a>
                                        <a href={'#'}>
                                            <svg width="16" height="14" viewBox="0 0 16 14" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M16 1.66303C15.4116 1.9364 14.7713 2.13314 14.1118 2.20977C14.7965 1.77162 15.3093 1.07942 15.5539 0.263026C14.9113 0.674719 14.2074 0.963406 13.4734 1.11628C13.1666 0.763021 12.7955 0.4816 12.3833 0.28955C11.9711 0.0975012 11.5266 -0.00105991 11.0775 8.5955e-06C9.26043 8.5955e-06 7.79906 1.5864 7.79906 3.53314C7.79906 3.80651 7.82983 4.07989 7.87982 4.34291C5.159 4.18965 2.73236 2.78965 1.1191 0.646162C0.825142 1.18693 0.671099 1.80266 0.672996 2.4293C0.672996 3.65533 1.25177 4.7364 2.13436 5.37219C1.61424 5.35013 1.1063 5.19616 0.651845 4.92279V4.96628C0.651845 6.68314 1.77863 8.10592 3.28038 8.43314C2.99841 8.51202 2.70834 8.55238 2.41702 8.55326C2.20358 8.55326 2.00168 8.53048 1.79786 8.49941C2.2132 9.89941 3.42267 10.9163 4.86288 10.9494C3.73609 11.9 2.32472 12.4592 0.792213 12.4592C0.517246 12.4592 0.26343 12.4488 0 12.4157C1.45367 13.4201 3.17846 14 5.03593 14C11.066 14 14.3656 8.61953 14.3656 3.94941C14.3656 3.79616 14.3656 3.64291 14.356 3.48965C14.9944 2.9864 15.5539 2.36302 16 1.66303Z"
                                                    fill="#005A9D"/>
                                            </svg>
                                        </a>
                                        <a href={'#'}>
                                            <svg width="17" height="15" viewBox="0 0 17 15" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M15.3596 0.942666L1.32339 6.35529C0.365476 6.74004 0.371018 7.27442 1.14764 7.51271L4.75131 8.63687L13.0891 3.37625C13.4834 3.13637 13.8436 3.26542 13.5475 3.52825L6.79223 9.62488H6.79064L6.79223 9.62567L6.54364 13.3402C6.90781 13.3402 7.06852 13.1731 7.27277 12.976L9.02314 11.2739L12.664 13.9632C13.3353 14.3329 13.8175 14.1429 13.9845 13.3418L16.3746 2.07792C16.6192 1.09704 16.0001 0.652916 15.3596 0.942666Z"
                                                    fill="#005A9D"/>
                                            </svg>
                                        </a>
                                        <a href={'#'}>
                                            <svg width="17" height="12" viewBox="0 0 17 12" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M6.08226 0.748095V11.3697H9.38013V6.11709C9.38013 4.73109 9.64088 3.38884 11.3594 3.38884C13.0543 3.38884 13.0753 4.97347 13.0753 6.20459V11.3706H16.3749V5.54572C16.3749 2.68447 15.7589 0.485596 12.4146 0.485596C10.809 0.485596 9.73276 1.36672 9.29263 2.2006H9.24801V0.748095H6.08226ZM0.708008 0.748095H4.01113V11.3697H0.708008V0.748095Z"
                                                    fill="#005A9D"/>
                                            </svg>
                                        </a>
                                    </div>
                                    <div className={'newsPage__content--info'}>
                                        {
                                            item !== undefined && (
                                                renderHTML(item.content)
                                            )
                                        }
                                    </div>
                                    <div className={'newsPage__credit'}>
                                        <NavLink to={'/'}>Kredit müraciəti et</NavLink>
                                    </div>
                                </div>
                                <div className={'newsPage__banner mt-4'}>
                                    <img src={require('../../images/bannerTop.png').default} alt={''}/>
                                </div>
                            </div>
                        ))
                    )
                }
            </div>
        </>
    )

}


export default NewsPage
