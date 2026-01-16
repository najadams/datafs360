"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { UserCircle, Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.navContainer}`}>
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
          <Link href="#contact" className={styles.link}>Contact Us</Link>
        </nav>

        <div className={styles.actionsContainer}>
             <div className={styles.userIcon}>
                 <UserCircle size={43} strokeWidth={1.5} />
            </div>
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
            <Link href="#contact" className={styles.mobileLink} onClick={toggleMobileMenu}>Contact Us</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
