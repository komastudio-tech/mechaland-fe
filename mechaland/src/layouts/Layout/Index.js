import Link from 'next/link';
import Image from 'next/image';
import { Divider } from 'antd';
import { Row, Col } from "reactstrap";
import { useRouter } from 'next/router';
import React, { useState, useEffect } from "react";
import styles from "../../../styles/Home.module.css";

export default function Navigation({ children }) {
  const router = useRouter();
  const [contacts, setContacts] = useState([{ discord: "dGU2FyaUxd", tokopedia: "mechaland", instagram: "mechaland.id" }]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [clientWindowHeight, setClientWindowHeight] = useState("");
  const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
  const [padding, setPadding] = useState(30);
  const [boxShadow, setBoxShadow] = useState(0);

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    try {
      window.addEventListener("scroll", handleScroll); 
      return () => window.removeEventListener("scroll", handleScroll);
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    let backgroundTransparacyVar; let paddingVar; let boxShadowVar;
    try {
      backgroundTransparacyVar = clientWindowHeight / 600;
    
      if (backgroundTransparacyVar < 1) {
          paddingVar = 30 - backgroundTransparacyVar * 20;
          boxShadowVar = backgroundTransparacyVar * 0.1;
          setBackgroundTransparacy(backgroundTransparacyVar);
          setPadding(paddingVar);
          setBoxShadow(boxShadowVar);
      } else {
        setBackgroundTransparacy(1);
        setPadding(10);
        setBoxShadow(0.1);
      }
    } catch (e) {
      console.error(e);
    }
  }, [clientWindowHeight]);

  useEffect(()=> {
    try {
      window.addEventListener('resize', ()=> {
          setWindowWidth(window.innerWidth);
      });
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-md fixed-top px-default" 
        style={{
          background: `rgba(255, 255, 255, ${router.pathname == "/" ? backgroundTransparacy : 1})`,
          padding: `${router.pathname == "/" ? padding : 8}px 0px`,
          boxShadow: `rgb(0 0 0 / ${router.pathname == "/" ? boxShadow : 0}) 0px 0px 20px 6px`,
        }}
      >
        <div className="container-fluid truly-center-grid" style={{alignItem: 'center'}}>
            {/* <a className="navbar-brand truly-center-child" aria-current="page" href="/">
              <Image
                src={router.pathname == "/" ? "/assets/mechaland_long.png" : "/assets/mechaland_bl.png"} alt="Mechaland"  style={router.pathname == "/" ? {filter: `invert(${backgroundTransparacy*100}%)`} : {}}
              />
            </a> */}
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" style={router.pathname == "/" ? {color: "#FFFFF", filter: `invert(${backgroundTransparacy*100}%)`, border: "1px solid white"} : {color: "#000000"}}>
              <span className="navbar-toggler-icon" style={router.pathname == "/" ? {filter: `invert(${100-(backgroundTransparacy*10)}%)`} : {}}></span>
            </button>
            <div className="offcanvas offcanvas-start truly-center-child" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
              <div className="offcanvas-header">
                {/* <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                  <Image
                    src="/assets/mechaland_long.png" href="/" alt="Mechaland" width="200%" height="60" style={{filter: `invert(100%)`}}
                  />
                </h5> */}
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-center flex-grow-1">
                  <li className="nav-item mx-2">
                    <Link href="/"><a className="nav-link" aria-current="page">
                      <Image
                        src={router.pathname == "/" ? windowWidth > 767 ? "/assets/mechaland_long.png" : "/assets/mechaland_bl.png" : "/assets/mechaland_bl.png"} alt="Mechaland" width="200" height="60" style={router.pathname == "/" ? {filter: `invert(${backgroundTransparacy*100}%)`} : {}}
                      />
                    </a></Link>
                  </li>
                  <li className="nav-item dropdown mx-2">
                    <Link href="#"><a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <span className={styles.navText} style={router.pathname == "/" ? {color: "#E5E4CC", filter: `brightness(${((backgroundTransparacy*100)-100)*(-1)}%)`} : {color: "#000000"}}>GROUP BUY</span>
                    </a></Link>
                    <ul className="dropdown-menu">
                      <li><Link href="/live"><a className="dropdown-item">LIVE</a></Link></li>
                      <li><Link href="/preorder"><a className="dropdown-item">PREORDER</a></Link></li>
                      <li><Link href="/interest"><a className="dropdown-item">INTEREST CHECK</a></Link></li>
                      <li><Link href="/updates"><a className="dropdown-item">UPDATE</a></Link></li>
                    </ul>
                  </li>
                  <li className="nav-item mx-2">
                    <Link href="/instock"><a className="nav-link" aria-current="page"><span className={styles.navText} style={router.pathname == "/" ? {color: "#E5E4CC", filter: `brightness(${((backgroundTransparacy*100)-100)*(-1)}%)`} : {color: "#000000"}}>IN-STOCK</span></a></Link>
                  </li>
                  <li className="nav-item dropdown mx-2">
                    <Link href="#"><a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <span className={styles.navText} style={router.pathname == "/" ? {color: "#E5E4CC", filter: `brightness(${((backgroundTransparacy*100)-100)*(-1)}%)`} : {color: "#000000"}}>UPCOMING</span>
                    </a></Link>
                    <ul className="dropdown-menu">
                      <li><Link href="/instock"><a className="dropdown-item">IN-STOCK</a></Link></li>
                      <li><Link href="/groupbuy"><a className="dropdown-item">GROUP BUY</a></Link></li>
                    </ul>
                  </li>
                  <li className="nav-item mx-2">
                    <Link href="/join"><a className="nav-link"><span className={styles.navText} style={router.pathname == "/" ? {color: "#E5E4CC", filter: `brightness(${((backgroundTransparacy*100)-100)*(-1)}%)`} : {color: "#000000"}}>DISCORD</span></a></Link>
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
            <Row style={{ padding: "5px 0" }} className={styles.footerCenter}><Link href="https://instagram.com/mechaland.id"><a target="_blank" rel="noopener noreferrer"><Image src="/assets/instagram.png" alt="Mechaland Tokopedia" width="22" height="22" /> Instagram</a></Link></Row>
            <Row style={{ padding: "5px 0" }} className={styles.footerCenter}><Link href="https://www.tokopedia.com/mechaland"><a target="_blank" rel="noopener noreferrer"><Image src="/assets/tokopedia.png" alt="Mechaland Tokopedia" width="22" height="22"/> Tokopedia</a></Link></Row>
            <Row style={{ padding: "5px 0" }} className={styles.footerCenter}><Link href="https://discord.com/invite/Y5Bj6rK9He"><a target="_blank" rel="noopener noreferrer"><Image src="/assets/discord.png" alt="Mechaland Tokopedia" width="22" height="22"/> Discord</a></Link></Row>
          </Col>
          <Col sm="12" md="5" style={{ textAlign: "right" }} className={styles.footerGap}>
            <a className={styles.footerCenter}>&copy; 2022, Mechaland<br/>All Rights Reserved</a>
            <Row>
              <Col className={styles.footerCenter}>
                {/* <Image src="/assets/bca.png" href="/" alt="BCA" width="160" height="60" className={styles.footerImage}/>
                <Image src="/assets/gopay.png" href="/" alt="GOPAY" width="205" height="60" className={styles.footerImage}/> */}
              </Col>
            </Row>
          </Col>
        </Row>
      </footer>
    </>
  );
}