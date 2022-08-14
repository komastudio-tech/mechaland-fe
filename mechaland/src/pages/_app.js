import '@/styles/globals.css';
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.css";
import LoadingPage from '@/layouts/LoadingPage';
import Layout from '@/layouts/Layout/Index';
import styles from "@/styles/Home.module.css";
import { ApiProvider } from '@/context/useAPI';
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
    <ApiProvider>
      <div className={styles.container}>
        { showLoading ? 
          <LoadingPage />
          :
          <Layout>
            <Component {...pageProps} />
          </Layout>
        }
      </div>
    </ApiProvider>
  );
}

export default MyApp
