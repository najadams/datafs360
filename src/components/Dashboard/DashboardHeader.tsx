import React from 'react';
import { Mail, Bell, ChevronDown } from 'lucide-react';
import styles from './DashboardHeader.module.css';

const DashboardHeader = () => {
    // Helper to format date like "Monday 20th, 2025"
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', day: 'numeric', year: 'numeric' };
    const dateString = today.toLocaleDateString('en-US', options); 

    // Manual insertion of "th", "st", "nd", "rd" - keeping it simple for now or just using standard date
    // For specific "Monday 20th, 2025" format:
    const day = today.getDate();
    const suffix = ["th", "st", "nd", "rd"][((day % 100) - 20) % 10] || ["th", "st", "nd", "rd"][day % 10] || "th";
    
    // Constructing date string manually to match mockup "Monday 20th, 2025"
    const weekday = today.toLocaleDateString('en-US', { weekday: 'long' });
    const year = today.getFullYear();
    const formattedDate = `${weekday} ${day}${suffix}, ${year}`;

    return (
        <header className={styles.header}>
            <div className={styles.titleSection}>
                <h1 className={styles.pageTitle}>Dashboard</h1>
                <p className={styles.date}>{formattedDate}</p>
            </div>

            <div className={styles.actions}>
                <button className={styles.iconButton}>
                     <Mail size={20} />
                </button>
                <button className={styles.iconButton}>
                     <Bell size={20} />
                </button>
                <div className={styles.userProfile}>
                    <img src="/5F0A6020.jpg" alt="Profile" className={styles.userImage} />
                </div>
                 <ChevronDown size={16} color="#666" />
            </div>
        </header>
    );
};

export default DashboardHeader;
