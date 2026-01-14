import React from 'react';
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { Play, TrendingUp, Anchor, Tag, FolderOpen, PieChart, Calculator } from 'lucide-react';
import styles from './page.module.css';

const WhatWeOffer = () => {
    const introImage = "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2670&auto=format&fit=crop";
    const videoImage = "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2670&auto=format&fit=crop";

    const features = [
        {
            icon: <TrendingUp size={32} />,
            title: "Find Market Gaps with Import Data",
            desc: "Spot opportunities before your competitors. See exactly what products are coming into African markets, who is bringing them in, and in what volumes. Track ports of entry, countries of origin, and leading players — giving you the insights to position your business where demand is strong."
        },
        {
            icon: <Anchor size={32} />,
            title: "Expand Globally with Export Data",
            desc: "Identify the right markets for your products. Understand which goods are being exported, by whom, and to where. Explore historical trends and destination countries to guide your export strategy and connect with buyers abroad."
        },
        {
            icon: <Tag size={32} />,
            title: "Set the Right Price with Price Data",
            desc: "Avoid guesswork when entering a new market. Access wholesale and retail prices for over 1,000 FMCG products to understand local purchasing power, track price fluctuations, and align your brand positioning from budget to premium."
        },
        {
            icon: <FolderOpen size={32} />,
            title: "Connect Faster with the Company Directory",
            desc: "Cut through barriers and go straight to decision-makers. Our directory provides verified contacts of C-suite executives and key distributors across industries — enabling quicker B2B partnerships and faster market entry."
        },
        {
            icon: <PieChart size={32} />,
            title: "See the Big Picture with Macroeconomic Data",
            desc: "Evaluate opportunities with context. Access indicators like GDP, FDI, interest rates, and inflation to measure market stability, identify growth potential, and make investment decisions with confidence."
        },
        {
            icon: <Calculator size={32} />,
            title: "Plan Ahead with the Duty Calculator",
            desc: "No more surprises at customs. Instantly calculate applicable import duties, VAT, and other charges by simply entering your HS code and CIF value. Know your true landed cost before you ship."
        }
    ];

    return (
        <>
            <Navbar />
            <main>
                {/* Page Header */}
                <section className={styles.pageHeader}>
                    <div className="container">
                        <h1 className={styles.headerTitle}>WHAT WE OFFER</h1>
                    </div>
                </section>

                {/* Intro Hero Image */}
                <div className="container">
                    <img src={introImage} alt="Data Analysis" className={styles.introHeroImage} />
                </div>

                {/* Content Container (Dashed Border) */}
                <div className={`container ${styles.contentContainer}`}>
                    {/* Intro Text */}
                    <div className={styles.introSection}>
                        <div className={styles.introText}>
                            <p><strong>At DataF360, we solve one of Africa’s most pressing challenges — access to reliable, timely data for decision-making.</strong></p>
                            <br />
                            <p>Across the continent, critical business and economic data remain fragmented:</p>
                            <ul>
                                <li>Many datasets are never collected.</li>
                                <li>Where data exists, it often sits in hard-copy formats or within silos, making aggregation and sharing difficult.</li>
                                <li>Institutional mistrust further hampers access.</li>
                            </ul>
                            <p>The result? Businesses, investors, and policymakers often lack the insights needed to act with confidence.</p>
                            <br />
                            <p>DataF360 changes this by providing a one-stop platform for comprehensive, structured, and ready-to-use data across multiple sectors in Africa. With just a click, you can access import and export flows, product prices, business directories, macroeconomic indicators, and more.</p>
                            <br />
                            <p>Our customizable dashboards allow you to filter, calculate, and visualize insights in seconds — helping you make evidence-based decisions faster than ever.</p>
                            <br />
                            <p>DataF360 is your partner in evidence-driven growth.</p>
                        </div>
                    </div>

                    {/* How It Works */}
                    <div className={styles.howItWorks}>
                        <h2 className={styles.howItWorksTitle}>How It Works</h2>
                        <div className={styles.videoPlaceholder}>
                            <img src={videoImage} alt="Video Thumbnail" className={styles.videoImage} />
                            <div className={styles.playButton}>
                                <Play size={32} fill="currentColor" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="container">
                     <h2 className={styles.featuresTitle}>
                        Here’s how DataF360 helps you win in <br /> Africa’s markets:
                     </h2>
                     <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px', color: '#555', fontSize: '14px', lineHeight: '1.6'}}>
                        Our platform is designed to transform raw numbers into actionable intelligence. Whether you’re exploring new opportunities, analyzing competitors, or entering a fresh market, DataF360 provides the insights you need to act with clarity and confidence.
                     </p>

                     <div className={styles.featuresGrid}>
                        {features.map((feature, index) => (
                            <div key={index} className={styles.featureCard}>
                                <div className={styles.featureHeader}>
                                    <div className={styles.featureIconWrapper}>
                                        {feature.icon}
                                    </div>
                                    <h3 className={styles.featureTitle}>
                                        {feature.title.split(' with ')[0]}
                                        <br />
                                        <span style={{ fontWeight: 400, fontSize: '16px' }}>with {feature.title.split(' with ')[1]}</span>
                                    </h3>
                                </div>
                                <p className={styles.featureDesc}>{feature.desc}</p>
                            </div>
                        ))}
                     </div>
                </div>

            </main>
            <Footer />
        </>
    );
};

export default WhatWeOffer;
