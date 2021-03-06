import React, { useLayoutEffect } from "react";

// css
import "./css/_vacancyDetail.scss";
import "../homePage/css/_home.scss";
import "../news/css/_newsDetail.scss";

// tools

// reactstrap

import { Col, Container, Row } from "reactstrap";

// react router dom

import { NavLink, useLocation } from "react-router-dom";

// react query
import { useQuery } from "react-query";

// baseUrl

import { baseUrl } from "../../../api/api";

// include api link

import { vacancyDetail } from "../../../api/include";

// axios

import axios from "axios";

// renderHTML

import renderHTML from "react-render-html";

const VacanciesDetail = () => {
  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
    });

    document.querySelector(".fixed").classList.remove("noFixed");

    // fixed social icon
    let contentBox = document.querySelector(".vacancyDetail__wrapper");

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
  });

  let { pathname } = useLocation();

  let pathDetail = pathname.split("/")[pathname.split("/").length - 1];

  let { data, isLoading } = useQuery(
    ["vacancyDetail", pathDetail],
    async () => {
      const res = await axios.get(
        baseUrl + vacancyDetail.toString() + pathDetail + "?include=relateds"
      );

      return res.data;
    },
    {
      refetchOnWindowFocus: false,
      refetchIntervalInBackground: true,
    }
  );

  return (
    <main className="vacancyDetail vacancies">
      {isLoading === false && (
        <React.Fragment>
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
            <div className="vacancyDetail__wrapper">
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
              <div className="vacancyDetail__left">
                <div className="vacancyDetail__title">
                  <div className="flexDetail">
                    <div className="vacancyDetail__topBox">
                      <img
                        src={require("../../../images/az.png").default}
                        alt=""
                      />
                    </div>
                    <div className="vacancyDetail__topBox--content">
                      <h1>{renderHTML(data.data.title)}</h1>
                      <strong>{data.data.company_name}</strong>
                      <p>
                        <span>Bakı</span>
                        <span>IT - Rəqəmsal</span>
                      </p>
                      <p style={{ marginTop: 15 }}>{data.data.deadline}</p>
                    </div>
                    <div className="vacanciesDetailItems">
                      <p>
                        {data.data.salary === 1 && <p>{data.data.salaryfix}</p>}
                        {data.data.salary === 2 && (
                          <p>
                            {data.data.minsalary}-{data.data.maxsalary}
                          </p>
                        )}
                        {data.data.salary === 3 && <p>Razılaşma</p>}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="vacancyDetail__buttonBox">
                  <a
                    href={
                      "https://www.figma.com/file/KBor9lobN8rYsiXBbM31oq/news-banker?node-id=108%3A129"
                    }
                  >
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.1105 9.60892C16.0155 9.60909 15.9243 9.57027 15.857 9.50096L8.23217 1.62947L0.607377 9.50096C0.46513 9.64281 0.238416 9.63872 0.101004 9.49188C-0.033017 9.34862 -0.033017 9.12152 0.101004 8.97829L7.97934 0.845778C8.11917 0.701473 8.34585 0.701473 8.48571 0.845778L16.364 8.97826C16.5037 9.12284 16.5033 9.3569 16.3632 9.50103C16.2961 9.5701 16.2053 9.60888 16.1105 9.60892Z"
                        fill="black"
                      />
                      <path
                        d="M16.1105 16.2627C16.0155 16.2629 15.9243 16.2241 15.857 16.1548L8.2322 8.28328L0.607402 16.1548C0.465156 16.2966 0.238441 16.2926 0.101029 16.1457C-0.0330254 16.0024 -0.0330254 15.7753 0.101029 15.6321L7.97937 7.49959C8.1192 7.35528 8.34588 7.35528 8.48574 7.49959L16.3641 15.6321C16.5037 15.7766 16.5033 16.0107 16.3633 16.1548C16.2962 16.2239 16.2053 16.2627 16.1105 16.2627Z"
                        fill="black"
                      />
                    </svg>
                    Elanı irəli çək
                  </a>
                  <a
                    href={
                      "https://www.figma.com/file/KBor9lobN8rYsiXBbM31oq/news-banker?node-id=108%3A129"
                    }
                  >
                    <svg
                      width="24"
                      height="18"
                      viewBox="0 0 24 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.0141 9.68568C15.9916 9.68576 15.9692 9.68348 15.9472 9.67886C15.9017 9.66937 15.8587 9.65018 15.8212 9.62259C15.7837 9.595 15.7526 9.55966 15.73 9.51897L12.4218 3.5806C12.3997 3.54334 12.3853 3.50204 12.3795 3.45912C12.3736 3.41621 12.3764 3.37255 12.3876 3.33073C12.3989 3.28891 12.4185 3.24977 12.4451 3.21562C12.4717 3.18148 12.505 3.15301 12.5428 3.13191C12.5806 3.11081 12.6223 3.0975 12.6653 3.09276C12.7084 3.08803 12.752 3.09197 12.7935 3.10434C12.835 3.11672 12.8736 3.13729 12.907 3.16483C12.9404 3.19237 12.968 3.22633 12.9881 3.2647L16.1159 8.87811L20.468 5.59076C20.5021 5.5651 20.5409 5.5464 20.5822 5.53573C20.6235 5.52506 20.6665 5.52263 20.7087 5.52858C20.7509 5.53453 20.7916 5.54874 20.8283 5.5704C20.8651 5.59205 20.8972 5.62074 20.9229 5.65481C20.9485 5.68888 20.9672 5.72768 20.9779 5.76898C20.9886 5.81028 20.991 5.85327 20.9851 5.89551C20.9791 5.93775 20.9649 5.9784 20.9432 6.01515C20.9216 6.05189 20.8929 6.08402 20.8588 6.10968L16.2096 9.62016C16.1533 9.6627 16.0846 9.6857 16.0141 9.68568Z"
                        fill="white"
                      />
                      <path
                        d="M8.48806 9.89305C8.41899 9.89306 8.35172 9.87101 8.29606 9.83013L3.17238 6.07056C3.13805 6.04535 3.10903 6.01362 3.08696 5.97719C3.06489 5.94076 3.05022 5.90034 3.04377 5.85823C3.03733 5.81613 3.03924 5.77317 3.0494 5.73181C3.05955 5.69044 3.07776 5.65149 3.10297 5.61716C3.12819 5.58283 3.15992 5.5538 3.19635 5.53174C3.23278 5.50967 3.2732 5.495 3.3153 5.48855C3.35741 5.48211 3.40036 5.48402 3.44173 5.49418C3.48309 5.50433 3.52205 5.52254 3.55638 5.54775L8.36481 9.07575L11.1125 3.34689C11.1294 3.30619 11.1544 3.26936 11.186 3.23865C11.2176 3.20794 11.2552 3.184 11.2964 3.16829C11.3375 3.15257 11.3815 3.14542 11.4255 3.14725C11.4696 3.14909 11.5128 3.15988 11.5525 3.17897C11.5922 3.19806 11.6276 3.22505 11.6566 3.25828C11.6855 3.29152 11.7074 3.3303 11.7208 3.37227C11.7343 3.41424 11.7391 3.45851 11.7348 3.50238C11.7306 3.54625 11.7175 3.5888 11.6963 3.62743L8.77962 9.70851C8.7532 9.76352 8.71179 9.80996 8.66016 9.84248C8.60852 9.87501 8.54876 9.89232 8.48773 9.8924L8.48806 9.89305Z"
                        fill="white"
                      />
                      <path
                        d="M19.2282 15.0325H4.82137C4.75007 15.0325 4.68073 15.0091 4.6241 14.9657C4.56746 14.9224 4.52669 14.8616 4.50808 14.7928L2.25143 6.44242C2.22902 6.35933 2.24054 6.27074 2.28345 6.19614C2.32636 6.12154 2.39715 6.06705 2.48024 6.04464C2.56333 6.02223 2.65192 6.03375 2.72652 6.07666C2.80112 6.11957 2.85561 6.19036 2.87802 6.27345L5.06981 14.3838H18.9798L21.1621 6.27961C21.1845 6.19652 21.239 6.12573 21.3136 6.08282C21.3882 6.03991 21.4768 6.02839 21.5599 6.0508C21.643 6.07321 21.7138 6.12771 21.7567 6.20231C21.7996 6.2769 21.8111 6.36549 21.7887 6.44859L19.5415 14.7925C19.5229 14.8614 19.4822 14.9222 19.4255 14.9656C19.3689 15.009 19.2995 15.0325 19.2282 15.0325Z"
                        fill="white"
                      />
                      <path
                        d="M19.2282 17.312H4.79581C4.68003 17.3121 4.56577 17.2857 4.46178 17.2348C4.35779 17.1839 4.26682 17.1099 4.19585 17.0185C4.12489 16.927 4.0758 16.8205 4.05235 16.7071C4.02889 16.5937 4.03171 16.4765 4.06056 16.3644L4.50586 14.6305C4.52379 14.5608 4.5644 14.499 4.62129 14.4549C4.67819 14.4108 4.74814 14.3869 4.82013 14.387H19.2036C19.2756 14.3869 19.3455 14.4108 19.4024 14.4549C19.4593 14.499 19.4999 14.5608 19.5179 14.6305L19.9635 16.3647C19.9922 16.4768 19.9949 16.594 19.9714 16.7073C19.9479 16.8206 19.8988 16.9271 19.8279 17.0185C19.7569 17.11 19.666 17.184 19.5621 17.2349C19.4582 17.2858 19.344 17.3123 19.2282 17.3124V17.312ZM5.07213 15.0353L4.68943 16.5272C4.68522 16.5435 4.6848 16.5605 4.68819 16.577C4.69158 16.5935 4.6987 16.6089 4.709 16.6222C4.7193 16.6355 4.7325 16.6463 4.74761 16.6537C4.76271 16.6611 4.77931 16.665 4.79613 16.665H19.2286C19.2454 16.665 19.2619 16.6611 19.277 16.6537C19.2921 16.6463 19.3052 16.6356 19.3155 16.6223C19.3258 16.6091 19.333 16.5936 19.3364 16.5772C19.3398 16.5608 19.3394 16.5438 19.3353 16.5275L18.9522 15.0356L5.07213 15.0353Z"
                        fill="white"
                      />
                      <path
                        d="M11.9998 3.95353C11.6601 3.95383 11.3289 3.84819 11.0521 3.65134C10.7753 3.45449 10.5668 3.17623 10.4557 2.8553C10.3445 2.53438 10.3362 2.18677 10.4319 1.8609C10.5276 1.53502 10.7225 1.2471 10.9895 1.03723C11.2566 0.82736 11.5824 0.705995 11.9217 0.690036C12.2609 0.674078 12.5967 0.764319 12.8823 0.948193C13.1678 1.13207 13.3889 1.40042 13.5148 1.71587C13.6406 2.03133 13.665 2.37818 13.5844 2.70813C13.4991 3.06383 13.2962 3.38032 13.0086 3.60635C12.721 3.83238 12.3656 3.95471 11.9998 3.95353ZM11.9998 1.33656C11.7486 1.33663 11.5069 1.43257 11.324 1.6048C11.1412 1.77703 11.031 2.01256 11.0159 2.26329C11.0008 2.51403 11.082 2.76107 11.2429 2.95398C11.4038 3.14689 11.6322 3.27112 11.8816 3.30131C12.1309 3.33149 12.3824 3.26536 12.5847 3.11641C12.787 2.96745 12.9248 2.74692 12.9699 2.49982C13.0151 2.25273 12.9643 1.9977 12.8278 1.78682C12.6913 1.57594 12.4795 1.4251 12.2356 1.3651C12.1573 1.34596 12.0771 1.33638 11.9965 1.33656H11.9998Z"
                        fill="white"
                      />
                      <path
                        d="M21.7182 6.71281C21.3786 6.71273 21.0475 6.60677 20.771 6.40967C20.4944 6.21257 20.2863 5.93414 20.1754 5.61316C20.0645 5.29218 20.0565 4.94461 20.1525 4.61886C20.2484 4.29311 20.4435 4.00539 20.7107 3.79575C20.9779 3.58611 21.3037 3.46499 21.643 3.44926C21.9822 3.43353 22.3179 3.52397 22.6033 3.70798C22.8887 3.892 23.1096 4.16043 23.2353 4.4759C23.361 4.79137 23.3852 5.13819 23.3045 5.46805C23.2187 5.82374 23.0154 6.14009 22.7276 6.36596C22.4397 6.59184 22.0841 6.71404 21.7182 6.71281ZM21.7182 4.09551C21.467 4.09558 21.2253 4.19152 21.0425 4.36375C20.8596 4.53598 20.7494 4.77151 20.7343 5.02225C20.7192 5.27298 20.8004 5.52003 20.9613 5.71293C21.1222 5.90584 21.3506 6.03007 21.6 6.06026C21.8494 6.09044 22.1009 6.02431 22.3031 5.87536C22.5054 5.72641 22.6432 5.50587 22.6884 5.25877C22.7335 5.01168 22.6827 4.75666 22.5462 4.54577C22.4097 4.33489 22.1979 4.18405 21.954 4.12405C21.8763 4.10505 21.7966 4.09547 21.7166 4.09551H21.7182Z"
                        fill="white"
                      />
                      <path
                        d="M2.2819 6.71297C1.86554 6.71297 1.4649 6.55402 1.16177 6.2686C0.858651 5.98318 0.675922 5.5928 0.650904 5.1772C0.625886 4.7616 0.760466 4.35213 1.02716 4.0324C1.29385 3.71267 1.67254 3.50682 2.08589 3.45687C2.49923 3.40693 2.91606 3.51666 3.25123 3.76366C3.5864 4.01066 3.81464 4.37629 3.88933 4.78589C3.96403 5.19549 3.87954 5.61815 3.65313 5.96756C3.42671 6.31697 3.07546 6.56677 2.67109 6.66594C2.54371 6.69716 2.41304 6.71295 2.2819 6.71297ZM2.2819 4.09567C2.20245 4.09575 2.12329 4.10533 2.04611 4.12421C1.804 4.18398 1.59381 4.33389 1.45845 4.54334C1.32309 4.75279 1.27275 5.006 1.3177 5.2513C1.36266 5.4966 1.49952 5.7155 1.70036 5.86334C1.9012 6.01118 2.15088 6.07681 2.39846 6.04684C2.64604 6.01688 2.87285 5.89357 3.03262 5.70208C3.19238 5.51059 3.27306 5.26536 3.25819 5.01641C3.24332 4.76747 3.13402 4.53359 2.95259 4.36248C2.77116 4.19138 2.53128 4.09595 2.2819 4.09567Z"
                        fill="white"
                      />
                    </svg>
                    Elanı VIP et
                  </a>
                  <a
                    href={
                      "https://www.figma.com/file/KBor9lobN8rYsiXBbM31oq/news-banker?node-id=108%3A129"
                    }
                  >
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.00014 0H15.0001L18.9021 5.573L9.50014 19L0.0981445 5.573L4.00014 0ZM8.16214 1L6.46414 5H12.5361L10.8381 1H8.16214ZM6.32714 6L9.50014 15.764L12.6721 6H6.32814H6.32714ZM1.72014 5H5.37814L7.07614 1H4.52014L1.72014 5ZM1.61814 6L8.44314 15.747L5.27614 6H1.61814ZM17.2801 5L14.4801 1H11.9241L13.6221 5H17.2801ZM17.3821 6H13.7241L10.5571 15.747L17.3821 6Z"
                        fill="white"
                      />
                    </svg>
                    Elanı irəli çək
                  </a>
                </div>

                <div className="vacancyDetail__crumbs">
                  <h4>İş barədə məlumat</h4>
                  <strong>Tələb olunan xüsusi biliklər</strong>
                  <div
                    className="vacancyDetail__crumbs--item skils"
                    data-color={"red"}
                  >
                    {data.data.skills.data.map((item) => (
                      <span key={item.id} style={{ color: "#F44336" }}>
                        {item.name}
                      </span>
                    ))}
                  </div>
                  <div className="vacancyDetail__crumbs--item">
                    {renderHTML(data.data.aboutjob)}
                  </div>
                </div>
                <div className="vacancyDetail__crumbs end">
                  <h4>Namizədə tələblər</h4>
                  <div
                    className="vacancyDetail__crumbs--item"
                    data-color={"red"}
                  >
                    {renderHTML(data.data.qualifications)}
                  </div>
                </div>
                <div className="vacancyDetail__infoBox">
                  <p>
                    <span>Şəhər</span>
                    <span>{data.data.city.data.title}</span>
                  </p>
                  <p>
                    <span>Yaş</span>
                    <span>
                      {data.data.agemin}-{data.data.agemax}
                    </span>
                  </p>
                  <p>
                    <span>Təhsil</span>
                    {data.data.education.data.title}
                  </p>
                  <p>
                    <span>İş təcrübəsi</span>
                    {data.data.jobexperience.data.title}
                  </p>
                  <p>
                    <span> Elanın tarixi</span>
                    {data.data.created_at.split(" ")[0]}
                  </p>
                  <p>
                    <span>Elanın bitmə tarixi</span>
                    {data.data.deadline.split(" ")[0]}
                  </p>
                  <p>
                    <span>Ünvan</span>
                    {}
                  </p>
                  <p>
                    <span>E-mail</span>
                    {data.data.email}
                  </p>
                  <p>
                    <span>Telefon</span>
                    {data.data.phone}
                  </p>
                </div>
                <div className="vacancyDetail__buttonBox credit">
                  <a
                    href={
                      "https://www.figma.com/file/KBor9lobN8rYsiXBbM31oq/news-banker?node-id=108%3A129"
                    }
                  >
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.00014 0H15.0001L18.9021 5.573L9.50014 19L0.0981445 5.573L4.00014 0ZM8.16214 1L6.46414 5H12.5361L10.8381 1H8.16214ZM6.32714 6L9.50014 15.764L12.6721 6H6.32814H6.32714ZM1.72014 5H5.37814L7.07614 1H4.52014L1.72014 5ZM1.61814 6L8.44314 15.747L5.27614 6H1.61814ZM17.2801 5L14.4801 1H11.9241L13.6221 5H17.2801ZM17.3821 6H13.7241L10.5571 15.747L17.3821 6Z"
                        fill="white"
                      />
                    </svg>
                    Elanı irəli çək
                  </a>
                </div>
              </div>
              <div className="vacancyDetail__right">
                <div className="newsDetail__bannerRight">
                  <img
                    src={require("../../../images/turanBank.jpg").default}
                    alt=""
                  />
                </div>
                <div className="newsDetail__bannerRight">
                  <img
                    src={require("../../../images/masin.jpg").default}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="vacancyDetail__same">
              <h4>Oxşar vakansiyalar</h4>
              <Row>
                {data.data.relateds.data.map((item) => (
                  <Col lg="6" key={item.id}>
                    <div className="vcItem">
                      <h4>{item.title}</h4>
                      <span>{item.company_name}</span>
                      <p>
                        {item.minsalary}-{item.maxsalary}
                      </p>
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
            </div>
          </Container>
        </React.Fragment>
      )}
    </main>
  );
};

export default VacanciesDetail;
