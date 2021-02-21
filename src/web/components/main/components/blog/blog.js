import React from 'react';
import { Row, Col } from 'react-bootstrap';

// css
import './css/_blog.scss';

// tools

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';

// proptypes
import PropTypes from 'prop-types';

// react router dom 
import { NavLink } from 'react-router-dom';

const Blog = (props) => {

    return (
        <div className='blog'>
            <div className='blog__title'>
                <h1>Bloq yazıları</h1>
            </div>
            <div className='blog__wrapper'>
                <div className='blog__left'>
                    <Row>
                        {
                            props.blogData !== undefined && (
                                props.blogData.data.map(item => (
                                    <Col md='6' lg='4' key={item.id}>
                                        <NavLink to={'/blog/' + item.slug}>
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
                                                            item.user.data !== null && item.user.data !== undefined && (item.user.data.full_name)
                                                        }
                                                    </span>
                                                </div>
                                            </div>
                                        </NavLink>
                                    </Col>
                                ))
                            )
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

Blog.propTypes = {
    blogData: PropTypes.object,
}


export default Blog;
