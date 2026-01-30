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
                <img src="/DataF360 (Color).png" alt="DataF360" style={{ height: '40px', width: 'auto' }} />
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
