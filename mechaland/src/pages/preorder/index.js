import "bootstrap/dist/css/bootstrap.min.css";
import Link from 'next/link';
import Image from 'next/image';
import { Row, Col } from "reactstrap";
import { SEO, Skeleton } from '../../components';
import { useStoreApi } from '../../context/useAPI';
import { useState, useEffect, useRef } from 'react';
import styles from '../../../styles/Home.module.css';

export default function Preorder() {
	const { axios } = useStoreApi();
	const [load, setLoad] = useState(true);
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
	  try {
			const response = await axios.get("api/v1/products/?category=PREORDER");
			await setDatas(response.data);
	  } catch (err) {
			console.log("ERROR: ", err);
	  }
  
	  setLoad(false);
	};
  
	useEffect(() => {
	  getData();
	}, []);

	const rupiah = (price) => {
    let result =  new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR"
    }).format(price);

		console.log("Price:", result);
    return result;
  }

  return (
    <div className={styles.container}>
      <SEO
        title="Pre-Order | Mechaland"
        description="Mechaland"
      />

      <main className={styles.main}>
        <div className={styles.titlePage}>
          <div className={styles.desc}>
            <h1 className={styles.title}>PREORDER</h1>
            <p className={styles.subTitle}>
							<b>What is a Pre-Order?</b><br/>We usually order some additional stock on top of the group buy quantity and sell them as GMK in stock. If you have missed the group buy and are afraid of missing the in-stock, pre-order is the best option for you. The pre-order price will be higher than the group buy and lower than the in-stock. The delivery time will be around the same time as the group buy orders.
            </p>
          </div>
        </div>
        <div className={styles.sectionInstock} style={{marginTop: "2px !important"}}>
				{ load ?
            <Row>
              <Col sm="12" md="4" style={{ margin: "3vw 0" }}>
								<Row className={styles.textCenter}>
									<Skeleton height="300px" width="300px" />
								</Row>
								<Row className={styles.textCenter}>
									<h5 className={styles.featured}><Skeleton height="30px" width="200px" /></h5>
								</Row>
								<Row className={styles.textCenter}>
									<h5 className={styles.featured}><Skeleton height="30px" width="100px" /></h5>
								</Row>
							</Col>
              <Col sm="12" md="4" style={{ margin: "3vw 0" }}>
								<Row className={styles.textCenter}>
									<Skeleton height="300px" width="300px" />
								</Row>
								<Row className={styles.textCenter}>
									<h5 className={styles.featured}><Skeleton height="30px" width="200px" /></h5>
								</Row>
								<Row className={styles.textCenter}>
									<h5 className={styles.featured}><Skeleton height="30px" width="100px" /></h5>
								</Row>
							</Col>
              <Col sm="12" md="4" style={{ margin: "3vw 0" }}>
								<Row className={styles.textCenter}>
									<Skeleton height="300px" width="300px" />
								</Row>
								<Row className={styles.textCenter}>
									<h5 className={styles.featured}><Skeleton height="30px" width="200px" /></h5>
								</Row>
								<Row className={styles.textCenter}>
									<h5 className={styles.featured}><Skeleton height="30px" width="100px" /></h5>
								</Row>
							</Col>
            </Row>
            :
            <Row>
              {datas.map((item, idx) =>
                <Col key={`preorder-${idx}`} sm="12" md="4" style={{ margin: "3vw 0" }}>
                  <Link href={`/details/?id=${item.id}&status=true`}>
                    <a>
											<Row className={styles.textCenter}>
                        <Image width="30" height="30" layout="responsive" src={`${item.list_photos[0].image}`} alt={item.text} className={styles.featuredPict} />
                      </Row>
                      <Row className={styles.textCenter}>
                        <h5 className={styles.featured}>{item.title}<br/><br/>{rupiah(item.price)}</h5>
                      </Row>
                    </a>
                  </Link>
                </Col>
              )}
            </Row>
          }
        </div>
      </main>
    </div>
  )
}
