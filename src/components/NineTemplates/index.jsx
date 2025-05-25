import React from "react";
import "./NineTemplates.css";
import { handleBlank } from "../../helpers/blank";
import i1 from "../../assets/inner_pages/i1.jpg";
import i2 from "../../assets/inner_pages/i2.jpg";
import i3 from "../../assets/inner_pages/i3.jpg";
import i4 from "../../assets/inner_pages/i4.jpg";
import i5 from "../../assets/inner_pages/i5.jpg";
import i6 from "../../assets/inner_pages/i6.jpg";
import i7 from "../../assets/inner_pages/i7.jpg";
import i8 from "../../assets/inner_pages/i8.jpg";
import i9 from "../../assets/inner_pages/i9.jpg";

const NineTemplates = () => {
    const currentData = [
        {
            title: "About Us",
            image: i1,
        },
        {
            title: "About the Band",
            image: i2,
        },
        {
            title: "About Me",
            image: i3,
        },
        {
            title: "Our Team",
            image: i4,
        },
        {
            title: "What We Do",
            image: i5,
        },
        {
            title: "Get In Touch",
            image: i6,
        },
        {
            title: "Contact Us",
            image: i7,
        },
        {
            title: "Coming Soon",
            image: i8,
        },
        {
            title: "Maintenance",
            image: i9,
        },
    ];

    return (
        <div className="discography-container">
            <div className="header-section">
                <h1 className="main-title">9 Templates</h1>
                <h2 className="subtitle">Inner Pages</h2>
                <p className="description">
                    We also created pre-made inner page layouts to make your
                    life easier and allows you to put your site online as
                    quickly as possible.
                </p>
            </div>

            <div className="template">
                <div className="grid">
                    {currentData.map((item, index) => (
                        <div className="card" key={index}>
                            <img
                                alt="template"
                                src={item.image}
                                onClick={() => handleBlank(item?.link || "")}
                            />
                            <p>{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NineTemplates;
