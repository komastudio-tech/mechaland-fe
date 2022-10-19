import {SEO} from '../../components';
import { useState, useEffect, useRef } from 'react';
import styles from "../../../styles/Home.module.css";

const LoadingPage = () => {

	return (
		<>
			<SEO title="Mechaland" />

      <div style={{ paddingTop: '38vh' }}>
        <div className="spinner-border" role="status" style={{width: '10vw', height: '10vw', color: '#44564B', display: 'block', margin: 'auto', maxWidth: '100vw', maxHeight: '100vh'}}>
          {/* <span className="sr-only">Loading...</span> */}
        </div>
      </div>
      
		</>
	);
}
export default LoadingPage