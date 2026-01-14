"use client";
import React from 'react';
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { Info } from 'lucide-react';
import styles from './page.module.css';

const ScheduleDemo = () => {
  // Image for the hero section background
  const heroBg = "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2670&auto=format&fit=crop";
  // Image for the contact section collage (can simply reuse or use a new one)
  const contactImage = "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1000&auto=format&fit=crop";

  return (
    <>
      <Navbar />
      <main>
        {/* Page Header */}
        <section className={styles.pageHeader}>
          <div className="container">
            <h1 className={styles.headerTitle}>Schedule A Demo</h1>
          </div>
        </section>

        {/* Hero Form Section */}
        <section className={styles.heroSection}>
          <img src={heroBg} alt="Meeting Background" className={styles.heroImage} />
          
          <div className="container" style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}>
            <div className={styles.heroContent}>
              <div className={styles.heroText}>
                <h2 className={styles.heroHeadline}>
                  Lorem Ipsum Dolor Sit Amet Consectetur. Quis Nec Dolor Amet Semper Ornare Vitae Non.
                </h2>
              </div>
              
              <div className={styles.formContainer}>
                <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                  <input type="text" placeholder="First Name" className={styles.input} />
                  <input type="text" placeholder="Last Name" className={styles.input} />
                  <input type="email" placeholder="Email" className={styles.input} />
                  <button type="submit" className={styles.submitBtn}>
                    Schedule a Demo
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Any More Questions / Connect Section */}
        <section className={styles.connectSection}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Any More Questions?</h2>
            
            <div className={styles.connectGrid}>
              <div className={styles.imageGrid}>
                 {/* Visual placeholder for the "image collage" - reusing same image for effect */}
                 <img src={contactImage} alt="Office" className={styles.collageImage} style={{ gridRow: 'span 2', height: '100%' }} />
              </div>

              <div className={styles.connectContent}>
                <h3 className={styles.connectTitle}>Connect With Us</h3>
                
                <div className={styles.contactList}>
                  <div className={styles.contactItem}>
                    <Info size={24} className={styles.infoIcon} />
                    <p>Connect With Us, Connect With Us<br/>Connect With Us</p>
                  </div>
                  <div className={styles.contactItem}>
                    <Info size={24} className={styles.infoIcon} />
                    <p>Connect With Us, Connect With Us<br/>Connect With Us</p>
                  </div>
                  {/* Using generic placeholders as per design image */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ScheduleDemo;
