import video from "../../assets/video.mp4";
import "./Integration.css";

const Integration = () => {
    const socialPlatforms = [
        {
            name: "Spotify",
            icon: (
                <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-12 h-12"
                >
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
                </svg>
            ),
        },
        {
            name: "YouTube",
            icon: (
                <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-12 h-12"
                >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
            ),
        },
        {
            name: "Instagram",
            icon: (
                <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-12 h-12"
                >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
            ),
        },
        {
            name: "Bandsintown",
            icon: (
                <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-12 h-12"
                >
                    <path d="M0 0v24h24V0H0zm8 8h8v8H8V8z" />
                    <rect x="10" y="6" width="4" height="2" />
                    <rect x="10" y="16" width="4" height="2" />
                    <rect x="6" y="10" width="2" height="4" />
                    <rect x="16" y="10" width="2" height="4" />
                </svg>
            ),
        },
        {
            name: "Twitter/X",
            icon: (
                <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-12 h-12"
                >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
            ),
        },
        {
            name: "Facebook",
            icon: (
                <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-12 h-12"
                >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
            ),
        },
        {
            name: "More",
            icon: (
                <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-12 h-12"
                >
                    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                </svg>
            ),
        },
    ];

    return (
        <div className="hero-container">
            <video
                className="video-background"
                autoPlay
                muted
                loop
                playsInline
                onError={(e) => {
                    e.target.style.display = "none";
                    document.querySelector(
                        ".animated-background"
                    ).style.display = "block";
                }}
            >
                <source src={video} type="video/mp4" />
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div
                className="animated-background"
                style={{ display: "none" }}
            ></div>

            <div className="overlay"></div>

            <div className="content">
                <div className="text-content">
                    <h1 className="main-title">Social Integration</h1>
                    <h2 className="subtitle">
                        SOCIAL NETWORK & MUSIC PLATFORM ORIENTED
                    </h2>
                    <p className="description">
                        Embed your music and social feeds seamlessly with
                        Herion. Display your media and content directly from
                        Spotify, YouTube, Instagram, Bandsintown, Twitter and
                        more...
                    </p>
                </div>

                <div className="social-icons">
                    {socialPlatforms.map((platform, index) => (
                        <div key={index} className="social-icon">
                            {platform.icon}
                        </div>
                    ))}
                </div>

                <div className="footer-text">and more...</div>
            </div>
        </div>
    );
};

export default Integration;
