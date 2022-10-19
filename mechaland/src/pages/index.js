import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Row, Col } from "reactstrap";
import { Skeleton } from "../components";
import { useStoreApi } from '@/context/useAPI';
import styles from "../../styles/Home.module.css";
import { useState, useEffect } from "react";

export default function Home() {
  const { axios } = useStoreApi();
  const [load, setLoad] = useState(true);
  const [hero, setHero] = useState([{
    text:"Mechaland",
    buy_text:"https://www.tokopedia.com/mechaland",
    image:"/assets/temp/banner1.jpeg"
  }]);
  const [featured, setFeatured] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get("api/v1/hero_image/");
      await setHero(response.data);
    } catch (err) {
      console.log("ERROR: ", err);
    }

    try {
      const response = await axios.get("api/v1/featured_collection/");
      const data = (response.data).slice(0,3);
      await setFeatured(data);
    } catch (err) {
      console.log("ERROR: ", err);
    }

    setLoad(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Mechaland</title>
        <meta name="title" content="Details | Mechaland" />
        <meta
          name="description"
          content={`Mechaland`}
        />
        <meta name="author" content={`Mechaland 2022`} />
        <meta name="copyright" content={`Mechaland`} />
        <a rel="Syklik" href="/favicon.ico" />
        <a rel="canonical" href={`Mechaland`} />
        <meta name="robots" content="index,follow" />
        <meta property="og:title" content="Details | Mechaland" />
        <meta
          property="og:site_name"
          content={`Mechaland`}
        />
        <meta property="og:url" content={`https://mechaland.id/`} />
        <meta
          property="og:description"
          content={`Mechaland`}
        />
        <meta property="og:type" content={`website`} />
        <meta name="twitter:card" content="summary" />
        <meta property="twitter:url" content={`https://mechaland.id/`} />
        <meta name="twitter:title" content="Details | Mechaland" />
        <meta
          name="twitter:description"
          content={`Mechaland`}
        />

        <meta name="viewport" content="initial-scale = 1.0,maximum-scale = 1.0" />
        <a rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" />
        <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"></script>
      </Head>

      <div className={styles.swiper}>
        <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-bs-ride="true">
          <div className="carousel-indicators">
          { load ?
            <></>
            :
            (hero.length > 0) ?
            <>
              {hero.map((item, idx) =>
                <button key={`slide-${idx}`} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={idx} className={idx == 0 ? `active` : ``} aria-current="true" aria-label={`${item.text}`}></button>
              )}
            </>
            :
            <></>
          }
          </div>
          <div className="carousel-inner">
          { load ?
            <div className="carousel-item active">
              <Image src="/assets/temp/load.png" alt="Loading..." layout="fill" className={styles.swipe}/>
              <div className={styles.bannerContent}>
                <h5 className={styles.bannerTitle}><Skeleton height="50px" width="200px" /></h5>
                <div className={styles.bannerTitle}><Skeleton height="30px" width="70px" /></div>
              </div>
            </div>
            :
            (hero.length > 0 ?
            <>
              {hero.map((item, idx) =>
                <div key={`hero-${idx}`} className={idx == 0 ? `carousel-item active` : `carousel-item`}>
                  <Image src={item.image} alt={`banner-${idx}`} layout="fill" className={styles.swipe}/>
                  <div className={styles.bannerContent}>
                    <h5 className={styles.bannerTitle}>{item.text}</h5>
                    <Link href={item.buy_text ? item.buy_text : "https://www.tokopedia.com/mechaland"}><a target="_blank" rel="noopener noreferrer" className={`btn btn-lg active ${styles.bannerButton}`} role="button" aria-pressed="true">BUY NOW !</a></Link>
                  </div>
                </div>
              )}
            </>
            :
            <div key={`heroTemp}`} className={`carousel-item active`}>
              <Image src={`/assets/temp/banner1.jpeg`} alt={`bannerTemp`} layout="fill" className={styles.swipe}/>
              <div className={styles.bannerContent}>
                <h5 className={styles.bannerTitle}>Check out our Tokopedia!</h5>
                <Link href={`https://www.tokopedia.com/mechaland`}><a target="_blank" rel="noopener noreferrer" className={`btn btn-lg active ${styles.bannerButton}`} role="button" aria-pressed="true">BUY NOW !</a></Link>
              </div>
            </div>
            )
          }
          </div>
        </div>
      </div>

      <main className={styles.main}>
        <div className={styles.description}>
          <div className={styles.desc}>
            <h3 className={styles.title}>Get everything you need from Mechaland.com</h3>
            <p className={styles.subTitle}>
              We come from Indonesia. We provide and create innovative, unique and affordable customized mechanical keyboard things as well as peripheral products.
            </p>
          </div>
        </div>
        {featured.length > 0 ?
        <div className={styles.sectionFeatured}>
          <h2 className={styles.title}>Featured Collection</h2>
          { load ?
            <Row style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
              <Col sm="12" md="4" style={{ margin: "3vw 0" }}>
                  <Row className={styles.textCenter}>
                    <Skeleton height="300px" width="300px" /><br/>
                  </Row>
                  <Row className={styles.textCenter}>
                    <Skeleton height="50px" width="200px" />
                  </Row>
              </Col>
              <Col sm="12" md="4" style={{ margin: "3vw 0" }}>
                  <Row className={styles.textCenter}>
                    <Skeleton height="300px" width="300px" /><br/>
                  </Row>
                  <Row className={styles.textCenter}>
                    <Skeleton height="50px" width="200px" />
                  </Row>
              </Col>
              <Col sm="12" md="4" style={{ margin: "3vw 0" }}>
                  <Row className={styles.textCenter}>
                    <Skeleton height="300px" width="300px" /><br/>
                  </Row>
                  <Row className={styles.textCenter}>
                    <Skeleton height="50px" width="200px" />
                  </Row>
              </Col>
            </Row>
            :
            featured.length > 0 ?
            <Row style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
              {featured.map((item, idx) =>
                <Col key={`featured-${idx}`} sm="12" md="4" style={{ margin: "3vw 0" }}>
                  <Link href={item.buy_text}>
                    <a target="_blank" rel="noopener noreferrer">
                      <Row className={styles.textCenter}>
                        <Image width="30" height="30" layout="responsive" src={item.image} alt={item.text} className={styles.featuredPict} />
                      </Row>
                      <Row className={styles.textCenter}>
                        <h5 className={styles.featured}>{item.text}</h5>
                      </Row>
                    </a>
                  </Link>
                </Col>
              )}
            </Row>
            :
            <Row style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
              <Col key={`featured-${idx}`} sm="12" md="12" style={{ margin: "3vw 0" }}>
                <p>Sorry, we are still checking our products</p>
              </Col>
            </Row>
          }
        </div>
        :
        <div></div>
        }
      </main>

      <div className={styles.sectionDiscord}>
        <h2 className={styles.title}>Join Our Discord!</h2>
        <p style={{fontSize: "18px"}}>so you won&apos;t miss anything!</p>
        <Link href="https://discord.com/invite/Y5Bj6rK9He"><a target="_blank" rel="noopener noreferrer" className={`btn btn-lg active ${styles.bannerButton}`} role="button" aria-pressed="true">
          <Row>
            <Col>
              <Image width="45" height="45" layout="fixed" src="/assets/discord_white.png" alt="Mechaland Discord" className={styles.discordImage}/>
            </Col>
            <Col>
              <div className={styles.discordJoin}>JOIN OUR</div><div className={styles.discordDC}>DISCORD</div>
            </Col>
          </Row>
        </a></Link>
      </div>
    </div>
  )
}
