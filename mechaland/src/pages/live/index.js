import "bootstrap/dist/css/bootstrap.min.css";
import Link from 'next/link';
import Image from 'next/image';
import { Row, Col } from "reactstrap";
import { SEO, Skeleton } from '../../components';
import { useStoreApi } from '../../context/useAPI';
import { useState, useEffect, useRef } from 'react';
import styles from '../../../styles/Home.module.css';

export default function Live() {
	const { axios } = useStoreApi();
	const [load, setLoad] = useState(true);
	const [datas, setDatas] = useState([
		{
			text:"JWICK T1 Stem Switch (Tactile - PCB Mount)",
			buy_text:"https://www.tokopedia.com/mechaland/jwick-t1-stem-switch-tactile-pcb-mount",
			image:"/assets/temp/switch1.jpeg",
			price:"Rp.4.500"
		},
		{
			text:"JWICK Black Switch (Linear - PCB Mount) - 58.5g",
			buy_text:"https://www.tokopedia.com/mechaland/jwick-black-switch-linear-pcb-mount-58-5g",
			image:"/assets/temp/switch2.jpeg",
			price:"Rp.3.000"
		},
		{
			text:"Gateron Yellow (Linier - Plate Mount)",
			buy_text:"https://www.tokopedia.com/mechaland/gateron-yellow-linier-plate-mount",
			image:"/assets/temp/switch3.jpeg",
			price:"Rp.4.000"
		}
	]);

	const getData = async () => {
	  try {
			const response = await axios.get("api/v1/live/");
			await setDatas(response.data);
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
        title="Live | Mechaland"
        description="Mechaland"
      />

      <main className={styles.main}>
        <div className={styles.titlePage}>
          <div className={styles.desc}>
            <h1 className={styles.title}>LIVE</h1>
            <p className={styles.subTitle}>
				Do not purchase different pre-orders/GBs/in stock in one order, we cannot guarantee which stock will be out of stock while we are waiting for all products to arrive.
            </p>
			<p className={styles.subTitle}>
				If any of the products are out of stock, we will remove them from your order and refund you.
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
                <Col key={`live-${idx}`} sm="12" md="4" style={{ margin: "3vw 0" }}>
                  <Link href={item.buy_text}>
                    <a target="_blank" rel="noopener noreferrer">
                      <Row className={styles.textCenter}>
                        <Image width="30" height="30" layout="responsive" src={item.image} alt={item.text} className={styles.featuredPict} />
                      </Row>
                      <Row className={styles.textCenter}>
                        <h5 className={styles.featured}>{item.text}<br/><br/>{item.price}</h5>
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
