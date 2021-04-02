import { Col } from "react-bootstrap";

import { NavLink } from "react-router-dom";

// aos
import AOS from "aos";

export const checkedUrl = (type) => {
  if (type.type === "url") {
    return type.url;
  } else if (type.type === "static-page") {
    return `/${type.reference}`;
  } else {
    return "";
  }
};

export const checkSalary = (type) => {
  if (type.salary === 1) {
    return type.salaryfix;
  } else if (type.salary === 2) {
    return type.minsalary + " - " + type.maxsalary + " AZN";
  } else if (type.salary === 3) {
    return "Razılaşma";
  }
};

let itemList = [];

let itemListEnd = [];

let itemNews = [];

export const detectItemList = (item) => {
  for (let i = 0; i < item; i++) {
    if (itemList.includes(i) === false) {
      itemList.push(i);
    }
  }

  return itemList.map((item, index) => (
    <Col md="6" lg="4" className="pb-4" key={index}>
      <NavLink to={""}>
        <div className="placeholder wave" style={{ height: "auto" }}>
          <div className="square"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <div className="blog__imgBox"></div>
        <div className="blog__content">
          <div className="blog__content--title"></div>
        </div>
      </NavLink>
    </Col>
  ));
};

export const detectItemListEnd = (item) => {
  for (let i = 0; i < item; i++) {
    if (itemListEnd.includes(i) === false) {
      itemListEnd.push(i);
    }
  }

  return itemListEnd.map((item, index) => (
    <Col md="6" lg="4" className="pb-4" key={index}>
      <NavLink to={""}>
        <div className="placeholder wave" style={{ height: "auto" }}>
          <div className="square"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <div className="blog__imgBox"></div>
        <div className="blog__content">
          <div className="blog__content--title"></div>
        </div>
      </NavLink>
    </Col>
  ));
};

export const detectItemNews = (item) => {
  for (let i = 0; i < item; i++) {
    if (itemNews.includes(i) === false) {
      itemNews.push(i);
    }
  }

  return itemNews.map((item, index) => (
    <div className="news__wrapper" key={index} style={{ marginTop: 35 + "px" }}>
      <div className="news__contentLeft">
        <div
          className="placeholder wave"
          style={{ height: "100px", width: 20 + "px" }}
        >
          <div className="line" style={{ height: "10px" }}></div>
        </div>
      </div>
      <div className="news__contentRight">
        <div
          className="placeholder wave"
          style={{ height: "20px", width: 100 + "%" }}
        >
          <div className="square" style={{ height: "28px" }}></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </div>
  ));
};

export const startAos = () => {
  AOS.init({
    duration: 500,
  });

  AOS.refresh()
};
