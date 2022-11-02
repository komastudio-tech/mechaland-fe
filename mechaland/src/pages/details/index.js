import "bootstrap/dist/css/bootstrap.min.css";
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Row, Col } from "reactstrap";
import { useRouter } from 'next/router';
import { Skeleton } from '../../components';
import { useStoreApi } from '../../context/useAPI';
import { useState, useEffect } from 'react';
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

export default function Details() {
  const router = useRouter();
  const {id, status} = router.query;
  const [load, setLoad] = useState(true);
  const { axios } = useStoreApi();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [stock, setStock] = useState(1);
  const [price, setPrice] = useState(null);
  const [others, setOthers] = useState([]);
	const [datas, setDatas] = useState(null);

  const getOthers = async (category, id) => {
    try {
      const response = [];
      {status ? 
        response = await axios.get(`api/v1/products/?category=${category}`)
      :
        response = await axios.get(`api/v1/interestcheck/`);
      }
      const res = response.data.filter(function(item){ 
        return item.id != id; 
      });
      res = res.slice(0,4);
      await setOthers(res);
    } catch (err) {
      console.log("ERROR: ", err);
    }
  };

	const getData = async () => {
    try {
      const response = [];
      {status ? 
        response = await axios.get(`api/v1/products/${id}/`)
      :
        response = await axios.get(`api/v1/interestcheck/${id}/`);
      }
      await setDatas(response.data);
      await getOthers(response.data.category, id);

      if (response.data.has_variant && (response.data.list_variant.length > 0)) {
        await updatePrice(response.data.price, true);
        await setStock(response.data.stock);
      } else {
        await updatePrice(response.data.price, true);
        if (status) {
          await setStock(response.data.stock);
        }
      }
    } catch (err) {
      console.log("ERROR: ", err);
    }

    setLoad(false);
  };

  useEffect(() => {
    getData();
  }, [id]);

  const formatPrice = (price) => {
    let result =  new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR"
    }).format(price);

    return result;
  }

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

  const updatePrice = (priceId, status) => {
    let res = 0;
    if (status) {
      res = priceId;
    } else {
      let list = datas.list_variant;
      for(var i = 0; i < (datas.list_variant).length; i++) {
        if(list[i].id === priceId) {
            res = datas.list_variant[i].price;
            break;
        }
      }
    }

    let result =  formatPrice(res);
    setPrice(result);
  }

  const updateStock = (id) => {
    let result = 0;
    let list = datas.list_variant;
    for(var i = 0; i < (datas.list_variant).length; i++) {
      if(list[i].id === id) {
          result = datas.list_variant[i].stock;
          break;
      }
    }

    setStock(result);
  }

  const variant = () => {
    var val = $('#variantDropdown').find(":selected").val();
    if (val == datas.id) {
      updatePrice(datas.price, true);
      updateStock(datas.stock);
    } else {
      updatePrice(val, false);
      updateStock(val);
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Details | Mechaland</title>
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

      <main className={styles.main}>
        <div className={styles.sectionInstock} style={{marginTop: "2px !important"}}>
          <Row style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Col sm="12" md="6" style={{ margin: "4vw 0", padding: "4vw" }}>
                {load ?
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
                      <Skeleton height="420px" width="420px" />
                    </SwiperSlide>
                  </Swiper>
                :
                  !(datas == null || datas == undefined) ?
                  status ?
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
                      {datas.list_photos.map((item, idx) =>
                        <SwiperSlide key={`pict-${idx}`}>
                          <img src={`${item.image}`} />
                        </SwiperSlide>
                      )}
                    </Swiper>
                    :
                    <Swiper
                      style={{
                        "--swiper-navigation-color": "#fff",
                        "--swiper-pagination-color": "#fff",
                      }}
                      loop={true}
                      spaceBetween={10}
                      thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                      modules={[FreeMode, Navigation, Thumbs]}
                      className="mySwiper2"
                    >
                      <SwiperSlide key={`pictInterest`}>
                        <img src={`${datas.image}`} />
                      </SwiperSlide>
                    </Swiper>
                  :
                    <Swiper
                      style={{
                        "--swiper-navigation-color": "#fff",
                        "--swiper-pagination-color": "#fff",
                      }}
                      loop={true}
                      spaceBetween={10}
                      thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                      modules={[FreeMode, Navigation, Thumbs]}
                      className="mySwiper2"
                    >
                      <SwiperSlide key={`pictInterest`}>
                        <img src={`/assets/temp/no_data.jpg`} />
                      </SwiperSlide>
                    </Swiper>
                }
              <br/>
              {load ?
                <Swiper
                  onSwiper={setThumbsSwiper}
                  spaceBetween={10}
                  slidesPerView={5}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <Skeleton height="60px" width="60px" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Skeleton height="60px" width="60px" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Skeleton height="60px" width="60px" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Skeleton height="60px" width="60px" />
                  </SwiperSlide>
                </Swiper>
              :
                status && !(datas == null || datas == undefined) ?
                <Swiper
                  onSwiper={setThumbsSwiper}
                  spaceBetween={10}
                  slidesPerView={5}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper"
                >
                  {datas.list_photos.map((item, idx) =>
                    <SwiperSlide key={`picts-${idx}`}>
                      <img src={`${item.image}`} />
                    </SwiperSlide>
                  )}
                </Swiper>
                :
                <Swiper
                  onSwiper={setThumbsSwiper}
                  spaceBetween={10}
                  slidesPerView={5}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper"
                >
                </Swiper>
              }
            </Col>
            {!(datas == null || datas == undefined) ?
            status ?
            <Col sm="12" md="6" style={{ margin: "4vw 0", padding: "4vw" }}>
                <Row className={`${styles.textCenter} ${styles.black}`}>
                  {load ? 
                  <>
                    <Skeleton height="35px" width="350px" style={{margin: '3px 0'}}/>
                  </>
                  : 
                    <h3 className={styles.detailsTitle}>{datas.title}</h3>
                  }
                </Row>
                <Row className={styles.textCenter}>
                  {load ? 
                    <Skeleton height="25px" width="200px" />
                  : 
                    <p className={styles.detailsPrice}>{price == null ? "Rp -" : price}</p>
                  }
                </Row>
                <Row className={styles.textCenter} style={{paddingBottom: "15px", paddingTop: "25px"}}>
                {load ?
                    <Skeleton height="20px" width="80px" />
                    :
                    datas.list_variant.length > 0 ?
                    <p className={styles.detailsLabel} style={{marginBottom: "1px"}}>variant</p>
                      :
                      <></>
                  }
                  <Col style={{display: "flex", alignItems: "center", textAlign: "center", justifyContent: "center"}}>
                    {load ? 
                      <select className={`${styles.detailsSelect} form-control`} onChange={() => variant()}>
                        <option key={`variantLoad`} value="null" selected><Skeleton height="40px" width="100px" /></option>
                      </select>
                    :
                      (datas.has_variant && (datas.list_variant.length > 0)) ?
                      <select id="variantDropdown" className={`${styles.detailsSelect} form-control`} onChange={() => variant()}>
                        <option key={`variant-default`} value={datas.id} selected={true}>{`Select variant...`}</option>
                        {datas.list_variant.map((item, idx) =>
                          <option key={`variant-${idx}`} value={item.id} selected={false}>{item.variant}</option>
                        )}
                      </select>
                      :
                      <></>
                    }
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
                      <button type="button" className={`btn btn-outline-secondary btn-number ${styles.detailsQButton}`} disabled={quantity >= stock ? true : false} data-type="plus" data-field="quant[1]" style={{borderRadius: "0 4px 4px 0"}} onClick={() => updateQuantity("add")}>
                        <FontAwesomeIcon icon={faPlus} />
                      </button>
                    </span>
                  </Col>
                </Row>
                <Row style={{ margin: "2vw 0 1vw 0"}}>
                  <Link href={`${datas.link}`}><a target="_blank" rel="noopener noreferrer" className={`btn btn-lg active ${styles.detailsButton}`} role="button" aria-pressed="true">{datas.link_source}</a></Link>
                </Row>
                {datas.has_specs == true ?
                <Row style={{ margin: "1vw 0", textAlign: "left"}}>
                  {load ?
                    <Skeleton height="20px" width="80px" />
                    :
                    datas.list_specs.length > 0 ?
                      <p className={styles.detailsSpecs} style={{ margin: "20px 0 1px 0", paddingLeft: "0"}}>Specs:</p>
                      :
                      <></>
                  }
                  {load ?
                    <ul>
                      <li key={`specLoad1`} className={styles.detailsSpecs} style={{margin: '3px 0'}}><Skeleton height="20px" width="150px" /></li>
                      <li key={`specLoad2`} className={styles.detailsSpecs} style={{margin: '3px 0'}}><Skeleton height="20px" width="200px" /></li>
                      <li key={`specLoad3`} className={styles.detailsSpecs} style={{margin: '3px 0'}}><Skeleton height="20px" width="180px" /></li>
                    </ul>
                    :
                    <ul style={{listStyle: "outside"}}>
                      {datas.list_specs.map((item, idx) =>
                        <li key={`spec-${idx}`} className={styles.detailsSpecs}>{item.specs}</li>
                      )}
                    </ul>
                  }
                </Row>
                :
                <></>
                }
            </Col>
            :
            <Col sm="12" md="6" style={{ margin: "4vw 0", padding: "4vw" }}>
                <Row className={`${styles.textCenter} ${styles.black}`}>
                  {load ? 
                    <Skeleton height="55px" width="350px" />
                  : 
                    <h3 className={styles.detailsTitle}>{datas.title}</h3>
                  }
                </Row>
                <Row className={styles.textCenter}>
                  {load ? 
                    <Skeleton height="45px" width="100px" />
                  : 
                    <p className={styles.detailsPrice}>{datas.price ? formatPrice(datas.price) : "Rp -"}</p>
                  }
                </Row>
                <Row className={styles.textCenter} style={{paddingBottom: "15px", paddingTop: "25px"}}>
                  <Link href={"/join"}><a className={`${styles.detailsLabel} ${styles.textLink}`} style={{marginBottom: "1px", color: "#44564B"}}>How To Join?</a></Link>
                  <Link href={`${datas.discord}`}><a target="_blank" rel="noopener noreferrer" className={`btn btn-lg active ${styles.detailsButton}`} role="button" aria-pressed="true">DISCORD</a></Link>
                  <p className={styles.detailsLabel} style={{marginBottom: "1px"}}>*For further info please visit our discord</p>
                </Row>
            </Col>
            :
            <Col sm="12" md="12" style={{ margin: "4vw 0", padding: "4vw" }}>
              <p>Sorry, this product is still in check</p>
            </Col>
            }
          </Row>
          {load || others.length > 0 ?
            <Row style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
                <h3 className={`${styles.black} ${styles.pt20}`}>You May Also Like</h3>
            </Row>
            :
            <></>
          }
          {load ? 
          <Row style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Col key={`othersLoad1`} sm="12" md="3" style={{ margin: "3vw 0" }}>
              <Link href={`#`}>
                <a>
                  <Row className={`${styles.textCenter} ${styles.othersPict}`}>
                    <Skeleton height="210px" width="210px" style={{margin: '4px 0'}}/>
                  </Row>
                  <Row className={styles.textCenter}>
                    <Skeleton height="30px" width="150px" />
                  </Row>
                </a>
              </Link>
            </Col>
            <Col key={`othersLoad2`} sm="12" md="3" style={{ margin: "3vw 0" }}>
            href with refresh  <Link href={`#`}>
                <a>
                  <Row className={`${styles.textCenter} ${styles.othersPict}`}>
                    <Skeleton height="210px" width="210px" style={{margin: '4px 0'}}/>
                  </Row>
                  <Row className={styles.textCenter}>
                    <Skeleton height="30px" width="150px" />
                  </Row>
                </a>
              </Link>
            </Col>
            <Col key={`othersLoad3`} sm="12" md="3" style={{ margin: "3vw 0" }}>
              <Link href={`#`}>
                <a>
                  <Row className={`${styles.textCenter} ${styles.othersPict}`}>
                    <Skeleton height="210px" width="210px" style={{margin: '4px 0'}}/>
                  </Row>
                  <Row className={styles.textCenter}>
                    <Skeleton height="30px" width="150px" />
                  </Row>
                </a>
              </Link>
            </Col>
            <Col key={`othersLoad4`} sm="12" md="3" style={{ margin: "3vw 0" }}>
              <Link href={`#`}>
                <a>
                  <Row className={`${styles.textCenter} ${styles.othersPict}`}>
                    <Skeleton height="210px" width="210px" style={{margin: '4px 0'}}/>
                  </Row>
                  <Row className={styles.textCenter}>
                    <Skeleton height="30px" width="150px" />
                  </Row>
                </a>
              </Link>
            </Col>
          </Row>
          :
          others.length > 0 ?
            status ?
              <Row style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
              {others.map((item, idx) =>
                <Col key={`others-${idx}`} sm="12" md="3" style={{ margin: "3vw 0", cursor: "pointer"}}>
                  <Link href={`/details/?id=${item.id}&status=${status}`}>
                    <a>
                      <Row className={`${styles.textCenter} ${styles.othersPict}`}>
                        <Image width="30" height="30" layout="responsive" src={`${item.list_photos[0].image}`} alt={item.title} className={styles.featuredPict} />
                      </Row>
                      <Row className={styles.textCenter}>
                        <h5 className={styles.othersText}>{item.title}</h5>
                      </Row>
                    </a>
                  </Link>
                </Col>
              )}
              </Row>
              :
              <Row style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
              {others.map((item, idx) =>
                <Col key={`others-${idx}`} sm="12" md="3" style={{ margin: "3vw 0", cursor: "pointer"}}>
                  <Link href={`/details/?id=${item.id}&status=${status}`}>
                    <a>
                      <Row className={`${styles.textCenter} ${styles.othersPict}`}>
                        <Image width="30" height="30" layout="responsive" src={`${item.image}`} alt={item.title} className={styles.featuredPict} />
                      </Row>
                      <Row className={styles.textCenter}>
                        <h5 className={styles.othersText}>{item.title}</h5>
                      </Row>
                    </a>
                  </Link>
                </Col>
              )}
              </Row>
            :
            <></>
          }
        </div>
      </main>
    </div>
  )
}