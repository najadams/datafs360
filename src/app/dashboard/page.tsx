import React from 'react';
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: 'calc(100vh - 200px)', paddingTop: '100px' }}>
        <div className="container">
          <h1>Dashboard</h1>
          <p>Welcome to your dashboard.</p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Dashboard;
