import React, { useLayoutEffect } from 'react';


// csss

import './css/_header.scss';


// tools

// reactstrap 

import { Container } from 'reactstrap';

// react router dom
import { NavLink } from 'react-router-dom';


// fontsawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faTelegramPlane, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

// pulgins
import ScrollArea from 'react-scrollbar';

const Header = () => {

    useLayoutEffect(() => {

        let openMenu = document.querySelector('.openSub');

        let menu = document.querySelector('.headerMobile__openMenu')




        openMenu.onclick = function () {

            if (menu.classList.contains('active') === false) {
                menu.classList.add('active');
                document.querySelector('.open').style.display = 'none';
                document.querySelector('.close').style.display = 'block';
                document.querySelector('body').style.overflow = 'hidden';
                document.querySelector('.headerMobile__openMenu ').style.height = window.innerHeight - 149 + 'px'

            } else {
                menu.classList.remove('active');
                document.querySelector('.open').style.display = 'block';
                document.querySelector('body').style.overflow = 'unset';
                document.querySelector('.close').style.display = 'none';
            }

        }


        // document.querySelectorAll('.currencyWidth').forEach(item => {

        //     item.style.width = window.innerWidth - 200 + 'px'
        // })



    }, [])


    return (
        <>
            <header className='headerMobile'>
                {/* monile open menu */}
                <div className='headerMobile__banner'>
                    <img src={require('../images/bannerTop.png').default} alt='' />
                </div>
                <div className='headerMobile__menuBox'>
                    <Container>
                        <div className='headerMobile__menuFlexBox'>
                            <button className='openSub'>
                                <div className='open'>
                                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 8H20M0 15H20H0ZM0 1H20H0Z" stroke="#D2D2D2" stroke-width="2" />
                                    </svg>
                                </div>
                                <div className='close'>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.8063 0.249146L8.99984 7.05564L2.19335 0.249146L0.249023 2.19347L7.05552 8.99997L0.249023 15.8065L2.19335 17.7508L8.99984 10.9443L15.8063 17.7508L17.7507 15.8065L10.9442 8.99997L17.7507 2.19347L15.8063 0.249146Z" fill="#D2D2D2" />
                                    </svg>
                                </div>
                            </button>
                            <NavLink to={''}>
                                <img src={require('../images/logo.png').default} alt='' />
                            </NavLink>
                            <button>
                                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 16C9.77498 15.9996 11.4988 15.4054 12.897 14.312L17.293 18.708L18.707 17.294L14.311 12.898C15.405 11.4997 15.9996 9.77544 16 8C16 3.589 12.411 0 8 0C3.589 0 0 3.589 0 8C0 12.411 3.589 16 8 16ZM8 2C11.309 2 14 4.691 14 8C14 11.309 11.309 14 8 14C4.691 14 2 11.309 2 8C2 4.691 4.691 2 8 2Z" fill="#D2D2D2" />
                                </svg>
                            </button>
                        </div>
                    </Container>
                </div>
                <div className='headerMobile__marque'>
                    <ScrollArea
                        speed={0.8}
                        className="area"
                        contentClassName="content"
                        horizontal={true}
                    >
                        <div
                            style={{
                                width: 10000,
                            }}
                            className='home__currency currencyWidth'>
                            <p>
                                Çərşənbə, 25 Noyabr 2020 14:45
                            </p>
                            <p>
                                USD
                                 <span style={{ color: '#202020' }}>1.7000</span>
                                <img src={require('../../../web/components/images/natural.png').default} alt='' />
                            </p>
                            <p>
                                EUR
                              <span style={{ color: '#202020' }}>2.02</span>
                                <img src={require('../../../web/components/images/natural.png').default} alt='' />
                            </p>
                            <p>
                                USD
                                 <span style={{ color: '#202020' }}>1.7000</span>
                                <img src={require('../../../web/components/images/natural.png').default} alt='' />
                            </p>
                            <p>
                                EUR
                              <span style={{ color: '#202020' }}>2.02</span>
                                <img src={require('../../../web/components/images/natural.png').default} alt='' />
                            </p>
                        </div>

                    </ScrollArea>
                </div>
            </header>
            <div className='headerMobile__openMenu'>
                <div className='headerMobile__openMenu--left'>
                    <NavLink to={''}>
                        Xəbərlər
                    </NavLink>
                    <NavLink to={''}>
                        Məqalələr
                    </NavLink>
                    <NavLink to={''}>
                        Vakansiyalar
                    </NavLink>
                    <NavLink to={''}>
                        FiFD kalkulyatoru
                    </NavLink>
                    <NavLink to={''}>
                        Əmək haqqı kalkulyatoru
                    </NavLink>
                    <NavLink to={''}>
                        Kredit kalkulyatoru
                    </NavLink>
                </div>
                <div className='headerMobile__openMenu--right'>
                    <div className='headerMobile__footer'>
                        <h1>Bizimlə əlaqə</h1>
                        <a href={`mailto:${'office@banker.az'}`}>
                            office@banker.az
                        </a>
                        <a href={`tel:${'+994 50 333 33 33'}`}>
                            +994 50 333 33 33
                        </a>
                        <a href={''}>
                            Cəfər Cabbarlı 44,Bakı
                        </a>
                    </div>
                    <div className='headerMobile__social'>
                        <a href='https://www.facebook.com/Bankeraz-121942871167786/' target='_blank' rel='noopener noreferrer'>
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                        <a href='https://www.instagram.com/bankeraz/' target='_blank' rel='noopener noreferrer'>
                            <FontAwesomeIcon icon={faTelegramPlane} />
                        </a>
                        <a href='https://twitter.com/BankerAz' target='_blank' rel='noopener noreferrer'>
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href='https://twitter.com/BankerAz' target='_blank' rel='noopener noreferrer'>
                            <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.0424 7.25667C9.17253 7.25667 7.64658 8.78262 7.64658 10.6525C7.64658 12.5224 9.17253 14.0483 11.0424 14.0483C12.9123 14.0483 14.4382 12.5224 14.4382 10.6525C14.4382 8.78262 12.9123 7.25667 11.0424 7.25667ZM21.2273 10.6525C21.2273 9.24627 21.2401 7.85279 21.1611 6.44911C21.0821 4.81871 20.7102 3.37173 19.5179 2.17949C18.3232 0.984714 16.8787 0.615326 15.2483 0.536353C13.8421 0.457381 12.4486 0.470118 11.0449 0.470118C9.63872 0.470118 8.24524 0.457381 6.84157 0.536353C5.21116 0.615326 3.76418 0.987261 2.57195 2.17949C1.37717 3.37427 1.00778 4.81871 0.928809 6.44911C0.849837 7.85533 0.862574 9.24882 0.862574 10.6525C0.862574 12.0562 0.849837 13.4522 0.928809 14.8559C1.00778 16.4863 1.37972 17.9333 2.57195 19.1255C3.76673 20.3203 5.21116 20.6897 6.84157 20.7686C8.24779 20.8476 9.64127 20.8349 11.0449 20.8349C12.4512 20.8349 13.8447 20.8476 15.2483 20.7686C16.8787 20.6897 18.3257 20.3177 19.5179 19.1255C20.7127 17.9307 21.0821 16.4863 21.1611 14.8559C21.2426 13.4522 21.2273 12.0587 21.2273 10.6525ZM11.0424 15.8774C8.15098 15.8774 5.81747 13.5439 5.81747 10.6525C5.81747 7.76108 8.15098 5.42756 11.0424 5.42756C13.9338 5.42756 16.2673 7.76108 16.2673 10.6525C16.2673 13.5439 13.9338 15.8774 11.0424 15.8774ZM16.4813 6.43383C15.8062 6.43383 15.2611 5.88866 15.2611 5.21357C15.2611 4.53848 15.8062 3.99332 16.4813 3.99332C17.1564 3.99332 17.7016 4.53848 17.7016 5.21357C17.7018 5.37387 17.6704 5.53264 17.6091 5.68078C17.5478 5.82892 17.458 5.96352 17.3446 6.07687C17.2313 6.19022 17.0967 6.2801 16.9485 6.34135C16.8004 6.4026 16.6416 6.43403 16.4813 6.43383Z" fill="#0061AA" />
                            </svg>
                        </a>
                        <a href='https://www.youtube.com/channel/UCBccW20t3dmWzZ3bfbvJZBA' target='_blank' rel='noopener noreferrer'>
                            <FontAwesomeIcon icon={faYoutube} />
                        </a>
                        <a href='https://www.linkedin.com/company/banker-az' target='_blank' rel='noopener noreferrer'>
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
