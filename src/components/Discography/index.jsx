import React, { useState } from "react";
import "./Discography.css";
import { handleBlank } from "../../helpers/blank";
import d1 from "../../assets/discography/d1.jpg";
import d2 from "../../assets/discography/d2.jpg";
import d3 from "../../assets/discography/d3.jpg";
import d4 from "../../assets/discography/d4.jpg";
import d5 from "../../assets/discography/d5.jpg";
import d6 from "../../assets/discography/d6.jpg";
import d7 from "../../assets/discography/d7.jpg";
import d8 from "../../assets/discography/d8.jpg";
import d9 from "../../assets/discography/d9.jpg";
import d10 from "../../assets/discography/d10.jpg";
import d11 from "../../assets/discography/d11.jpg";
import d12 from "../../assets/discography/d12.jpg";
import d13 from "../../assets/discography/d13.jpg";
import d14 from "../../assets/discography/d14.jpg";
import d15 from "../../assets/discography/d15.jpg";
import d16 from "../../assets/discography/d16.jpg";

const Discography = () => {
    const [activeTab, setActiveTab] = useState("single");

    const singlePages = [
        {
            title: "Info at Right",
            image: d1,
        },
        {
            title: "Info at Left",
            image: d2,
        },
        {
            title: "Wide Width",
            image: d3,
        },
        {
            title: "Custom Header",
            image: d4,
        },
        {
            title: "Custom Layout",
            image: d5,
        },
        {
            title: "Text Oriented",
            image: d6,
        },
        {
            title: "Compact",
            image: d7,
        },
        {
            title: "Minimal",
            image: d8,
        },
    ];

    const listingPages = [
        {
            title: "Standard",
            image: d9,
        },
        {
            title: "Gallery",
            image: d10,
        },
        {
            title: "Label",
            image: d11,
        },
        {
            title: "Broken Grid",
            image: d12,
        },
        {
            title: "Animated Cover",
            image: d13,
        },
        {
            title: "Metro",
            image: d14,
        },
        {
            title: "Filtered",
            image: d15,
        },
        {
            title: "Carousel",
            image: d16,
        },
    ];

    const currentData = activeTab === "single" ? singlePages : listingPages;

    return (
        <div className="discography-container">
            <div className="header-section">
                <h1 className="main-title">Discography</h1>
                <h2 className="subtitle">RELEASE PAGES</h2>
                <p className="description">
                    Single release pages don't have to be boring and all the
                    same! You can use a different layout for each release, and
                    use the page builder template system if you want all release
                    pages with the same custom layout.
                </p>
            </div>

            <div className="tabs-section">
                <div className="tabs">
                    <button
                        className={`tab ${
                            activeTab === "single" ? "active" : ""
                        }`}
                        onClick={() => setActiveTab("single")}
                    >
                        RELEASE SINGLE PAGES
                    </button>
                    <button
                        className={`tab ${
                            activeTab === "listing" ? "active" : ""
                        }`}
                        onClick={() => setActiveTab("listing")}
                    >
                        RELEASE LISTING
                    </button>
                </div>
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

export default Discography;
