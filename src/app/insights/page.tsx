import React from 'react';
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Articles from "@/components/Articles/Articles";
import styles from './page.module.css';

export default function Insights() {
    // Placeholder for the hero meeting image
    // Using a different Unsplash image representing "business meeting" or "handshake"
    // that matches the "Smarter decisions" theme.
    const heroImage = "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2670&auto=format&fit=crop";

    return (
        <>
            <Navbar />
            
            <main>
                {/* Page Header */}
                <section className={styles.pageHeader}>
                    <div className="container">
                        <h1 className={styles.headerTitle}>INSIGHTS</h1>
                    </div>
                </section>

                {/* Hero Image */}
                <div className="container">
                    <img src={heroImage} alt="Insights Hero" className={styles.heroImage} />
                </div>

                {/* Articles Section */}
                <Articles title="ARTICLES" count={3} id="articles" />

                {/* Newsletters Section - similar grid layout */}
                <Articles title="NEWSLETTERS" count={6} id="newsletters" />
            </main>

            <Footer />
        </>
    );
}
