import React from 'react';

export default function MobileApp() {
  return (
    <div style={styles.container}>
      <h1 style={styles.nameTitle}>Casper Finckelsen</h1>
      <h1 style={styles.title}>3D Portfolio Not Available on Mobile <div style={{color:'#F95738'}}>:(</div></h1>
      <p style={styles.message}>
        I'm currently working on a functional mobile version as well.
        Please visit on a larger device for the full 3D portfolio.
      </p>
      <div style={styles.links}>
        <a href="https://www.linkedin.com/in/casper-finckelsen" target="_blank" rel="noopener noreferrer">
          <img style={styles.mobileLinks} src="./linkedinmobile.png" alt="LinkedIn" />
        </a>
        <a href="mailto:casper@finckelsen.com">
          <img style={styles.mobileLinks} src="./mailmobile.png" alt="Email" />
        </a>
        <a href="https://github.com/finckelsen" target="_blank" rel="noopener noreferrer">
          <img style={styles.mobileLinks} src="./githubmobile.png" alt="GitHub" />
        </a>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: '100vh',
    width: '100%',
    backgroundColor: '#0d0d0d',
    color: '#ffffff',
    display: 'flex',
    flexDirection: 'column',

    alignItems: 'center',
    textAlign: 'center',
    padding: '40px',
    boxSizing: 'border-box',
  },
  title: {
    fontSize: '1.8rem',
    marginBottom: '1rem',

  },
  nameTitle: {
    fontSize: '1.4rem',
    display:'flex',
    flexDirection:'row',
    marginBottom: '20vh',
  },
  message: {
    fontSize: '1rem',
    maxWidth: '400px',
    marginBottom: '2rem',
  },
  links: {
    paddingTop:'5vw',
    display: 'flex',
    gap: '1.5rem',
    fontSize: '2rem',
  },

  mobileLinks: {
    width:'10vw'
  }
};
