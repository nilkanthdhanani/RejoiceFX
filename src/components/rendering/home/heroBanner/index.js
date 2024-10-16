
import styles from './heroBanner.module.scss'
import Image from "next/image";

import bannerBottomLines from "@/assets/images/svg/bannerBottomLines.svg";
import leftLayer from "@/assets/images/svg/leftLayer.svg";
import rightLayer from "@/assets/images/svg/rightLayer.svg";
import buttonFx from "@/assets/images/svg/buttonFx.svg";
import heroBanner from "@/assets/images/png/heroBanner.png";
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

export default function HeroBanner() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        autoplay: true,
        speed: 3000,
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
                        <Slider {...settings}>
                            <div className={styles.Component}>
                                <h2>Optimize Operations with Our CRM</h2>
                            </div>
                            <div className={styles.Component}>
                                <h2>Obtain Your Forex Broker Licence</h2>
                            </div>
                            <div className={styles.Component}>
                                <h2>Trade Batter, Samrter, Faster</h2>
                            </div>
                            <div className={styles.Component}>
                                <h2>Optimize Operations with Our CRM</h2>
                            </div>
                            <div className={styles.Component}>
                                <h2>Obtain Your Forex Broker Licence</h2>
                            </div>
                            <div className={styles.Component}>
                                <h2>Trade Batter, Samrter, Faster</h2>
                            </div>
                        </Slider>
                        <p>Streamline your client management and enhance efficiency with our tailored CRM solutions. Designed specifically for Forex brokers to help you stay organized and boost performance.</p>
                        <div className={styles.contactButton2}>
                            <button><span>Get Started</span><ArrowSmallRight /></button>
                            <button><span>Try For Free</span><ArrowSmallRight /></button>
                        </div>
                    </div>
                    <div className={styles.heroBannerImg}>
                        <Image src={heroBanner} alt="heroBanner" />
                    </div>
                </div>
            </div>
        </section>
    );
}
