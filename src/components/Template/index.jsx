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

const template = [
    {
        title: "Main Home",
        image: t1,
    },
    {
        title: "One-Page",
        image: t2,
    },
    {
        title: "Band Home",
        image: t3,
    },
    {
        title: "Home Alt",
        image: t4,
    },
    {
        title: "Minimal",
        image: t5,
    },
    {
        title: "DJ/Event",
        image: t6,
    },
    {
        title: "Festival",
        image: t7,
    },
    {
        title: "Record Studio",
        image: t8,
    },
    {
        title: "Interactive Links",
        image: t9,
    },
    {
        title: "Artist Slider",
        image: t10,
    },
    {
        title: "Shop Home",
        image: t11,
    },
    {
        title: "Discography Home",
        image: t12,
    },
    {
        title: "Videos Home",
        image: t13,
    },
    {
        title: "Blog Home",
        image: t14,
    },
    {
        title: "Artist Metro",
        image: t15,
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
                                <img alt="template" src={item.image} />
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
