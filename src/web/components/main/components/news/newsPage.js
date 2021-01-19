import React from 'react';

// css

import './css/_news.scss';

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';


import Scrollbars from 'react-scrollbar';
import { NavLink } from 'react-router-dom';


// propTypes
import PropTypes from 'prop-types';

// difference
import datetimeDifference from "datetime-difference";


const NewsPage = ({
    ...props
}) => {


    return (
        <div className='news'>
            <div className='news__content'>
                <Scrollbars
                    style={{ height: 450 }}
                    speed={0.5}
                    className="area"
                    contentClassName="content"
                >
                    {
                        props.popularData !== undefined && (
                            props.popularData.data.map((item, index) => (

                                index >= 2 && (
                                    <div className='news__wrapper' key={item.news.data.id}>
                                        <div className='news__contentLeft'>
                                            <span>
                                                {
                                                    item.news.data.post_date.split(' ')[1].split(':')[0] + ':' + item.news.data.post_date.split(' ')[1].split(':')[1]
                                                }
                                            </span>
                                        </div>
                                        <div className='news__contentRight'>
                                            <NavLink to={item.news.data.slug}>
                                                <p>
                                                    {
                                                        item.news.data.title
                                                    }
                                                </p>
                                                <div className='news__contentInfo'>
                                                    <div className='share'>
                                                        <p>
                                                            {
                                                                props.icon === true && (
                                                                    <FontAwesomeIcon icon={faClock} />
                                                                )
                                                            }
                                                            {

                                                                datetimeDifference(new Date(item.news.data.post_date), new Date()).hours !== 0 && (
                                                                    <span>
                                                                        {
                                                                            datetimeDifference(new Date(item.news.data.post_date), new Date()).hours + ' saat'
                                                                        }
                                                                    </span>
                                                                )

                                                            }
                                                            {

                                                                datetimeDifference(new Date(item.news.data.post_date), new Date()).minutes !== 0 && (
                                                                    <span>
                                                                        {
                                                                            datetimeDifference(new Date(item.news.data.post_date), new Date()).minutes + ' dəqiqə'
                                                                        }
                                                                    </span>
                                                                )

                                                            }
                                                        </p>
                                                        <p>
                                                            <FontAwesomeIcon icon={faEye} />
                                                            {
                                                                item.news.data.viewcount.data.count
                                                            }
                                                        </p>
                                                    </div>
                                                    <div className='share'>
                                                        <FontAwesomeIcon icon={faShare} />
                                                    </div>
                                                </div>
                                            </NavLink>
                                        </div>
                                    </div>
                                )

                            ))

                        )
                    }
                    {
                        props.requNews !== undefined && (

                            props.requNews.data.map(item => (
                                item.news !== undefined ?
                                    <div className='news__wrapper' key={item.news.data.id}>
                                        <div className='news__contentLeft'>
                                            <span>
                                                {
                                                    item.news.data.post_date.split(' ')[1].split(':')[0] + ':' + item.news.data.post_date.split(' ')[1].split(':')[1]
                                                }
                                            </span>
                                        </div>
                                        <div className='news__contentRight'>
                                            <NavLink to={'/' + item.news.data.slug}>
                                                <p>
                                                    {
                                                        item.news.data.title
                                                    }
                                                </p>
                                                <div className='news__contentInfo'>
                                                    <div className='share'>
                                                        <p>
                                                            {
                                                                props.icon === true && (
                                                                    <FontAwesomeIcon icon={faClock} />
                                                                )
                                                            }
                                                            {

                                                                datetimeDifference(new Date(item.news.data.post_date), new Date()).minutes !== 0 && (
                                                                    <span>
                                                                        {
                                                                            datetimeDifference(new Date(item.news.data.post_date), new Date()).minutes + ' dəqiqə'
                                                                        }
                                                                    </span>
                                                                )

                                                            }
                                                        </p>
                                                        <p>
                                                            <FontAwesomeIcon icon={faEye} />
                                                            <span>
                                                                {
                                                                    item.news.data.viewcount.data.count
                                                                }
                                                            </span>
                                                        </p>
                                                    </div>
                                                    <div className='share'>
                                                        <FontAwesomeIcon icon={faShare} />

                                                    </div>
                                                </div>
                                            </NavLink>
                                        </div>
                                    </div>
                                    :
                                    <div className='news__wrapper' key={item.id}>
                                        <div className='news__contentLeft'>
                                            <span>
                                                {
                                                    item.post_date.split(' ')[1].split(':')[0] + ':' + item.post_date.split(' ')[1].split(':')[1]
                                                }
                                            </span>
                                        </div>
                                        <div className='news__contentRight'>
                                            <NavLink to={'/' + item.slug}>
                                                <p>
                                                    {
                                                        item.title
                                                    }
                                                </p>
                                                <div className='news__contentInfo'>
                                                    <div className='share'>
                                                        <p>
                                                            {
                                                                props.icon === true && (
                                                                    <FontAwesomeIcon icon={faClock} />
                                                                )
                                                            }
                                                            {

                                                                datetimeDifference(new Date(item.post_date), new Date()).minutes !== 0 && (
                                                                    <span>
                                                                        {
                                                                            datetimeDifference(new Date(item.post_date), new Date()).minutes + ' dəqiqə'
                                                                        }
                                                                    </span>
                                                                )

                                                            }
                                                        </p>
                                                        <p>
                                                            <FontAwesomeIcon icon={faEye} />
                                                            <span>
                                                                {
                                                                    item.viewcount.data.count
                                                                }
                                                            </span>
                                                        </p>
                                                    </div>
                                                    <div className='share'>
                                                        <FontAwesomeIcon icon={faShare} />
                                                    </div>
                                                </div>
                                            </NavLink>
                                        </div>
                                    </div>
                            ))
                        )
                    }
                </Scrollbars>
            </div>
        </div >
    );
}

NewsPage.propTypes = {

    title: PropTypes.string.isRequired,
    switch: PropTypes.bool.isRequired,
    popularData: PropTypes.object,
    icon: PropTypes.bool,
    requNews: PropTypes.object

}

export default NewsPage;
