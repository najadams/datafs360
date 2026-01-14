import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Youtube, Linkedin, Phone } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
    // Generate dummy links for the 3 columns
  const dummyLinks = Array(5).fill("Lorem ipsum");

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.mainContent}`}>
        <div className={styles.brandColumn}>
           <Link href="/">
                {/* Same logo SVG as Navbar but maybe different size/color if needed */}
                <svg width="150" height="40" viewBox="0 0 150 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <text x="0" y="28" fill="#1C2B4B" fontSize="24" fontWeight="bold" fontFamily="var(--font-outfit)">DataF360</text>
                     <path d="M130 10 C 135 5, 145 5, 150 10" stroke="#1C2B4B" strokeWidth="3" fill="none"/>
                    <path d="M125 18 C 135 8, 155 8, 155 25" stroke="#1C2B4B" strokeWidth="3" fill="none"/>
                     <circle cx="140" cy="20" r="2" fill="#0099FF"/>
                </svg>
            </Link>
        </div>

        <div className={styles.linkColumns}>
            <div className={styles.column}>
                {dummyLinks.map((link, i) => (
                    <Link key={i} href="#" className={styles.footerLink}>{link}</Link>
                ))}
            </div>
             <div className={styles.column}>
                {dummyLinks.map((link, i) => (
                    <Link key={i} href="#" className={styles.footerLink}>{link}</Link>
                ))}
            </div>
             <div className={styles.column}>
                {dummyLinks.map((link, i) => (
                    <Link key={i} href="#" className={styles.footerLink}>{link}</Link>
                ))}
            </div>
        </div>

        <div className={styles.contactColumn}>
            <p className={styles.contactLabel}>Connect With Us Via Social Media</p>
            <div className={styles.socialIcons}>
                <Facebook size={24} className={styles.socialIcon} strokeWidth={1.5} />
                <Instagram size={24} className={styles.socialIcon} strokeWidth={1.5} />
                 {/* Using 'X' icon logic requires lucide-react updates, stick to Twitter for now or simple circle */}
                 <div className={styles.socialIcon} style={{display:'flex', alignItems:'center', justifyContent:'center', border: '1.5px solid currentColor', borderRadius:'50%', width:24, height:24, fontSize: 14}}>X</div>
                <Youtube size={24} className={styles.socialIcon} strokeWidth={1.5} />
                <Linkedin size={24} className={styles.socialIcon} strokeWidth={1.5} />
            </div>

            <p className={styles.contactLabel}>Contact Us Via Phone</p>
            <div className={styles.phoneBlock}>
                <Phone size={20} fill="#999" stroke="none" />
                <span>+233 XXXXXXXXXXXXXXX</span>
            </div>
        </div>
      </div>
      
      <div className="container">
          <div className={styles.bottomBar}>
               <p>ACOPYRIGHT © 2024 DATAF360. ALL RIGHTS RESERVED.</p>
               <div className={styles.bottomLinks}>
                   <Link href="#">PRIVACY POLICY</Link>
                   <Link href="#">PRIVACY POLICY</Link>
                   <Link href="#">PRIVACY POLICY</Link>
               </div>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
