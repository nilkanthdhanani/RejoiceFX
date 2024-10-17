
import styles from './heroBanner.module.scss'
import Image from "next/image";

import bannerBottomLines from "@/assets/images/svg/bannerBottomLines.svg";
import leftLayer from "@/assets/images/svg/leftLayer.svg";
import rightLayer from "@/assets/images/svg/rightLayer.svg";
import buttonFx from "@/assets/images/svg/buttonFx.svg";
import heroBanner from "@/assets/images/png/heroBanner.png";
import heroBanner2 from "@/assets/images/png/heroBanner2.png";
import heroBanner3 from "@/assets/images/png/heroBanner3.png";
import ArrowSmallRight from '@/assets/images/svg/arrowSmallRight';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function SampleNextArrow(props) {
    const { className, style } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "none" }}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "none" }}
        />
    );
}

const sliderContent = [
    "Optimize Operations with Our CRM",
    "Obtain Your Forex Broker Licence",
    "Trade Better, Smarter, Faster",
    "Optimize Operations with Our CRM",
    "Obtain Your Forex Broker Licence",
    "Trade Better, Smarter, Faster",
];

export default function HeroBanner() {
    const setting = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <section className={styles.heroBanner}>
            <div className={styles.containerMax}>
                <div className={styles.heroBannerinner}>
                    <div className={styles.heroBannerbottom}>
                        <Image src={bannerBottomLines} alt="bannerBottomLines" />
                    </div>
                    <div className={styles.heroBannerLineRight}>
                        <Image src={rightLayer} alt="rightLayer" />
                    </div>
                    <div className={styles.heroBannerLineLeft}>
                        <Image src={leftLayer} alt="leftLayer" />
                    </div>
                    <div className={styles.heroBannerDetail}>
                        <div className={styles.headingBatch}>
                            <button type="button" >
                                <Image src={buttonFx} alt="buttonFx" />
                                <span>Forex Trading Simplified</span>
                            </button>
                        </div>
                        <Slider {...setting}>
                            {sliderContent.map((text, index) => (
                                <div key={index} className={styles.heroBannerDetailHead}>
                                    <h2>{text}</h2>
                                </div>
                            ))}
                        </Slider>
                        <p>Streamline your client management and enhance efficiency with our tailored CRM solutions. Designed specifically for Forex brokers to help you stay organized and boost performance.</p>
                        <div className={styles.contactButton2}>
                            <button><span>Get Started</span><ArrowSmallRight /></button>
                            <button><span>Try For Free</span><ArrowSmallRight /></button>
                        </div>
                    </div>
                    {/* <div className={styles.heroBannerImg}>
                        <Image src={heroBanner} alt="heroBanner" />
                    </div> */}
                    <div className={styles.sliderMain}>
                        <div className={styles.sliderContainer}>
                            <Slider {...settings}>
                                <div>
                                    <Image src={heroBanner} alt="heroBanner" />
                                </div>
                                <div>
                                    <Image src={heroBanner2} alt="heroBanner2" />
                                </div>
                                <div>
                                    <Image src={heroBanner3} alt="heroBanner3" />
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
