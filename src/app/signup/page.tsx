"use client";
import React from 'react';
import Navbar from "@/components/Navbar/Navbar";
// Footer removed
import Link from 'next/link';
import styles from './page.module.css';
import { useRouter } from 'next/navigation';

const Signup = () => {
  const router = useRouter();
  // Using the same background for consistency or arguably a different one from the set
  const heroBg = "/5F0A5170.jpg"; 

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/dashboard');
  };

  return (
    <>
      <Navbar />
      <main className={styles.container}>
        <img src={heroBg} alt="Background" className={styles.backgroundImage} />
        <div className={styles.overlay}></div>
        
        <div className={styles.authCard}>
          <div className={styles.logoSection}>
              <img src="/DataF360 (Color).png" alt="DataF360" className={styles.logoImage} />
          </div>
          
          <h1 className={styles.title}>Create Account</h1>
          <p className={styles.subtitle}>Get started with your free account today</p>
          
          <form className={styles.form} onSubmit={handleSignup}>
            <div className={styles.row}>
                <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>First Name</label>
                <input 
                    type="text" 
                    placeholder="John" 
                    className={styles.input} 
                    required 
                />
                </div>
                <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>Last Name</label>
                <input 
                    type="text" 
                    placeholder="Doe" 
                    className={styles.input} 
                    required 
                />
                </div>
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Email Address</label>
              <input 
                type="email" 
                placeholder="name@company.com" 
                className={styles.input} 
                required 
              />
            </div>
            
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Password</label>
              <input 
                type="password" 
                placeholder="••••••••" 
                className={styles.input} 
                required 
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Confirm Password</label>
              <input 
                type="password" 
                placeholder="••••••••" 
                className={styles.input} 
                required 
              />
            </div>
            
            <button type="submit" className={styles.submitBtn}>
              Create Account
            </button>
          </form>
          
          <div className={styles.footer}>
            Already have an account? 
            <Link href="/signin" className={styles.link}>
              Sign in
            </Link>
          </div>
        </div>
      </main>
      {/* Footer removed */}
    </>
  );
};

export default Signup;
