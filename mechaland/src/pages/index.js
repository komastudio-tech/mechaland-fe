import "bootstrap/dist/css/bootstrap.min.css";
// import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
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
        <div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-bs-ride="true">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Banner 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-current="true" aria-label="Banner 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-current="true" aria-label="Banner 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <Image src="/assets/temp/switch1.jpeg" alt="Banner 1" layout='fill' className={styles.swipe}/>
              <div className={styles.bannerContent}>
                <h5 className={styles.bannerTitle}>JWICK T1 Switch</h5>
                <a href="https://www.tokopedia.com/mechaland" target="_blank" rel="noopener noreferrer" class="btn btn-lg active" role="button" aria-pressed="true" className={styles.bannerButton}>BUY NOW!</a>
              </div>
            </div>
            <div class="carousel-item">
              <Image src="/assets/temp/switch3.jpeg" alt="Banner 2" layout='fill' className={styles.swipe}/>
              <div className={styles.bannerContent}>
                <h5 className={styles.bannerTitle}>Gateron Yellow</h5>
                <a href="https://www.tokopedia.com/mechaland" target="_blank" rel="noopener noreferrer" class="btn btn-lg active" role="button" aria-pressed="true" className={styles.bannerButton}>BUY NOW!</a>
              </div>
            </div>
            <div class="carousel-item">
              <Image src="/assets/temp/switch2.jpeg" alt="Banner 3" layout='fill' className={styles.swipe}/>
              <div className={styles.bannerContent}>
                <h5 className={styles.bannerTitle}>JWICK Black Switch</h5>
                <a href="https://www.tokopedia.com/mechaland" target="_blank" rel="noopener noreferrer" class="btn btn-lg active" role="button" aria-pressed="true" className={styles.bannerButton}>BUY NOW!</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className={styles.main}>
        <div className={styles.description}>
          <div className={styles.desc}>
            <h3 className={styles.title}>Get everything you need from mechaland.co.id</h3>
            <p className={styles.openSans}>
              Selling many types of mechanical keyboard stuffs to make your typing experience more interesting.
            </p>
          </div>
        </div>
        <div className={styles.sectionFeatured}>
          <h2 className={styles.title}>Featured Collection</h2>
          <Row style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Col sm="12" md="4" style={{ margin: "3vw 0" }}>
              <a href='https://www.tokopedia.com/mechaland/jwick-t1-stem-switch-tactile-pcb-mount' target="_blank" rel="noopener noreferrer">
                <Row className={styles.textCenter}>
                  <Image width='30' height='30' layout='responsive' src="/assets/temp/switch1.jpeg" alt="Mechaland Featured" className={styles.featuredPict} />
                </Row>
                <Row className={styles.textCenter}>
                  <h5 className={styles.featured}>JWICK T1 Stem Switch (Tactile - PCB Mount)</h5>
                </Row>
              </a>
            </Col>
            <Col sm="12" md="4" style={{ margin: "3vw 0" }}>
              <a href='https://www.tokopedia.com/mechaland/jwick-black-switch-linear-pcb-mount-58-5g' target="_blank" rel="noopener noreferrer">
                <Row className={styles.textCenter}>
                  <Image width='30' height='30' layout='responsive' src="/assets/temp/switch2.jpeg" alt="Mechaland Featured" className={styles.featuredPict} />
                </Row>
                <Row className={styles.textCenter}>
                  <h5 className={styles.featured}>JWICK Black Switch (Linear - PCB Mount) - 58.5g</h5>
                </Row>
              </a>
            </Col>
            <Col sm="12" md="4" style={{ margin: "3vw 0" }}>
              <a href='https://www.tokopedia.com/mechaland/gateron-yellow-linier-plate-mount' target="_blank" rel="noopener noreferrer">
                <Row className={styles.textCenter}>
                  <Image width='30' height='30' layout='responsive' src="/assets/temp/switch3.jpeg" alt="Mechaland Featured" className={styles.featuredPict} />
                </Row>
                <Row className={styles.textCenter}>
                  <h5 className={styles.featured}>Gateron Yellow (Linier - Plate Mount)</h5>
                </Row>
              </a>
            </Col>
          </Row>
        </div>
      </main>

      <div className={styles.sectionDiscord}>
        <h2 className={styles.title}>Join Our Discord!</h2>
        <p style={{fontSize: "18px"}}>so you won't miss anything!</p>
        <a href="https://discord.com/invite/Y5Bj6rK9He" target="_blank" rel="noopener noreferrer" class="btn btn-lg active" role="button" aria-pressed="true" className={styles.discordButton}>
          <Row>
            <Col>
              <Image width='45' height='45' layout='fixed' src="/assets/discord_white.png" alt="Mechaland Discord" className={styles.discordImage}/>
            </Col>
            <Col>
              <div className={styles.discordJoin}>JOIN OUR</div><div className={styles.discordDC}>DISCORD</div>
            </Col>
          </Row>
        </a>
      </div>
    </div>
  )
}
