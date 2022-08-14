import "bootstrap/dist/css/bootstrap.min.css";
// import bootstrap from 'bootstrap';
// import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import { Divider } from 'antd';
import { SEO, Skeleton } from '../components';
import { Row, Col } from "reactstrap";
import { useStoreApi } from '../context/useAPI';
import { useState, useEffect, useRef } from 'react';

export default function Home() {

  return (
    <div className={styles.container}>
      <SEO
        title="Mechaland"
        description="Mechaland"
      />

      <div className={styles.swiper}>
        <div className={styles.bannerShow}>
          <img src="/assets/temp/banner1.jpeg" alt="Loading..." className={styles.swipe} />
          <div className={styles.bannerText}>
            <h1 className={styles.bannerTitle}>Blue Ashes Keycap Set</h1>
            <a href="#" class="btn btn-lg active" role="button" aria-pressed="true" className={styles.bannerButton}>BUY NOW!</a>
          </div>
        </div>
        {/* <div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Banner 1"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100" src="/assets/temp/banner1.png" alt="Banner 1"/>
              <div className={styles.bannerContent}>
                <h5 className={styles.bannerTitle}>Blue Ashes Keycap Set</h5>
                <a href="#" class="btn btn-lg active" role="button" aria-pressed="true" className={styles.bannerButton}>BUY NOW!</a>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div id="bannerShow" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#bannerShow" data-slide-to="0" class="active"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100" src="/assets/temp/banner1.png" alt="Banner 1"/>
              <div className={styles.bannerContent}>
                <h5 className={styles.bannerTitle}>Blue Ashes Keycap Set</h5>
                <a href="#" class="btn btn-lg active" role="button" aria-pressed="true" className={styles.bannerButton}>BUY NOW!</a>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      <main className={styles.main}>
        <div className={styles.description}>
          <div className={styles.desc}>
            <h3 className={styles.title}>Get everything you need from Mechaland.com</h3>
            <p className={styles.openSans}>
              We come from Indonesia. We provide and create innovative, unique and affordable customized mechanical keyboard things as we as peripheral products.
            </p>
          </div>
        </div>
        <div className={styles.section}>
          <h2 className={styles.title}>Featured Collection</h2>
          <Row style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Col sm="12" md="4" style={{ margin: "3vw 0" }}>
              <a href='https://www.tokopedia.com/mechaland' target="_blank" rel="noopener noreferrer">
                <img src="/assets/temp/switch1.jpeg" alt="Mechaland Featured" className={styles.featuredPict} />
                <h5 className={styles.featured}>JWICK T1 Stem Switch (Tactile - PCB Mount)</h5>
              </a>
            </Col>
            <Col sm="12" md="4" style={{ margin: "3vw 0" }}>
              <a href='https://www.tokopedia.com/mechaland' target="_blank" rel="noopener noreferrer">
                <img src="/assets/temp/switch2.jpeg" alt="Mechaland Featured" className={styles.featuredPict} />
                <h5 className={styles.featured}>JWICK Black Switch (Linear - PCB Mount) - 58.5g</h5>
              </a>
            </Col>
            <Col sm="12" md="4" style={{ margin: "3vw 0" }}>
              <a href='https://www.tokopedia.com/mechaland' target="_blank" rel="noopener noreferrer">
                <img src="/assets/temp/switch3.jpeg" alt="Mechaland Featured" className={styles.featuredPict} />
                <h5 className={styles.featured}>Gateron Yellow (Linier - Plate Mount)</h5>
              </a>
            </Col>
          </Row>
        </div>
      </main>

      <div className={styles.sectionDiscord}>
        <h2 className={styles.title}>Join Our Discord!</h2>
        <p style={{fontSize: "18px"}}>so you won't miss anything!</p>
        <a href={'https://discord.gg/dGU2FyaUxd'} target="_blank" rel="noopener noreferrer" class="btn btn-lg active" role="button" aria-pressed="true" className={styles.discordButton}>
          <Row>
            <Col sm="4">
              <img src="/assets/discord_white.png" alt="Mechaland Discord" width="48" height="48"/>
            </Col>
            <Col sm="8">
              <div style={{fontSize: '14px'}}>JOIN OUR</div><div style={{fontSize: '18px'}}>DISCORD</div>
            </Col>
          </Row>
        </a>
      </div>
    </div>
  )
}
