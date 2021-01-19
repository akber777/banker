import React from 'react';

// css

import './css/_home.scss';

// tools

// reactstrap

// import { Container } from 'reactstrap';


// sider
import Carousel from "react-multi-carousel";


// react router dom
import { NavLink } from 'react-router-dom';

// news
import News from '../news/news';

// slider
import Slider from '../../slider/slider';
import CategorySlider from '../../slider/categorySlider';
import MostReadNews from '../mostReadNews/mostReadNews';



const HomePage = () => {


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
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };



    const CustomDots = ({ onMove, index, onClick, active }) =>
        <>
            <li
                className={active ? "active" : "inactive"}
                onClick={() => onClick()}
            >
                <span></span>
            </li>
        </>

    return (
        <main className='mobileHome'>
            <div className='mobileHome__slider'>
                <Carousel
                    responsive={responsive}
                    additionalTransfrom={0}
                    arrows={false}
                    autoPlaySpeed={3000}
                    centerMode={false}
                    showDots={true}
                    infinite={true}
                    className={'sliderPartners__self'}
                    renderDotsOutside
                    customDot={<CustomDots />}
                    focusOnSelect={true}

                >
                    <div className='mobileHome__slider--items'>
                        <NavLink to={''}>
                            <img src={'https://cdn.wallpapersafari.com/97/93/SYRrb1.jpg'} alt='' />
                        </NavLink>
                    </div>
                    <div className='mobileHome__slider--items'>
                        <NavLink to={''}>
                            <img src={'https://cdn.wallpapersafari.com/97/93/SYRrb1.jpg'} alt='' />
                        </NavLink>
                    </div>
                    <div className='mobileHome__slider--items'>
                        <NavLink to={''}>
                            <img src={'https://cdn.wallpapersafari.com/97/93/SYRrb1.jpg'} alt='' />
                        </NavLink>
                    </div>
                </Carousel>
            </div>
            <News />
            <Slider
                meqale={{
                    data: 25
                }}
            />
            <CategorySlider />
            <Slider
                photo={{
                    data: 25
                }}
            />
            <MostReadNews
                mostRead={{
                    data: 25
                }}
            />
        </main>
    );
}

export default HomePage;
