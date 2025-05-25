import React, { useState } from "react";
import "./Making.css";

const reviews = [
    {
        text: "Love this theme! I'm still working on it and having some questions here and there, but the Customer Support team answers them in a timely manner and explains it clearly. Very helpful for a beginner like me.",
        author: "MMORITAI (KAYO)",
    },
    {
        text: "Customer support is super fast and super nice. It has been a few years since I touched a website so I am dusting off my cobwebs and I am not feeling bad about asking questions! Thanks guys!",
        author: "luckyyy7 (Firemaster)s",
    },
    {
        text: "Haven't even finished my project yet and have already decided that this has to be one of the best themes i've ever had the pleasure of working with. It's delightfully creative and bold in ways no other theme appears to be. Huge kudos for taking the risk and releasing something for a small niche – absolutely amazing work.",
        author: "pduesterdiek (Hyperbent)",
    },
];

const Making = () => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % reviews.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    return (
        <div className="review-slider">
            <div className="review-bg" />

            <h2 className="slogan">
                Making Music Themes Since <span>2011</span>
            </h2>
            <h3 className="review-title">LATEST MUSIC THEME REVIEWS</h3>

            <div className="review-content">
                <p className="review-text">"{reviews[current].text}"</p>
                <p className="review-author">— {reviews[current].author}</p>
            </div>

            <div className="arrows">
                <button className="arrow left" onClick={prevSlide}>
                    ←
                </button>
                <button className="arrow right" onClick={nextSlide}>
                    →
                </button>
            </div>

            <div className="dots">
                {reviews.map((_, i) => (
                    <span
                        key={i}
                        className={`dot ${i === current ? "active" : ""}`}
                        onClick={() => setCurrent(i)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Making;
