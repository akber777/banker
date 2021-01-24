import React from 'react';

// css
import './css/_multiSlider.scss';

// proptypes
import PropTypes from 'prop-types';

// tools

// bootstrap tab
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

// react router dom
import { NavLink } from 'react-router-dom';

// sider
import Carousel from "react-multi-carousel";

// reactstrap

import { Row, Col } from 'reactstrap';


const MultiSlider = React.memo(function MultiSlider({
    ...props
}) {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 6
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };


    const responsiveQuestion = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 6
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };



    const CustomButtonBox = ({ ...props }) =>
        <>
            <div className='question__buttonBox'>
                <div
                    onClick={() => props.previous()}
                    className='question__buttonBox--prev'
                >
                    <svg width="13" height="24" viewBox="0 0 13 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.9461 0.476753C12.2256 0.476231 12.4526 0.702459 12.4531 0.981972C12.4534 1.11672 12.3998 1.24602 12.3044 1.3412L1.52739 12.1172L12.3044 22.8932C12.5023 23.0911 12.5023 23.412 12.3044 23.6099C12.1065 23.8078 11.7857 23.8078 11.5878 23.6099L0.453421 12.4755C0.255849 12.2779 0.255849 11.9575 0.453421 11.7599L11.5878 0.625547C11.6827 0.530321 11.8116 0.476753 11.9461 0.476753Z" fill="black" />
                    </svg>
                </div>
                <div
                    onClick={() => props.next()}
                    className='question__buttonBox--next'
                >
                    <svg width="13" height="24" viewBox="0 0 13 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.986517 23.7525C0.707003 23.753 0.480015 23.5268 0.479493 23.2473C0.479256 23.1125 0.532777 22.9832 0.628193 22.8881L11.4052 12.112L0.628193 1.33602C0.43029 1.13812 0.43029 0.817278 0.628193 0.619375C0.826097 0.421471 1.14694 0.421471 1.34484 0.619375L12.4792 11.7537C12.6768 11.9514 12.6768 12.2717 12.4792 12.4694L1.34484 23.6037C1.24995 23.6989 1.12098 23.7525 0.986517 23.7525Z" fill="black" />
                    </svg>
                </div>
            </div>
        </>

    return (
        <>
            {
                props.sliderType === 'month' && (
                    <div className='month'>
                        <div className='month__title'>
                            <h1>Ayın fürsətləri</h1>
                        </div>
                        <div className='month__tabs'>
                            <Tabs defaultActiveKey="Töhfələr" id="uncontrolled-tab-example">
                                <Tab eventKey="Töhfələr" title="Töhfələr">
                                    <div className='month__sliderWrapper'>
                                        <Carousel
                                            responsive={responsive}
                                            additionalTransfrom={0}
                                            arrows={false}
                                            autoPlaySpeed={3000}
                                            autoPlay={false}
                                            centerMode={false}
                                            showDots={false}
                                            infinite={true}
                                            // className={'sliderPartners__self'}
                                            renderButtonGroupOutside
                                            focusOnSelect={false}
                                            minimumTouchDrag={80}


                                        >
                                            <div className='month__sliderItem'>
                                                <img src={require('../../../images/nasa.png').default} alt='' />
                                                <h4>7.5 % - dən</h4>
                                                <p>AZN</p>
                                                <NavLink className='month__sliderLink' to=''>
                                                    Onlayn kredit
                                                </NavLink>
                                            </div>
                                            <div className='month__sliderItem'>
                                                <img src={require('../../../images/nasa.png').default} alt='' />
                                                <h4>7.5 % - dən</h4>
                                                <p>AZN</p>
                                                <NavLink className='month__sliderLink' to=''>
                                                    Onlayn kredit
                                                </NavLink>
                                            </div>
                                            <div className='month__sliderItem'>
                                                <img src={require('../../../images/nasa.png').default} alt='' />
                                                <h4>7.5 % - dən</h4>
                                                <p>AZN</p>
                                                <NavLink className='month__sliderLink' to=''>
                                                    Onlayn kredit
                                                </NavLink>
                                            </div>
                                            <div className='month__sliderItem'>
                                                <img src={require('../../../images/nasa.png').default} alt='' />
                                                <h4>7.5 % - dən</h4>
                                                <p>AZN</p>
                                                <NavLink className='month__sliderLink' to=''>
                                                    Onlayn kredit
                                                </NavLink>
                                            </div>
                                            <div className='month__sliderItem'>
                                                <img src={require('../../../images/nasa.png').default} alt='' />
                                                <h4>7.5 % - dən</h4>
                                                <p>AZN</p>
                                                <NavLink className='month__sliderLink' to=''>
                                                    Onlayn kredit
                                                </NavLink>
                                            </div>
                                            <div className='month__sliderItem'>
                                                <img src={require('../../../images/nasa.png').default} alt='' />
                                                <h4>7.5 % - dən</h4>
                                                <p>AZN</p>
                                                <NavLink className='month__sliderLink' to=''>
                                                    Onlayn kredit
                                                </NavLink>
                                            </div>
                                            <div className='month__sliderItem end'>
                                                <img src={require('../../../images/nasa.png').default} alt='' />
                                                <h4>7.5 % - dən</h4>
                                                <p>AZN</p>
                                                <NavLink className='month__sliderLink' to=''>
                                                    Onlayn kredit
                                                </NavLink>
                                            </div>
                                        </Carousel>
                                    </div>
                                </Tab>
                                <Tab eventKey="Kreditlər" title="Kreditlər">

                                </Tab>
                                <Tab eventKey="İpoteka" title="İpoteka">

                                </Tab>
                                <Tab eventKey="Debet kartlar" title="Debet kartlar">

                                </Tab>
                                <Tab eventKey="Kredit kartlar" title="Kredit kartlar">

                                </Tab>
                                <Tab eventKey="Mikro kreditlər" title="Mikro kreditlər">

                                </Tab>
                            </Tabs>
                            <NavLink to={''} className='month__allOffer'>
                                Bütün təkliflər
                            </NavLink>
                        </div>
                    </div>
                )
            }{
                props.sliderType === 'question' && (
                    <div className='question'>
                        <div className='question__title'>
                            <h1>Sual & Cavab</h1>
                        </div>
                        <div className='question__tabs'>
                            <Tabs defaultActiveKey="Şirkət məhsulları və xidmətləri" id="uncontrolled-tab-example">
                                <Tab eventKey="Şirkət məhsulları və xidmətləri" title="Şirkət məhsulları və xidmətləri">
                                    <div className='question__sliderWrapper'>
                                        <Carousel
                                            responsive={responsiveQuestion}
                                            additionalTransfrom={0}
                                            arrows={false}
                                            autoPlaySpeed={3000}
                                            autoPlay={false}
                                            centerMode={false}
                                            showDots={true}
                                            infinite={true}
                                            // className={'sliderPartners__self'}
                                            renderButtonGroupOutside
                                            focusOnSelect={false}
                                            minimumTouchDrag={80}
                                            customButtonGroup={<CustomButtonBox />}
                                            itemClass="carousel-item-padding"
                                            renderDotsOutside

                                        >
                                            <div className='question__slideBox'>
                                                <div className='question__slideBox--imgBox'>
                                                    <img src={require('../../../images/girl.jpg').default} alt='' />
                                                </div>
                                                <div className='question__slideBox--infoBox'>
                                                    <h4>Ləman Hacıyeva</h4>
                                                    <p>Müştəri dəstək şöbəsinin mütəxəssisi</p>
                                                    <NavLink to={''}>
                                                        Sual ver
                                                    </NavLink>
                                                </div>
                                                <div className='question__slideBox--hot'>
                                                    <NavLink to={''}>
                                                        Qaynar xətt
                                                    </NavLink>
                                                </div>
                                            </div>
                                            <div className='question__slideBox'>
                                                <div className='question__slideBox--imgBox'>
                                                    <img src={require('../../../images/girl.jpg').default} alt='' />
                                                </div>
                                                <div className='question__slideBox--infoBox'>
                                                    <h4>Ləman Hacıyeva</h4>
                                                    <p>Müştəri dəstək şöbəsinin mütəxəssisi</p>
                                                    <NavLink to={''}>
                                                        Sual ver
                                                    </NavLink>
                                                </div>
                                                <div className='question__slideBox--hot'>
                                                    <NavLink to={''}>
                                                        Qaynar xətt
                                                    </NavLink>
                                                </div>
                                            </div>
                                            <div className='question__slideBox'>
                                                <div className='question__slideBox--imgBox'>
                                                    <img src={require('../../../images/girl.jpg').default} alt='' />
                                                </div>
                                                <div className='question__slideBox--infoBox'>
                                                    <h4>Ləman Hacıyeva</h4>
                                                    <p>Müştəri dəstək şöbəsinin mütəxəssisi</p>
                                                    <NavLink to={''}>
                                                        Sual ver
                                                    </NavLink>
                                                </div>
                                                <div className='question__slideBox--hot'>
                                                    <NavLink to={''}>
                                                        Qaynar xətt
                                                    </NavLink>
                                                </div>
                                            </div>
                                            <div className='question__slideBox'>
                                                <div className='question__slideBox--imgBox'>
                                                    <img src={require('../../../images/girl.jpg').default} alt='' />
                                                </div>
                                                <div className='question__slideBox--infoBox'>
                                                    <h4>Ləman Hacıyeva</h4>
                                                    <p>Müştəri dəstək şöbəsinin mütəxəssisi</p>
                                                    <NavLink to={''}>
                                                        Sual ver
                                                    </NavLink>
                                                </div>
                                                <div className='question__slideBox--hot'>
                                                    <NavLink to={''}>
                                                        Qaynar xətt
                                                    </NavLink>
                                                </div>
                                            </div>
                                        </Carousel>
                                    </div>
                                </Tab>
                                <Tab eventKey="Qaynar xətt" title="Qaynar xətt">

                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                )
            }
            {
                props.sliderType === 'partners' && (
                    <div className='question'>
                        <div className='question__title'>
                            <h1>Tərəfdaşlarımız</h1>
                        </div>
                        <div className='question__tabs partners'>
                            <Tabs defaultActiveKey="Banklar" id="uncontrolled-tab-example">
                                <Tab eventKey="Banklar" title="Banklar">
                                    <div className='partners__box'>
                                        <Row>
                                            <Col md='4' lg='2'>
                                                <div className='partners__contentSelf'>
                                                    <img src={require('../../../images/4.png').default} alt='' />
                                                </div>
                                            </Col>
                                            <Col md='4' lg='2'>
                                                <div className='partners__contentSelf'>
                                                    <img src={require('../../../images/4.png').default} alt='' />
                                                </div>
                                            </Col>
                                            <Col md='4' lg='2'>
                                                <div className='partners__contentSelf'>
                                                    <img src={require('../../../images/4.png').default} alt='' />
                                                </div>
                                            </Col>
                                            <Col md='4' lg='2'>
                                                <div className='partners__contentSelf'>
                                                    <img src={require('../../../images/4.png').default} alt='' />
                                                </div>
                                            </Col>
                                            <Col md='4' lg='2'>
                                                <div className='partners__contentSelf'>
                                                    <img src={require('../../../images/4.png').default} alt='' />
                                                </div>
                                            </Col>
                                            <Col md='4' lg='2'>
                                                <div className='partners__contentSelf'>
                                                    <img src={require('../../../images/4.png').default} alt='' />
                                                </div>
                                            </Col>
                                            <Col md='4' lg='2'>
                                                <div className='partners__contentSelf'>
                                                    <img src={require('../../../images/4.png').default} alt='' />
                                                </div>
                                            </Col>
                                            <Col md='4' lg='2'>
                                                <div className='partners__contentSelf'>
                                                    <img src={require('../../../images/4.png').default} alt='' />
                                                </div>
                                            </Col>
                                            <Col md='4' lg='2'>
                                                <div className='partners__contentSelf'>
                                                    <img src={require('../../../images/4.png').default} alt='' />
                                                </div>
                                            </Col>
                                            <Col md='4' lg='2'>
                                                <div className='partners__contentSelf'>
                                                    <img src={require('../../../images/4.png').default} alt='' />
                                                </div>
                                            </Col>
                                            <Col md='4' lg='2'>
                                                <div className='partners__contentSelf'>
                                                    <img src={require('../../../images/4.png').default} alt='' />
                                                </div>
                                            </Col>
                                            <Col md='4' lg='2'>
                                                <div className='partners__contentSelf'>
                                                    <img src={require('../../../images/4.png').default} alt='' />
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Tab>
                                <Tab eventKey="Sığorta şirkətləri" title="Sığorta şirkətləri">

                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                )
            }
        </>
    );
})


MultiSlider.propTypes = {
    sliderType: PropTypes.string.isRequired,
}

export default MultiSlider;
