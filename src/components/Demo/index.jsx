import "./Demo.css";
const Demo = () => {
    const steps = [
        {
            id: 1,
            icon: (
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="step-icon"
                >
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <polyline points="7.5,8 12,11 16.5,8" />
                    <polyline points="12,11 12,21" />
                </svg>
            ),
            title: "INSTALL HERION",
        },
        {
            id: 2,
            icon: (
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="step-icon"
                >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7,10 12,15 17,10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
            ),
            title: "IMPORT DEMO CONTENT",
        },
        {
            id: 3,
            icon: (
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="step-icon"
                >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
            ),
            title: "HAVE FUN!",
        },
    ];

    return (
        <div className="demo-import-container">
            <div className="content-wrapper">
                <div className="left-section">
                    <h1 className="main-title">Demo Import</h1>
                    <h2 className="subtitle">ONE-CLICK DEMO INSTALL</h2>
                    <p className="description">
                        Herion includes a One-Click Demo Importer, to allow you
                        to import the demo content easily. It is the cool way to
                        set up your theme in a couple of minutes from this
                        starting point.
                    </p>
                    <button className="cta-button">GET YOUR COPY</button>
                </div>

                <div className="right-section">
                    <div className="steps-timeline">
                        {steps.map((step, index) => (
                            <div key={step.id} className="step-item">
                                <div className="step-circle">{step.icon}</div>
                                <div className="step-content">
                                    <h3 className="step-title">{step.title}</h3>
                                </div>
                                {index < steps.length - 1 && (
                                    <div className="step-line"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Demo;
