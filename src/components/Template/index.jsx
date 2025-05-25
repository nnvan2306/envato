import "./Template.css";
import t1 from "../../assets/template/main_home.jpg";
import t2 from "../../assets/template/one_page.jpg";
import t3 from "../../assets/template/band_home.jpg";
import t4 from "../../assets/template/home_alt.jpg";
import t5 from "../../assets/template/minimal.jpg";
import t6 from "../../assets/template/dj_event.jpg";
import t7 from "../../assets/template/festival.jpg";
import t8 from "../../assets/template/record_studio.jpg";
import t9 from "../../assets/template/interactive_links.jpg";
import t10 from "../../assets/template/main_home.jpg";
import t11 from "../../assets/template/shop_home.jpg";
import t12 from "../../assets/template/discography_home.jpg";
import t13 from "../../assets/template/videos_home.jpg";
import t14 from "../../assets/template/blog_home.jpg";
import t15 from "../../assets/template/artist_metro.jpg";
import { handleBlank } from "../../helpers/blank";

const template = [
    {
        title: "Main Home",
        image: t1,
        link: "https://preview.wolfthemes.store/herion/",
    },
    {
        title: "One-Page",
        image: t2,
        link: "https://preview.wolfthemes.store/herion/home/one-page/",
    },
    {
        title: "Band Home",
        image: t3,
        link: "https://preview.wolfthemes.store/herion/home/band-home/",
    },
    {
        title: "Home Alt",
        image: t4,
        link: "https://preview.wolfthemes.store/herion/home/home-alt/",
    },
    {
        title: "Minimal",
        image: t5,
        link: "https://preview.wolfthemes.store/herion/home/minimal/",
    },
    {
        title: "DJ/Event",
        image: t6,
        link: "https://preview.wolfthemes.store/herion/home/dj-events/",
    },
    {
        title: "Festival",
        image: t7,
        link: "https://preview.wolfthemes.store/herion/home/festival/",
    },
    {
        title: "Record Studio",
        image: t8,
        link: "https://preview.wolfthemes.store/herion/home/recording-studio/",
    },
    {
        title: "Interactive Links",
        image: t9,
        link: "https://preview.wolfthemes.store/herion/home/interactive-links/",
    },
    {
        title: "Artist Slider",
        image: t10,
        link: "https://preview.wolfthemes.store/herion/home/artist-slider/",
    },
    {
        title: "Shop Home",
        image: t11,
        link: "https://preview.wolfthemes.store/herion/home/shop-home/",
    },
    {
        title: "Discography Home",
        image: t12,
        link: "https://preview.wolfthemes.store/herion/home/discography-home/",
    },
    {
        title: "Videos Home",
        image: t13,
        link: "https://preview.wolfthemes.store/herion/home/videos-home/",
    },
    {
        title: "Blog Home",
        image: t14,
        link: "https://preview.wolfthemes.store/herion/home/blog-home/",
    },
    {
        title: "Artist Metro",
        image: t15,
        link: "https://preview.wolfthemes.store/herion/home/artists-home/",
    },
];

const Template = () => {
    return (
        <div className="form">
            <section className="template-section">
                <h2 className="template-title">
                    {/* <span className="number">15</span>{" "} */}
                    <span className="text">15 Templates</span>
                </h2>
                <p className="template-subtitle">HOMEPAGES</p>
            </section>
            <div className="template">
                <div className="grid">
                    {template.map((item, index) => {
                        return (
                            <div className="card" key={index}>
                                <img
                                    alt="template"
                                    src={item.image}
                                    onClick={() => handleBlank(item.link)}
                                />
                                <p>{item.title}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Template;
