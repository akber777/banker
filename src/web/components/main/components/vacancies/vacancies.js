import React, { useEffect, useLayoutEffect, useState } from "react";

// css
import "../homePage/css/_home.scss";
import "../news/css/_newsDetail.scss";
import "./css/_vacancies.scss";

// tools

// reactstrap
import { Container, Input, Label, Row, Col } from "reactstrap";

// jquery

import $ from "jquery";

//material ui range slider
import SliderRange from "@material-ui/core/Slider";

import { NavLink, useLocation, useHistory } from "react-router-dom";

// query

import { useQuery } from "react-query";

//new category
import { vacancySelect, filterVacancy } from "../../../queries/queries";

// scrollbars
import Scrollbars from "react-scrollbar";

// renderHTML
import renderHTML from "react-render-html";

function useQueryData() {
  return new URLSearchParams(useLocation().search);
}

const Vacancies = () => {
  let history = useHistory();

  // vacancy search url
  let query = useQueryData();

  let vacancySelectable = useQuery(["vacancySelect", ""], vacancySelect, {
    refetchOnWindowFocus: false,
  });

  let [refresh, setRefresh] = useState();

  let handleRefresh = () => {
    setRefresh(1);
  };

  useLayoutEffect(() => {
    // fixed social icon
    let contentBox = document.querySelector(".vacancies__wrapper");

    window.onscroll = function () {
      if (document.querySelector(".newsDetail__socialFixed") !== null) {
        if (this.scrollY > 480) {
          document.querySelector(".newsDetail__socialFixed").style.position =
            "fixed";
          document.querySelector(".newsDetail__socialFixed").style.left =
            contentBox.offsetLeft + "px";
          document.querySelector(".newsDetail__socialFixed").style.top =
            contentBox.offsetTop + "px";
        } else {
          document.querySelector(".newsDetail__socialFixed").style.position =
            "absolute";
          document.querySelector(".newsDetail__socialFixed").style.left = "0";
          document.querySelector(".newsDetail__socialFixed").style.top = "0";
        }

        if (this.scrollY > 240) {
          document.querySelector(".fixed").classList.add("noFixed");
          document
            .querySelector(".home__leftBanner")
            .classList.add("fixedBannerLeft");
          document
            .querySelector(".home__rightBanner")
            .classList.add("fixedBannerRight");
        } else {
          document.querySelector(".fixed").classList.remove("noFixed");
          document
            .querySelector(".home__leftBanner")
            .classList.remove("fixedBannerLeft");
          document
            .querySelector(".home__rightBanner")
            .classList.remove("fixedBannerRight");
        }
      }
    };

    // search input

    $(".myInput").keyup(function () {
      var value = $(this).val().toLowerCase();

      $(this)
        .parents(".vacancies__itemBox")
        .find(".listed  li")
        .each(function () {
          var lcval = $(this).text().toLowerCase();
          if (lcval.indexOf(value) > -1) {
            $(this).show();
          } else {
            $(this).hide();
          }
        });

      $(this)
        .parents(".vacancies__itemBox")
        .find(".cities  li")
        .each(function () {
          var lcval = $(this).text().toLowerCase();
          if (lcval.indexOf(value) > -1) {
            $(this).show();
          } else {
            $(this).hide();
          }
        });

      $(this)
        .parents(".vacancies__itemBox")
        .find(".edu  li")
        .each(function () {
          var lcval = $(this).text().toLowerCase();
          if (lcval.indexOf(value) > -1) {
            $(this).show();
          } else {
            $(this).hide();
          }
        });

      $(this)
        .parents(".vacancies__itemBox")
        .find(".job  li")
        .each(function () {
          var lcval = $(this).text().toLowerCase();
          if (lcval.indexOf(value) > -1) {
            $(this).show();
          } else {
            $(this).hide();
          }
        });
    });

    $(".title").click(function () {
      if ($(this).next().next().hasClass("on") === false) {
        $(this).next().next().addClass("on");
        $(this).next().next().stop().slideUp();

        $(this).addClass("animateSvg");
      } else {
        $(this).next().next().removeClass("on");
        $(this).next().next().stop().slideDown();
        $(this).removeClass("animateSvg");
      }
    });

    // ----------------------------------------------------------- animated end
  }, []);

  let [category] = useState([]);

  let [subcategory] = useState([]);

  let [city] = useState([]);

  let [education] = useState([]);

  let [jobexperiences] = useState([]);

  let [is_nagotiable] = useState([]);

  let [buttons] = useState([]);

  let [buttonsCities] = useState([]);

  let [buttonsEdu] = useState([]);

  let [buttonsJob] = useState([]);

  useEffect(() => {
    let categoryLi = document.querySelectorAll(".listCategory > label > input");

    let subCategoryLi = document.querySelectorAll(
      ".subListed > li label > input"
    );

    let citiesLi = document.querySelectorAll(".listCities > label > input");

    let eduLi = document.querySelectorAll(".listEdu > label > input");

    let jobLi = document.querySelectorAll(".listJob > label > input");

    let nagoLi = document.querySelectorAll(".listNago > label > input");

    // clickable items end

    let buttonBox = document.querySelectorAll(".jobItem");

    nagoLi.forEach((item) => {
      if (
        query.get("is_nagotiable") !== null &&
        query.get("is_nagotiable") === "1"
      ) {
        item.checked = true;
      }

      item.onclick = function () {
        if (item.checked) {
          is_nagotiable.push(1);
        } else {
          is_nagotiable.splice(0, 1);
        }

        history.push({
          pathname: "/jobs",
          search: `?category=${category}&subcategory=${subcategory}&cities=${city}&education=${education}&jobexperiences=${jobexperiences}&salary_rang_min=${salary[0]}&salary_rang_max=${salary[1]}&is_nagotiable=${is_nagotiable}`,
        });
      };
    });

    if (buttonBox !== null) {
      buttonBox.forEach((btn) => {
        btn.onclick = function () {
          this.style.display = "none";

          let targetAttr = this.getAttribute("data-category");

          let targetCitiesAttr = this.getAttribute("data-cities");

          let targetEduAttr = this.getAttribute("data-edu");

          let targetJobAttr = this.getAttribute("data-job");

          const targetCate = category.indexOf(targetAttr, 0);

          const targetSubCate = subcategory.indexOf(targetAttr, 0);

          const targetCity = city.indexOf(targetCitiesAttr, 0);

          const targetEdu = education.indexOf(targetEduAttr, 0);

          const targetJob = jobexperiences.indexOf(targetJobAttr, 0);

          // job
          if (targetJob > -1) {
            jobexperiences.splice(targetJob, 1);

            if (query.get("jobexperiences") !== null) {
              if (
                query.get("jobexperiences").split(",").indexOf(targetJobAttr) >
                -1
              ) {
                jobLi.forEach((item) => {
                  if (item.value === targetJobAttr) {
                    item.checked = false;
                  }
                });
              }
            }
          }

          // edu
          if (targetEdu > -1) {
            education.splice(targetEdu, 1);

            if (query.get("education") !== null) {
              if (
                query.get("education").split(",").indexOf(targetEduAttr) > -1
              ) {
                eduLi.forEach((item) => {
                  if (item.value === targetEduAttr) {
                    item.checked = false;
                  }
                });
              }
            }
          }

          // city
          if (targetCity > -1) {
            city.splice(targetCity, 1);

            if (query.get("cities") !== null) {
              if (
                query.get("cities").split(",").indexOf(targetCitiesAttr) > -1
              ) {
                citiesLi.forEach((item) => {
                  if (item.value === targetCitiesAttr) {
                    item.checked = false;
                  }
                });
              }
            }
          }

          // category

          if (targetCate > -1) {
            category.splice(targetCate, 1);

            if (query.get("category") !== null) {
              if (query.get("category").split(",").indexOf(targetAttr) > -1) {
                categoryLi.forEach((item) => {
                  if (item.value === targetAttr) {
                    item.checked = false;
                  }
                });
              }
            }
          }

          // subcategory in category
          if (targetSubCate > -1) {
            subcategory.splice(targetSubCate, 1);

            if (query.get("subcategory") !== null) {
              if (
                query.get("subcategory").split(",").indexOf(targetAttr) > -1
              ) {
                subCategoryLi.forEach((item) => {
                  if (item.value === targetAttr) {
                    item.checked = false;
                  }
                });
              }
            }
          }

          history.push({
            pathname: "/jobs",
            search: `?category=${category}&subcategory=${subcategory}&cities=${city}&education=${education}&jobexperiences=${jobexperiences}&salary_rang_min=${salary[0]}&salary_rang_max=${salary[1]}&is_nagotiable=${is_nagotiable}`,
          });
        };
      });
    }

    // button item

    // job experience

    jobLi.forEach((item) => {
      if (query.get("jobexperiences") !== null) {
        if (query.get("jobexperiences").split(",").indexOf(item.value) > -1) {
          item.checked = true;

          handleRefresh();

          if (buttonsJob.indexOf(item) < 0) {
            buttonsJob.push(item);
          }
        }
      }

      item.onclick = function () {
        let liVal = item.value;

        if (item.checked === true) {
          if (jobexperiences.indexOf(liVal) <= 1) {
            jobexperiences.push(liVal);
            buttonsJob.push(item);
          }
        } else {
          const index = jobexperiences.indexOf(liVal, 0);

          const btnIndex = buttonsJob.indexOf(item, 0);

          if (index > -1) {
            jobexperiences.splice(index, 1);
          }

          if (btnIndex > -1) {
            buttonsJob.splice(btnIndex, 1);
          }
        }

        history.push({
          pathname: "/jobs",
          search: `?category=${category}&subcategory=${subcategory}&cities=${city}&education=${education}&jobexperiences=${jobexperiences}&salary_rang_min=${salary[0]}&salary_rang_max=${salary[1]}&is_nagotiable=${is_nagotiable}`,
        });
      };
    });

    categoryLi.forEach((item) => {
      if (query.get("category") !== null) {
        if (query.get("category").split(",").indexOf(item.value) > -1) {
          item.checked = true;

          handleRefresh();

          if (buttons.indexOf(item) < 0) {
            buttons.push(item);
          }
        }
      }

      item.onclick = function () {
        let liVal = item.value;

        if (item.checked === true) {
          if (category.indexOf(liVal) <= 1) {
            category.push(liVal);
            buttons.push(item);
          }
        } else {
          const index = category.indexOf(liVal, 0);

          const btnIndex = buttons.indexOf(item, 0);

          if (index > -1) {
            category.splice(index, 1);
          }

          if (btnIndex > -1) {
            buttons.splice(btnIndex, 1);
          }
        }

        history.push({
          pathname: "/jobs",
          search: `?category=${category}&subcategory=${subcategory}&cities=${city}&education=${education}&jobexperiences=${jobexperiences}&salary_rang_min=${salary[0]}&salary_rang_max=${salary[1]}&is_nagotiable=${is_nagotiable}`,
        });
      };
    });

    // subcategory

    subCategoryLi.forEach((item) => {
      if (query.get("subcategory") !== null) {
        if (query.get("subcategory").split(",").indexOf(item.value) > -1) {
          item.checked = true;
          handleRefresh();
          if (buttons.indexOf(item) < 0) {
            buttons.push(item);
          }
        }
      }

      item.onclick = function () {
        let liVal = item.value;

        if (item.checked === true) {
          if (subcategory.indexOf(liVal) <= 1) {
            subcategory.push(liVal);
            buttons.push(item);
          }
        } else {
          const index = subcategory.indexOf(liVal, 0);

          const btnIndex = buttons.indexOf(item, 0);

          if (index > -1) {
            subcategory.splice(index, 1);
          }

          if (btnIndex > -1) {
            buttons.splice(btnIndex, 1);
          }
        }

        history.push({
          pathname: "/jobs",
          search: `?category=${category}&subcategory=${subcategory}&cities=${city}&education=${education}&jobexperiences=${jobexperiences}&salary_rang_min=${salary[0]}&salary_rang_max=${salary[1]}&is_nagotiable=${is_nagotiable}`,
        });
      };
    });

    // cities
    citiesLi.forEach((cityItem) => {
      if (query.get("cities") !== null) {
        if (query.get("cities").split(",").indexOf(cityItem.value) > -1) {
          cityItem.checked = true;
          handleRefresh();
          if (buttonsCities.indexOf(cityItem) < 0) {
            buttonsCities.push(cityItem);
          }
        }
      }

      cityItem.onclick = function () {
        let cityVal = cityItem.value;

        if (cityItem.checked === true) {
          if (city.indexOf(cityVal) <= 1) {
            city.push(cityVal);
            buttonsCities.push(cityItem);
          }
        } else {
          const cityIndex = city.indexOf(cityVal, 0);

          const cityBtnIndex = buttonsCities.indexOf(cityItem, 0);

          if (cityIndex > -1) {
            city.splice(cityIndex, 1);
          }

          if (cityBtnIndex > -1) {
            buttonsCities.splice(cityBtnIndex, 1);
          }
        }

        history.push({
          pathname: "/jobs",
          search: `?category=${category}&subcategory=${subcategory}&cities=${city}&education=${education}&jobexperiences=${jobexperiences}&salary_rang_min=${salary[0]}&salary_rang_max=${salary[1]}&is_nagotiable=${is_nagotiable}`,
        });
      };
    });

    // education
    eduLi.forEach((eduItem) => {
      if (query.get("education") !== null) {
        if (query.get("education").split(",").indexOf(eduItem.value) > -1) {
          eduItem.checked = true;
          handleRefresh();
          if (buttonsEdu.indexOf(eduItem) < 0) {
            buttonsEdu.push(eduItem);
          }
        }
      }

      eduItem.onclick = function () {
        let eduVal = eduItem.value;

        if (eduItem.checked === true) {
          if (education.indexOf(eduVal) <= 1) {
            education.push(eduVal);
            buttonsEdu.push(eduItem);
          }
        } else {
          const eduIndex = education.indexOf(eduVal, 0);

          const eduBtnIndex = buttonsEdu.indexOf(eduItem, 0);

          if (eduIndex > -1) {
            education.splice(eduIndex, 1);
          }

          if (eduIndex > -1) {
            buttonsEdu.splice(eduBtnIndex, 1);
          }
        }

        history.push({
          pathname: "/jobs",
          search: `?category=${category}&subcategory=${subcategory}&cities=${city}&education=${education}&jobexperiences=${jobexperiences}&salary_rang_min=${salary[0]}&salary_rang_max=${salary[1]}&is_nagotiable=${is_nagotiable}`,
        });
      };
    });
  });

  // controlled salary

  let salaryMin =
    query.get("salary_rang_min") === "NaN" ||
    query.get("salary_rang_min") === null
      ? 0
      : parseInt(query.get("salary_rang_min"));

  let salaryMax =
    query.get("salary_rang_max") === "NaN" ||
    query.get("salary_rang_max") === null
      ? 0
      : parseInt(query.get("salary_rang_max"));

  // range slider
  let [salary, setSalary] = useState([salaryMin, salaryMax]);

  const handleChange = (event, newValue) => {
    setSalary(newValue);

    history.push({
      pathname: "/jobs",
      search: `?category=${category}&subcategory=${subcategory}&cities=${city}&education=${education}&jobexperiences=${jobexperiences}&salary_rang_min=${salary[0]}&salary_rang_max=${salary[1]}&is_nagotiable=${is_nagotiable}`,
    });

    console.log(is_nagotiable);
  };

  let path = useLocation();

  if (path.search.length === 0) {
    // reset filter when page reloaded

    category = [];

    subcategory = [];

    education = [];

    salaryMin = [];

    salaryMax = [];

    city = [];

    jobexperiences = [];

    buttons = [];

    buttonsCities = [];

    buttonsEdu = [];

    buttonsJob = [];

    is_nagotiable = [];

    $(".jobItem").hide();

    $("li input").prop("checked", false);
  }

  if (query.get("category") !== null) {
    if (query.get("category").split(",")[0] === "") {
      category = [];
    } else {
      category = query.get("category").trim().split(",");
    }
  }

  if (query.get("subcategory") !== null) {
    if (query.get("subcategory").split(",")[0] === "") {
      subcategory = [];
    } else {
      subcategory = query.get("subcategory").trim().split(",");
    }
  }

  if (query.get("cities") !== null) {
    if (query.get("cities").split(",")[0] === "") {
      city = [];
    } else {
      city = query.get("cities").trim().split(",");
    }
  }

  if (query.get("education") !== null) {
    if (query.get("education").split(",")[0] === "") {
      education = [];
    } else {
      education = query.get("education").trim().split(",");
    }
  }

  if (query.get("jobexperiences") !== null) {
    if (query.get("jobexperiences").split(",")[0] === "") {
      jobexperiences = [];
    } else {
      jobexperiences = query.get("jobexperiences").trim().split(",");
    }
  }

  if (query.get("is_nagotiable") !== null) {
    if (query.get("is_nagotiable") === "") {
      is_nagotiable = [];
    } else {
      is_nagotiable = [];
      is_nagotiable.push(query.get("is_nagotiable"));

      console.log(query.get("is_nagotiable"));
    }
  }

  let params = {
    category_id: category,
    subcategory_id: subcategory,
    city_id: city,
    education_id: education,
    jobexperience_id: jobexperiences,
    salary_rang_min: salary[0],
    salary_rang_max: salary[1],
    is_nagotiable: is_nagotiable[0],
  };

  let filterVacanc = useQuery(["filterVacancy", params], filterVacancy, {
    refetchOnWindowFocus: true,
  });

  useLayoutEffect(() => {
    window.scrollTo({
      top: 248,
    });
  }, []);

  return (
    <main className="vacancies">
      <div className="home__leftBanner">
        <img src={require("../../../images/left.jpg").default} alt="" />
      </div>
      <div className="home__rightBanner">
        <img src={require("../../../images/left.jpg").default} alt="" />
      </div>
      <Container>
        <div className="home__bannerTop">
          <img src={require("../../../images/pasha.jpg").default} alt="" />
        </div>
        <div className="vacancies__wrapper">
          <div className="vacancies__title">
            <h1>Vakansiyalar</h1>
          </div>
          <div className="newsDetail__socialFixed">
            <span className="one">
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.0591 12.9999C14.6662 13.0014 14.2777 13.0823 13.9168 13.2376C13.556 13.393 13.2302 13.6197 12.9591 13.9041L5.84828 10.3457C6.0232 9.81534 6.0232 9.24279 5.84828 8.7124L12.9708 5.0899C13.481 5.62751 14.1728 5.95624 14.9118 6.01218C15.6509 6.06812 16.3843 5.84728 16.9696 5.39258C17.5549 4.93789 17.9502 4.28182 18.0787 3.55189C18.2072 2.82197 18.0597 2.07034 17.6649 1.44309C17.2701 0.815845 16.6562 0.357794 15.9425 0.157968C15.2288 -0.0418568 14.4663 0.0308196 13.8032 0.361872C13.1401 0.692924 12.6238 1.2587 12.3546 1.94923C12.0854 2.63977 12.0825 3.40573 12.3466 4.09823L5.29412 7.68573C4.91323 7.21991 4.39759 6.88329 3.81788 6.72202C3.23818 6.56075 2.62278 6.58272 2.05605 6.78493C1.48932 6.98713 0.999004 7.35966 0.652308 7.85147C0.305611 8.34327 0.119507 8.93026 0.119507 9.53198C0.119507 10.1337 0.305611 10.7207 0.652308 11.2125C0.999004 11.7043 1.48932 12.0768 2.05605 12.279C2.62278 12.4812 3.23818 12.5032 3.81788 12.3419C4.39759 12.1807 4.91323 11.8441 5.29412 11.3782L12.3291 14.9191C12.2102 15.2382 12.149 15.576 12.1483 15.9166C12.1483 16.4934 12.3193 17.0573 12.6398 17.537C12.9603 18.0166 13.4158 18.3905 13.9488 18.6112C14.4817 18.832 15.0682 18.8897 15.634 18.7772C16.1997 18.6646 16.7194 18.3869 17.1273 17.979C17.5352 17.5711 17.813 17.0514 17.9256 16.4856C18.0381 15.9198 17.9804 15.3334 17.7596 14.8004C17.5388 14.2675 17.165 13.8119 16.6854 13.4914C16.2057 13.171 15.6418 12.9999 15.0649 12.9999H15.0591Z"
                  fill="white"
                />
              </svg>
            </span>
            <a href="2#">
              <span className="fb">
                <svg
                  width="11"
                  height="23"
                  viewBox="0 0 11 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.2738 11.6656H7.24038V22.7787H2.64446V11.6656H0.458618V7.76002H2.64446V5.23265C2.64446 3.42532 3.50297 0.595215 7.28129 0.595215L10.6857 0.609457V4.4005H8.21557C7.8104 4.4005 7.24068 4.60293 7.24068 5.46509V7.76365H10.6754L10.2738 11.6656Z"
                    fill="white"
                  />
                </svg>
              </span>
            </a>
            <a href="2#">
              <span className="twitter">
                <svg
                  width="21"
                  height="17"
                  viewBox="0 0 21 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.4132 2.21727C19.6847 2.54031 18.901 2.7588 18.0792 2.85638C18.9183 2.35364 19.5622 1.55816 19.8662 0.608745C19.081 1.07452 18.211 1.4124 17.2858 1.59453C16.5446 0.805115 15.4885 0.311768 14.3191 0.311768C12.0754 0.311768 10.2556 2.13151 10.2556 4.37521C10.2556 4.6937 10.2917 5.00371 10.3614 5.3013C6.98432 5.1319 3.98999 3.51428 1.9857 1.05512C1.63599 1.65514 1.43538 2.35364 1.43538 3.09821C1.43538 4.50764 2.15328 5.75191 3.243 6.48042C2.57723 6.45951 1.95024 6.27678 1.40265 5.97162C1.40235 5.98889 1.40235 6.00616 1.40235 6.02313C1.40235 7.99197 2.8036 9.63414 4.66213 10.0072C4.32152 10.1005 3.96181 10.1499 3.5918 10.1499C3.32937 10.1499 3.07512 10.1248 2.82724 10.0775C3.34422 11.6915 4.84456 12.8663 6.62309 12.8994C5.23215 13.9894 3.48028 14.6388 1.57599 14.6388C1.24871 14.6388 0.924459 14.6197 0.607178 14.5818C2.4045 15.7352 4.54092 16.4077 6.83552 16.4077C14.3097 16.4077 18.397 10.216 18.397 4.84583C18.397 4.66976 18.3931 4.4943 18.3852 4.32036C19.1798 3.74762 19.8686 3.03214 20.4132 2.21727Z"
                    fill="#F1F2F2"
                  />
                </svg>
              </span>
            </a>
            <a href="2#">
              <span className="link">
                <svg
                  width="20"
                  height="19"
                  viewBox="0 0 20 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.1574 11.3677V18.3764H15.0939V11.8374C15.0939 10.1955 14.5072 9.07429 13.0359 9.07429C11.9132 9.07429 11.2462 9.82916 10.9516 10.5601C10.8446 10.8213 10.8171 11.1841 10.8171 11.5504V18.3761H6.75329C6.75329 18.3761 6.80784 7.30119 6.75329 6.15479H10.8174V7.88667C10.8092 7.90031 10.7977 7.91364 10.7904 7.92667H10.8174V7.88667C11.3574 7.05573 12.3205 5.86781 14.4796 5.86781C17.1531 5.86781 19.1574 7.61454 19.1574 11.3677ZM2.50223 0.263672C1.11218 0.263672 0.202759 1.17613 0.202759 2.37496C0.202759 3.54833 1.08582 4.48715 2.4489 4.48715H2.47526C3.89259 4.48715 4.77383 3.54833 4.77383 2.37496C4.74686 1.17613 3.89259 0.263672 2.50223 0.263672ZM0.444282 18.3764H4.50655V6.15479H0.444282V18.3764Z"
                    fill="#F1F2F2"
                  />
                </svg>
              </span>
            </a>
            <a href="2#">
              <span className="tele">
                <svg
                  width="20"
                  height="14"
                  viewBox="0 0 20 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.7864 0.0975942L1.66825 5.79509C0.568246 6.20009 0.57461 6.76259 1.46643 7.01343L5.60461 8.19676L15.1792 2.65926C15.6319 2.40676 16.0455 2.54259 15.7055 2.81926L7.94825 9.23676H7.94643L7.94825 9.23759L7.66279 13.1476C8.08097 13.1476 8.26552 12.9718 8.50006 12.7643L10.5101 10.9726L14.691 13.8034C15.4619 14.1926 16.0155 13.9926 16.2073 13.1493L18.9519 1.29259C19.2328 0.260094 18.5219 -0.207406 17.7864 0.0975942Z"
                    fill="white"
                  />
                </svg>
              </span>
            </a>
          </div>
          <div className="vacancies_-flexBox">
            <div className="vacancies__wrapper--left">
              <div className="vacancies__content">
                <div className="vacancies__itemBox">
                  <div className="title">
                    <svg
                      width="16"
                      height="10"
                      viewBox="0 0 16 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.49995 0.600097L7.99995 6.1001L13.5 0.600098L15.7 1.7001L7.99995 9.4001L0.29995 1.7001L2.49995 0.600097Z"
                        fill="#01345A"
                      />
                    </svg>
                    <h4>Kateqoriya</h4>
                  </div>
                  <div className="vacancies__itemBox--search">
                    <Input type="text" className="myInput" />
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.49951 12.5C7.83074 12.4997 9.12362 12.0541 10.1723 11.234L13.4693 14.531L14.5298 13.4705L11.2328 10.1735C12.0533 9.12475 12.4992 7.83158 12.4995 6.5C12.4995 3.19175 9.80776 0.5 6.49951 0.5C3.19126 0.5 0.499512 3.19175 0.499512 6.5C0.499512 9.80825 3.19126 12.5 6.49951 12.5ZM6.49951 2C8.98126 2 10.9995 4.01825 10.9995 6.5C10.9995 8.98175 8.98126 11 6.49951 11C4.01776 11 1.99951 8.98175 1.99951 6.5C1.99951 4.01825 4.01776 2 6.49951 2Z"
                        fill="#01345A"
                      />
                    </svg>
                  </div>
                  <div className="vacancies__itemBox--info">
                    <Scrollbars
                      style={{ height: 150 }}
                      speed={0.5}
                      className="area"
                      contentClassName="content"
                    >
                      <ul className="listed">
                        {vacancySelectable.isLoading === false &&
                          vacancySelectable.data !== undefined &&
                          vacancySelectable.data.data.categories.data.map(
                            (item) => (
                              <li className="home listCategory" key={item.id}>
                                <Label>
                                  <Input type="checkbox" value={item.id} />
                                  <span>{item.name}</span>
                                </Label>
                                {item.subcategories !== null && (
                                  <ul className="subListed">
                                    {item.subcategories !== undefined &&
                                      item.subcategories.data.map((subItem) => (
                                        <li key={subItem.id}>
                                          <Label>
                                            <Input
                                              type="checkbox"
                                              value={subItem.id}
                                            />

                                            <span>{subItem.name}</span>
                                          </Label>
                                        </li>
                                      ))}
                                  </ul>
                                )}
                              </li>
                            )
                          )}
                      </ul>
                    </Scrollbars>
                  </div>
                </div>
                <div className="vacancies__itemBox">
                  <div className="title">
                    <svg
                      width="16"
                      height="10"
                      viewBox="0 0 16 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.49995 0.600097L7.99995 6.1001L13.5 0.600098L15.7 1.7001L7.99995 9.4001L0.29995 1.7001L2.49995 0.600097Z"
                        fill="#01345A"
                      />
                    </svg>
                    <h4>Şəhərlər</h4>
                  </div>
                  <div className="vacancies__itemBox--search">
                    <Input type="text" className="myInput" />
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.49951 12.5C7.83074 12.4997 9.12362 12.0541 10.1723 11.234L13.4693 14.531L14.5298 13.4705L11.2328 10.1735C12.0533 9.12475 12.4992 7.83158 12.4995 6.5C12.4995 3.19175 9.80776 0.5 6.49951 0.5C3.19126 0.5 0.499512 3.19175 0.499512 6.5C0.499512 9.80825 3.19126 12.5 6.49951 12.5ZM6.49951 2C8.98126 2 10.9995 4.01825 10.9995 6.5C10.9995 8.98175 8.98126 11 6.49951 11C4.01776 11 1.99951 8.98175 1.99951 6.5C1.99951 4.01825 4.01776 2 6.49951 2Z"
                        fill="#01345A"
                      />
                    </svg>
                  </div>
                  <div className="vacancies__itemBox--info">
                    <Scrollbars
                      style={{ height: 150 }}
                      speed={0.5}
                      className="area"
                      contentClassName="content"
                    >
                      <ul className="cities">
                        {vacancySelectable.isLoading === false &&
                          vacancySelectable.data.data.cities.data.map(
                            (item) => (
                              <li className="home listCities" key={item.id}>
                                <Label>
                                  <Input type="checkbox" value={item.id} />
                                  <span>{item.title}</span>
                                </Label>
                              </li>
                            )
                          )}
                      </ul>
                    </Scrollbars>
                  </div>
                </div>
                <div className="vacancies__itemBox">
                  <div className="title">
                    <svg
                      width="16"
                      height="10"
                      viewBox="0 0 16 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.49995 0.600097L7.99995 6.1001L13.5 0.600098L15.7 1.7001L7.99995 9.4001L0.29995 1.7001L2.49995 0.600097Z"
                        fill="#01345A"
                      />
                    </svg>
                    <h4>Educations</h4>
                  </div>
                  <div className="vacancies__itemBox--search">
                    <Input type="text" className="myInput" />
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.49951 12.5C7.83074 12.4997 9.12362 12.0541 10.1723 11.234L13.4693 14.531L14.5298 13.4705L11.2328 10.1735C12.0533 9.12475 12.4992 7.83158 12.4995 6.5C12.4995 3.19175 9.80776 0.5 6.49951 0.5C3.19126 0.5 0.499512 3.19175 0.499512 6.5C0.499512 9.80825 3.19126 12.5 6.49951 12.5ZM6.49951 2C8.98126 2 10.9995 4.01825 10.9995 6.5C10.9995 8.98175 8.98126 11 6.49951 11C4.01776 11 1.99951 8.98175 1.99951 6.5C1.99951 4.01825 4.01776 2 6.49951 2Z"
                        fill="#01345A"
                      />
                    </svg>
                  </div>
                  <div className="vacancies__itemBox--info">
                    <Scrollbars
                      style={{ height: 150 }}
                      speed={0.5}
                      className="area"
                      contentClassName="content"
                    >
                      <ul className="edu">
                        {vacancySelectable.isLoading === false &&
                          vacancySelectable.data.data.educations.data.map(
                            (item) => (
                              <li className="home listEdu" key={item.id}>
                                <Label>
                                  <Input type="checkbox" value={item.id} />
                                  <span>{item.title}</span>
                                </Label>
                              </li>
                            )
                          )}
                      </ul>
                    </Scrollbars>
                  </div>
                </div>
                <div className="vacancies__itemBox">
                  <div className="title">
                    <svg
                      width="16"
                      height="10"
                      viewBox="0 0 16 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.49995 0.600097L7.99995 6.1001L13.5 0.600098L15.7 1.7001L7.99995 9.4001L0.29995 1.7001L2.49995 0.600097Z"
                        fill="#01345A"
                      />
                    </svg>
                    <h4>Job Exprection</h4>
                  </div>
                  <div className="vacancies__itemBox--search">
                    <Input type="text" className="myInput" />
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.49951 12.5C7.83074 12.4997 9.12362 12.0541 10.1723 11.234L13.4693 14.531L14.5298 13.4705L11.2328 10.1735C12.0533 9.12475 12.4992 7.83158 12.4995 6.5C12.4995 3.19175 9.80776 0.5 6.49951 0.5C3.19126 0.5 0.499512 3.19175 0.499512 6.5C0.499512 9.80825 3.19126 12.5 6.49951 12.5ZM6.49951 2C8.98126 2 10.9995 4.01825 10.9995 6.5C10.9995 8.98175 8.98126 11 6.49951 11C4.01776 11 1.99951 8.98175 1.99951 6.5C1.99951 4.01825 4.01776 2 6.49951 2Z"
                        fill="#01345A"
                      />
                    </svg>
                  </div>
                  <div className="vacancies__itemBox--info">
                    <Scrollbars
                      style={{ height: 250 }}
                      speed={0.5}
                      className="area"
                      contentClassName="content"
                    >
                      <ul className="job">
                        {vacancySelectable.isLoading === false &&
                          vacancySelectable.data.data.jobexperiences.data.map(
                            (item) => (
                              <li className="home listJob" key={item.id}>
                                <Label>
                                  <Input type="checkbox" value={item.id} />
                                  <span>{item.title}</span>
                                </Label>
                              </li>
                            )
                          )}
                      </ul>
                    </Scrollbars>
                  </div>
                </div>
                <div className="vacancies__itemBox">
                  <div className="titleData">
                    <svg
                      width="16"
                      height="10"
                      viewBox="0 0 16 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.49995 0.600097L7.99995 6.1001L13.5 0.600098L15.7 1.7001L7.99995 9.4001L0.29995 1.7001L2.49995 0.600097Z"
                        fill="#01345A"
                      />
                    </svg>
                    <h4>Aylıq maaş</h4>
                  </div>
                  <div className="vacancies__itemBox--search sliderData">
                    <SliderRange
                      value={salary}
                      max={10000}
                      min={0}
                      onChange={handleChange}
                      valueLabelDisplay="on"
                      aria-labelledby="range-slider"
                    />
                  </div>
                </div>
                <div className="vacancies__itemBox">
                  <div className="nagoTitle">
                    <svg
                      width="16"
                      height="10"
                      viewBox="0 0 16 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.49995 0.600097L7.99995 6.1001L13.5 0.600098L15.7 1.7001L7.99995 9.4001L0.29995 1.7001L2.49995 0.600097Z"
                        fill="#01345A"
                      />
                    </svg>
                    <h4>Razilasma</h4>
                  </div>
                  <div className="vacancies__itemBox--info">
                    <ul className="nago">
                      <li className="home listNago">
                        <Label>
                          <Input type="checkbox" />
                          <span>Razilasma</span>
                        </Label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="vacancies__wrapper--right">
              {/* <div className='vacancies__rightSearch'>
                                <div className='vacancies__rightSearch--item'>
                                    <Input type='text'
                                        placeholder={'Açar sözü daxil edin'}
                                    />
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.16634 15.4999C9.7934 15.4996 11.3736 14.9549 12.6553 13.9526L16.6849 17.9823L17.9811 16.6861L13.9514 12.6564C14.9543 11.3746 15.4993 9.79407 15.4997 8.16659C15.4997 4.12317 12.2098 0.833252 8.16634 0.833252C4.12292 0.833252 0.833008 4.12317 0.833008 8.16659C0.833008 12.21 4.12292 15.4999 8.16634 15.4999ZM8.16634 2.66659C11.1996 2.66659 13.6663 5.13334 13.6663 8.16659C13.6663 11.1998 11.1996 13.6666 8.16634 13.6666C5.13309 13.6666 2.66634 11.1998 2.66634 8.16659C2.66634 5.13334 5.13309 2.66659 8.16634 2.66659Z" fill="#01345A" />
                                    </svg>
                                </div>
                                <div className='vacancies__rightSearch--item'>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.75 7.75H10.25V0.25H7.75V7.75H0.25V10.25H7.75V17.75H10.25V10.25H17.75V7.75Z" fill="white" />
                                    </svg>
                                    <NavLink to={''}>
                                        Yeni vakansiya əlavə et
                                </NavLink>
                                </div>
                            </div> */}
              {/* <div className='vacancies__premium'>
                                <h4>Premium elanlar</h4>
                                <Row>

                                    <Col lg='6'>
                                        <div className='vcItem'>
                                            <h4>Hüquq məsləhətçisi</h4>
                                            <span>Kapital Bank</span>
                                            <p>750 — 1250 AZN</p>
                                            <div className='vcItem__content'>
                                                <p>- Gündəlik və həftəlik post planın hazırlanması
                                                - Gündəlik olaraq postların hazırlanması
                                                - Kreativ post ideyalarının təklifi
                                                - İş saatı: 09:00-dan 18:00-dək (6 tam iş günü)
                                                - Əmək haqqı: 500 + bonus
                                                </p>
                                                <div className='gradient'>

                                                </div>
                                            </div>
                                            <div className='end'>
                                                <NavLink to={''}>
                                                    Daha ətraflı
                                                    <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0.5 9.25L4.25 5.5L0.5 1.75L1.25 0.25L6.5 5.5L1.25 10.75L0.5 9.25Z" fill="#01345A" />
                                                    </svg>
                                                </NavLink>
                                                <div className='end__list'>
                                                    <span>
                                                        Bakı
                                                    </span>
                                                    <span>
                                                        IT - Rəqəmsal
                                                    </span>
                                                    <span>
                                                        Qrafik dizayner
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div> */}
              <div className="vacancies__job">
                <h4>Elanlar</h4>
                <div className="vacancies__job--title">
                  <div className="items">
                    {buttons !== null
                      ? buttons.map((item, index) => (
                          <div
                            className="jobItem"
                            key={index}
                            data-category={item.value}
                          >
                            <p className="deleteItem">
                              <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M11.3536 1.35355L10.6465 0.646484L6.00005 5.29292L1.35361 0.646484L0.646484 1.35355L5.29295 6.00002L0.646484 10.6465L1.35361 11.3535L6.00005 6.70711L10.6465 11.3535L11.3536 10.6465L6.70714 6.00002L11.3536 1.35355Z"
                                  fill="#01345A"
                                />
                              </svg>
                            </p>
                            <span>{item.nextElementSibling.textContent}</span>
                          </div>
                        ))
                      : ""}
                    {buttonsCities !== null
                      ? buttonsCities.map((item, index) => (
                          <div
                            className="jobItem"
                            key={index}
                            data-cities={item.value}
                          >
                            <p className="deleteItem">
                              <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M11.3536 1.35355L10.6465 0.646484L6.00005 5.29292L1.35361 0.646484L0.646484 1.35355L5.29295 6.00002L0.646484 10.6465L1.35361 11.3535L6.00005 6.70711L10.6465 11.3535L11.3536 10.6465L6.70714 6.00002L11.3536 1.35355Z"
                                  fill="#01345A"
                                />
                              </svg>
                            </p>
                            <span>{item.nextElementSibling.textContent}</span>
                          </div>
                        ))
                      : ""}
                    {buttonsEdu !== null
                      ? buttonsEdu.map((item, index) => (
                          <div
                            className="jobItem"
                            key={index}
                            data-edu={item.value}
                          >
                            <p className="deleteItem">
                              <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M11.3536 1.35355L10.6465 0.646484L6.00005 5.29292L1.35361 0.646484L0.646484 1.35355L5.29295 6.00002L0.646484 10.6465L1.35361 11.3535L6.00005 6.70711L10.6465 11.3535L11.3536 10.6465L6.70714 6.00002L11.3536 1.35355Z"
                                  fill="#01345A"
                                />
                              </svg>
                            </p>
                            <span>{item.nextElementSibling.textContent}</span>
                          </div>
                        ))
                      : ""}
                    {buttonsJob !== null
                      ? buttonsJob.map((item, index) => (
                          <div
                            className="jobItem"
                            key={index}
                            data-job={item.value}
                          >
                            <p className="deleteItem">
                              <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M11.3536 1.35355L10.6465 0.646484L6.00005 5.29292L1.35361 0.646484L0.646484 1.35355L5.29295 6.00002L0.646484 10.6465L1.35361 11.3535L6.00005 6.70711L10.6465 11.3535L11.3536 10.6465L6.70714 6.00002L11.3536 1.35355Z"
                                  fill="#01345A"
                                />
                              </svg>
                            </p>
                            <span>{item.nextElementSibling.textContent}</span>
                          </div>
                        ))
                      : ""}
                  </div>
                </div>
                {/* titile end */}
                <Row>
                  {filterVacanc.isLoading === false &&
                    filterVacanc.data.data.map((item) => (
                      <Col lg="6" key={item.id}>
                        <div className="vcItem">
                          <h4>{item.title}</h4>
                          <span>{item.company_name}</span>
                          <p>500 — 750 AZN</p>
                          <div className="vcItem__content">
                            {renderHTML(item.aboutjob)}
                            <div className="gradient"></div>
                          </div>
                          <div className="end">
                            <NavLink to={"/jobs/" + item.slug}>
                              Daha ətraflı
                              <svg
                                width="7"
                                height="11"
                                viewBox="0 0 7 11"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0.5 9.25L4.25 5.5L0.5 1.75L1.25 0.25L6.5 5.5L1.25 10.75L0.5 9.25Z"
                                  fill="#01345A"
                                />
                              </svg>
                            </NavLink>
                            <div className="end__list">
                              <span>Bakı</span>
                              <span>IT - Rəqəmsal</span>
                              <span>Qrafik dizayner</span>
                            </div>
                          </div>
                        </div>
                      </Col>
                    ))}
                </Row>
                <div className="jobPagination pagiEnd">
                  <span className="prev">
                    <svg
                      width="7"
                      height="11"
                      viewBox="0 0 7 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.5 1.75L2.75 5.5L6.5 9.25L5.75 10.75L0.5 5.5L5.75 0.249999L6.5 1.75Z"
                        fill="#01345A"
                      />
                    </svg>
                  </span>
                  <p>54-dən</p>
                  <div className="showPagi">
                    <span>2</span>
                  </div>
                  <span className="next">
                    <svg
                      width="7"
                      height="11"
                      viewBox="0 0 7 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.5 9.25L4.25 5.5L0.5 1.75L1.25 0.25L6.5 5.5L1.25 10.75L0.5 9.25Z"
                        fill="#01345A"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Vacancies;
