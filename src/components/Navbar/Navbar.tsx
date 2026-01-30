"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { UserCircle, Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  
  // Mock user state - set to true to test logged in view, false for logged out
  // In a real app, this would come from an auth context or hook
  const user = false; 
  const userProfileImage = "/5F0A6020.jpg"; // Using one of the uploaded images

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`${styles.header} ${!isHomePage ? styles.violetHeader : ''}`}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
            {/* SVG Placeholder for DataF360 Logo based on image */}
            <svg width="150" height="40" viewBox="0 0 150 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.logoSvg}>
                <text x="0" y="28" fill="#1C2B4B" fontSize="24" fontWeight="bold" fontFamily="var(--font-outfit)">DataF360</text>
                <path d="M130 10 C 135 5, 145 5, 150 10" stroke="#1C2B4B" strokeWidth="3" fill="none"/>
                <path d="M125 18 C 135 8, 155 8, 155 25" stroke="#1C2B4B" strokeWidth="3" fill="none"/>
                 <circle cx="140" cy="20" r="2" fill="#0099FF"/>
            </svg>
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.navLinks}>
          <Link href="/what-we-offer" className={styles.link}>What We Offer</Link>
          <Link href="/pricing" className={styles.link}>Pricing</Link>
          <Link href="/insights" className={styles.link}>Insights</Link>
          <Link href="/contact" className={styles.link}>Contact Us</Link>
        </nav>

        <div className={styles.actionsContainer}>
           {user ? (
               <div className={styles.profileImageContainer}>
                   <img src={userProfileImage} alt="Profile" className={styles.profileImage} />
               </div>
           ) : (
               <div className={styles.authButtons}>
                   <Link href="/signin" className={styles.loginBtn}>Login</Link>
                   <Link href="/signup" className={styles.signupBtn}>SignUp</Link>
               </div>
           )}

            {/* Mobile Menu Toggle */}
            <button className={styles.mobileMenuToggle} onClick={toggleMobileMenu} aria-label="Toggle navigation">
             {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className={styles.mobileMenuOverlay}>
          <nav className={styles.mobileNavLinks}>
            <Link href="/what-we-offer" className={styles.mobileLink} onClick={toggleMobileMenu}>What We Offer</Link>
            <Link href="/pricing" className={styles.mobileLink} onClick={toggleMobileMenu}>Pricing</Link>
            <Link href="/insights" className={styles.mobileLink} onClick={toggleMobileMenu}>Insights</Link>
            <Link href="/contact" className={styles.mobileLink} onClick={toggleMobileMenu}>Contact Us</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
