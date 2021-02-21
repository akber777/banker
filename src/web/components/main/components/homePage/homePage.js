
import React, { useLayoutEffect, useState } from 'react';


// import css
import './css/_home.scss';

// reactstrap
import { Container } from 'reactstrap';

// import components

import News from '../news/newsPage';

import Slides from '../slider/slider';

import NewsPart from '../newsPart/newsPart';

// import SliderPartners from '../sliderPartners/sliderPartners';

// import MultiSlider from '../multiSlider/multiSlider';

import Blog from '../blog/blog';


// tools

// query
import { useMutation, useQuery } from 'react-query';

// axios
import axios from 'axios';

// api

import { baseUrl } from '../../../api/api';

// recoil

import { useRecoilState } from 'recoil';

// atoms
import { apiLatest } from '../../../atoms/atoms';

// query func

import { requiredNew, homeBlog } from '../../../queries/queries';


// tools
import Switch from "react-switch";
import Author from '../author/author';
import { detectItemNews } from '../../../helper/helper';


const HomePage = () => {


    // home page first slider

    let homeSliderTop = useQuery(['homeSliderTop'], async () => {

        const res = await axios.get(baseUrl + 'news/home/slider')

        return res.data

    }, {
        refetchOnWindowFocus: false,
        refetchIntervalInBackground: true
    })



    // homepage most read news and two images news
    let mostRead = useQuery(['mostRead'], async () => {

        const res = await axios.get(baseUrl + 'news/most-read-7')

        return res.data

    }, {
        refetchOnWindowFocus: false,
        refetchIntervalInBackground: true
    })



    let [apiLate, setApiVal] = useRecoilState(apiLatest)

    // required news
    let requiredNews = useQuery(['requiredNews', apiLate], requiredNew, {
        refetchOnWindowFocus: false,
        refetchIntervalInBackground: true
    })


    let mutation = useMutation(data => data);


    // 13 news



    let [checked, setChecked] = useState(false)


    useLayoutEffect(() => {

        window.onscroll = function () {

            let scrollTop = this.scrollY;


            if (document.querySelector('.fixed') !== null) {

                if (scrollTop > 240) {

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


        if (apiLate === '/latest') {

            setChecked(false)
        }


    }, [])




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




    // required news
    let blogHome = useQuery(['blogHome', ''], homeBlog, {
        refetchOnWindowFocus: false,
        refetchIntervalInBackground: true
    })



    window.onbeforeunload = function () {

        window.scrollTo({
            top: 248
        });
    }



    return (
        <main className='home'>
            <div className='home__leftBanner'>
                <img src={'https://banker.az/wp-content/uploads/2020/12/Banker.az-151-X-751.jpg'} alt='' />
            </div>
            <div className='home__rightBanner'>
                <img src={'https://banker.az/wp-content/uploads/2020/12/Banker.az-151-X-751.jpg'} alt='' />
            </div>
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
                <div className='home__bannerTop' style={{ backgroundColor: '#fff' }} >
                    <img src={'https://banker.az/wp-content/uploads/2020/12/DevOps-19DEK-static-banner-970x90-1.png'} alt='' />
                </div>
                <div className='home__sectionOne'>
                    <div className='home__leftBox'>
                        <div className='home__leftBoxWrapper'>
                            <div className='home__leftBoxSlider'>
                                {
                                    homeSliderTop.isLoading === true && (
                                        <div className="placeholder wave waveSliderTop">
                                            <div className="square" style={{ height: '570px' }}></div>
                                        </div>
                                    )
                                }
                                {
                                    homeSliderTop.isLoading === false && (
                                        <Slides
                                            dataSlider={homeSliderTop.data}
                                            slides={true}
                                        />
                                    )
                                }
                            </div>
                            <div className='home__leftBoxBanner' style={{ backgroundColor: '#ececec' }}>
                                <img src={require('../../../images/turanBank.jpg').default} alt='' />
                            </div>
                        </div>
                        <div className='home__bannerBottom' style={{ backgroundColor: '#ececec' }}>
                            <img src={require('../../../images/pasha.jpg').default} alt='' />
                        </div>
                    </div>
                    <div className={`flex ${requiredNews.isLoading === true ? 'overNewsFlex' : ''}`}>
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
                        {
                            requiredNews.isLoading === true && (
                                detectItemNews(15)
                            )
                        }
                        {

                            requiredNews.isLoading === false && (
                                <News
                                    title={'Ən çox oxunanlar'}
                                    switch={true}
                                    requNews={requiredNews.data}
                                    icon={true}
                                />
                            )

                        }
                    </div>
                </div>
                <div className='home__population popularNews'>
                    <div className='home__populationWrapper'>
                        <div className={`home__populationLeft ${mostRead.isLoading === true ? 'overNewsFlex popularFlex' : ''}`}>
                            <h4>{'Populyar'}</h4>
                            {
                                mostRead.isLoading === true && (
                                    detectItemNews(15)
                                )
                            }
                            {
                                mostRead.isLoading === false && (
                                    <News
                                        title={'Populyar'}
                                        switch={false}
                                        popularData={mostRead.data}
                                        icon={true}
                                    />
                                )
                            }

                        </div>
                        <div className='home__populationRight'>
                            <Slides

                                slides={false}
                                news={mostRead.data}
                            />
                        </div>
                    </div>
                    <div className='home__populationBanner'>
                        <img src={'https://banker.az/wp-content/uploads/2021/01/banker.jpg'} alt='' />
                        <img src={'https://banker.az/wp-content/uploads/2021/02/Azerbaycan_internet_Bankaciligi_Mobil_Banner_500x500.png'} alt='' />
                    </div>
                </div>
                {/* <div className='home__bannerBottom'>
                    <img src={require('../../../images/topBanner.jpg').default} alt='' />
                </div> */}
                <NewsPart />
                {/* <div className='home__bannerBottom'>
                    <img src={require('../../../images/topBanner.jpg').default} alt='' />
                </div> */}
                {/* <SliderPartners sliderData={[
                    {
                        "userId": 1,
                        "id": 1,
                        "title": "delectus aut autem",
                        "completed": false
                    },
                    {
                        "userId": 2,
                        "id": 2,
                        "title": "delectus aut autem2",
                        "completed": true
                    },
                    {
                        "userId": 2,
                        "id": 2,
                        "title": "delectus aut autem2",
                        "completed": true
                    },
                    {
                        "userId": 2,
                        "id": 2,
                        "title": "delectus aut autem2",
                        "completed": true
                    },
                    {
                        "userId": 2,
                        "id": 2,
                        "title": "delectus aut autem2",
                        "completed": true
                    },
                    {
                        "userId": 2,
                        "id": 2,
                        "title": "delectus aut autem2",
                        "completed": true
                    },
                ]} /> */}
                {/* <div className='home__bannerBottom'>
                    <img src={require('../../../images/topBanner.jpg').default} alt='' />
                </div> */}
                {/* <MultiSlider
                    sliderType={'month'}
                /> */}
                <div className='home__bannerBottom' style={{ backgroundColor: '#11316c' }}>
                    <img src={'https://banker.az/wp-content/uploads/2021/02/12-il-Kampaniya-banker.az_.jpg'} alt='' />
                </div>
                <Blog blogData={blogHome.data} />
                <div className='home__bannerBottom' style={{ backgroundColor: '#11316c' }}>
                    <img src={'https://banker.az/wp-content/uploads/2021/02/12-il-Kampaniya-banker.az_.jpg'} alt='' />
                </div>
                <Author />
                <div className='home__bannerBottom' style={{ backgroundColor: '#11316c', marginBottom: '50px' }}>
                    <img src={'https://banker.az/wp-content/uploads/2021/02/12-il-Kampaniya-banker.az_.jpg'} alt='' />
                </div>
                {/* <div className='home__bannerBottom'>
                    <img src={require('../../../images/topBanner.jpg').default} alt='' />
                </div> */}
                {/* <MultiSlider
                    sliderType={'question'}
                /> */}
                {/* <MultiSlider
                    sliderType={'partners'}
                /> */}
            </Container>

        </main >
    );
}

export default HomePage;
