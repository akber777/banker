import React from 'react';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


// csss

import './css/_news.scss';

const News = () => {
    return (
        <div className='newsMobile'>
            <Container>
                <div className='newsMobile__wrapper'>
                    <h4>Azad olunmuş ərazilərin bərpasının sosial-iqtisadi konsepsiyası hazırlanıb</h4>
                    <div className='newsMobile__alert'>
                        <p>
                            12 dekabr 2020, 16:45
                        </p>
                        <span>
                            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 0.957397C5.56091 0.957397 2.44216 3.00568 0.140841 6.33263C-0.0469469 6.6052 -0.0469469 6.98599 0.140841 7.25856C2.44216 10.5895 5.56091 12.6378 9 12.6378C12.4391 12.6378 15.5578 10.5895 17.8592 7.26257C18.0469 6.99 18.0469 6.60921 17.8592 6.33664C15.5578 3.00568 12.4391 0.957397 9 0.957397ZM9.2467 10.9102C6.96379 11.0665 5.07855 9.01824 5.22215 6.52904C5.33998 4.47675 6.86806 2.81327 8.7533 2.68501C11.0362 2.52868 12.9214 4.57696 12.7778 7.06616C12.6563 9.11444 11.1283 10.7779 9.2467 10.9102ZM9.13256 9.01022C7.90273 9.0944 6.88647 7.9921 6.96747 6.6533C7.03007 5.54699 7.85486 4.65312 8.87113 4.58097C10.101 4.49679 11.1172 5.5991 11.0362 6.93789C10.9699 8.04821 10.1451 8.94208 9.13256 9.01022Z" fill="#B4B4B4" />
                            </svg>
                            332
                        </span>
                    </div>
                </div>
            </Container>
            <div className='newsMobile__items'>
                <div className='newsMobile__buttons'>
                    <button className='noActive'>
                        Xəbərlər
                    </button>
                    <button className='active'>
                        Son xəbərlər
                        </button>
                </div>
                <Container>
                    <div className='newsMobile__newsSelf'>
                        <NavLink to={''}>
                            <h4>Türkiyədən Çinə ixrac yükü daşıyan ilk konteyner qatarı Bakı Limanına çatıb</h4>
                            <p>
                                <span>
                                    Dünən, 16:45
                            </span>
                                <span>
                                    <svg width="20" height="25" viewBox="0 0 20 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.1551 0.261127C9.98766 0.0939192 9.76072 0 9.52411 0C9.28749 0 9.06055 0.0939192 8.89314 0.261127L5.02397 4.1303C4.86625 4.29956 4.78038 4.52343 4.78447 4.75475C4.78855 4.98607 4.88226 5.20677 5.04585 5.37036C5.20944 5.53395 5.43014 5.62766 5.66146 5.63174C5.89278 5.63582 6.11665 5.54996 6.28591 5.39224L8.63122 3.04693V15.7735C8.63122 16.0103 8.7253 16.2374 8.89274 16.4049C9.06019 16.5723 9.2873 16.6664 9.52411 16.6664C9.76092 16.6664 9.98802 16.5723 10.1555 16.4049C10.3229 16.2374 10.417 16.0103 10.417 15.7735V3.04693L12.7623 5.39224C12.844 5.47997 12.9426 5.55033 13.0522 5.59913C13.1617 5.64793 13.2799 5.67417 13.3998 5.67629C13.5197 5.6784 13.6388 5.65635 13.75 5.61144C13.8611 5.56653 13.9621 5.49969 14.0469 5.41491C14.1317 5.33012 14.1985 5.22912 14.2435 5.11794C14.2884 5.00676 14.3104 4.88768 14.3083 4.76779C14.3062 4.6479 14.2799 4.52967 14.2311 4.42014C14.1823 4.31061 14.112 4.21204 14.0243 4.1303L10.1551 0.261127ZM1.78577 10.4162C1.78577 10.3373 1.81713 10.2616 1.87294 10.2058C1.92876 10.1499 2.00446 10.1186 2.0834 10.1186H5.05968C5.29649 10.1186 5.5236 10.0245 5.69105 9.85706C5.8585 9.68961 5.95257 9.4625 5.95257 9.22569C5.95257 8.98889 5.8585 8.76178 5.69105 8.59433C5.5236 8.42688 5.29649 8.33281 5.05968 8.33281H2.0834C1.53085 8.33281 1.00093 8.55231 0.610214 8.94302C0.2195 9.33374 0 9.86366 0 10.4162V22.9166C0 24.0666 0.933363 25 2.0834 25H16.9648C17.5174 25 18.0473 24.7805 18.438 24.3898C18.8287 23.9991 19.0482 23.4692 19.0482 22.9166V10.4162C19.0482 9.86366 18.8287 9.33374 18.438 8.94302C18.0473 8.55231 17.5174 8.33281 16.9648 8.33281H13.9885C13.7517 8.33281 13.5246 8.42688 13.3572 8.59433C13.1897 8.76178 13.0956 8.98889 13.0956 9.22569C13.0956 9.4625 13.1897 9.68961 13.3572 9.85706C13.5246 10.0245 13.7517 10.1186 13.9885 10.1186H16.9648C17.0438 10.1186 17.1195 10.1499 17.1753 10.2058C17.2311 10.2616 17.2624 10.3373 17.2624 10.4162V22.9166C17.2624 22.9955 17.2311 23.0712 17.1753 23.1271C17.1195 23.1829 17.0438 23.2142 16.9648 23.2142H2.0834C2.00446 23.2142 1.92876 23.1829 1.87294 23.1271C1.81713 23.0712 1.78577 22.9955 1.78577 22.9166V10.4162Z" fill="#D2D2D2" />
                                    </svg>
                                </span>
                            </p>
                        </NavLink>
                    </div>
                    <div className='newsMobile__newsSelf'>
                        <NavLink to={''}>
                            <h4>“Sony” 1,2 milyard dollara animasiya şirkəti alır</h4>
                            <p>
                                <span>
                                    Dünən, 16:45
                            </span>
                                <span>
                                    <svg width="20" height="25" viewBox="0 0 20 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.1551 0.261127C9.98766 0.0939192 9.76072 0 9.52411 0C9.28749 0 9.06055 0.0939192 8.89314 0.261127L5.02397 4.1303C4.86625 4.29956 4.78038 4.52343 4.78447 4.75475C4.78855 4.98607 4.88226 5.20677 5.04585 5.37036C5.20944 5.53395 5.43014 5.62766 5.66146 5.63174C5.89278 5.63582 6.11665 5.54996 6.28591 5.39224L8.63122 3.04693V15.7735C8.63122 16.0103 8.7253 16.2374 8.89274 16.4049C9.06019 16.5723 9.2873 16.6664 9.52411 16.6664C9.76092 16.6664 9.98802 16.5723 10.1555 16.4049C10.3229 16.2374 10.417 16.0103 10.417 15.7735V3.04693L12.7623 5.39224C12.844 5.47997 12.9426 5.55033 13.0522 5.59913C13.1617 5.64793 13.2799 5.67417 13.3998 5.67629C13.5197 5.6784 13.6388 5.65635 13.75 5.61144C13.8611 5.56653 13.9621 5.49969 14.0469 5.41491C14.1317 5.33012 14.1985 5.22912 14.2435 5.11794C14.2884 5.00676 14.3104 4.88768 14.3083 4.76779C14.3062 4.6479 14.2799 4.52967 14.2311 4.42014C14.1823 4.31061 14.112 4.21204 14.0243 4.1303L10.1551 0.261127ZM1.78577 10.4162C1.78577 10.3373 1.81713 10.2616 1.87294 10.2058C1.92876 10.1499 2.00446 10.1186 2.0834 10.1186H5.05968C5.29649 10.1186 5.5236 10.0245 5.69105 9.85706C5.8585 9.68961 5.95257 9.4625 5.95257 9.22569C5.95257 8.98889 5.8585 8.76178 5.69105 8.59433C5.5236 8.42688 5.29649 8.33281 5.05968 8.33281H2.0834C1.53085 8.33281 1.00093 8.55231 0.610214 8.94302C0.2195 9.33374 0 9.86366 0 10.4162V22.9166C0 24.0666 0.933363 25 2.0834 25H16.9648C17.5174 25 18.0473 24.7805 18.438 24.3898C18.8287 23.9991 19.0482 23.4692 19.0482 22.9166V10.4162C19.0482 9.86366 18.8287 9.33374 18.438 8.94302C18.0473 8.55231 17.5174 8.33281 16.9648 8.33281H13.9885C13.7517 8.33281 13.5246 8.42688 13.3572 8.59433C13.1897 8.76178 13.0956 8.98889 13.0956 9.22569C13.0956 9.4625 13.1897 9.68961 13.3572 9.85706C13.5246 10.0245 13.7517 10.1186 13.9885 10.1186H16.9648C17.0438 10.1186 17.1195 10.1499 17.1753 10.2058C17.2311 10.2616 17.2624 10.3373 17.2624 10.4162V22.9166C17.2624 22.9955 17.2311 23.0712 17.1753 23.1271C17.1195 23.1829 17.0438 23.2142 16.9648 23.2142H2.0834C2.00446 23.2142 1.92876 23.1829 1.87294 23.1271C1.81713 23.0712 1.78577 22.9955 1.78577 22.9166V10.4162Z" fill="#D2D2D2" />
                                    </svg>
                                </span>
                            </p>
                        </NavLink>
                    </div>
                    <div className='newsMobile__newsSelf'>
                        <NavLink to={''}>
                            <h4>SOCAR  və “Snam” TAP ilə hidrogen nəqli ilə bağlı birgə tədqiqat aparacaq</h4>
                            <p>
                                <span>
                                    Dünən, 16:45
                            </span>
                                <span>
                                    <svg width="20" height="25" viewBox="0 0 20 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.1551 0.261127C9.98766 0.0939192 9.76072 0 9.52411 0C9.28749 0 9.06055 0.0939192 8.89314 0.261127L5.02397 4.1303C4.86625 4.29956 4.78038 4.52343 4.78447 4.75475C4.78855 4.98607 4.88226 5.20677 5.04585 5.37036C5.20944 5.53395 5.43014 5.62766 5.66146 5.63174C5.89278 5.63582 6.11665 5.54996 6.28591 5.39224L8.63122 3.04693V15.7735C8.63122 16.0103 8.7253 16.2374 8.89274 16.4049C9.06019 16.5723 9.2873 16.6664 9.52411 16.6664C9.76092 16.6664 9.98802 16.5723 10.1555 16.4049C10.3229 16.2374 10.417 16.0103 10.417 15.7735V3.04693L12.7623 5.39224C12.844 5.47997 12.9426 5.55033 13.0522 5.59913C13.1617 5.64793 13.2799 5.67417 13.3998 5.67629C13.5197 5.6784 13.6388 5.65635 13.75 5.61144C13.8611 5.56653 13.9621 5.49969 14.0469 5.41491C14.1317 5.33012 14.1985 5.22912 14.2435 5.11794C14.2884 5.00676 14.3104 4.88768 14.3083 4.76779C14.3062 4.6479 14.2799 4.52967 14.2311 4.42014C14.1823 4.31061 14.112 4.21204 14.0243 4.1303L10.1551 0.261127ZM1.78577 10.4162C1.78577 10.3373 1.81713 10.2616 1.87294 10.2058C1.92876 10.1499 2.00446 10.1186 2.0834 10.1186H5.05968C5.29649 10.1186 5.5236 10.0245 5.69105 9.85706C5.8585 9.68961 5.95257 9.4625 5.95257 9.22569C5.95257 8.98889 5.8585 8.76178 5.69105 8.59433C5.5236 8.42688 5.29649 8.33281 5.05968 8.33281H2.0834C1.53085 8.33281 1.00093 8.55231 0.610214 8.94302C0.2195 9.33374 0 9.86366 0 10.4162V22.9166C0 24.0666 0.933363 25 2.0834 25H16.9648C17.5174 25 18.0473 24.7805 18.438 24.3898C18.8287 23.9991 19.0482 23.4692 19.0482 22.9166V10.4162C19.0482 9.86366 18.8287 9.33374 18.438 8.94302C18.0473 8.55231 17.5174 8.33281 16.9648 8.33281H13.9885C13.7517 8.33281 13.5246 8.42688 13.3572 8.59433C13.1897 8.76178 13.0956 8.98889 13.0956 9.22569C13.0956 9.4625 13.1897 9.68961 13.3572 9.85706C13.5246 10.0245 13.7517 10.1186 13.9885 10.1186H16.9648C17.0438 10.1186 17.1195 10.1499 17.1753 10.2058C17.2311 10.2616 17.2624 10.3373 17.2624 10.4162V22.9166C17.2624 22.9955 17.2311 23.0712 17.1753 23.1271C17.1195 23.1829 17.0438 23.2142 16.9648 23.2142H2.0834C2.00446 23.2142 1.92876 23.1829 1.87294 23.1271C1.81713 23.0712 1.78577 22.9955 1.78577 22.9166V10.4162Z" fill="#D2D2D2" />
                                    </svg>
                                </span>
                            </p>
                        </NavLink>
                    </div>
                    <div className='itemsBox'>
                        <div className='showMore'>
                            Daha çox
                        </div>
                    </div>
                </Container>
            </div>
            <div className='mobileHome__banner'>
                <img src={require('../../images/bannerTop.png').default} alt='' />
            </div>
        </div>
    );
}

export default News;
