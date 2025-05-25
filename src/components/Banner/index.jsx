import banner from "../../assets/banner.jpg";
import FadeInUpBox from "../FadeInUp/FadeInUp";
import "./Banner.css";

const Banner = () => {
    return (
        <FadeInUpBox duration={0.5} ease={"easeOut"}>
            <section className="banner">
                <div className="banner-content">
                    <div className="banner-text">
                        <div className="">
                            <h1 className="banner-title">
                                Music WordPress Theme
                            </h1>
                            <h2 className="banner-subtitle">
                                DEDICATED TO BANDS, LABELS,
                                <br />
                                FESTIVALS, MUSIC STORE AND
                                <br />
                                MORE...
                            </h2>
                            <p className="banner-description">
                                NO CODING REQUIRED
                            </p>
                            <button className="view-demos-btn">
                                VIEW DEMOS
                            </button>
                        </div>
                    </div>
                    <div className="banner-image">
                        <img src={banner} alt="Guitar player" />
                        <div className="image-overlay"></div>
                    </div>
                </div>
            </section>
        </FadeInUpBox>
    );
};

export default Banner;
