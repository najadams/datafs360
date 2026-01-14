import React from 'react';
import Link from 'next/link';
import { ArrowRight, Send, Download, Bookmark } from 'lucide-react';
import styles from './Articles.module.css';

interface ArticlesProps {
  title?: string;
  count?: number;
  id?: string;
}

const Articles = ({ title = "Articles", count = 3, id = "insights" }: ArticlesProps) => {
  const articles = Array.from({ length: count }, (_, i) => i + 1);
  // Placeholder image showing people/market
  const articleImage = "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1000&auto=format&fit=crop";

  return (
    <section className={styles.section} id={id}>
      <div className="container">
        <h2 className={styles.title}>{title}</h2>
        
        <div className={styles.grid}>
          {articles.map((item) => (
            <div key={item} className={styles.card}>
              <img src={articleImage} alt="Article thumbnail" className={styles.cardBg} />
              <div className={styles.overlay}></div>
              
              <span className={styles.category}>Category</span>
              
              <div className={styles.cardContent}>
                <h3 className={styles.articleTitle}>
                  Trends in the Nigerian Beverage Market
                </h3>
                <p className={styles.excerpt}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet mauris parturient magna sit turpis accumsan fermentum. Sed dictum odio nec gravida aliquet id magna.
                </p>
                
                <div className={styles.footer}>
                  <Link href="#" className={styles.readMore}>
                    Read More <ArrowRight size={14} />
                  </Link>
                  
                  <div className={styles.actions}>
                    <button className={styles.iconBtn} aria-label="Share">
                      <Send size={16} />
                    </button>
                    <button className={styles.iconBtn} aria-label="Download">
                      <Download size={16} />
                    </button>
                     <button className={styles.iconBtn} aria-label="Bookmark">
                      <Bookmark size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
