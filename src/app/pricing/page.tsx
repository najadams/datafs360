import React from 'react';
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { CheckSquare, Download, Calendar, User } from 'lucide-react';
import styles from './page.module.css';

const Pricing = () => {
  const plans = [
    {
      name: "Free Trial",
      price: "$0",
      period: "/month",
      btnText: "Get Started",
      features: [
        "Explore import and export data snapshots (2020)e Offer",
        "Browse company directory samples",
        "Review selected product prices",
        "Access sample macroeconomic indicators (GDP, inflation, interest & exchange rates)"
      ],
      info: [
        { icon: <Download size={14} />, text: "0" },
        { icon: <Calendar size={14} />, text: "30 days" },
        { icon: <User size={14} />, text: "1" }
      ]
    },
    {
      name: "Basic",
      price: "$499",
      period: "/year",
      btnText: "Get Started",
      features: [
        "Track import and export trends across Africa",
        "Find potential trade partners via the company directory",
        "Monitor product prices for smarter market entry",
        "Access core economic indicators (GDP, inflation, interest & exchange rates)"
      ],
      info: [
        { icon: <Download size={14} />, text: "5,000 per month" },
        { icon: <Calendar size={14} />, text: "1 year" },
        { icon: <User size={14} />, text: "1" }
      ]
    },
    {
      name: "Standard",
      price: "$799",
      period: "/year",
      popular: true,
      btnText: "Get Started",
      features: [
        "Track and compare import/export flows over multiple years",
        "Build B2B connections with verified company directory access",
        "Monitor price shifts for over 1,000 FMCG products",
        "Access multi-year economic insights for stronger market analysis"
      ],
      info: [
        { icon: <Download size={14} />, text: "10,000 per month" },
        { icon: <Calendar size={14} />, text: "2 years" },
        { icon: <User size={14} />, text: "1" }
      ]
    }
  ];

  const premiumPlans = [
      {
        name: "Premium",
        price: "$999",
        period: "/year",
        btnText: "Get Started",
        isOrangeBtn: true,
        features: [
          "Unlock comprehensive trade data (imports + exports)",
          "Full access to company directory for industry-specific contacts",
          "Benchmark prices across FMCG categories with 5-year coverage",
          "Analyze economic shifts with extended historical data"
        ],
        info: [
          { icon: <Download size={14} />, text: "20,000 per month" },
          { icon: <Calendar size={14} />, text: "5 years" },
          { icon: <User size={14} />, text: "2" }
        ]
      },
      {
        name: "Tailored Option",
        customTitle: "Custom",
        btnText: "Get Started",
        isOrangeBtn: true,
        features: [
          "Unlimited imports/exports data coverage",
          "Expanded company directory with importer & exporter lists",
          "Benchmark FMCG product prices across multiple countries",
          "Full access to GDP, FDI, inflation, interest, and exchange rate data"
        ],
        info: [
          { icon: <Download size={14} />, text: "100,000/month" },
          { icon: <Calendar size={14} />, text: "Unlimited" },
          { icon: <User size={14} />, text: "5-10" }
        ]
      }
  ];

  return (
    <>
      <Navbar />
      <main className={styles.pricingSection}>
        <div className="container">
          <header className={styles.header}>
            <h1 className={styles.title}>PRICING</h1>
            <p className={styles.subtitle}>
              Don’t let a lack of data slow your business down. Our pricing plans are built to give you instant access to Africa’s most reliable trade, pricing, and economic insights. Start free, upgrade as you grow, and stay ahead with the competitive edge only DataF360 can deliver.
            </p>
          </header>

          <div className={styles.grid}>
            {plans.map((plan, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.planName}>
                    {plan.name}
                    {plan.popular && <span className={styles.mostPopular}>(Most Popular)</span>}
                </div>
                <div className={styles.priceContainer}>
                  <div className={styles.amount}>{plan.price}</div>
                  <div className={styles.period}>{plan.period}</div>
                </div>

                <button className={styles.ctaBtn}>{plan.btnText}</button>
                <div style={{fontSize: '12px', marginBottom: '16px', opacity: 0.8}}>Includes:</div>

                <ul className={styles.featuresList}>
                  {plan.features.map((feature, i) => (
                    <li key={i} className={styles.featureItem}>
                      <div className={styles.checkIcon}>
                        <CheckSquare size={16} />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className={styles.footerInfo}>
                    {plan.info.map((item, i) => (
                        <div key={i} className={styles.infoRow}>
                            {item.icon} {item.text}
                        </div>
                    ))}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.premiumGrid}>
            {premiumPlans.map((plan, index) => (
                <div key={index} className={styles.card}>
                    <div className={styles.planName}>{plan.name}</div>
                    
                    <div className={styles.priceContainer}>
                        {plan.customTitle ? (
                             <div className={styles.customPrice}>{plan.customTitle}</div>
                        ) : (
                            <>
                                <div className={styles.amount}>{plan.price}</div>
                                <div className={styles.period}>{plan.period}</div>
                            </>
                        )}
                    </div>

                    <button className={`${styles.ctaBtn} ${plan.isOrangeBtn ? styles.orange : ''}`}>{plan.btnText}</button>
                     <div style={{fontSize: '12px', marginBottom: '16px', opacity: 0.8}}>Includes:</div>

                    <ul className={styles.featuresList}>
                    {plan.features.map((feature, i) => (
                        <li key={i} className={styles.featureItem}>
                        <div className={styles.checkIcon}>
                            <CheckSquare size={16} />
                        </div>
                        {feature}
                        </li>
                    ))}
                    </ul>

                    <div className={styles.footerInfo}>
                        {plan.info.map((item, i) => (
                            <div key={i} className={styles.infoRow}>
                                {item.icon} {item.text}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Pricing;
