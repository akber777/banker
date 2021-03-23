import React from "react";

import "./css/_newsPart.scss";

// tools

// reactstrap
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";

// react router dom
import { NavLink } from "react-router-dom";

// query

import { useQuery } from "react-query";

//new category
// import { newsCategory } from '../../../queries/queries';
// import { homeCategory } from '../../../queries/queries';

// export func

// import { checkedUrl } from '../../../helper/helper';

// axios

import axios from "axios";

// base url

import { baseUrl } from "../../../api/api";

// tabs
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

const NewsPart = React.memo(function MultiSlider() {
  let { data, isLoading } = useQuery(
    ["requiredNews", ""],
    async () => {
      const res = await axios.get(
        baseUrl + `news/home${"/category/"}?include=homeNews,parent`
      );

      return res.data;
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  return (
    <div className="newsPart">
      <div className="newsPart__title">
        <h1>Xəbərlər</h1>
      </div>
      <div className="newsPart__wrapper">
        <div className="newsPart__content">
          {/* <div className='nav'>
                        {
                            homeCate.data !== undefined && homeCate.isLoading === false && (

                                homeCate.data.map((item, index) => (

                                    <span key={index}
                                        onClick={() => {
                                            mutation.mutate(
                                                setNewsHome(checkedUrl(item))
                                            )
                                        }}
                                    >
                                        {
                                            item.title
                                        }
                                    </span>

                                ))
                            )
                        }
                    </div> */}
          <div className="wrapper">
            {isLoading === false && data !== undefined && (
              <Tabs
                defaultActiveKey={data.data[0].name}
                id="uncontrolled-tab-example"
              >
                {isLoading === false &&
                  data.data.map((item) => (
                    <Tab eventKey={item.name} title={item.name} key={item.id}>
                      <div className="newsPart__content ">
                        {item.homeNews.data.map((subitem) => (
                          <div
                            className="newsPart__contentBox"
                            data-different="Digər"
                            key={subitem.id}
                          >
                            <NavLink to={"/" + subitem.slug}>
                              <div className="layer"></div>
                              <img src={subitem.img.cover} alt="" />
                              <div className="newsPart__in">
                                <div className="overflow">
                                  <p>{subitem.title}</p>
                                </div>
                                <div className="newsPart__info">
                                  <div className="share">
                                    <span>{subitem.post_date}</span>
                                    {/* {subitem.viewcount.data.length !== 0 && (
                                      <p>
                                        <FontAwesomeIcon icon={faEye} />
                                        {subitem.viewcount.data.count}
                                      </p>
                                    )} */}
                                  </div>
                                  <div className="share">
                                    <FontAwesomeIcon icon={faShare} />
                                  </div>
                                </div>
                              </div>
                            </NavLink>
                          </div>
                        ))}
                      </div>
                      <NavLink
                        to={
                          `/category/${
                            item.parent.data.slug !== undefined
                              ? item.parent.data.slug + "/"
                              : ""
                          }` + item.slug
                        }
                        className="newsPart__allNews"
                      >
                        Daha çox
                        {}
                        <svg
                          width="8"
                          height="12"
                          viewBox="0 0 8 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.814453 9.95749L5.08067 5.68195L0.814453 1.40642L2.12785 0.0930176L7.71679 5.68195L2.12785 11.2709L0.814453 9.95749Z"
                            fill="white"
                          />
                        </svg>
                      </NavLink>
                    </Tab>
                  ))}
              </Tabs>
            )}
          </div>
        </div>
        <div className="newsPart__right">
          {/* <div className='newsPart__rightTitle'>
                        <NavLink to={''}>
                            Bütün xəbərlər
                        </NavLink>
                    </div> */}
          <div style={{ backgroundColor: "rgb(98 37 190)" }}>
            <img
              src={"https://banker.az/wp-content/uploads/2020/12/360x380-1.jpg"}
              alt=""
            />
          </div>
          <div style={{ backgroundColor: "rgb(179 227 252)" }}>
            <img
              src={"https://banker.az/wp-content/uploads/2020/08/400x420.gif"}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
});

export default NewsPart;
