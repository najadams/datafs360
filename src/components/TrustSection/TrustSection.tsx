import React from 'react';
import styles from './TrustSection.module.css';

const TrustSection = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <p className={styles.text}>
          Used by global businesses, researchers, investors, and trade professionals
        </p>

        <div className={styles.logos}>
            {/* FIRMUS Logo Placeholder */}
            <div className={styles.logoItem} title="FIRMUS">
                <svg height="30" viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <text x="0" y="22" fill="#333" fontSize="20" fontWeight="bold" fontFamily="sans-serif">FIRMUS</text>
                     <path d="M75 5 L 80 15 L 75 25" stroke="#FF5722" strokeWidth="3" fill="none"/>
                </svg>
            </div>

            {/* Firmus Connect Logo Placeholder */}
            <div className={styles.logoItem} title="Firmus Connect">
                 <svg height="30" viewBox="0 0 160 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="15" r="5" fill="#FF5722"/>
                    <circle cx="22" cy="15" r="5" fill="#1C2B4B"/>
                    <text x="35" y="22" fill="#1C2B4B" fontSize="18" fontWeight="bold" fontFamily="sans-serif">Firmus</text>
                    <text x="95" y="22" fill="#0099FF" fontSize="18" fontWeight="bold" fontFamily="sans-serif">Connect</text>
                </svg>
            </div>

             {/* Swidel Logo Placeholder */}
             <div className={styles.logoItem} title="Swidel">
                <svg height="35" viewBox="0 0 100 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <rect x="0" y="5" width="20" height="20" fill="#000" rx="2" />
                     <path d="M5 10 L 15 10 L 5 20 L 15 20" stroke="white" strokeWidth="2"/>
                    <text x="28" y="24" fill="#000" fontSize="20" fontWeight="bold" fontFamily="sans-serif">Swidel</text>
                     <text x="28" y="34" fill="#666" fontSize="8" fontFamily="sans-serif">Just when you need it</text>
                </svg>
            </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
