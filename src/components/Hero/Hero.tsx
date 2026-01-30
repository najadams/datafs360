import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from './Hero.module.css';

const Hero = () => {
    // Using a placeholder image that matches the "business/office" vibe
  const bgImage = "/big-hero.jpg";

  return (
    <section className={styles.hero}>
      {/* Background Image using generic img tag for simplicity, or Next Image if preferred */}
      <img src={bgImage} alt="Office background" className={styles.backgroundImage} />
      <div className={styles.overlay}></div>
      
      <div className="container">
        <div className={styles.content}>
          <h1 className={styles.headline}>
            Smarter Decisions Powered by Africa’s Data.
          </h1>
          <p className={styles.subheadline}>
            Discover opportunities, track competitors, and plan your next move with reliable, real-time data. Data Without Barriers.
          </p>
          
          <div className={styles.actions}>
            <Link href="/schedule-demo" className={styles.primaryBtn}>
              Schedule A Demo
              <ArrowRight size={18} />
            </Link>
            
            <Link href="#how-it-works" className={styles.secondaryLink}>
              How It Works
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
