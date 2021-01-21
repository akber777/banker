import React from 'react';

// css
import './css/_sliderPartners.scss';


// tools

// sider
import Carousel from "react-multi-carousel";

// proptypes
import PropTypes from 'prop-types';

const CustomButtonBox = ({ ...props }) =>
    <>
        <div className='sliderPartners__buttonBox'>
            <div
                onClick={() => props.previous()}
                className='sliderPartners__buttonBox--prev'
            >
                <svg width="13" height="24" viewBox="0 0 13 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.9461 0.476753C12.2256 0.476231 12.4526 0.702459 12.4531 0.981972C12.4534 1.11672 12.3998 1.24602 12.3044 1.3412L1.52739 12.1172L12.3044 22.8932C12.5023 23.0911 12.5023 23.412 12.3044 23.6099C12.1065 23.8078 11.7857 23.8078 11.5878 23.6099L0.453421 12.4755C0.255849 12.2779 0.255849 11.9575 0.453421 11.7599L11.5878 0.625547C11.6827 0.530321 11.8116 0.476753 11.9461 0.476753Z" fill="black" />
                </svg>
            </div>
            <div
                onClick={() => props.next()}
                className='sliderPartners__buttonBox--next'
            >
                <svg width="13" height="24" viewBox="0 0 13 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.986517 23.7525C0.707003 23.753 0.480015 23.5268 0.479493 23.2473C0.479256 23.1125 0.532777 22.9832 0.628193 22.8881L11.4052 12.112L0.628193 1.33602C0.43029 1.13812 0.43029 0.817278 0.628193 0.619375C0.826097 0.421471 1.14694 0.421471 1.34484 0.619375L12.4792 11.7537C12.6768 11.9514 12.6768 12.2717 12.4792 12.4694L1.34484 23.6037C1.24995 23.6989 1.12098 23.7525 0.986517 23.7525Z" fill="black" />
                </svg>
            </div>
        </div>
    </>

const SliderPartners = ({
    ...props
}) => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 6
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };


    return (
        <div className='sliderPartners'>
            <Carousel
                responsive={responsive}
                additionalTransfrom={0}
                arrows={false}
                autoPlaySpeed={3000}
                centerMode={false}
                showDots
                infinite={true}
                className={'sliderPartners__self'}
                renderButtonGroupOutside
                customButtonGroup={<CustomButtonBox />}
                focusOnSelect={true}

            >
                {
                    props.sliderData.map((item, index) => (

                        <div className='sliderPartners__box' key={index}>
                            <svg width="67" height="44" viewBox="0 0 67 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M65.481 3.38328C65.1188 3.12858 64.6545 3.06618 64.238 3.22015L53.1637 7.24765C51.7908 7.74649 50.6976 8.75206 50.086 10.0786C49.9714 10.3273 49.8961 10.5857 49.8208 10.8437C47.9191 10.3031 44.3851 9.17398 40.873 7.36443C35.5659 4.6298 31.5114 5.9805 28.0339 8.63299C26.2718 8.66763 23.8432 8.87598 21.4559 9.08636C19.933 9.22072 18.4938 9.34437 17.3268 9.41556C17.2981 8.71462 17.1341 8.01902 16.8315 7.36189C16.2199 6.03526 15.1269 5.02969 13.7538 4.53098L2.67923 0.503217C2.26407 0.350649 1.79707 0.413052 1.43628 0.666356C1.07269 0.921187 0.856445 1.33635 0.856445 1.77941V28.9478C0.856445 29.6987 1.46404 30.3063 2.21491 30.3063H6.18269C7.87023 30.3063 9.44023 29.5103 10.4551 28.2251C10.9957 28.6362 11.636 29.1176 12.3076 29.6217C13.8928 30.8144 15.628 32.1157 16.3894 32.7538C21.4477 36.9883 27.5288 41.561 28.7399 42.3569C29.8714 43.0998 31.9091 43.8905 33.4586 43.8905C34.0648 43.8905 35.5917 43.8905 36.6636 42.9844C37.7687 43.4182 38.9599 43.397 40.0676 42.9088C41.1727 42.4219 42.0668 41.5039 42.5868 40.3882C43.648 40.6057 44.8671 40.4465 45.9722 39.892C47.0082 39.3733 47.771 38.588 48.1796 37.67C49.1612 37.7602 50.2093 37.4405 51.1471 36.7228C52.4871 35.6985 53.1007 34.1858 52.9271 32.6935L56.3729 30.7871C57.382 32.155 58.9859 33.0229 60.7343 33.0229H64.7021C65.453 33.0229 66.0606 32.4153 66.0606 31.6645V4.49634C66.0607 4.05315 65.8444 3.63799 65.481 3.38328ZM8.72706 25.8264C8.33175 26.881 7.30899 27.5895 6.18269 27.5895H3.57325V3.71885L12.8249 7.08311C13.5121 7.33387 14.0586 7.83665 14.3637 8.4999C14.6701 9.16315 14.6967 9.90613 14.4406 10.5892L8.72706 25.8264ZM49.4983 34.5647C49.0379 34.9175 48.3933 35.1139 48.1067 34.8274C48.0921 34.8127 48.0694 34.8141 48.0544 34.8001C48.0284 34.7761 48.0155 34.7436 47.9874 34.7212C47.0163 33.9544 42.6651 29.5024 39.9762 26.698C39.4575 26.1555 38.5966 26.1355 38.0566 26.6569C37.5141 27.1756 37.4955 28.0352 38.0155 28.5764C38.6466 29.2352 43.7132 34.5121 45.741 36.3575C45.5896 36.954 45.0366 37.3223 44.7558 37.4632C43.8856 37.8996 42.9783 37.8266 42.6386 37.5109C42.6285 37.5015 42.6135 37.502 42.6031 37.4929C42.5865 37.4781 42.5791 37.4573 42.5616 37.4433C40.9325 36.1419 36.8454 31.7987 35.9207 30.7931C35.4125 30.2399 34.5543 30.2054 34.0011 30.7123C33.4493 31.2204 33.4121 32.08 33.9202 32.6318C33.9648 32.6801 37.9703 37.0008 40.2199 39.0077C39.9989 39.6429 39.5484 40.169 38.9705 40.4241C38.544 40.6136 37.8769 40.7108 37.1147 40.1475C35.1639 38.4935 31.249 34.3261 30.479 33.502C29.9684 32.9528 29.1061 32.925 28.5595 33.4371C28.0116 33.9492 27.9824 34.8088 28.4945 35.3567C29.4074 36.3337 32.1056 39.1935 34.1567 41.1299C33.9276 41.1578 33.687 41.1737 33.4586 41.1737C32.5591 41.1737 31.0137 40.5994 30.2324 40.0859C29.2799 39.4597 23.2996 34.9971 18.1352 30.6724C17.3539 30.017 15.571 28.6759 13.9392 27.4501C13.0647 26.7936 12.2589 26.1883 11.6651 25.7315L16.7513 12.1665C18.0715 12.1088 19.8316 11.9566 21.6944 11.7923C22.748 11.6995 23.8027 11.6089 24.8106 11.5305C23.2615 13.1207 20.9583 15.969 21.2619 18.6388C21.4013 19.854 22.0659 20.8662 23.1869 21.5666C25.4062 22.9555 29.5147 21.7907 31.4939 19.3565C32.7714 19.1721 33.6351 18.8459 34.5768 18.3789C36.1687 19.8752 38.3032 21.6343 40.5452 23.4822C44.448 26.6979 48.8721 30.3433 50.0422 32.3876C50.6935 33.5246 49.7902 34.3418 49.4983 34.5647ZM51.8287 30.196C50.0188 27.7748 46.0953 24.5353 42.2723 21.385C39.724 19.285 37.3176 17.3017 35.7774 15.7616C35.3529 15.3397 34.7015 15.2442 34.1762 15.5241C32.7925 16.2657 32.1691 16.5721 30.6064 16.7286C30.1898 16.771 29.8158 17.0019 29.5929 17.3561C28.5276 19.0462 25.5667 19.85 24.6275 19.2637C24.0941 18.9294 23.9907 18.5897 23.9615 18.3311C23.8302 17.1756 25.0002 15.1752 26.9411 13.2331C31.7473 8.4268 35.1832 7.48631 39.6285 9.77865C43.852 11.9562 48.0204 13.1875 49.7702 13.6526C49.8208 13.8561 49.8574 14.0616 49.9321 14.2612L55.2066 28.3273L51.8287 30.196ZM63.3439 30.3063H60.7344C59.6081 30.3063 58.5854 29.5978 58.1901 28.5432L52.4764 13.3074C52.2204 12.6229 52.2469 11.8801 52.5533 11.2167C52.8585 10.5535 53.4051 10.0507 54.0921 9.79991L63.3438 6.43566V30.3063H63.3439Z" fill="#014577" />
                            </svg>
                            <strong>
                                İstehlak Kreditləri
                             </strong>
                        </div>
                    ))
                }
            </Carousel>
        </div>
    );
}


SliderPartners.propTypes = {
    sliderData: PropTypes.array.isRequired,
}

export default SliderPartners;