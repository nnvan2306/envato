import "./Save.css";
import s1 from "../../assets/save/s1.jpg";
import s2 from "../../assets/save/s2.jpg";
import s3 from "../../assets/save/s3.png";

const Save = () => {
    const products = [
        {
            logo: s1,
            logoColor: "#4682B4",
            title: "WPBakery Page Builder",
            price: "Save $74",
            features: [
                "Full Version Included",
                "Unlimited design options",
                "Easy to use, no coding",
                "Fast & Easy",
            ],
        },
        {
            logo: s2,
            logoColor: "#D32F2F",
            title: "Slider Revolution",
            price: "Save $109",
            features: [
                "Full Version Included",
                "Powerful visual editor",
                "Advanced Animations",
                "For Sliders, Headers and more",
            ],
        },
        {
            logo: s3,
            logoColor: "#1A1A1A",
            title: "Wolf Page Builder Extension",
            price: "Exclusive",
            features: [
                "Only Available with our Themes",
                "Extends WPBakery Page Builder",
                "Adds Tons of Elements and Options",
            ],
        },
    ];
    return (
        <div className="discography-container">
            <div className="header-section">
                <h1 className="main-title">Save Money</h1>
                <h2 className="subtitle">$90 of Premium Plugin Included</h2>
                <p className="description">
                    Includes WPBakery Page Builder and Slider Revolution premium
                    plugins. Save money and start building your website using
                    the best tools available on the market today.
                </p>
            </div>

            <div className="products-grid">
                {products.map((product, index) => (
                    <div className="product-card" key={index}>
                        <div className="logo-container">
                            <img alt="save" src={product.logo} />
                        </div>
                        <h3 className="product-title">{product.title}</h3>
                        <div className="price-tag">{product.price}</div>
                        <ul className="features-list">
                            {product.features.map((feature, index) => (
                                <li key={index} className="feature-item">
                                    <span className="feature-bullet">●</span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Save;
