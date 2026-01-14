"use client";
import React from 'react';
import styles from './Newsletter.module.css';

const Newsletter = () => {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.contentWrapper}`}>
        <div className={styles.textContent}>
          <h2 className={styles.title}>
            Subscribe to our Monthly Newsletter
          </h2>
        </div>
        
        <div className={styles.formContent}>
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <input 
              type="text" 
              placeholder="First Name" 
              className={styles.input} 
              aria-label="First Name"
            />
            <input 
              type="text" 
              placeholder="Last Name" 
              className={styles.input} 
              aria-label="Last Name"
            />
            <input 
              type="email" 
              placeholder="Email" 
              className={styles.input} 
              aria-label="Email"
            />
            <button type="submit" className={styles.submitBtn}>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
