import React, { useState } from "react";
import "./Artist.css";
import { handleBlank } from "../../helpers/blank";
import a1 from "../../assets/artist/a1.jpg";
import a2 from "../../assets/artist/a2.jpg";
import a3 from "../../assets/artist/a3.jpg";
import a4 from "../../assets/artist/a4.jpg";
import a5 from "../../assets/artist/a5.jpg";
import a6 from "../../assets/artist/a6.jpg";
import a7 from "../../assets/artist/a7.jpg";
import a8 from "../../assets/artist/a8.jpg";
import a9 from "../../assets/artist/a9.jpg";
import a10 from "../../assets/artist/a10.jpg";
import a11 from "../../assets/artist/a11.jpg";
import a12 from "../../assets/artist/a12.jpg";

const Artist = () => {
    const [activeTab, setActiveTab] = useState("single");

    const singlePages = [
        {
            title: "Default",
            image: a1,
        },
        {
            title: "Minimal",
            image: a2,
        },
        {
            title: "Dark",
            image: a3,
        },
        {
            title: "Standard Custom Layout",
            image: a4,
        },
        {
            title: "Discography Oriented",
            image: a5,
        },
        {
            title: "Band Oriented",
            image: a6,
        },
    ];

    const listingPages = [
        {
            title: "Standard",
            image: a7,
        },
        {
            title: "Gallery",
            image: a8,
        },
        {
            title: "Label",
            image: a9,
        },
        {
            title: "Masonry",
            image: a10,
        },
        {
            title: "Metro",
            image: a11,
        },
        {
            title: "Carousel",
            image: a12,
        },
    ];

    const currentData = activeTab === "single" ? singlePages : listingPages;

    return (
        <div className="discography-container">
            <div className="header-section">
                <h1 className="main-title">Artist Pages</h1>
                <h2 className="subtitle">Simple or Custom Layouts</h2>
                <p className="description">
                    Herion can be used for your record label website. You can
                    create an unlimited number of pages for each artist and
                    choose between simple default layouts, automatically
                    generated from the release, videos and events artist
                    category, or create a custom page. It’s all up-to-you!
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
                        ARTIST SINGLE PAGES
                    </button>
                    <button
                        className={`tab ${
                            activeTab === "listing" ? "active" : ""
                        }`}
                        onClick={() => setActiveTab("listing")}
                    >
                        ARTIST LISTING
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

            <p className="and-more">and more…</p>
        </div>
    );
};

export default Artist;
