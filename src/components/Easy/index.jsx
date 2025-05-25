import React from "react";
import "./Easy.css";
import easy from "../../assets/easy.png";
const Easy = () => {
    return (
        <div className="easy-wrapper">
            <div className="easy-left">
                <div className="easy-image-box">
                    <img alt="easy" src={easy} />
                </div>
            </div>
            <div className="easy-right">
                <h1 className="easy-title">Easy To Use</h1>
                <h2 className="easy-subtitle">NO CODING REQUIRED</h2>
                <p className="easy-desc">
                    Herion comes with an advanced drag and drop page builder to
                    help you create your website easily and quickly.
                </p>
                <div className="easy-stats">
                    <div className="easy-stat">
                        <div className="easy-number">
                            200<span style={{ color: "#ff6b6b" }}>+</span>
                        </div>
                        <div className="easy-label">DEMO LAYOUTS</div>
                    </div>
                    <div className="easy-stat">
                        <div className="easy-number">
                            110<span style={{ color: "#ff6b6b" }}>+</span>
                        </div>
                        <div className="easy-label">CONTENT ELEMENTS</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Easy;
