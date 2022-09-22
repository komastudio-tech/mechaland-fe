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

export default function Details(id, status) {
  const [load, setLoad] = useState(true);
  const { axios } = useStoreApi();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState(null);
  const [price, setPrice] = useState(null);
  const [others, setOthers] = useState([
    {
      "id": "777066e4-6107-49fd-831f-dbde5238c769",
      "url": "https://mechaland-be.herokuapp.com/api/v1/products/777066e4-6107-49fd-831f-dbde5238c769/",
      "title": "Domikey Single Chip (ABS - Cherry Profile)",
      "description": "https://www.tokopedia.com/mechaland/domikey-single-chip-abs-cherry-profile-uk?extParam=whid%3D8888533",
      "price": 184000,
      "stock": 4,
      "category": "INSTOCK",
      "list_photos": [
        {
          "id": "4709ef57-7bbc-4ddf-a579-54e69025b55c",
          "url": "https://mechaland-be.herokuapp.com/api/v1/productimage/4709ef57-7bbc-4ddf-a579-54e69025b55c/",
          "name": "Domikey Single Chip (ABS - Cherry Profile) - UK",
          "image": "/assets/temp/keycap.jpg",
          "ranking": 1
        },
        {
          "id": "5b4111b9-a4a4-4f57-865c-641ab206663d",
          "url": "https://mechaland-be.herokuapp.com/api/v1/productimage/5b4111b9-a4a4-4f57-865c-641ab206663d/",
          "name": "Domikey Single Chip (ABS - Cherry Profile) - Spacebar",
          "image": "/assets/temp/spacebar.jpg",
          "ranking": 2
        }
      ],
      "list_specs": [
        {
          "id": "98038727-3a45-4233-a9df-95d19b97781c",
          "url": "https://mechaland-be.herokuapp.com/api/v1/productspecs/98038727-3a45-4233-a9df-95d19b97781c/",
          "specs": "Domikey"
        },
        {
          "id": "7ac72339-d48a-470d-9cff-fa57f0a19e03",
          "url": "https://mechaland-be.herokuapp.com/api/v1/productspecs/7ac72339-d48a-470d-9cff-fa57f0a19e03/",
          "specs": "Cherry profile (sculpted 1-1-2-3-4-4)"
        },
        {
          "id": "6b03c5f5-02e7-4dc7-ab76-74a977eef808",
          "url": "https://mechaland-be.herokuapp.com/api/v1/productspecs/6b03c5f5-02e7-4dc7-ab76-74a977eef808/",
          "specs": "Compatible with Cherry MX and clones"
        },
        {
          "id": "f4296463-4e66-4634-80d4-7a71976fe60c",
          "url": "https://mechaland-be.herokuapp.com/api/v1/productspecs/f4296463-4e66-4634-80d4-7a71976fe60c/",
          "specs": "ABS plastic"
        },
        {
          "id": "b907c4ed-b155-432b-b8f6-571b1fdecb5a",
          "url": "https://mechaland-be.herokuapp.com/api/v1/productspecs/b907c4ed-b155-432b-b8f6-571b1fdecb5a/",
          "specs": "Doubleshot legends\\Tripleshot Jan legends"
        },
        {
          "id": "7a46440a-f853-4716-ba07-9219ce1e027b",
          "url": "https://mechaland-be.herokuapp.com/api/v1/productspecs/7a46440a-f853-4716-ba07-9219ce1e027b/",
          "specs": "Stripe bottom"
        },
        {
          "id": "9d249e21-da1b-4d0d-b3b1-35fa6744eb4d",
          "url": "https://mechaland-be.herokuapp.com/api/v1/productspecs/9d249e21-da1b-4d0d-b3b1-35fa6744eb4d/",
          "specs": "Comes with plastic tray for each set (except for UK, numpad and alt color must buy these 3 sets for getting tray, if not will be shipped with zip lock)"
        }
      ],
      "list_variant": [
        {
          "id": "dd898c9f-5401-4bf7-92e5-1ca15fbbec1c",
          "url": "https://mechaland-be.herokuapp.com/api/v1/productvariant/dd898c9f-5401-4bf7-92e5-1ca15fbbec1c/",
          "variant": 60,
          "price": 6000000,
          "stock": 40
        },
        {
          "id": "9868d901-1f2e-4ce2-9eb6-0e1f672138ad",
          "url": "https://mechaland-be.herokuapp.com/api/v1/productvariant/9868d901-1f2e-4ce2-9eb6-0e1f672138ad/",
          "variant": 1,
          "price": 213000,
          "stock": 2
        }
      ]
    }
  ]);
	const [datas, setDatas] = useState([
		{
      "id": "777066e4-6107-49fd-831f-dbde5238c769",
      "url": "https://mechaland-be.herokuapp.com/api/v1/products/777066e4-6107-49fd-831f-dbde5238c769/",
      "title": "Domikey Single Chip (ABS - Cherry Profile)",
      "description": "https://www.tokopedia.com/mechaland/domikey-single-chip-abs-cherry-profile-uk?extParam=whid%3D8888533",
      "price": 184000,
      "stock": 4,
      "category": "INSTOCK",
      "list_photos": [
        {
          "id": "4709ef57-7bbc-4ddf-a579-54e69025b55c",
          "url": "https://mechaland-be.herokuapp.com/api/v1/productimage/4709ef57-7bbc-4ddf-a579-54e69025b55c/",
          "name": "Domikey Single Chip (ABS - Cherry Profile) - UK",
          "image": "/assets/temp/keycap.jpg",
          "ranking": 1
        },
        {
          "id": "5b4111b9-a4a4-4f57-865c-641ab206663d",
          "url": "https://mechaland-be.herokuapp.com/api/v1/productimage/5b4111b9-a4a4-4f57-865c-641ab206663d/",
          "name": "Domikey Single Chip (ABS - Cherry Profile) - Spacebar",
          "image": "/assets/temp/spacebar.jpg",
          "ranking": 2
        }
      ],
      "list_specs": [
        {
          "id": "98038727-3a45-4233-a9df-95d19b97781c",
          "url": "https://mechaland-be.herokuapp.com/api/v1/productspecs/98038727-3a45-4233-a9df-95d19b97781c/",
          "specs": "Domikey"
        },
        {
          "id": "7ac72339-d48a-470d-9cff-fa57f0a19e03",
          "url": "https://mechaland-be.herokuapp.com/api/v1/productspecs/7ac72339-d48a-470d-9cff-fa57f0a19e03/",
          "specs": "Cherry profile (sculpted 1-1-2-3-4-4)"
        },
        {
          "id": "6b03c5f5-02e7-4dc7-ab76-74a977eef808",
          "url": "https://mechaland-be.herokuapp.com/api/v1/productspecs/6b03c5f5-02e7-4dc7-ab76-74a977eef808/",
          "specs": "Compatible with Cherry MX and clones"
        },
        {
          "id": "f4296463-4e66-4634-80d4-7a71976fe60c",
          "url": "https://mechaland-be.herokuapp.com/api/v1/productspecs/f4296463-4e66-4634-80d4-7a71976fe60c/",
          "specs": "ABS plastic"
        },
        {
          "id": "b907c4ed-b155-432b-b8f6-571b1fdecb5a",
          "url": "https://mechaland-be.herokuapp.com/api/v1/productspecs/b907c4ed-b155-432b-b8f6-571b1fdecb5a/",
          "specs": "Doubleshot legends\\Tripleshot Jan legends"
        },
        {
          "id": "7a46440a-f853-4716-ba07-9219ce1e027b",
          "url": "https://mechaland-be.herokuapp.com/api/v1/productspecs/7a46440a-f853-4716-ba07-9219ce1e027b/",
          "specs": "Stripe bottom"
        },
        {
          "id": "9d249e21-da1b-4d0d-b3b1-35fa6744eb4d",
          "url": "https://mechaland-be.herokuapp.com/api/v1/productspecs/9d249e21-da1b-4d0d-b3b1-35fa6744eb4d/",
          "specs": "Comes with plastic tray for each set (except for UK, numpad and alt color must buy these 3 sets for getting tray, if not will be shipped with zip lock)"
        }
      ],
      "list_variant": [
        {
          "id": "dd898c9f-5401-4bf7-92e5-1ca15fbbec1c",
          "url": "https://mechaland-be.herokuapp.com/api/v1/productvariant/dd898c9f-5401-4bf7-92e5-1ca15fbbec1c/",
          "name": "Test Sandi",
          "variant": 60,
          "price": 6000000,
          "stock": 40
        },
        {
          "id": "9868d901-1f2e-4ce2-9eb6-0e1f672138ad",
          "url": "https://mechaland-be.herokuapp.com/api/v1/productvariant/9868d901-1f2e-4ce2-9eb6-0e1f672138ad/",
          "name": "Spacebar",
          "variant": 1,
          "price": 213000,
          "stock": 2
        }
      ]
    }
	]);

	const getData = async () => {
    if (status) {
      try {
        const response = await axios.get(`api/v1/products/?id=${id}`);
        await setDatas(response.data);
        await setCategory(response.data[0].category);
      } catch (err) {
        console.log("ERROR: ", err);
      }

      try {
        const response = await axios.get(`api/v1/products/?category=${category}`);
        const res = (response.data).slice(0,4);
        await setOthers(res);
      } catch (err) {
        console.log("ERROR: ", err);
      }
    } else {
      try {
        const response = await axios.get(`api/v1/interestcheck/?id=${id}`);
        await setDatas(response.data);
      } catch (err) {
        console.log("ERROR: ", err);
      }

      try {
        const response = await axios.get(`api/v1/interestcheck/`);
        const res = (response.data).slice(0,4);
        await setOthers(res);
      } catch (err) {
        console.log("ERROR: ", err);
      }
    }

    if (price == null) {
      await rupiah(datas[0].list_variant[0].price)
    }

    setLoad(false);
  };

  useEffect(() => {
    getData();
  }, []);

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

  const rupiah = (id) => {
    let res = 0;
    let list = datas[0].list_variant;
    for(var i = 0; i < (datas[0].list_variant).length; i++) {
      if(list[i].id === id) {
          res = datas[0].list_variant[i].price;
          break;
      }
    }

    let result =  new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR"
    }).format(res);

    setPrice(result);
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
                {datas[0].list_photos.map((item, idx) =>
                  <SwiperSlide key={`pict-${idx}`}>
                    <img src={`${item.image}`} />
                  </SwiperSlide>
                )}
                {/* <SwiperSlide>
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
                </SwiperSlide> */}
              </Swiper>
              <br/>
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={5}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
              >
                {datas[0].list_photos.map((item, idx) =>
                  <SwiperSlide key={`picts-${idx}`}>
                    <img src={`${item.image}`} />
                  </SwiperSlide>
                )}
                {/* <SwiperSlide>
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
                </SwiperSlide> */}
              </Swiper>
            </Col>
            {status?
            <Col sm="12" md="6" style={{ margin: "4vw 0", padding: "4vw" }}>
                <Row className={`${styles.textCenter} ${styles.black}`}>
                  <h3 className={styles.detailsTitle}>{datas[0].title}</h3>
                </Row>
                <Row className={styles.textCenter}>
                  <p className={styles.detailsPrice}>{price == null ? "Rp -" : price}</p>
                </Row>
                <Row className={styles.textCenter} style={{paddingBottom: "15px", paddingTop: "25px"}}>
                  <p className={styles.detailsLabel} style={{marginBottom: "1px"}}>variant</p>
                  <Col style={{display: "flex", alignItems: "center", textAlign: "center", justifyContent: "center"}}>
                    <select className={`${styles.detailsSelect} form-control`} onChange={() => rupiah(value)}>
                      {datas[0].list_variant.map((item, idx) =>
                        {idx === 0 ?
                          <option key={`variant-${idx}`} value={item.id} selected>1</option>
                        :
                          <option key={`variant-${idx}`} value={item.id}>2</option>
                        }
                      )}
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
                    <input type="text" className={`form-control input-number ${styles.detailsQuantity}`} value={quantity} min="1" disabled/>
                    <span className={`input-group-append`}>
                      <button type="button" className={`btn btn-outline-secondary btn-number ${styles.detailsQButton}`} disabled={quantity >= datas[0].list_variant.stock ? true : false} data-type="plus" data-field="quant[1]" style={{borderRadius: "0 4px 4px 0"}} onClick={() => updateQuantity("add")}>
                        <FontAwesomeIcon icon={faPlus} />
                      </button>
                    </span>
                  </Col>
                </Row>
                <Row style={{ margin: "2vw 0 1vw 0"}}>
                  <Link href={`${datas[0].description}`}><a target="_blank" rel="noopener noreferrer" className={`btn btn-lg active ${styles.detailsButton}`} role="button" aria-pressed="true">TOKOPEDIA</a></Link>
                </Row>
                <Row style={{ margin: "1vw 0", textAlign: "left"}}>
                  <p className={styles.detailsSpecs} style={{ margin: "20px 0 1px 0"}}>specs:</p>
                  <ul style={{listStyle: "inside"}}>
                    {datas[0].list_specs.map((item, idx) =>
                      <li key={`spec-${idx}`} className={styles.detailsSpecs}>{item.specs}</li>
                    )}
                  </ul>
                </Row>
            </Col>
            :
            <Col sm="12" md="6" style={{ margin: "4vw 0", padding: "4vw" }}>
                <Row className={`${styles.textCenter} ${styles.black}`}>
                  <h3 className={styles.detailsTitle}>{datas[0].title}</h3>
                </Row>
                <Row className={styles.textCenter}>
                  <p className={styles.detailsPrice}>Rp -</p>
                </Row>
                <Row className={styles.textCenter} style={{paddingBottom: "15px", paddingTop: "25px"}}>
                  <Link href={"/join"}><a className={`${styles.detailsLabel} ${styles.textLink}`} style={{marginBottom: "1px", color: "#44564B"}}>How To Join?</a></Link>
                  <Link href={`${datas[0].discord}`}><a target="_blank" rel="noopener noreferrer" className={`btn btn-lg active ${styles.detailsButton}`} role="button" aria-pressed="true">DISCORD</a></Link>
                  <p className={styles.detailsLabel} style={{marginBottom: "1px"}}>*For further info please visit our discord</p>
                </Row>
            </Col>
            }
          </Row>
          <Row style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
              <h3 className={`${styles.black} ${styles.pt20}`}>You May Also Like</h3>
          </Row>
          <Row style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
            {others.map((item, idx) =>
              <Col key={`others-${idx}`} sm="12" md="3" style={{ margin: "3vw 0" }}>
                <Link href={`${item.description}`}>
                  <a target="_blank" rel="noopener noreferrer">
                    <Row className={`${styles.textCenter} ${styles.othersPict}`}>
                      <Image width="30" height="30" layout="responsive" src={`${item.list_photos[0].image}`} alt={item.list_photos[0].name} className={styles.featuredPict} />
                    </Row>
                    <Row className={styles.textCenter}>
                      <h5 className={styles.othersText}>{item.title}</h5>
                    </Row>
                  </a>
                </Link>
              </Col>
            )}
            {/* <Col key={`others-1`} sm="12" md="3" style={{ margin: "3vw 0" }}>
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
            </Col> */}
          </Row>
        </div>
      </main>
    </div>
  )
}