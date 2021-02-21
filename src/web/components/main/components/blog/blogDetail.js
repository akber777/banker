
import React, { useLayoutEffect, useState } from 'react';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
// import Subscription from '../../../footer/subscription';
import News from '../news/newsPage';

// css
// import './css/_newsDetail.scss';

// tools


// query
import { useQuery, useMutation } from 'react-query';

// axios
import axios from 'axios';

// api
import { baseUrl } from '../../../api/api';

// render html

import renderHTML from 'react-render-html';


// difference
import datetimeDifference from "datetime-difference";

// tools

// switch
import Switch from "react-switch";

// recoil
import { useRecoilState } from 'recoil';

// atoms
import { apiValue } from '../../../atoms/atoms';

// query func

import { requiredNew } from '../../../queries/queries';

// helper

import { checkSalary, detectItemNews } from '../../../helper/helper';


const BlogDetail = () => {


    // query

    let { pathname } = useLocation();


    let pathDetail = pathname.split('/')[pathname.split('/').length - 1]


    let { data, isLoading } = useQuery(['blogDetail', pathDetail], async () => {

        const res = await axios.get(baseUrl + `news/blog/${pathDetail}?include=relateds`)

        return res.data

    }, {
        refetchOnWindowFocus: false,
        refetchIntervalInBackground: true
    })



    let vacancyLatest = useQuery(['vacancyLatest', ''], async () => {

        const res = await axios.get(baseUrl + `vacancy/job/latest`)

        return res.data

    }, {
        refetchOnWindowFocus: false,
        refetchIntervalInBackground: false
    })



    useLayoutEffect(() => {

        document.querySelector('.minus') !== null &&
            (
                document.querySelector('.minus').onclick = () => {

                    document.querySelectorAll('.newsDetail__self p').forEach(element => {

                        let style = getComputedStyle(element).fontSize;

                        let splitFont = style.split('px')[0]

                        if (splitFont > 13) {
                            splitFont--
                            document.querySelector('.showFont').innerHTML = splitFont
                            element.style.fontSize = splitFont + 'px'
                        }

                    });

                }

            )


        document.querySelector('.plus') !== null && (
            document.querySelector('.plus').onclick = () => {


                document.querySelectorAll('.newsDetail__self p').forEach(element => {

                    let style = getComputedStyle(element).fontSize;

                    let splitFont = style.split('px')[0]

                    if (splitFont < 25) {
                        splitFont++
                        document.querySelector('.showFont').innerHTML = splitFont
                        element.style.fontSize = splitFont + 'px'
                    }


                });

            }
        )


        // fixed social icon
        let contentBox = document.querySelector('.newsDetail__contentBox');

        window.onscroll = function () {

            if (document.querySelector('.newsDetail__socialFixed') !== null) {
                if (this.scrollY > 480) {
                    document.querySelector('.newsDetail__socialFixed').style.position = 'fixed'
                    document.querySelector('.newsDetail__socialFixed').style.left = contentBox.offsetLeft + 'px';
                    document.querySelector('.newsDetail__socialFixed').style.top = contentBox.offsetTop + 'px';
                } else {
                    document.querySelector('.newsDetail__socialFixed').style.position = 'absolute';
                    document.querySelector('.newsDetail__socialFixed').style.left = '0';
                    document.querySelector('.newsDetail__socialFixed').style.top = '0';
                }


                if (this.scrollY > 240) {

                    document.querySelector('.fixed').classList.add('noFixed')
                    document.querySelector('.home__leftBanner').classList.add('fixedBannerLeft')
                    document.querySelector('.home__rightBanner').classList.add('fixedBannerRight')


                } else {
                    document.querySelector('.fixed').classList.remove('noFixed')
                    document.querySelector('.home__leftBanner').classList.remove('fixedBannerLeft')
                    document.querySelector('.home__rightBanner').classList.remove('fixedBannerRight')
                }
            }

        }


    }, [data])





    let [checked, setChecked] = useState(false)


    let [apiVal, setApiVal] = useRecoilState(apiValue)


    useLayoutEffect(() => {


        if (apiVal === '/important')
            setChecked(true)


    }, [])



    // required news
    let requiredNews = useQuery(['requiredNew', apiVal], requiredNew, {
        refetchOnWindowFocus: false,
        refetchIntervalInBackground: true
    })



    let mutation = useMutation(data => data);


    let onOf = (checked) => {
        setChecked(checked)

        if (checked === true) {
            mutation.mutate(
                setApiVal('/important')
            )
        } else {
            mutation.mutate(
                setApiVal('/latest')
            )
        }
    }


    // related news

    // let related = useQuery(['relatedNews', `${pathDetail}`], relatedNews)


    useLayoutEffect(() => {
        window.scrollTo({
            top: 248
        });

    }, [pathname])

    return (
        <main className='newsDetail' style={{ minHeight: 500 }}>

            {
                <React.Fragment>
                    <div className='home__leftBanner'>
                        <img src={require('../../../images/left.jpg').default} alt='' />
                    </div>
                    <div className='home__rightBanner'>
                        <img src={require('../../../images/left.jpg').default} alt='' />
                    </div>
                    <div className='newsDetail__content'>
                        <Container>
                            <div className='home__currency'>
                                <p>
                                    USD
                                 <span style={{ color: '#202020' }}>1.7000</span>
                                    <img src={require('../../../images/natural.png').default} alt='' />
                                </p>
                                <p>
                                    EUR
                        <span style={{ color: '#2CA900' }}>2.0272</span>
                                    <img src={require('../../../images/up.png').default} alt='' />
                                </p>
                                <p>
                                    RUB
                        <span style={{ color: '#A40031' }}>0.0225</span>
                                    <img src={require('../../../images/down.png').default} alt='' />
                                </p>
                                <p>
                                    USD
                        <span style={{ color: '#202020' }}>1.7000</span>
                                    <img src={require('../../../images/natural.png').default} alt='' />
                                </p>
                                <p>
                                    EUR
                        <span style={{ color: '#2CA900' }}>2.0272</span>
                                    <img src={require('../../../images/up.png').default} alt='' />
                                </p>
                                <p>
                                    RUB
                        <span style={{ color: '#A40031' }}>0.0225</span>
                                    <img src={require('../../../images/down.png').default} alt='' />
                                </p>
                                <p>
                                    USD
                        <span style={{ color: '#202020' }}>1.7000</span>
                                    <img src={require('../../../images/natural.png').default} alt='' />
                                </p>
                                <p>
                                    EUR
                        <span style={{ color: '#2CA900' }}>2.0272</span>
                                    <img src={require('../../../images/up.png').default} alt='' />
                                </p>
                                <p>
                                    EUR
                        <span style={{ color: '#2CA900' }}>2.0272</span>
                                    <img src={require('../../../images/up.png').default} alt='' />
                                </p>
                            </div>
                            <div className='home__bannerTop'>
                                <img src={require('../../../images/pasha.jpg').default} alt='' />
                            </div>
                            <div className='newsDetail__flexBox'>
                                <div className='newsDetail__contentBox'>
                                    <div className='newsDetail__left'>

                                        <div className='newsDetail__socialFixed'>
                                            <span className='one'>
                                                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M15.0591 12.9999C14.6662 13.0014 14.2777 13.0823 13.9168 13.2376C13.556 13.393 13.2302 13.6197 12.9591 13.9041L5.84828 10.3457C6.0232 9.81534 6.0232 9.24279 5.84828 8.7124L12.9708 5.0899C13.481 5.62751 14.1728 5.95624 14.9118 6.01218C15.6509 6.06812 16.3843 5.84728 16.9696 5.39258C17.5549 4.93789 17.9502 4.28182 18.0787 3.55189C18.2072 2.82197 18.0597 2.07034 17.6649 1.44309C17.2701 0.815845 16.6562 0.357794 15.9425 0.157968C15.2288 -0.0418568 14.4663 0.0308196 13.8032 0.361872C13.1401 0.692924 12.6238 1.2587 12.3546 1.94923C12.0854 2.63977 12.0825 3.40573 12.3466 4.09823L5.29412 7.68573C4.91323 7.21991 4.39759 6.88329 3.81788 6.72202C3.23818 6.56075 2.62278 6.58272 2.05605 6.78493C1.48932 6.98713 0.999004 7.35966 0.652308 7.85147C0.305611 8.34327 0.119507 8.93026 0.119507 9.53198C0.119507 10.1337 0.305611 10.7207 0.652308 11.2125C0.999004 11.7043 1.48932 12.0768 2.05605 12.279C2.62278 12.4812 3.23818 12.5032 3.81788 12.3419C4.39759 12.1807 4.91323 11.8441 5.29412 11.3782L12.3291 14.9191C12.2102 15.2382 12.149 15.576 12.1483 15.9166C12.1483 16.4934 12.3193 17.0573 12.6398 17.537C12.9603 18.0166 13.4158 18.3905 13.9488 18.6112C14.4817 18.832 15.0682 18.8897 15.634 18.7772C16.1997 18.6646 16.7194 18.3869 17.1273 17.979C17.5352 17.5711 17.813 17.0514 17.9256 16.4856C18.0381 15.9198 17.9804 15.3334 17.7596 14.8004C17.5388 14.2675 17.165 13.8119 16.6854 13.4914C16.2057 13.171 15.6418 12.9999 15.0649 12.9999H15.0591Z" fill="white" />
                                                </svg>
                                            </span>
                                            <a href="2#">
                                                <span className='fb'>
                                                    <svg width="11" height="23" viewBox="0 0 11 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10.2738 11.6656H7.24038V22.7787H2.64446V11.6656H0.458618V7.76002H2.64446V5.23265C2.64446 3.42532 3.50297 0.595215 7.28129 0.595215L10.6857 0.609457V4.4005H8.21557C7.8104 4.4005 7.24068 4.60293 7.24068 5.46509V7.76365H10.6754L10.2738 11.6656Z" fill="white" />
                                                    </svg>
                                                </span>
                                            </a>
                                            <a href="2#">
                                                <span className='twitter'>
                                                    <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M20.4132 2.21727C19.6847 2.54031 18.901 2.7588 18.0792 2.85638C18.9183 2.35364 19.5622 1.55816 19.8662 0.608745C19.081 1.07452 18.211 1.4124 17.2858 1.59453C16.5446 0.805115 15.4885 0.311768 14.3191 0.311768C12.0754 0.311768 10.2556 2.13151 10.2556 4.37521C10.2556 4.6937 10.2917 5.00371 10.3614 5.3013C6.98432 5.1319 3.98999 3.51428 1.9857 1.05512C1.63599 1.65514 1.43538 2.35364 1.43538 3.09821C1.43538 4.50764 2.15328 5.75191 3.243 6.48042C2.57723 6.45951 1.95024 6.27678 1.40265 5.97162C1.40235 5.98889 1.40235 6.00616 1.40235 6.02313C1.40235 7.99197 2.8036 9.63414 4.66213 10.0072C4.32152 10.1005 3.96181 10.1499 3.5918 10.1499C3.32937 10.1499 3.07512 10.1248 2.82724 10.0775C3.34422 11.6915 4.84456 12.8663 6.62309 12.8994C5.23215 13.9894 3.48028 14.6388 1.57599 14.6388C1.24871 14.6388 0.924459 14.6197 0.607178 14.5818C2.4045 15.7352 4.54092 16.4077 6.83552 16.4077C14.3097 16.4077 18.397 10.216 18.397 4.84583C18.397 4.66976 18.3931 4.4943 18.3852 4.32036C19.1798 3.74762 19.8686 3.03214 20.4132 2.21727Z" fill="#F1F2F2" />
                                                    </svg>
                                                </span>
                                            </a>
                                            <a href="2#">
                                                <span className='link'>
                                                    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M19.1574 11.3677V18.3764H15.0939V11.8374C15.0939 10.1955 14.5072 9.07429 13.0359 9.07429C11.9132 9.07429 11.2462 9.82916 10.9516 10.5601C10.8446 10.8213 10.8171 11.1841 10.8171 11.5504V18.3761H6.75329C6.75329 18.3761 6.80784 7.30119 6.75329 6.15479H10.8174V7.88667C10.8092 7.90031 10.7977 7.91364 10.7904 7.92667H10.8174V7.88667C11.3574 7.05573 12.3205 5.86781 14.4796 5.86781C17.1531 5.86781 19.1574 7.61454 19.1574 11.3677ZM2.50223 0.263672C1.11218 0.263672 0.202759 1.17613 0.202759 2.37496C0.202759 3.54833 1.08582 4.48715 2.4489 4.48715H2.47526C3.89259 4.48715 4.77383 3.54833 4.77383 2.37496C4.74686 1.17613 3.89259 0.263672 2.50223 0.263672ZM0.444282 18.3764H4.50655V6.15479H0.444282V18.3764Z" fill="#F1F2F2" />
                                                    </svg>
                                                </span>
                                            </a>
                                            <a href="2#">
                                                <span className='tele'>
                                                    <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17.7864 0.0975942L1.66825 5.79509C0.568246 6.20009 0.57461 6.76259 1.46643 7.01343L5.60461 8.19676L15.1792 2.65926C15.6319 2.40676 16.0455 2.54259 15.7055 2.81926L7.94825 9.23676H7.94643L7.94825 9.23759L7.66279 13.1476C8.08097 13.1476 8.26552 12.9718 8.50006 12.7643L10.5101 10.9726L14.691 13.8034C15.4619 14.1926 16.0155 13.9926 16.2073 13.1493L18.9519 1.29259C19.2328 0.260094 18.5219 -0.207406 17.7864 0.0975942Z" fill="white" />
                                                    </svg>
                                                </span>
                                            </a>
                                        </div>


                                        <div className='newsDetail__title'>
                                            {
                                                isLoading === true && (
                                                    <div className="placeholder wave">
                                                        <div className="line"></div>
                                                        <div className="line"></div>
                                                        <div className="line"></div>
                                                    </div>
                                                )
                                            }
                                            {
                                                isLoading === false && data !== undefined && (
                                                    <h1>
                                                        {
                                                            data.data.title
                                                        }
                                                    </h1>
                                                )
                                            }
                                        </div>
                                        <div className='newsDetail__buttonTop'>
                                            <NavLink to={''}>
                                                Əsas məlumatlar
                                                 </NavLink>
                                            <NavLink to={''}>
                                                Xəbərlər
                                                 </NavLink>
                                            <NavLink to={''}>
                                                Ümumi iqtisadi xəbərlər
                                            </NavLink>
                                        </div>
                                        <div className='home__bannerTop'>
                                            <img src={require('../../../images/bannerDetail.png').default} alt='' />
                                        </div>
                                        <div className='newsDetail__newsBox'>
                                            <div className='newsDetail__newsBox--imgBox'>
                                                {
                                                    data === undefined && (
                                                        <div className="placeholder wave" style={{ height: 'auto' }}>
                                                            <div style={{ height: '500px' }} className="square"></div>
                                                        </div>
                                                    )
                                                }
                                                {
                                                    data !== undefined && (
                                                        <img src={data.data.img.original} alt='' />
                                                    )
                                                }
                                            </div>
                                            <div className='newsDetail__tools'>
                                                <div className='newsDetail__tools--left'>
                                                    {
                                                        data !== undefined && (
                                                            <>
                                                                <p>
                                                                    {

                                                                        datetimeDifference(new Date(data.data.post_date), new Date()).years !== 0 && (
                                                                            <span>
                                                                                {
                                                                                    datetimeDifference(new Date(data.data.post_date), new Date()).years + ' il'
                                                                                }
                                                                            </span>
                                                                        )

                                                                    }

                                                                    {

                                                                        datetimeDifference(new Date(data.data.post_date), new Date()).months !== 0 && (
                                                                            <span>
                                                                                {
                                                                                    datetimeDifference(new Date(data.data.post_date), new Date()).months + ' ay'
                                                                                }
                                                                            </span>
                                                                        )

                                                                    }
                                                                    {

                                                                        datetimeDifference(new Date(data.data.post_date), new Date()).hours !== 0 && (
                                                                            <span>
                                                                                {
                                                                                    datetimeDifference(new Date(data.data.post_date), new Date()).hours + ' saat'
                                                                                }
                                                                            </span>
                                                                        )

                                                                    }
                                                                    {

                                                                        datetimeDifference(new Date(data.data.post_date), new Date()).minutes !== 0 && (
                                                                            <span>
                                                                                {
                                                                                    datetimeDifference(new Date(data.data.post_date), new Date()).minutes + ' dəqiqə'
                                                                                }
                                                                            </span>
                                                                        )

                                                                    }
                                                                </p>
                                                                <p>
                                                                    <FontAwesomeIcon icon={faEye} />
                                                                    {
                                                                        data.data.viewcount.data.count
                                                                    }
                                                                </p>
                                                            </>
                                                        )
                                                    }
                                                </div>
                                                <div className='newsDetail__tools--right'>
                                                    <p>Mətn ölçüsü</p>
                                                    <div className='newsDetail__btnAll'>
                                                        <button className='minus'>
                                                            -
                                                    </button>
                                                        <span className='showFont'>18</span>
                                                        <button className='plus'>
                                                            +
                                                    </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='newsDetail__social'>
                                            <a href='2#'>
                                                <p>
                                                    <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0.078125 8.79689V15.5508C0.078125 15.8792 0.343457 16.1445 0.671875 16.1445H1.87793V8.20314H0.671875C0.343457 8.20314 0.078125 8.46848 0.078125 8.79689ZM14.4376 8.90266C14.7493 8.49074 14.9219 7.98605 14.9219 7.46096C14.9219 6.62785 14.4562 5.83742 13.7065 5.40139C13.5136 5.28819 13.2938 5.22862 13.0701 5.22883H8.61885L8.73018 2.94846C8.75801 2.39738 8.56318 1.87414 8.18281 1.47522C7.9972 1.27839 7.77312 1.12182 7.52448 1.01521C7.27584 0.908607 7.00793 0.854241 6.7374 0.85549C5.77256 0.85549 4.91904 1.5049 4.66299 2.43449L3.071 8.20129L3.06543 16.1427H11.8251C11.9977 16.1427 12.1628 16.1093 12.3168 16.0425C13.2 15.6658 13.7696 14.803 13.7696 13.8456C13.7696 13.6118 13.7362 13.3818 13.6694 13.1591C13.9812 12.7472 14.1537 12.2425 14.1537 11.7174C14.1537 11.4836 14.1203 11.2535 14.0535 11.0309C14.3652 10.619 14.5378 10.1143 14.5378 9.58918C14.5378 9.35539 14.5044 9.12531 14.4376 8.90266ZM13.2223 8.25881L12.8159 8.61135L13.0757 9.08449C13.1607 9.23974 13.2047 9.41406 13.2037 9.59103C13.2037 9.89719 13.072 10.1885 12.84 10.3889L12.4337 10.7414L12.6916 11.2127C12.7766 11.368 12.8206 11.5423 12.8196 11.7193C12.8196 12.0254 12.6879 12.3167 12.456 12.5171L12.0496 12.8696L12.3075 13.3409C12.3925 13.4962 12.4365 13.6705 12.4355 13.8475C12.4355 14.2631 12.1906 14.6379 11.8121 14.8086H4.40137V8.40353C4.74648 7.15666 5.2623 5.28635 5.95068 2.79074C5.99878 2.61958 6.1011 2.46863 6.24229 2.36056C6.38347 2.2525 6.5559 2.19315 6.73369 2.19143C6.87285 2.18957 7.01201 2.23225 7.1252 2.31574C7.30889 2.45305 7.40723 2.66086 7.39609 2.88166L7.21797 6.56291H13.0516C13.3818 6.76516 13.5859 7.10656 13.5859 7.46096C13.5859 7.76711 13.4542 8.05842 13.2223 8.25881Z" fill="white" />
                                                    </svg>
                                                Bizi izləyin
                                             </p>
                                                <span>
                                                    facebook
                                             </span>
                                            </a>
                                            <a href='2#'>
                                                <p>
                                                    <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M18.665 0.407207L0.934973 6.67446C-0.275027 7.11996 -0.268027 7.73871 0.712973 8.01462L5.26497 9.31629L15.797 3.22504C16.295 2.94729 16.75 3.09671 16.376 3.40104L7.84297 10.4603H7.84097L7.84297 10.4612L7.52897 14.7622C7.98897 14.7622 8.19197 14.5688 8.44997 14.3405L10.661 12.3697L15.26 15.4836C16.108 15.9117 16.717 15.6917 16.928 14.764L19.947 1.72171C20.256 0.585957 19.474 0.0717071 18.665 0.407207Z" fill="white" />
                                                    </svg>
                                                Bizə qoşulun
                                                </p>
                                                < span>
                                                    Telegram
                                             </span>
                                            </a>
                                        </div>
                                        <div className='home__bannerTop' style={{ backgroundColor: '#010101' }}>
                                            <img src={'https://banker.az/wp-content/uploads/2021/01/XB-SWISSTOOL-1450x300px.jpg'} alt='' />
                                        </div>
                                        <div className='newsDetail__self'>
                                            {
                                                data !== undefined && data.data.length !== 0 && (
                                                    renderHTML(data.data.content)
                                                )
                                            }
                                        </div>
                                        <div className='home__bannerTop' style={{backgroundColor:'#fff'}}>
                                            <img src={'https://banker.az/wp-content/uploads/2021/02/1450x300-2.jpg'} alt='' />
                                        </div>
                                        <div className='newsDetail__vacancies'>
                                            <div className='newsDetail__vacancies--title'>
                                                <h4>Vakansiyalar</h4>
                                                {/* <NavLink to={''}>
                                                        <span>+</span>
                                                         Əlavə et
                                                  </NavLink> */}
                                            </div>
                                            <div className='newsDetail__vacancies--content'>
                                                {
                                                    vacancyLatest.isLoading === false && vacancyLatest.data !== undefined && (
                                                        vacancyLatest.data.data.map(item => (
                                                            <div>
                                                                <p>
                                                                    <NavLink to={'/jobs/' + item.slug}>
                                                                        {
                                                                            item.title
                                                                        }
                                                                    </NavLink>

                                                                </p>
                                                                <p>
                                                                    <img src={item.company.data.logo.cover} alt='' />
                                                                    {
                                                                        item.company.data.name
                                                                    }
                                                                </p>
                                                                <p>
                                                                    {
                                                                        item.category.data.name
                                                                    }
                                                                </p>
                                                                <p>
                                                                    {
                                                                        checkSalary(item)
                                                                    }
                                                                </p>
                                                            </div>
                                                        ))
                                                    )
                                                }
                                            </div>
                                            <div className='newsDetail__vacancies--end'>
                                                <p></p>
                                                <p>
                                                    <NavLink to={'/jobs'}>
                                                        Daha çox göstər
                                                        </NavLink>
                                                    <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M2.02725 0.307189L6.99975 5.26886L11.9723 0.30719L13.4998 1.83469L6.99975 8.33469L0.499754 1.83469L2.02725 0.307189Z" fill="#014577" />
                                                    </svg>
                                                </p>
                                            </div>
                                        </div>
                                        {/* <Subscription /> */}
                                    </div>
                                </div>
                                <div className='newsDetail__right'>
                                    <div className='news__title'>
                                        <h1>{'Xeberler'}</h1>
                                        <div className='flexSwitch'>
                                            <span>
                                                Vacib
                                                </span>
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
                                    <div className={`newsDetailed ${requiredNews.isLoading === true ? 'overNews' : ''}`}>
                                        {
                                            requiredNews.isLoading === true && (
                                                detectItemNews(15)
                                            )
                                        }
                                        {
                                            requiredNews.isLoading === false && (
                                                <News
                                                    title={'data'}
                                                    switch={true}
                                                    requNews={requiredNews.data}
                                                    icon={true}
                                                />
                                            )
                                        }
                                    </div>
                                    {/* <div className='newsDetail__raitings'>
                                            <div className='newsDetail__raitings--title'>
                                                <h4>Bölmə tərəfdaşı</h4>
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
                                    <div className='newsDetail__bannerRight'>
                                        <img src={require('../../../images/turanBank.jpg').default} alt='' />
                                    </div>
                                    <div className='newsDetail__bannerRight'>
                                        <img src={require('../../../images/masin.jpg').default} alt='' />
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </div>
                    <Container>
                        <div className='newsDetail__bottomContent'>

                            <div className='newsDetail__bottomContent--title'>
                                <h4>Oxşar xəbərlər</h4>
                            </div>
                            <div className='newsDetail__bottomContent--info'>
                                {/* <Carousel
                                        responsive={responsive}
                                        additionalTransfrom={0}
                                        arrows={true}
                                        autoPlaySpeed={3000}
                                        autoPlay={false}
                                        centerMode={false}
                                        showDots={false}
                                        infinite={true}
                                        // className={'sliderPartners__self'}
                                        focusOnSelect={false}
                                        minimumTouchDrag={40}
                                        itemClass="carousel-item-padding"

                                    >
                                        {
                                            related.isLoading === false && related.isError === false && (
                                                related.data.data.map((item) => (
                                                    <div className='newsDetail__bottomContent--slideItem' key={item.id}>
                                                        <NavLink to={'/' + item.slug}>
                                                            <div className='leayoutItem'>

                                                            </div>
                                                            <img src={item.img !== null && item.img && item.img.thumb} alt='' />
                                                            <div className='newsDetail__bottomContent--slideItem__in'>
                                                                <p>
                                                                    {
                                                                        item.title
                                                                    }
                                                                </p>
                                                            </div>
                                                        </NavLink>
                                                    </div>
                                                ))
                                            )
                                        }
                                    </Carousel> */}
                            </div>
                            <div className='newsDetail__multiNews'>
                                <div className='newsDetail__left p-0'>
                                    {
                                        data !== undefined && data.data.relateds.data !== null && data.data.relateds.data !== undefined && (data.data.relateds.data.map(item => (

                                            <NavLink to={'/blog/' + item.slug}>
                                                <div className='newsDetail__newsBox'>
                                                    <div className='newsDetail__title'>
                                                        <h1>
                                                            {
                                                                item.slug
                                                            }
                                                        </h1>
                                                    </div>
                                                    <div className='newsDetail__newsBox--imgBox'>
                                                        <img src={
                                                            item.img !== null && item.img !== undefined && (item.img.detail)
                                                        } alt='' />
                                                    </div>
                                                    <div className='newsDetail__tools'>
                                                        <div className='newsDetail__tools--left'>
                                                            <p>4 dekabr 2020, saat 14:35</p>
                                                            <p>
                                                                <FontAwesomeIcon icon={faEye} />
                                                                    298
                                                                </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='linkBox'>
                                                    Hamısını oxu
                                                        <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0.307251 11.9728L5.26892 7.00031L0.307251 2.02781L1.83475 0.500305L8.33475 7.00031L1.83475 13.5003L0.307251 11.9728Z" fill="#014577" />
                                                    </svg>
                                                </div>
                                            </NavLink>

                                        )))
                                    }
                                </div>
                                <div className='newsDetail__right'>
                                    <div className='newsDetail__bannerRight'>
                                        <img src={require('../../../images/turanBank.jpg').default} alt='' />
                                    </div>
                                    <div className='newsDetail__bannerRight'>
                                        <img src={require('../../../images/masin.jpg').default} alt='' />
                                    </div>
                                    <div className='newsDetail__bannerRight'>
                                        <img src={require('../../../images/ziraat.jpg').default} alt='' />
                                    </div>
                                    <div className='newsDetail__bannerRight'>
                                        <img src={require('../../../images/masin.jpg').default} alt='' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </React.Fragment>
            }
        </main >
    );
}

export default BlogDetail;
