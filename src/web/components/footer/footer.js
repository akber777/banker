
import React from 'react';

// css

import './css/_footer.scss';



// tools

// reactstrap
import { Col, Container, Row } from 'reactstrap';
import { NavLink } from 'react-router-dom';


// fontawesome

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTelegramPlane } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Subscription from './subscription';


const Footer = () => {
    return (
        <footer className='footer'>
            <Container>
                <Row>
                    <Col lg='4'>
                        <div className='footer__logo'>
                            <NavLink to={'/'}>
                                <img src={require('../images/footerLogo.png').default} alt='' />
                            </NavLink>
                            <span>Bizimlə əlaqə</span>
                            <a href="mailto:office@banker.az">
                                office@banker.az
                            </a>
                            <a href="tel:+994 50 333 33 33">
                                +994 50 333 33 33
                            </a>
                            <NavLink to={''}>
                                Cəfər Cabbarlı 44,Bakı
                            </NavLink>
                            <div className='footer__socialIn'>
                                <h1> Bizi sosial şəbəkələrdə izləyin</h1>
                                <a href='2#' target='_blank' rel='noopener noreferrer'>
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </a>
                                <a href='2#' target='_blank' rel='noopener noreferrer'>
                                    <FontAwesomeIcon icon={faTelegramPlane} />
                                </a>
                                <a href='2#' target='_blank' rel='noopener noreferrer'>
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                                <a href='2#' target='_blank' rel='noopener noreferrer'>
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                                <a href='2#' target='_blank' rel='noopener noreferrer'>
                                    <FontAwesomeIcon icon={faYoutube} />
                                </a>
                                <a href='2#' target='_blank' rel='noopener noreferrer'>
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                </a>
                            </div>
                            <div className='footer__scanner'>
                                <img src={require('../images/scanner.png').default} alt='' />
                            </div>
                        </div>
                    </Col>
                    <Col lg='8'>
                        <div className='footer__menuBox'>
                            <div className='footer__menuBox--in'>
                                <NavLink to={''}>
                                    Bank xəbərləri
                                </NavLink>
                                <NavLink to={''}>
                                    İqtisadi xəbərlər
                                </NavLink>
                                <NavLink to={''}>
                                    Biznes xəbərləri
                                </NavLink>
                                <NavLink to={''}>
                                    Xarici xəbərlər
                                </NavLink>
                                <NavLink to={''}>
                                    Sığorta xəbərləri
                                </NavLink>
                                <NavLink to={''}>
                                    Kripto valyutalar
                                </NavLink>
                                <NavLink to={''}>
                                    Forex xəbərləri
                                </NavLink>
                                <NavLink to={''}>
                                    Digər xəbərlər
                                </NavLink>
                            </div>
                            <div className='footer__menuBox--in'>
                                <NavLink to={''}>
                                    Bank xəbərləri
                                </NavLink>
                                <NavLink to={''}>
                                    İqtisadi xəbərlər
                                </NavLink>
                                <NavLink to={''}>
                                    Biznes xəbərləri
                                </NavLink>
                                <NavLink to={''}>
                                    Xarici xəbərlər
                                </NavLink>
                                <NavLink to={''}>
                                    Sığorta xəbərləri
                                </NavLink>
                                <NavLink to={''}>
                                    Kripto valyutalar
                                </NavLink>
                                <NavLink to={''}>
                                    Forex xəbərləri
                                </NavLink>
                                <NavLink to={''}>
                                    Digər xəbərlər
                                </NavLink>
                                <NavLink to={''}>
                                    Biznes xəbərləri
                                </NavLink>
                                <NavLink to={''}>
                                    Xarici xəbərlər
                                </NavLink>
                                <NavLink to={''}>
                                    Sığorta xəbərləri
                                </NavLink>
                                <NavLink to={''}>
                                    Kripto valyutalar
                                </NavLink>
                            </div>
                            <div className='footer__menuBox--in'>
                                <NavLink to={''}>
                                    Bank xəbərləri
                                </NavLink>
                                <NavLink to={''}>
                                    İqtisadi xəbərlər
                                </NavLink>
                                <NavLink to={''}>
                                    Biznes xəbərləri
                                </NavLink>
                                <NavLink to={''}>
                                    Xarici xəbərlər
                                </NavLink>
                                <NavLink to={''}>
                                    Sığorta xəbərləri
                                </NavLink>
                            </div>
                            <div className='footer__menuBox--in'>
                                <NavLink to={''}>
                                    Bank xəbərləri
                                </NavLink>
                                <NavLink to={''}>
                                    İqtisadi xəbərlər
                                </NavLink>
                                <NavLink to={''}>
                                    Biznes xəbərləri
                                </NavLink>
                                <NavLink to={''}>
                                    Xarici xəbərlər
                                </NavLink>
                                <NavLink to={''}>
                                    Sığorta xəbərləri
                                </NavLink>
                                <NavLink to={''}>
                                    Xarici xəbərlər
                                </NavLink>
                                <NavLink to={''}>
                                    Sığorta xəbərləri
                                </NavLink>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className='footer__end'>
                <Container>
                    <div className='footer__end--wrapper'>
                        <Subscription />
                        <div className='footer__end--logoBox'>
                            <img src={require('../images/endLogo.png').default} alt='' />
                        </div>
                    </div>
                </Container>
            </div>
            <div className='footer__privacy'>
                <Container>
                    <div className='footer__privacy--info'>
                        <span>© banker.az  2020</span>
                        <p>* Saytdakı materialların istifadəsi zamanı istinad edilməsi vacibdir. Məlumat internet səhifələrində istifadə edildikdə hiperlink vasitəsi ilə istinad mütləqdir.</p>
                    </div>
                </Container>
            </div>
        </footer>
    );
}

export default Footer;
