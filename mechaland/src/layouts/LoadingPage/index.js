import {SEO} from '../../components';
import styles from "../../../styles/Home.module.css";
import { useState, useEffect, useRef } from 'react';

// function useInterval(callback, delay) {
//   const savedCallback = useRef();

//   // Remember the latest callback.
//   useEffect(() => {
//     savedCallback.current = callback;
//   }, [callback]);

//   // Set up the interval.
//   useEffect(() => {
//     let id = setInterval(() => {
//       savedCallback.current();
//     }, delay);
//     return () => clearInterval(id);
//   }, [delay]);
// }

const LoadingPage = () => {
  // const [counter, setCounter] = useState(0);

	// useInterval(() => {
  //   if (counter >= 6) {
  //     setCounter(0);
  //   } else {
  //     setCounter(counter + 1);
  //   }
  // }, 500);

	return (
		<>
			<SEO title="Mechaland" />
      {/* <img src={counter == 0 ? "/common/assets/syklikLogo/0.png" : counter == 1 ? "/common/assets/syklikLogo/1.png" : counter == 2 ? "/common/assets/syklikLogo/2.png" : counter == 3 ? "/common/assets/syklikLogo/3.png" : counter == 4 ? "/common/assets/syklikLogo/4.png" : counter == 5 ? "/common/assets/syklikLogo/5.png" : "/common/assets/syklikLogo/6.png"} className={styles.load}/> */}
      <div style={{ paddingTop: '38vh' }}>
        <div className="spinner-border" role="status" style={{width: '10vw', height: '10vw', color: '#44564B', display: 'block', margin: 'auto', maxWidth: '100vw', maxHeight: '100vh'}}>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
      
		</>
	);
}
export default LoadingPage