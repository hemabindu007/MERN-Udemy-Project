import type { CSSProperties } from 'react';

const styles: Record<string, CSSProperties> = {
  layout: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    color: '#fff',
    textAlign: 'center',
    fontSize: '2.2rem',
    background: 'linear-gradient(90deg,rgba(246,83,39,1) 0%,rgba(147,27,252,.95) 50% , rgba(246,83,39,1) 100%)',
    height: '5rem',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 2.5rem',
    boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
    zIndex: 1000,
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
  },
  image: {
    width: '48px',
    marginRight: '1.2rem',
  },
  title: {
    color: 'white',
    margin: 0,
    fontWeight: 700,
    letterSpacing: '1px',
    fontSize: '2.2rem',
  },
  footer: {
    color: 'white',
    textAlign: 'center',
    background: 'linear-gradient(90deg,rgba(246,83,39,1) 0%,rgba(147,27,252,1) 50% , rgba(246,83,39,1) 100%)',
    padding: '1.2rem 0',
    fontSize: '1.1rem',
    letterSpacing: '0.5px',
    fontWeight: 500,
    boxShadow: '0 -2px 8px rgba(0,0,0,0.07)',
    marginTop: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  }
}

export default styles;