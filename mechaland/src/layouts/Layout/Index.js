import { Skeleton } from '../../components';
import { Row, Col } from "reactstrap";
import { Divider } from 'antd';
import styles from "../../../styles/Home.module.css";
import { useStoreApi } from '../../context/useAPI';
import React, { useState, useEffect } from "react";

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
      {/* <nav
        className="navbar navbar-expand-lg navbar-light fixed-top"
        style={{
          fontFamily: "'Arvo', serif",
          fontWeight: "bold",
          letterSpacing: "0.01rem",
          color: "black",
          background: `rgba(255, 255, 255)`,
          padding: `10px 10px`,
          boxShadow: `rgb(0 0 0 / 0.1) 0px 0px 20px 8px`,
          top: `0`,
        }}
      >
        <div className="container">
          <a href="/">
            <img
              src="/assets/mechaland_long.png"
              href="/"
              alt="Mechaland"
              width="10%"
              height="10%"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={()=>setIsOpen(!isOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse justify-content-end ${isOpen ? "show ":""} animate-[open_0.5s_linear_forwards] wide:animate-none`}
            id="navbarText"

          >
            <ul className="navbar-nav ml-auto  animate-[opac_0.7s_linear_forwards]">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span className={styles.navbar}>Group Test</span>
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#" className={styles.navbar}>Group Test 1</a>
                  <a class="dropdown-item" href="#" className={styles.navbar}>Group Test 2</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#" className={styles.navbar}>Group Test 3</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{ margin: "0 10px", textAlign: "left" }}>
                  <span className={styles.navText}>In Stock</span>
                </a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span className={styles.navbar}>Upcoming Test</span>
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#" className={styles.navbar}>Upcoming Test 1</a>
                  <a class="dropdown-item" href="#" className={styles.navbar}>Upcoming Test 2</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#" className={styles.navbar}>Upcoming Test 3</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={`https://discord.gg/${contacts[0].discord}`} style={{ margin: "0 10px", textAlign: "left" }}>
                  <span className={styles.navText}>Discord</span>
                </a>
              </li>
              // ============================================================================================
              <li className="nav-item">
                <div className={styles.dropdown}>
                  <a className="nav-link" href="/groupby" style={{ margin: "0 10px", textAlign: "left" }}>
                    <span className={styles.navText}>Group By</span>               
                  </a>
                  <div className={styles.dropdownContent}>
                    <a style={{ fontSize: "18px" }} href="/groupby">LIVE</a>
                    <a style={{ fontSize: "18px" }} href="/groupby">PREORDER</a>
                    <a style={{ fontSize: "18px" }} href="/groupby">INTEREST CHECK</a>
                    <a style={{ fontSize: "18px" }} href="/groupby">UPDATE</a>
                  </div> 
                  <div className={styles.dropdownActive}>
                    <a className="nav-link" href="/groupby" style={{ margin: "0 10px", textAlign: "left" }}>
                      <span className={styles.navText}>LIVE</span>               
                    </a>
                    <a className="nav-link" href="/groupby" style={{ margin: "0 10px", textAlign: "left" }}>
                      <span className={styles.navText}>PREORDER</span>               
                    </a>
                    <a className="nav-link" href="/groupby" style={{ margin: "0 10px", textAlign: "left" }}>
                      <span className={styles.navText}>INTEREST CHECK</span>               
                    </a>
                    <a className="nav-link" href="/groupby" style={{ margin: "0 10px", textAlign: "left" }}>
                      <span className={styles.navText}>UPDATE</span>               
                    </a>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/instock" style={{ margin: "0 10px", textAlign: "left" }}>
                  <span className={styles.navText}>In Stock</span>
                </a>
              </li>
              <li className="nav-item">
                <div className={styles.dropdown}>
                  <a className="nav-link" href="/upcoming" style={{ margin: "0 10px", textAlign: "left" }}>
                    <span className={styles.navText}>Upcoming</span>               
                  </a>
                  <div className={styles.dropdownContent}>
                    <a style={{ fontSize: "18px" }} href="/upcoming">Upcoming 1</a>
                    <a style={{ fontSize: "18px" }} href="/upcoming">Upcoming 2</a>
                    <a style={{ fontSize: "18px" }} href="/upcoming">Upcoming 3</a>
                    <a style={{ fontSize: "18px" }} href="/upcoming">Upcoming 4</a>
                  </div> 
                  <div className={styles.dropdownActive}>
                    <a className="nav-link" href="/upcoming" style={{ margin: "0 10px", textAlign: "left" }}>
                      <span className={styles.navText}>Upcoming 1</span>               
                    </a>
                    <a className="nav-link" href="/upcoming" style={{ margin: "0 10px", textAlign: "left" }}>
                      <span className={styles.navText}>Upcoming 2</span>               
                    </a>
                    <a className="nav-link" href="/upcoming" style={{ margin: "0 10px", textAlign: "left" }}>
                      <span className={styles.navText}>Upcoming 3</span>               
                    </a>
                    <a className="nav-link" href="/upcoming" style={{ margin: "0 10px", textAlign: "left" }}>
                      <span className={styles.navText}>Upcoming 4</span>               
                    </a>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={`https://discord.gg/${contacts[0].discord}`} style={{ margin: "0 10px", textAlign: "left" }}>
                  <span className={styles.navText}>Discord</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
      <nav class="navbar navbar-expand-md fixed-top px-default" 
        style={{
          background: `rgba(255, 255, 255, ${backgroundTransparacy})`,
          padding: `${padding}px 0px`,
          boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
        }}
      >
        <div class="container-fluid truly-center-grid" style={{alignItem: 'center'}}>
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="offcanvas offcanvas-start truly-center-child" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                <img
                  src="/assets/mechaland_long.png" href="/" alt="Mechaland" width="30%" height="30%" style={{filter: `invert(100%)`}}
                />
              </h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-center flex-grow-1">
                <li class="nav-item dropdown mx-2">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <span className={styles.navText} style={{filter: `brightness(${((backgroundTransparacy*100)-100)*(-1)}%)`}}>GROUP BUY</span>
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">LIVE</a></li>
                    <li><a class="dropdown-item" href="#">PERORDER</a></li>
                    <li><a class="dropdown-item" href="#">INTEREST CHECK</a></li>
                    <li><a class="dropdown-item" href="#">UPDATE</a></li>
                  </ul>
                </li>
                <li class="nav-item mx-2">
                  <a class="nav-link" aria-current="page" href="#"><span className={styles.navText} style={{filter: `brightness(${((backgroundTransparacy*100)-100)*(-1)}%)`}}>IN-STOCK</span></a>
                </li>
                <li class="nav-item mx-2">
                  <a class="nav-link" aria-current="page" href="#">
                    {/* <img
                      src="/assets/mechaland_long.png" alt="Mechaland" width="30%" height="30%" style={{filter: `invert(${backgroundTransparacy*100}%)`}}
                    /> */}
                  </a>
                </li>
                <li class="nav-item dropdown mx-2">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <span className={styles.navText} style={{filter: `brightness(${((backgroundTransparacy*100)-100)*(-1)}%)`}}>UPCOMING</span>
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">IN-STOCK</a></li>
                    <li><a class="dropdown-item" href="#">GROUP BUY</a></li>
                  </ul>
                </li>
                <li class="nav-item mx-2">
                  <a class="nav-link" href={`https://discord.gg/dGU2FyaUxd`} target="_blank" rel="noopener noreferrer"><span className={styles.navText} style={{filter: `brightness(${((backgroundTransparacy*100)-100)*(-1)}%)`}}>DISCORD</span></a>
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
            <Row style={{ padding: "5px 0" }}>Privacy Policy</Row>
            <Row style={{ padding: "5px 0" }}>Terms of Service</Row>
            <Row style={{ padding: "5px 0" }}>Shipping Policy</Row>
          </Col>
          <Col sm="12" md="5">
            <Row style={{ padding: "4px 0" }}><a href={`https://instagram.com/mechaland_}`} target="_blank" rel="noopener noreferrer"><img src="/assets/instagram.png" alt="Mechaland Tokopedia" width="27" height="27"/> Instagram</a></Row>
            <Row style={{ padding: "4px 0" }}><a href={`https://www.tokopedia.com/mechaland}`} target="_blank" rel="noopener noreferrer"><img src="/assets/tokopedia.png" alt="Mechaland Tokopedia" width="27" height="27"/> Tokopedia</a></Row>
            <Row style={{ padding: "4px 0" }}><a href={`https://discord.gg/dGU2FyaUxd`} target="_blank" rel="noopener noreferrer"><img src="/assets/discord.png" alt="Mechaland Tokopedia" width="27" height="27"/> Discord</a></Row>
          </Col>
          <Col sm="12" md="5" style={{ textAlign: "right" }}>
            <a>&copy; 2022, Mechaland<br/>All Rights Reserved</a>
            <Row>
              <Col>
                <img src="/assets/bca.png" href="/" alt="BCA" width="160" height="60" className={styles.footerImg}/>
                <img src="/assets/gopay.png" href="/" alt="GOPAY" width="205" height="60" className={styles.footerImg}/>
              </Col>
            </Row>
          </Col>
        </Row>
      </footer>
      {/* <footer className={styles.footer}>
        <hr style="width:10%"/>
        <Row style={{ padding: "10px 0" }}>
          <Col sm="12" md="1">
            <a>Privacy Policy</a>
            <a>Terms of Service</a>
            <a>Shipping Policy</a>
          </Col>``
          <Col sm="12" md="8">
            <a href={`https://instagram.com/${contacts[0].instagram}`} target="_blank" rel="noopener noreferrer"><i class="bi bi-instagram"></i> Instagram</a>
            <a href={`https://www.tokopedia.com/${contacts[0].tokopedia}`} target="_blank" rel="noopener noreferrer"><img src="/assets/tokopedia.png" alt="Mechaland Tokopedia" width="27" height="27"/> Tokopedia</a>
            <a href={`https://discord.gg/${contacts[0].discord}`} target="_blank" rel="noopener noreferrer"><i class="bi bi-discord"></i> Discord</a>
          </Col>
          <Col sm="12" md="3" style={{ textAlign: "right" }}>
            <a>&copy; 2022, Mechaland<br/>All Rights Reserved</a>
            <Row>
              <Col>
                <img src="/assets/bca.png" href="/" alt="BCA" width="135" height="50" className={styles.footerImg}/>
              </Col>
              <Col>
                <img src="/assets/gopay.png" href="/" alt="GOPAY" width="135" height="50" className={styles.footerImg}/>
              </Col>
            </Row>
          </Col>
        </Row>
      </footer> */}
    </>
  );
}