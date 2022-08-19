import { Skeleton } from '../../components';
import { Row, Col } from "reactstrap";
import { Divider } from 'antd';
import styles from "../../../styles/Home.module.css";
import { useStoreApi } from '../../context/useAPI';
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import Image from 'next/image';

// function FadeUp(props) {
//   const [isActive, setActive] = React.useState(true);
//   const domRef = React.useRef();
//   React.useEffect(() => {
//     const observer = new IntersectionObserver(entries => {
//       entries.forEach(entry => {isActive ? setActive(entry.isIntersecting) : setActive(isActive)});
//     });
//     observer.observe(domRef.current);
//     return () => observer.unobserve(domRef.current);
//   }, []);
//   return (
//     <div
//       className={isActive ? styles.fadeUpActive : styles.fadeUp}
//       ref={domRef}
//     >
//       {props.children}
//     </div>
//   );
// }

export default function Navigation({ children }) {
  // const { axios } = useStoreApi();
  // const [load, setLoad] = useState(true);
  const router = useRouter();
  const [child] = useState(children);
  const [isOpen, setIsOpen] = useState(false);
  const [contacts, setContacts] = useState([{
    discord: "dGU2FyaUxd",
    tokopedia: "mechaland",
    instagram: "mechaland_"
  }]);
  const [clientWindowHeight, setClientWindowHeight] = useState("");
  const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
  const [padding, setPadding] = useState(30);
  const [boxShadow, setBoxShadow] = useState(0);

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll); 
    return () => window.removeEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    let backgroundTransparacyVar = clientWindowHeight / 600;
  
    if (backgroundTransparacyVar < 1) {
        let paddingVar = 30 - backgroundTransparacyVar * 20;
        let boxShadowVar = backgroundTransparacyVar * 0.1;
        setBackgroundTransparacy(backgroundTransparacyVar);
        setPadding(paddingVar);
        setBoxShadow(boxShadowVar);
    } else {
      setBackgroundTransparacy(1);
      setPadding(10);
      setBoxShadow(0.1);
    }
  }, [clientWindowHeight]);

  // const getData = async () => {
  //   try {
  //     const response = await axios.get("api/v1/footer/");
  //     setContacts(response.data);
  //   } catch (err) {
  //     console.log("ERROR: ", err);
  //   }
  //   setLoad(false);
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <>
      <nav class="navbar navbar-expand-md fixed-top px-default" 
        style={{
          background: `rgba(255, 255, 255, ${router.pathname == "/" ? backgroundTransparacy : 1})`,
          padding: `${padding}px 0px`,
          boxShadow: `rgb(0 0 0 / ${router.pathname == "/" ? boxShadow : 0}) 0px 0px 20px 6px`,
        }}
      >
        <div class="container-fluid truly-center-grid" style={{alignItem: 'center'}}>
            {/* <a class="navbar-brand truly-center-child" aria-current="page" href="/">
              <Image
                src={router.pathname == "/" ? "/assets/mechaland_long.png" : "/assets/mechaland_bl.png"} alt="Mechaland"  style={router.pathname == "/" ? {filter: `invert(${backgroundTransparacy*100}%)`} : {}}
              />
            </a> */}
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-start truly-center-child" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                  <Image
                    src="/assets/mechaland_long.png" href="/" alt="Mechaland" width="50%" height="50%" style={{filter: `invert(100%)`}}
                  />
                </h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div class="offcanvas-body">
                <ul class="navbar-nav justify-content-center flex-grow-1">
                  <li class="nav-item mx-2">
                    <a class="nav-link" aria-current="page" href="#">
                      <Image
                        src={router.pathname == "/" ? "/assets/mechaland_long.png" : "/assets/mechaland_bl.png"} alt="Mechaland" width="200" height="60" style={{filter: `invert(${backgroundTransparacy*100}%)`}}
                      />
                    </a>
                  </li>
                  <li class="nav-item dropdown mx-2">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <span className={styles.navText} style={router.pathname == "/" ? {color: "#E5E4CC", filter: `brightness(${((backgroundTransparacy*100)-100)*(-1)}%)`} : {color: "#000000"}}>GROUP BUY</span>
                    </a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">LIVE</a></li>
                      <li><a class="dropdown-item" href="#">PERORDER</a></li>
                      <li><a class="dropdown-item" href="#">INTEREST CHECK</a></li>
                      <li><a class="dropdown-item" href="#">UPDATE</a></li>
                    </ul>
                  </li>
                  <li class="nav-item mx-2">
                    <a class="nav-link" aria-current="page" href="/instock"><span className={styles.navText} style={router.pathname == "/" ? {color: "#E5E4CC", filter: `brightness(${((backgroundTransparacy*100)-100)*(-1)}%)`} : {color: "#000000"}}>IN-STOCK</span></a>
                  </li>
                  <li class="nav-item dropdown mx-2">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <span className={styles.navText} style={router.pathname == "/" ? {color: "#E5E4CC", filter: `brightness(${((backgroundTransparacy*100)-100)*(-1)}%)`} : {color: "#000000"}}>UPCOMING</span>
                    </a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="/instock">IN-STOCK</a></li>
                      <li><a class="dropdown-item" href="#">GROUP BUY</a></li>
                    </ul>
                  </li>
                  <li class="nav-item mx-2">
                    <a class="nav-link" href="/join"><span className={styles.navText} style={router.pathname == "/" ? {color: "#E5E4CC", filter: `brightness(${((backgroundTransparacy*100)-100)*(-1)}%)`} : {color: "#000000"}}>DISCORD</span></a>
                  </li>
                </ul>
              </div>
            </div>
        </div>
      </nav>

      {children}

      <footer className={styles.footer}>
        <Divider className={styles.divider} />
        <Row style={{ padding: "10px 0" }}>
          <Col sm="12" md="2">
            <Row style={{ padding: "5px 0" }} className={styles.footerCenter}>Privacy Policy</Row>
            <Row style={{ padding: "5px 0" }} className={styles.footerCenter}>Terms of Service</Row>
            <Row style={{ padding: "5px 0" }} className={styles.footerCenter}>Shipping Policy</Row>
          </Col>
          <Col sm="12" md="5" className={styles.footerGap}>
            <Row style={{ padding: "5px 0" }} className={styles.footerCenter}><a href="https://instagram.com/mechaland" target="_blank" rel="noopener noreferrer"><Image src="/assets/instagram.png" alt="Mechaland Tokopedia" width="27" height="27"/> Instagram</a></Row>
            <Row style={{ padding: "5px 0" }} className={styles.footerCenter}><a href="https://www.tokopedia.com/mechaland" target="_blank" rel="noopener noreferrer"><Image src="/assets/tokopedia.png" alt="Mechaland Tokopedia" width="27" height="27"/> Tokopedia</a></Row>
            <Row style={{ padding: "5px 0" }} className={styles.footerCenter}><a href="https://discord.com/invite/Y5Bj6rK9He" target="_blank" rel="noopener noreferrer"><Image src="/assets/discord.png" alt="Mechaland Tokopedia" width="27" height="27"/> Discord</a></Row>
          </Col>
          <Col sm="12" md="5" style={{ textAlign: "right" }} className={styles.footerGap}>
            <a className={styles.footerCenter}>&copy; 2022, Mechaland<br/>All Rights Reserved</a>
            <Row>
              <Col className={styles.footerCenter}>
                <Image src="/assets/bca.png" href="/" alt="BCA" width="160" height="60" className={styles.footerImage}/>
                <Image src="/assets/gopay.png" href="/" alt="GOPAY" width="205" height="60" className={styles.footerImage}/>
              </Col>
            </Row>
          </Col>
        </Row>
      </footer>
    </>
  );
}