import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../store/counterSlice';
import { RootState } from '../store';
import { AppDispatch } from '../store';
import { FC } from 'react';

interface Styles {
  container: React.CSSProperties;
  logoContainer: React.CSSProperties;
  logo: React.CSSProperties;
  reduxLogo: React.CSSProperties;
  logoLink: React.CSSProperties;
  countContainer: React.CSSProperties;
  heading: React.CSSProperties;
  button: React.CSSProperties;
}

const styles: Styles = {
  container: {
    textAlign: 'center' as const,
    padding: '2rem',
    marginTop: '30vh',
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '2rem',
    marginBottom: '2rem',
  },
  logo: {
    height: '8rem',
    transition: 'filter 0.3s ease',
    display: 'block',
  },
  reduxLogo: {
    height: '9.5rem',
    transition: 'filter 0.3s ease',
    display: 'block',
  },
  logoLink: {
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  countContainer: {
    marginTop: '2rem',
  },
  heading: {
    marginBottom: '2rem',
  },
  button: {
    margin: '0 0.5rem',
    padding: '0.5rem 1rem',
    border: '2px solid transparent',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'border-color 0.3s ease',
    ':hover': {
      borderColor: '#ff69b4',
    }
  },
};

const animationVariants = {
  rotateY: {
    animate: { rotateY: 360 },
    transition: { duration: 2, repeat: Infinity, ease: "linear" }
  },
  rotate: {
    animate: { rotate: 360 },
    transition: { duration: 4, repeat: Infinity, ease: "linear" }
  },
  vibrate: {
    animate: {
      x: [-2, 2, -2],
      y: [-1, 1, -1],
    },
    transition: {
      duration: 0.3,
      repeat: Infinity,
      ease: "linear"
    }
  }
} as const;

const logoHoverVariants = {
  initial: {
    filter: 'drop-shadow(0 0 0px rgba(128, 0, 128, 0))',
    cursor: 'pointer'
  },
  hover: {
    filter: 'drop-shadow(0 0 10px rgba(128, 0, 128, 0.8))',
    cursor: 'pointer'
  }
};

const buttonHoverVariants = {
  initial: {
    border: '2px solid transparent',
    cursor: 'pointer',
    boxShadow: '0 2px 8px rgba(128, 0, 128, 0.3)',
  },
  hover: {
    border: '2px solid #ff69b4',
    cursor: 'pointer',
    boxShadow: '0 6px 8px rgba(128, 0, 128, 0.3)',
  }
};

const HomePage: FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch: AppDispatch = useDispatch();

  const handleIncrement = () => {
    try {
      dispatch(increment());
    } catch (error) {
      console.error('Failed to increment:', error);
    }
  };

  const handleDecrement = () => {
    try {
      dispatch(decrement());
    } catch (error) {
      console.error('Failed to decrement:', error);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.logoContainer}>
        <motion.a
          href="https://vitejs.dev"
          target="_blank"
          rel="noopener noreferrer"
          {...animationVariants.rotateY}
          initial="initial"
          whileHover="hover"
          variants={logoHoverVariants}
          style={styles.logoLink}
        >
          <img
            src="https://vitejs.dev/logo.svg"
            alt="Vite logo"
            style={styles.logo}
          />
        </motion.a>
        <motion.a
          href="https://react.dev"
          target="_blank"
          rel="noopener noreferrer"
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          initial="initial"
          whileHover="hover"
          variants={logoHoverVariants}
          style={styles.logoLink}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            alt="React logo"
            style={styles.logo}
          />
        </motion.a>
        <motion.a
          href="https://redux.js.org"
          target="_blank"
          rel="noopener noreferrer"
          {...animationVariants.vibrate}
          initial="initial"
          whileHover="hover"
          variants={logoHoverVariants}
          style={styles.logoLink}
        >
          <img
            src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.svg"
            alt="Redux logo"
            style={styles.reduxLogo}
          />
        </motion.a>
      </div>
      <div style={styles.countContainer}>
        <h2 style={styles.heading}>Count: {count}</h2>
        <motion.button
          onClick={handleDecrement}
          style={styles.button}
          aria-label="Decrement counter"
          initial="initial"
          whileHover="hover"
          variants={buttonHoverVariants}
        >
          Decrement
        </motion.button>
        <motion.button
          onClick={handleIncrement}
          style={styles.button}
          aria-label="Increment counter"
          initial="initial"
          whileHover="hover"
          variants={buttonHoverVariants}
        >
          Increment
        </motion.button>
      </div>
    </div>
  );
};

export default HomePage;
