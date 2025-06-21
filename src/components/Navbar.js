import React from 'react';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <h2 style={styles.logo}>✈️ TravelNow</h2>
      <div style={styles.menu}>
        <a href="/">Home</a>
        <a href="/packages">Packages</a>
        <a href="/contact">Contact</a>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    backgroundColor: '#0077b6',
    color: 'white',
    flexWrap: 'wrap'
  },
  logo: {
    margin: 0,
  },
  menu: {
    display: 'flex',
    gap: '1rem',
  }
};

export default Navbar;
