import React from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './FAQ.module.css';

const FAQ = () => {
  const faqs = [
    {
      question: "What is DataF360 ?",
      answer: "DataF360 is a comprehensive data intelligence platform that empowers businesses with real-time insights, competitor tracking, and market analysis specifically tailored for the African market."
    },
    {
      question: "Lorem ipsum dolor sit amet ?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur. Leo amet risus amet turpis velit nisl ?",
      answer: "Leo amet risus amet turpis velit nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae."
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur. Leo amet risus amet turpis velit nisl ?",
      answer: "Leo amet risus amet turpis velit nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae."
    }
  ];

  return (
    <section className={styles.section} id="faq">
      <div className="container">
        <h2 className={styles.title}>FAQS</h2>
        
        <div className={styles.faqContainer}>
          {faqs.map((faq, index) => (
            <details key={index} className={styles.item}>
              <summary className={styles.question}>
                {faq.question}
                <ChevronDown className={styles.chevron} size={20} color="#0099FF" />
              </summary>
              <div className={styles.answer}>
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
