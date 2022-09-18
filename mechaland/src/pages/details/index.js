import "bootstrap/dist/css/bootstrap.min.css";
import Link from 'next/link';
import Image from 'next/image';
import { Row, Col } from "reactstrap";
import { SEO, Skeleton } from '../../components';
import { useStoreApi } from '../../context/useAPI';
import { useState, useEffect, useRef } from 'react';
import styles from '../../../styles/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper";

export default function Instock() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [quantity, setQuantity] = useState(1);
  // const { axios } = useStoreApi();
  // const [load, setLoad] = useState(true);
	// const [datas, setDatas] = useState([
	// 	{
	// 	  text:"JWICK T1 Stem Switch (Tactile - PCB Mount)",
	// 	  buy_text:"https://www.tokopedia.com/mechaland/jwick-t1-stem-switch-tactile-pcb-mount",
	// 	  image:"/assets/temp/switch1.jpeg",
	// 		price:"Rp.4.500"
	// 	},
	// 	{
	// 	  text:"JWICK Black Switch (Linear - PCB Mount) - 58.5g",
	// 	  buy_text:"https://www.tokopedia.com/mechaland/jwick-black-switch-linear-pcb-mount-58-5g",
	// 	  image:"/assets/temp/switch2.jpeg",
	// 		price:"Rp.3.000"
	// 	},
	// 	{
	// 	  text:"Gateron Yellow (Linier - Plate Mount)",
	// 	  buy_text:"https://www.tokopedia.com/mechaland/gateron-yellow-linier-plate-mount",
	// 	  image:"/assets/temp/switch3.jpeg",
	// 		price:"Rp.4.000"
	// 	}
	// ]);

	// const getData = async () => {
  //   try {
  //     const response = await axios.get("api/v1/instock/");
  //     await setDatas(response.data);
  //   } catch (err) {
  //     console.log("ERROR: ", err);
  //   }

  //   setLoad(false);
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  const updateQuantity = (operation) => {
    if (operation == "add") {
      let sum = quantity + 1;
      setQuantity(sum);
    } else {
      let min = quantity - 1;
      min = min <= 0 ? 1 : min;
      setQuantity(min);
    }
  }

  return (
    <div className={styles.container}>
      <SEO
        title="Details | Mechaland"
        description="Mechaland"
      />

      <main className={styles.main}>
        <div className={styles.sectionInstock} style={{marginTop: "2px !important"}}>
          <Row style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Col sm="12" md="6" style={{ margin: "4vw 0", padding: "4vw" }}>
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
              >
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                </SwiperSlide>
              </Swiper>
              <br/>
              <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={5}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                </SwiperSlide>
              </Swiper>
            </Col>
            <Col sm="12" md="6" style={{ margin: "4vw 0", padding: "4vw" }}>
                <Row className={`${styles.textCenter} ${styles.black}`}>
                  <h3 className={styles.detailsTitle}>Domikey Miami Night (ABS - Cherry Profile) - All in One</h3>
                </Row>
                <Row className={styles.textCenter}>
                  <p className={styles.detailsPrice}>Rp1.870.000</p>
                </Row>
                <Row className={styles.textCenter} style={{paddingBottom: "15px", paddingTop: "25px"}}>
                  <p className={styles.detailsLabel} style={{marginBottom: "1px"}}>variant</p>
                  <Col style={{display: "flex", alignItems: "center", textAlign: "center", justifyContent: "center"}}>
                    <select className={`${styles.detailsSelect} form-control`}>
                      <option value="60%" selected>60%</option>
                      <option value="65%">65%</option>
                      <option value="70%">70%</option>
                      <option value="75%">75% keycaps set</option>
                    </select>
                  </Col>
                </Row>
                <Row>
                  <Col style={{display: "flex", flexFlow: "row wrap", alignItems: "center", textAlign: "center", justifyContent: "center"}}>
                    <label className={styles.detailsLabel}>quantity&nbsp;</label>
                    <span className={`input-group-prepend`}>
                      <button type="button" className={`btn btn-outline-secondary btn-number ${styles.detailsQButton}`} disabled={quantity <= 1 ? true : false} data-type="minus" data-field="quant[1]" style={{borderRadius: "4px 0 0 4px"}} onClick={() => updateQuantity("minus")}>
                        <FontAwesomeIcon icon={faMinus} />
                      </button>
                    </span>
                    <input type="text" className={`form-control input-number ${styles.detailsQuantity}`} value={quantity} min="1"/>
                    <span className={`input-group-append`}>
                      <button type="button" className={`btn btn-outline-secondary btn-number ${styles.detailsQButton}`} data-type="plus" data-field="quant[1]" style={{borderRadius: "0 4px 4px 0"}} onClick={() => updateQuantity("add")}>
                        <FontAwesomeIcon icon={faPlus} />
                      </button>
                    </span>
                  </Col>
                </Row>
                <Row style={{ margin: "2vw 0 1vw 0"}}>
                  <Link href={"https://www.tokopedia.com/mechaland"}><a target="_blank" rel="noopener noreferrer" className={`btn btn-lg active ${styles.detailsButton}`} role="button" aria-pressed="true">TOKOPEDIA</a></Link>
                </Row>
                <Row style={{ margin: "1vw 0", textAlign: "left"}}>
                  <p className={styles.detailsSpecs} style={{ margin: "20px 0 1px 0"}}>specs:</p>
                  <ul style={{listStyle: "inside"}}>
                    <li className={styles.detailsSpecs}>specifications 1</li>
                    <li className={styles.detailsSpecs}>specifications 2</li>
                    <li className={styles.detailsSpecs}>specifications 3</li>
                    <li className={styles.detailsSpecs}>specifications 4</li> 
                  </ul>
                </Row>
            </Col>
            {/* <Col sm="12" md="6" style={{ margin: "4vw 0", padding: "4vw" }}>
                <Row className={`${styles.textCenter} ${styles.black}`}>
                  <h3 className={styles.detailsTitle}>Domikey Miami Night (ABS - Cherry Profile) - All in One</h3>
                </Row>
                <Row className={styles.textCenter}>
                  <p className={styles.detailsPrice}>Rp -</p>
                </Row>
                <Row className={styles.textCenter} style={{paddingBottom: "15px", paddingTop: "25px"}}>
                  <Link href={"/join"}><a className={`${styles.detailsLabel} ${styles.textLink}`} style={{marginBottom: "1px", color: "#44564B"}}>How To Join?</a></Link>
                  <Link href={"https://www.tokopedia.com/mechaland"}><a target="_blank" rel="noopener noreferrer" className={`btn btn-lg active ${styles.detailsButton}`} role="button" aria-pressed="true">DISCORD</a></Link>
                  <p className={styles.detailsLabel} style={{marginBottom: "1px"}}>*For further info please visit our discord</p>
                </Row>
            </Col> */}
          </Row>
          <Row style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
              <h3 className={`${styles.black} ${styles.pt20}`}>You May Also Like</h3>
          </Row>
          <Row style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Col key={`others-1`} sm="12" md="3" style={{ margin: "3vw 0" }}>
              <Link href="https://www.tokopedia.com/mechaland/jwick-t1-stem-switch-tactile-pcb-mount">
                <a target="_blank" rel="noopener noreferrer">
                  <Row className={`${styles.textCenter} ${styles.othersPict}`}>
                    <Image width="30" height="30" layout="responsive" src="/assets/temp/switch1.jpeg" alt="JWICK T1 Stem Switch (Tactile - PCB Mount)" className={styles.featuredPict} />
                  </Row>
                  <Row className={styles.textCenter}>
                    <h5 className={styles.othersText}>JWICK T1 Stem Switch (Tactile - PCB Mount)</h5>
                  </Row>
                </a>
              </Link>
            </Col>
            <Col key={`others-1`} sm="12" md="3" style={{ margin: "3vw 0" }}>
              <Link href="https://www.tokopedia.com/mechaland/jwick-t1-stem-switch-tactile-pcb-mount">
                <a target="_blank" rel="noopener noreferrer">
                  <Row className={`${styles.textCenter} ${styles.othersPict}`}>
                    <Image width="30" height="30" layout="responsive" src="/assets/temp/switch1.jpeg" alt="JWICK T1 Stem Switch (Tactile - PCB Mount)" className={styles.featuredPict} />
                  </Row>
                  <Row className={styles.textCenter}>
                    <h5 className={styles.othersText}>JWICK T1 Stem Switch (Tactile - PCB Mount)</h5>
                  </Row>
                </a>
              </Link>
            </Col>
            <Col key={`others-1`} sm="12" md="3" style={{ margin: "3vw 0" }}>
              <Link href="https://www.tokopedia.com/mechaland/jwick-t1-stem-switch-tactile-pcb-mount">
                <a target="_blank" rel="noopener noreferrer">
                  <Row className={`${styles.textCenter} ${styles.othersPict}`}>
                    <Image width="30" height="30" layout="responsive" src="/assets/temp/switch1.jpeg" alt="JWICK T1 Stem Switch (Tactile - PCB Mount)" className={styles.featuredPict} />
                  </Row>
                  <Row className={styles.textCenter}>
                    <h5 className={styles.othersText}>JWICK T1 Stem Switch (Tactile - PCB Mount)</h5>
                  </Row>
                </a>
              </Link>
            </Col>
            <Col key={`others-1`} sm="12" md="3" style={{ margin: "3vw 0" }}>
              <Link href="https://www.tokopedia.com/mechaland/jwick-t1-stem-switch-tactile-pcb-mount">
                <a target="_blank" rel="noopener noreferrer">
                  <Row className={`${styles.textCenter} ${styles.othersPict}`}>
                    <Image width="30" height="30" layout="responsive" src="/assets/temp/switch1.jpeg" alt="JWICK T1 Stem Switch (Tactile - PCB Mount)" className={styles.featuredPict} />
                  </Row>
                  <Row className={styles.textCenter}>
                    <h5 className={styles.othersText}>JWICK T1 Stem Switch (Tactile - PCB Mount)</h5>
                  </Row>
                </a>
              </Link>
            </Col>
          </Row>
        </div>
      </main>
    </div>
  )
}