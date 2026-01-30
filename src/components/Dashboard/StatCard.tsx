import React from 'react';
import styles from './StatCard.module.css';

interface StatCardProps {
    label: string;
    value: string;
    icon: React.ReactNode; // Can be an image or component
}

const StatCard: React.FC<StatCardProps> = ({ label, value, icon }) => {
    return (
        <div className={styles.card}>
            <div className={styles.iconWrapper}>
                {icon}
            </div>
            <div className={styles.content}>
                <span className={styles.label}>{label}</span>
                <span className={styles.value}>{value}</span>
            </div>
        </div>
    );
};

export default StatCard;
