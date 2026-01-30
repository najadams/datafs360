"use client";
import React from 'react';
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import styles from './page.module.css';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Message sent! (Simulation)");
  };

  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>Get in Touch</h1>
            <p className={styles.subtitle}>
              Have questions about our data solutions? We're here to help you make smarter decisions.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className={styles.contentSection}>
          <div className="container"> {/* Utilizing global container */}
            <div className={styles.grid}>
              {/* Contact Info Column */}
              <div className={styles.infoColumn}>
                <div className={styles.infoBlock}>
                  <h3>Let's start a conversation</h3>
                  <p>
                    Whether you're looking for a demo, have a support question, or just want to see how DataF360 can help your business grow, we're ready to chat.
                  </p>
                </div>

                <div className={styles.contactDetails}>
                    <div className={styles.detailItem}>
                        <div className={styles.iconBox}>
                            <MapPin size={20} />
                        </div>
                        <div>
                            <p style={{fontWeight: 600, marginBottom: 2}}>Headquarters</p>
                            <p style={{fontSize: 14, color: 'var(--gray-text)'}}>123 Innovation Drive, Tech City, TC 90210</p>
                        </div>
                    </div>
                    
                    <div className={styles.detailItem}>
                        <div className={styles.iconBox}>
                            <Mail size={20} />
                        </div>
                        <div>
                            <p style={{fontWeight: 600, marginBottom: 2}}>Email Us</p>
                            <p style={{fontSize: 14, color: 'var(--gray-text)'}}>hello@dataf360.com</p>
                        </div>
                    </div>

                    <div className={styles.detailItem}>
                        <div className={styles.iconBox}>
                            <Phone size={20} />
                        </div>
                        <div>
                            <p style={{fontWeight: 600, marginBottom: 2}}>Call Us</p>
                            <p style={{fontSize: 14, color: 'var(--gray-text)'}}>+1 (555) 123-4567</p>
                        </div>
                    </div>
                </div>
              </div>

              {/* Contact Form Column */}
              <div className={styles.formCard}>
                <h3 className={styles.formTitle}>Send us a message</h3>
                <form className={styles.form} onSubmit={handleSubmit}>
                  <div className={styles.inputGroup}>
                    <label className={styles.label}>Full Name</label>
                    <input type="text" className={styles.input} placeholder="John Doe" required />
                  </div>
                  
                  <div className={styles.inputGroup}>
                    <label className={styles.label}>Email Address</label>
                    <input type="email" className={styles.input} placeholder="john@company.com" required />
                  </div>
                  
                  <div className={styles.inputGroup}>
                    <label className={styles.label}>Message</label>
                    <textarea className={styles.textarea} placeholder="How can we help you?" required></textarea>
                  </div>
                  
                  <button type="submit" className={styles.submitBtn}>Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
