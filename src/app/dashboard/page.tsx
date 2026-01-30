import React from 'react';
import Sidebar from '@/components/Dashboard/Sidebar';
import DashboardHeader from '@/components/Dashboard/DashboardHeader';
import StatCard from '@/components/Dashboard/StatCard';
import ArticleCard from '@/components/Dashboard/ArticleCard';
import Footer from '@/components/Footer/Footer'; // Dashboard specific footer? Mockup shows normal footer.
import { Globe, TrendingUp, TrendingDown, DollarSign } from 'lucide-react';
import styles from './page.module.css';

const Dashboard = () => {
    // Mock data for articles
    const articles = [
        "/5F0A5170.jpg",
        "/5F0A5172.jpg",
        "/5F0A5174.jpg",
        "/5F0A5181.jpg"
    ];

    return (
        <div className={styles.layout}>
            <Sidebar />
            <main className={styles.mainContent}>
                <DashboardHeader />
                <div className={styles.scrollableContent}>
                    {/* Welcome Banner */}
                    <div className={styles.welcomeBanner}>
                        <h2 className={styles.welcomeTitle}>Hello John</h2>
                        <p className={styles.welcomeText}>Welcome back to your Dashboard</p>
                    </div>

                    {/* Overview Section */}
                    <div className={styles.overviewSection}>
                        <div className={styles.overviewContent}>
                            <h3 className={styles.sectionTitle}>Overview</h3>
                            <div className={styles.statsGrid}>
                                <StatCard 
                                    label="GDP" 
                                    value="€1.7 MILLION" 
                                    icon={<Globe size={32} color="#000" />} 
                                />
                                <StatCard 
                                    label="FDI" 
                                    value="€1.7 MILLION" 
                                    icon={<DollarSign size={32} color="#000" />} 
                                />
                                <StatCard 
                                    label="Inflation" 
                                    value="€1.7 MILLION" 
                                    icon={<TrendingDown size={32} color="#000" />} 
                                />
                                <StatCard 
                                    label="Interest Rate" 
                                    value="€1.7 MILLION" 
                                    icon={<TrendingUp size={32} color="#000" />} 
                                />
                            </div>
                        </div>
                    </div>

                    {/* News & Articles */}
                    <div className={styles.newsSection}>
                        <h3 className={styles.newsTitle}>News & Articles</h3>
                        <div className={styles.articlesGrid}>
                            {articles.map((img, idx) => (
                                <ArticleCard key={idx} image={img} />
                            ))}
                        </div>
                    </div>
                </div>
                 {/* Footer might need to be outside scrollable content or inside. Mockup shows full blue footer. */}
                 {/* Reusing existing Footer but typically dashboard footer is minimal. Let's include it for now. */}
                 <div style={{marginTop: 'auto'}}>
                    <Footer />
                 </div>
            </main>
        </div>
    );
};

export default Dashboard;
