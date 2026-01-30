import React from 'react';
import styles from './ArticleCard.module.css';

interface ArticleCardProps {
    image: string;
    title?: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ image, title }) => {
    return (
        <div className={styles.card}>
            <img src={image} alt={title || "Article"} className={styles.articleImage} />
            {/* Overlay title if needed, mockup shows mostly image covers */}
        </div>
    );
};

export default ArticleCard;
