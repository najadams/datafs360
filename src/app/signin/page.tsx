"use client";
import React, { useState } from 'react';
import Navbar from "@/components/Navbar/Navbar";
import Link from 'next/link';
import styles from './page.module.css';
import { useRouter } from 'next/navigation';

const Signin = () => {
  const router = useRouter();
  // Using one of the new images likely better suited for background
  // If undefined, fallback to the previous unsplash one or just use one of the checked files
  const heroBg = "/5F0A5170.jpg"; 

  const handleLogin = (e: React.FormEvent) => {
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
          
          <h1 className={styles.title}>Welcome Back</h1>
          <p className={styles.subtitle}>Enter your details to access your account</p>
          
          <form className={styles.form} onSubmit={handleLogin}>
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
            
            <button type="submit" className={styles.submitBtn}>
              Sign In
            </button>
          </form>
          
          <div className={styles.footer}>
            Don't have an account? 
            <Link href="/signup" className={styles.link}>
              Sign up
            </Link>
          </div>
        </div>
      </main>
      {/* Footer removed as requested */}
    </>
  );
};

export default Signin;
