import React, { useEffect, useState } from 'react';

const Home = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    // Simulating API call with static data
    const data = [
      { id: 1, name: 'Goa Beach Trip', price: '₹10,000' },
      { id: 2, name: 'Manali Snow Escape', price: '₹12,500' },
      { id: 3, name: 'Kerala Backwaters', price: '₹9,500' }
    ];
    setPackages(data);
  }, []);

  return (
    <div style={styles.container}>
      <h1>Top Travel Packages</h1>
      <div style={styles.grid}>
        {packages.map(pkg => (
          <div key={pkg.id} style={styles.card}>
            <h3>{pkg.name}</h3>
            <p>{pkg.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
  },
  grid: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
  },
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '1rem',
    minWidth: '200px',
    flex: '1 1 30%',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  }
};

export default Home;
