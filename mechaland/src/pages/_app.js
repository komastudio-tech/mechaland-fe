import '../../styles/globals.css'
// import "bootstrap/dist/css/bootstrap.css";
import LoadingPage from '../layouts/LoadingPage';
import Layout from '../layouts/Layout/Index.js';
import styles from "../../styles/Home.module.css";
import { useState, useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    let load = setTimeout(() => {
      handleLoadFinish();
    }, [3000]);
  }, []);

  const handleLoadFinish = () => {
    setTimeout(() => {
      setShowLoading(false);
    }, [300]);
  }

  return (
    <div className={styles.container}>
      { showLoading ? 
        <LoadingPage />
        :
        <Layout>
          <Component {...pageProps} />
        </Layout>
      }
    </div>
  )
}

export default MyApp
