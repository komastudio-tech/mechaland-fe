
import '../../styles/globals.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from 'react';
import Layout from '../layouts/Layout/Index.js';
import LoadingPage from '../layouts/LoadingPage';
import styles from "../../styles/Home.module.css";

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

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

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
