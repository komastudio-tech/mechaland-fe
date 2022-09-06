import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import Image from "next/image";
import { Row, Col } from "reactstrap";
import { SEO, Skeleton } from "../components";
import { useStoreApi } from '@/context/useAPI';
import styles from "../../styles/Home.module.css";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const { axios } = useStoreApi();
  const [load, setLoad] = useState(true);
  const [hero, setHero] = useState([{
    text:"Blue Ashes Keycap Set",
    buy_text:"https://www.tokopedia.com/mechaland",
    image:"/assets/temp/banner1.jpeg"
  }]);
  const [featured, setFeatured] = useState([
    {
      text:"JWICK T1 Stem Switch (Tactile - PCB Mount)",
      buy_text:"https://www.tokopedia.com/mechaland/jwick-t1-stem-switch-tactile-pcb-mount",
      image:"/assets/temp/switch1.jpeg"
    },
    {
      text:"JWICK Black Switch (Linear - PCB Mount) - 58.5g",
      buy_text:"https://www.tokopedia.com/mechaland/jwick-black-switch-linear-pcb-mount-58-5g",
      image:"/assets/temp/switch2.jpeg"
    },
    {
      text:"Gateron Yellow (Linier - Plate Mount)",
      buy_text:"https://www.tokopedia.com/mechaland/gateron-yellow-linier-plate-mount",
      image:"/assets/temp/switch3.jpeg"
    }
  ]);

  const getData = async () => {
    try {
      const response = await axios.get("api/v1/hero_image/");
      await setHero(response.data);
    } catch (err) {
      console.log("ERROR: ", err);
    }

    try {
      const response = await axios.get("api/v1/featured_collection/");
      await setFeatured(response.data);
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
      <SEO
        title="Mechaland"
        description="Mechaland"
      />

      <div className={styles.swiper}>
        <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-bs-ride="true">
          <div className="carousel-indicators">
          { load ?
            <></>
            :
            <>
              {hero.map((idx) =>
                {idx === 0 ?
                  <button key={`slide-${idx}`} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={idx} className="active" aria-current="true" aria-label={`banner-${idx}`}></button>
                :
                  <button key={`slide-${idx}`} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={idx} aria-current="true" aria-label={`banner-${idx}`}></button>
                }
              )}
            </>
          }
            {/* <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Banner 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-current="true" aria-label="Banner 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-current="true" aria-label="Banner 3"></button> */}
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
            <>
              {hero.map((item, idx) =>
                <div key={`hero-${idx}`} className="carousel-item active">
                  <Image src={item.image} alt={`banner-${idx}`} layout="fill" className={styles.swipe}/>
                  <div className={styles.bannerContent}>
                    <h5 className={styles.bannerTitle}>{item.text}</h5>
                    <Link href={item.buy_text ? item.buy_text : "https://www.tokopedia.com/mechaland"}><a target="_blank" rel="noopener noreferrer" className={`btn btn-lg active ${styles.bannerButton}`} role="button" aria-pressed="true">BUY NOW !</a></Link>
                  </div>
                </div>
              )}
            </>
          }
            {/* <div className="carousel-item active">
              <Image src="/assets/temp/banner1.jpeg" alt="Banner 1" layout="fill" className={styles.swipe}/>
              <div className={styles.bannerContent}>
                <h5 className={styles.bannerTitle}>Blue Ashes Keycap Set</h5>
                <Link href="https://www.tokopedia.com/mechaland"><a target="_blank" rel="noopener noreferrer" className={`btn btn-lg active ${styles.bannerButton}`} role="button" aria-pressed="true">BUY NOW !</a></Link>
              </div>
            </div>
            <div className="carousel-item">
              <Image src="/assets/temp/switch3.jpeg" alt="Banner 2" layout="fill" className={styles.swipe}/>
              <div className={styles.bannerContent}>
                <h5 className={styles.bannerTitle}>Gateron Yellow</h5>
                <Link href="https://www.tokopedia.com/mechaland"><a target="_blank" rel="noopener noreferrer" className={`btn btn-lg active ${styles.bannerButton}`} role="button" aria-pressed="true">BUY NOW !</a></Link>
              </div>
            </div>
            <div className="carousel-item">
              <Image src="/assets/temp/switch2.jpeg" alt="Banner 3" layout="fill" className={styles.swipe}/>
              <div className={styles.bannerContent}>
                <h5 className={styles.bannerTitle}>JWICK Black Switch</h5>
                <Link href="https://www.tokopedia.com/mechaland"><a target="_blank" rel="noopener noreferrer" className={`btn btn-lg active ${styles.bannerButton}`} role="button" aria-pressed="true">BUY NOW !</a></Link>
              </div>
            </div> */}
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
          }
            {/* <Col sm="12" md="4" style={{ margin: "3vw 0" }}>
              <Link href="https://www.tokopedia.com/mechaland/jwick-t1-stem-switch-tactile-pcb-mount"><a target="_blank" rel="noopener noreferrer">
                <Row className={styles.textCenter}>
                  <Image width="30" height="30" layout="responsive" src="/assets/temp/switch1.jpeg" alt="Mechaland Featured" className={styles.featuredPict} />
                </Row>
                <Row className={styles.textCenter}>
                  <h5 className={styles.featured}>JWICK T1 Stem Switch (Tactile - PCB Mount)</h5>
                </Row>
              </a></Link>
            </Col>
            <Col sm="12" md="4" style={{ margin: "3vw 0" }}>
              <Link href="https://www.tokopedia.com/mechaland/jwick-black-switch-linear-pcb-mount-58-5g"><a target="_blank" rel="noopener noreferrer">
                <Row className={styles.textCenter}>
                  <Image width="30" height="30" layout="responsive" src="/assets/temp/switch2.jpeg" alt="Mechaland Featured" className={styles.featuredPict} />
                </Row>
                <Row className={styles.textCenter}>
                  <h5 className={styles.featured}>JWICK Black Switch (Linear - PCB Mount) - 58.5g</h5>
                </Row>
              </a></Link>
            </Col>
            <Col sm="12" md="4" style={{ margin: "3vw 0" }}>
              <Link href="https://www.tokopedia.com/mechaland/gateron-yellow-linier-plate-mount"><a target="_blank" rel="noopener noreferrer">
                <Row className={styles.textCenter}>
                  <Image width="30" height="30" layout="responsive" src="/assets/temp/switch3.jpeg" alt="Mechaland Featured" className={styles.featuredPict} />
                </Row>
                <Row className={styles.textCenter}>
                  <h5 className={styles.featured}>Gateron Yellow (Linier - Plate Mount)</h5>
                </Row>
              </a></Link>
            </Col> */}
        </div>
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
