import React from 'react';
import { Row, Col } from 'react-bootstrap';


// tools

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';

// proptypes
// import PropTypes from 'prop-types';

// react router dom 
import { NavLink } from 'react-router-dom';

// axios
import axios from 'axios';

// baseUrl

import { baseUrl } from '../../../api/api';


import { useQuery } from 'react-query';

const Author = (props) => {


    const author = useQuery(['author', ''], async (key, data) => {

        const res = await axios.get(baseUrl + `news/opinion/home`);

        return res.data
    })


    return (
        <div className='blog'>
            <div className='blog__title'>
                <h1>Yazarlar</h1>
            </div>
            <div className='blog__wrapper'>
                <div className='blog__left'>
                    <Row>
                        {
                            author.isLoading === false && author.data !== undefined && author.data.data.map(item => (
                                <Col md='6' lg='4' key={item.id}>
                                    <NavLink to={'/opinion/' + item.slug}>
                                        < div className='blog__imgBox'>
                                            <img src={item.img !== null && item.img !== undefined && (item.img.cover)} alt='' />
                                        </div>
                                        <div className='blog__content'>
                                            <div className='blog__content--title'>
                                                <div>
                                                    <p>
                                                        {
                                                            item.post_date
                                                        }
                                                    </p>
                                                    <p>
                                                        <FontAwesomeIcon icon={faEye} />
                                                        {
                                                            item.viewcount.data.count
                                                        }
                                                    </p>
                                                </div>
                                                <div>
                                                    <FontAwesomeIcon icon={faShare} />
                                                </div>
                                            </div>
                                            <div className='blog__content--titleMiddle'>
                                                <h4>{item.title}</h4>
                                            </div>
                                            <div className='blog__content--text'>
                                                <p>
                                                    {
                                                        item.description
                                                    }
                                                </p>
                                                <div className='blogLayer'>

                                                </div>
                                            </div>
                                            <div className='blog__content--link'>
                                                <span>
                                                    {
                                                        item.columnist.data !== null && item.columnist.data !== undefined && (item.columnist.data.name)
                                                    }
                                                </span>
                                            </div>
                                        </div>
                                    </NavLink>
                                </Col>

                            ))

                        }

                    </Row>
                </div>
                <div className='blog__right' style={{backgroundColor:'#e3e3e3'}}>
                    <img src={require('../../../images/ziraat.jpg').default} alt='' />
                </div>
            </div>
        </div >
    );
}




export default Author;
