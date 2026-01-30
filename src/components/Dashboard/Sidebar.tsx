import React from 'react';
import Link from 'next/link';
import styles from './Sidebar.module.css';

const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.logo}>
                 <img src="/DataF360 (Color).png" alt="DataF360" className={styles.logoImage} />
            </div>

            <nav>
                <h3 className={styles.menuTitle}>Dashboard</h3>
                <div className={styles.navList}>
                    <Link href="/dashboard" className={styles.navItem}>Dashboard</Link>
                    <Link href="/dashboard/import-data" className={styles.navItem}>Import Data</Link>
                    <Link href="/dashboard/export-data" className={styles.navItem}>Export Data</Link>
                    <Link href="/dashboard/price-data" className={styles.navItem}>Price Data</Link>
                    <Link href="/dashboard/company-directory" className={styles.navItem}>Company Directory</Link>
                    <Link href="/dashboard/duty-calculator" className={styles.navItem}>Duty Calculator</Link>
                </div>
            </nav>
        </aside>
    );
};

export default Sidebar;
