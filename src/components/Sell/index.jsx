import React, { useState } from "react";
import "./Sell.css";
import s1 from "../../assets/sell/s1.jpg";
import s2 from "../../assets/sell/s2.jpg";
import s3 from "../../assets/sell/s3.jpg";
import s4 from "../../assets/sell/s4.jpg";
import s5 from "../../assets/sell/s5.jpg";
import s6 from "../../assets/sell/s6.jpg";
import s7 from "../../assets/sell/s7.jpg";
import s8 from "../../assets/sell/s8.jpg";
import s9 from "../../assets/sell/s9.jpg";

const Sell = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        [s1, s2, s3],
        [s4, s5, s6],
        [s7, s8, s9],
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const MockupContent = ({ slide }) => (
        <div
            className=""
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            {slide.map((item, index) => {
                return (
                    <img
                        alt="image"
                        src={item}
                        key={index}
                        style={{ width: "400px" }}
                    />
                );
            })}
        </div>
    );

    return (
        <div className="sell-container">
            <div className="header-section">
                <h1 className="main-title">Sell Your Merch</h1>
                <h2 className="subtitle">WooCommerce Shop</h2>
                <p className="description">
                    Sell your merch online using the most powerful and secure
                    e-commerce WordPress theme: WooCommerce. Herion is built to
                    integrates WooCommerce smoothly in its design.
                </p>
            </div>

            <div className="carousel-container">
                <div className="carousel-wrapper">
                    <button
                        className="nav-arrow prev-arrow"
                        onClick={prevSlide}
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <polyline points="15,18 9,12 15,6"></polyline>
                        </svg>
                    </button>

                    <div className="slides-container">
                        <div
                            className="slides-wrapper"
                            style={{
                                transform: `translateX(-${
                                    currentSlide * 100
                                }%)`,
                            }}
                        >
                            {slides.map((slide, index) => (
                                <div key={index} className="slide">
                                    <div className="mockup-frame">
                                        <MockupContent slide={slide} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        className="nav-arrow next-arrow"
                        onClick={nextSlide}
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <polyline points="9,18 15,12 9,6"></polyline>
                        </svg>
                    </button>
                </div>

                <div className="carousel-dots">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            className={`dot ${
                                index === currentSlide ? "active" : ""
                            }`}
                            onClick={() => setCurrentSlide(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sell;
