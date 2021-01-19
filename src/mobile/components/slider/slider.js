import React from 'react';


// css
import './css/_slider.scss';


// tools

// proptypes

import PropTypes from 'prop-types';


// react router dom
import { NavLink } from 'react-router-dom';


// carousel

// sider
import Carousel from "react-multi-carousel";

const Slider = (props) => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            partialVisibilityGutter: 60

        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            partialVisibilityGutter: 40
        }
    };

    return (
        <div className='slider'>
            {
                props.meqale && (
                    <div className='mobSlider'>
                        <div className='mobSlider__title'>
                            <h1>
                                Məqalələr
                            </h1>
                            <NavLink to={''}>
                                Hamısı
                                <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.5001 11.25C1.32486 11.2503 1.15503 11.1893 1.0201 11.0775C0.944155 11.0145 0.881379 10.9372 0.835365 10.8499C0.789351 10.7627 0.761004 10.6672 0.751947 10.569C0.74289 10.4707 0.753301 10.3717 0.782585 10.2775C0.811868 10.1833 0.859448 10.0958 0.922599 10.02L4.2826 5.99999L1.0426 1.97249C0.9803 1.89577 0.933776 1.8075 0.905702 1.71274C0.877629 1.61799 0.868558 1.51862 0.879013 1.42035C0.889467 1.32208 0.91924 1.22684 0.96662 1.14011C1.014 1.05339 1.07805 0.976878 1.1551 0.914986C1.2327 0.846709 1.32357 0.795208 1.42202 0.763716C1.52047 0.732224 1.62436 0.721422 1.72718 0.731985C1.83 0.742549 1.92953 0.774251 2.01951 0.825103C2.1095 0.875954 2.188 0.944856 2.2501 1.02749L5.8726 5.52749C5.98291 5.66169 6.04321 5.83002 6.04321 6.00374C6.04321 6.17746 5.98291 6.34579 5.8726 6.47999L2.1226 10.98C2.04736 11.0707 1.95179 11.1425 1.84363 11.1894C1.73547 11.2363 1.61778 11.2571 1.5001 11.25Z" fill="#01345A" />
                                </svg>
                            </NavLink>
                        </div>
                        <div className='mobSlider__slide'>
                            <Carousel
                                responsive={responsive}
                                additionalTransfrom={0}
                                arrows={false}
                                autoPlaySpeed={3000}
                                showDots={false}
                                infinite={true}
                                className={'sliderPartners__self'}
                                renderDotsOutside
                                focusOnSelect={true}
                                partialVisible={true}
                                minimumTouchDrag={10}
                                slidesToSlide={1}
                            // centerMode
                            >
                                <div className='mobSlider__slide--items'>
                                    <NavLink to={''}>
                                        <div className='mobSlider__imgBox'>
                                            <img src={'https://cdn.wallpapersafari.com/97/93/SYRrb1.jpg'} alt='' />
                                        </div>
                                        <div className='mobSlider__info'>
                                            <p>
                                                “Tesla” səhm bazarında iştirakını artırır
                                            </p>
                                        </div>
                                    </NavLink>
                                </div>
                                <div className='mobSlider__slide--items'>
                                    <NavLink to={''}>
                                        <div className='mobSlider__imgBox'>
                                            <img src={'https://cdn.wallpapersafari.com/97/93/SYRrb1.jpg'} alt='' />
                                        </div>
                                        <div className='mobSlider__info'>
                                            <p>
                                                “Tesla” səhm bazarında iştirakını artırır
                                            </p>
                                        </div>
                                    </NavLink>
                                </div>
                                <div className='mobSlider__slide--items'>
                                    <NavLink to={''}>
                                        <div className='mobSlider__imgBox'>
                                            <img src={'https://cdn.wallpapersafari.com/97/93/SYRrb1.jpg'} alt='' />
                                        </div>
                                        <div className='mobSlider__info'>
                                            <p>
                                                “Tesla” səhm bazarında iştirakını artırır
                                            </p>
                                        </div>
                                    </NavLink>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                )
            }
            {
                props.photo && (
                    <div className='mobSlider'>
                        <div className='mobSlider__title'>
                            <h1>
                                Foto xəbərlər
                            </h1>
                            <NavLink to={''}>
                                Hamısı
                                <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.5001 11.25C1.32486 11.2503 1.15503 11.1893 1.0201 11.0775C0.944155 11.0145 0.881379 10.9372 0.835365 10.8499C0.789351 10.7627 0.761004 10.6672 0.751947 10.569C0.74289 10.4707 0.753301 10.3717 0.782585 10.2775C0.811868 10.1833 0.859448 10.0958 0.922599 10.02L4.2826 5.99999L1.0426 1.97249C0.9803 1.89577 0.933776 1.8075 0.905702 1.71274C0.877629 1.61799 0.868558 1.51862 0.879013 1.42035C0.889467 1.32208 0.91924 1.22684 0.96662 1.14011C1.014 1.05339 1.07805 0.976878 1.1551 0.914986C1.2327 0.846709 1.32357 0.795208 1.42202 0.763716C1.52047 0.732224 1.62436 0.721422 1.72718 0.731985C1.83 0.742549 1.92953 0.774251 2.01951 0.825103C2.1095 0.875954 2.188 0.944856 2.2501 1.02749L5.8726 5.52749C5.98291 5.66169 6.04321 5.83002 6.04321 6.00374C6.04321 6.17746 5.98291 6.34579 5.8726 6.47999L2.1226 10.98C2.04736 11.0707 1.95179 11.1425 1.84363 11.1894C1.73547 11.2363 1.61778 11.2571 1.5001 11.25Z" fill="#01345A" />
                                </svg>
                            </NavLink>
                        </div>
                        <div className='mobSlider__slide'>
                            <Carousel
                                responsive={responsive}
                                additionalTransfrom={0}
                                arrows={false}
                                autoPlaySpeed={3000}
                                showDots={false}
                                infinite={true}
                                className={'sliderPartners__self'}
                                renderDotsOutside
                                focusOnSelect={true}
                                partialVisible={true}
                                minimumTouchDrag={10}
                                slidesToSlide={1}
                            // centerMode
                            >
                                <div className='mobSlider__slide--items'>
                                    <NavLink to={''}>
                                        <div className='mobSlider__imgBox'>
                                            <img src={'https://cdn.wallpapersafari.com/97/93/SYRrb1.jpg'} alt='' />
                                        </div>
                                        <div className='mobSlider__info'>
                                            <p>
                                                “Tesla” səhm bazarında iştirakını artırır
                                            </p>
                                        </div>
                                    </NavLink>
                                </div>
                                <div className='mobSlider__slide--items'>
                                    <NavLink to={''}>
                                        <div className='mobSlider__imgBox'>
                                            <img src={'https://cdn.wallpapersafari.com/97/93/SYRrb1.jpg'} alt='' />
                                        </div>
                                        <div className='mobSlider__info'>
                                            <p>
                                                “Tesla” səhm bazarında iştirakını artırır
                                            </p>
                                        </div>
                                    </NavLink>
                                </div>
                                <div className='mobSlider__slide--items'>
                                    <NavLink to={''}>
                                        <div className='mobSlider__imgBox'>
                                            <img src={'https://cdn.wallpapersafari.com/97/93/SYRrb1.jpg'} alt='' />
                                        </div>
                                        <div className='mobSlider__info'>
                                            <p>
                                                “Tesla” səhm bazarında iştirakını artırır
                                            </p>
                                        </div>
                                    </NavLink>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                )
            }
            <div className='mobileHome__banner'>
                <img src={require('../../components/images/bannerTop.png').default} alt='' />
            </div>
        </div>
    );
}


Slider.propTypes = {

    meqale: PropTypes.object

}


export default Slider;
