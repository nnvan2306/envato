import "./Features.css";

const FeatureCard = ({ icon, title, description }) => (
    <div className="feature-card">
        <div className="icon-container">{icon}</div>
        <h3 className="feature-title">{title}</h3>
        <p className="feature-description">{description}</p>
    </div>
);

const Features = () => {
    const features = [
        {
            icon: (
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                >
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                </svg>
            ),
            title: "ENHANCED PAGE BUILDER",
            description:
                "A boosted version of WPBakery Page Builder included ($74 value) with a clean admin design and a ton of additional elements for musicians.",
        },
        {
            icon: (
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                >
                    <circle cx="12" cy="12" r="3" />
                    <path d="M12 1v6m0 6v6" />
                    <path d="m21 12-6-6-6 6-6-6" />
                </svg>
            ),
            title: "SLIDER REVOLUTION",
            description:
                "Comes with the Revolution Slider plugin included ($109 value). All demo slider templates are included in your theme package.",
        },
        {
            icon: (
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                >
                    <path d="M12 19l7-7 3 3-7 7-3-3z" />
                    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                    <path d="M2 2l7.586 7.586" />
                    <circle cx="11" cy="11" r="2" />
                </svg>
            ),
            title: "LIVE CUSTOMIZER",
            description:
                "No more bloated theme options panels. Change the main appearance of your website and see the changes instantly in the live preview.",
        },
        {
            icon: (
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                >
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <path d="M7.5 4.21l4.5 2.6 4.5-2.6" />
                    <path d="M7.5 19.79V14.6L3 12" />
                    <path d="M21 12l-4.5 2.6v5.19" />
                    <path d="M3.27 6.96L12 12.01l8.73-5.05" />
                    <path d="M12 22.08V12" />
                </svg>
            ),
            title: "ONE-CLICK DEMO INSTALL",
            description:
                "Import the demo data in one click and edit the content to suit your need. The easiest way to create an awesome website quickly.",
        },
        {
            icon: (
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                >
                    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                    <line x1="12" x2="12" y1="19" y2="22" />
                    <line x1="8" x2="16" y1="22" y2="22" />
                </svg>
            ),
            title: "POWER ELITE SUPPORT",
            description:
                "Your theme package comes with 6 months of support included for free! We got a dedicated support forum with a very rich knowledge base and support staff tech guys to help you out.",
        },
        {
            icon: (
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                </svg>
            ),
            title: "LIFETIME FREE UPDATES",
            description:
                "With Herion, you will get lifetime free updates. Updates may contain various theme improvements, bug fixes, and security updates.",
        },
        {
            icon: (
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                </svg>
            ),
            title: "TRANSLATABLE READY",
            description:
                "Translation files are included to translate your site easily with plugins like Loco Translate or create a multilingual website using WPML.",
        },
        {
            icon: (
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                >
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M9 9h6v6H9z" />
                    <path d="M9 3v6" />
                    <path d="M15 9v12" />
                    <path d="M3 9h6" />
                    <path d="M9 15h12" />
                </svg>
            ),
            title: "CHILD THEME INCLUDED",
            description:
                "Herion comes packed with a ready-to-use child theme template in case you want to re-brand the theme for you or your client or if you want to add your own customization.",
        },
        {
            icon: (
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                >
                    <rect width="18" height="7" x="3" y="3" rx="1" />
                    <rect width="9" height="7" x="3" y="14" rx="1" />
                    <rect width="5" height="7" x="16" y="14" rx="1" />
                </svg>
            ),
            title: "CONTENT BLOCKS",
            description:
                "Our integrated Content Block system allows you to create replicable headers, footers and sections of content that can be integrated into your pages.",
        },
        {
            icon: (
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                </svg>
            ),
            title: "SOCIAL MEDIA INTEGRATION",
            description:
                "Integrates content from your favorite social media and music platform directly into your website, so your content is updated right away. Instagram, YouTube, Bandsintown, Spotify, Facebook, MailChimp and more...",
        },
        {
            icon: (
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                >
                    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                    <circle cx="12" cy="13" r="3" />
                </svg>
            ),
            title: "PHOTOS INCLUDED",
            description:
                "Except for disc artworks from the discography used for demo purpose, all photos are included and ready-to-use in your website without any additional license.",
        },
        {
            icon: (
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                </svg>
            ),
            title: "CONTACT FORM 7",
            description:
                "Herion offers support for the most popular contact form plugin. Contact Form 7 is responsive, easy to use and effective.",
        },
    ];

    return (
        <div className="features-container">
            <div className="features-grid">
                {features.map((feature, index) => (
                    <FeatureCard
                        key={index}
                        icon={feature.icon}
                        title={feature.title}
                        description={feature.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default Features;
